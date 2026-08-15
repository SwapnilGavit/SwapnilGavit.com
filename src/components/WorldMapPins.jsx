import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMapPin,
  FiCalendar,
  FiImage,
  FiPlus,
  FiMinus,
  FiMaximize2,
} from 'react-icons/fi'

export default function WorldMapPins({ destinations, onViewStory }) {
  const [hovered, setHovered] = useState(null)
  const [zoom, setZoom] = useState(1)

  const MIN_ZOOM = 1
  const MAX_ZOOM = 2.5
  const ZOOM_STEP = 0.25

  const zoomIn = () => {
    setZoom((current) =>
      Math.min(MAX_ZOOM, +(current + ZOOM_STEP).toFixed(2))
    )
  }

  const zoomOut = () => {
    setZoom((current) =>
      Math.max(MIN_ZOOM, +(current - ZOOM_STEP).toFixed(2))
    )
  }

  const resetZoom = () => {
    setZoom(1)
  }

  const handleWheel = (e) => {
    e.preventDefault()

    if (e.deltaY < 0) {
      zoomIn()
    } else {
      zoomOut()
    }
  }

  return (
    <div
      className="
        relative
        w-full
        aspect-[16/9]
        sm:aspect-[2/1]
        glass-card
        rounded-2xl
        overflow-hidden
      "
      onWheel={handleWheel}
    >

      {/* =====================================================
          ZOOMABLE MAP
         ===================================================== */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: zoom }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
        style={{
          transformOrigin: 'center center',
        }}
      >

     {/* =======================================================
    WORLD MAP BACKGROUND
   ======================================================= */}
<div className="absolute inset-0 pointer-events-none">

  {/* World map */}
  <img
    src="/world-map.svg"
    alt=""
    className="
      absolute
      inset-0
      w-full
      h-full
      object-contain
      p-8

      opacity-40

      dark:opacity-30
      dark:brightness-0
      dark:invert

      transition-all
      duration-300
    "
  />

  {/* Purple / Blue ambient glow */}
  <div
    className="
      absolute
      inset-0

      bg-gradient-to-br
      from-purple-900/15
      via-transparent
      to-blue-900/10

      dark:from-purple-900/20
      dark:via-transparent
      dark:to-blue-900/10
    "
  />

  {/* Radial glow */}
  <div
    className="
      absolute
      inset-0
      bg-grad-radial
      opacity-30
      dark:opacity-25
    "
  />

</div>

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-20
          "
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />


        {/* =================================================
            DESTINATION PINS
           ================================================= */}
        {destinations.map((d) => (
          <button
            key={d.id}
            onMouseEnter={() => setHovered(d.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(d.id)}
            onBlur={() => setHovered(null)}
            onClick={() => onViewStory(d)}
            style={{
              left: `${d.coords.x}%`,
              top: `${d.coords.y}%`,
            }}
            className="
              absolute
              z-10
              -translate-x-1/2
              -translate-y-1/2
              group
            "
            aria-label={`View ${d.place} travel story`}
          >

            {/* =================================================
                COUNTER-SCALED PIN
               ================================================= */}
            <div
              className="relative"
              style={{
                transform: `scale(${1 / zoom})`,
              }}
            >

              {/* Pulsing outer ring */}
              <motion.span
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-brand-purple/30
                "
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Main pin */}
              <motion.span
                whileHover={{ scale: 1.3 }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2.4,
                    ease: 'easeInOut',
                  },
                }}
                className="
                  relative
                  block
                  w-2
                  h-2
                  rounded-full
                  bg-gradient-to-br
                  from-brand-blue
                  to-brand-purple
                  shadow-glow
                  ring-4
                  ring-white/20
                "
              />

              {/* =================================================
                  HOVER CARD
                 ================================================= */}
              <AnimatePresence>
                {hovered === d.id && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 6,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 6,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="
                      absolute
                      z-50
                      top-7
                      left-1/2
                      -translate-x-1/2
                      w-56
                      glass-card
                      rounded-xl
                      p-4
                      text-left
                      shadow-2xl
                      border
                      border-white/10
                    "
                  >

                    <div className="
                      flex
                      items-center
                      gap-1.5
                      font-display
                      font-bold
                      text-sm
                    ">
                      <FiMapPin className="text-brand-purple shrink-0" />
                      {d.place}, {d.country}
                    </div>

                    <div className="
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                      mt-2
                    ">
                      <FiCalendar />
                      {d.date}
                    </div>

                    <div className="
                      flex
                      items-center
                      gap-1.5
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                      mt-1
                    ">
                      <FiImage />
                      {d.photos} photos
                    </div>

                    <span className="
                      mt-3
                      inline-block
                      text-xs
                      font-semibold
                      text-brand-purple
                    ">
                      View Story →
                    </span>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </button>
        ))}

      </motion.div>


      {/* =====================================================
          MAP TITLE
         ===================================================== */}
      <div className="
        absolute
        top-4
        left-5
        z-30
        pointer-events-none
      ">
        <div className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-slate-500
        ">
          My Travel Journey
        </div>
      </div>


      {/* =====================================================
          ZOOM PERCENTAGE
         ===================================================== */}
      <div className="
        absolute
        top-4
        right-[4.5rem]
        z-30
        px-3
        py-2
        rounded-lg
        bg-black/40
        backdrop-blur-md
        border
        border-white/10
        text-[11px]
        font-medium
        text-slate-400
      ">
        {Math.round(zoom * 100)}%
      </div>


      {/* =====================================================
          ZOOM BUTTONS
         ===================================================== */}
      <div className="
        absolute
        top-4
        right-4
        z-30
        flex
        flex-col
        rounded-xl
        overflow-hidden
        border
        border-white/10
        bg-black/50
        backdrop-blur-md
        shadow-xl
      ">

        <button
          onClick={zoomIn}
          disabled={zoom >= MAX_ZOOM}
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            text-slate-300
            hover:bg-white/10
            hover:text-white
            transition-colors
            disabled:opacity-30
            disabled:cursor-not-allowed
          "
          aria-label="Zoom in"
        >
          <FiPlus size={18} />
        </button>

        <div className="h-px bg-white/10" />

        <button
          onClick={zoomOut}
          disabled={zoom <= MIN_ZOOM}
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            text-slate-300
            hover:bg-white/10
            hover:text-white
            transition-colors
            disabled:opacity-30
            disabled:cursor-not-allowed
          "
          aria-label="Zoom out"
        >
          <FiMinus size={18} />
        </button>

      </div>


      {/* =====================================================
          RESET BUTTON
         ===================================================== */}
      {zoom !== 1 && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          onClick={resetZoom}
          className="
            absolute
            bottom-4
            right-4
            z-30
            flex
            items-center
            gap-1.5
            px-3
            py-2
            rounded-lg
            bg-black/50
            backdrop-blur-md
            border
            border-white/10
            text-xs
            font-medium
            text-slate-300
            hover:text-white
            hover:bg-white/10
            transition-colors
          "
        >
          <FiMaximize2 size={13} />
          Reset
        </motion.button>
      )}


      {/* =====================================================
          LEGEND
         ===================================================== */}
      <div className="
        absolute
        bottom-4
        left-5
        z-30
        flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-full
        bg-black/30
        backdrop-blur-md
        border
        border-white/10
      ">
        <span className="
          w-2.5
          h-2.5
          rounded-full
          bg-gradient-to-br
          from-brand-blue
          to-brand-purple
          shadow-glow"
        />

        <span className="text-[11px] text-slate-400">
          Places I've explored
        </span>
      </div>

    </div>
  )
}