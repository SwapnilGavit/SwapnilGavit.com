import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import { FiCalendar, FiImage, FiMapPin, FiMaximize2 } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import 'leaflet/dist/leaflet.css'

const DEFAULT_CENTER = [23.5, 78.9]
const DEFAULT_ZOOM = 4
const LIGHT_TILES = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
}
const DARK_TILES = {
  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
}
const locationIcon = L.divIcon({
  className: 'travel-location-marker',
  html: `
    <div class="travel-pin-wrapper">
      <div class="travel-pin">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C12 21 19 14.5 19 8.5C19 4.91 15.866 2 12 2C8.134 2 5 4.91 5 8.5C5 14.5 12 21 12 21Z"
            fill="url(#pinGradient)"
          />

          <circle
            cx="12"
            cy="8.5"
            r="2.7"
            fill="white"
          />

          <defs>
            <linearGradient
              id="pinGradient"
              x1="5"
              y1="2"
              x2="19"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6366F1"/>
              <stop offset="1" stop-color="#A855F7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  `,
  iconSize: [32, 42],
  iconAnchor: [16, 40],
  popupAnchor: [0, -38],
})
function FitVisitedPlaces({ places }) {
  const map = useMap()

  useEffect(() => {
    if (!places.length) {
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
      return
    }

    const bounds = L.latLngBounds(places.map((place) => place.mapCoords))
    map.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: 5,
      animate: false,
    })
  }, [map, places])

  return null
}

function ResetMap({ places }) {
  const map = useMap()

  const reset = () => {
    if (!places.length) {
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
      return
    }

    const bounds = L.latLngBounds(places.map((place) => place.mapCoords))
    map.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: 5,
      animate: true,
    })
  }

  return (
    <button
      type="button"
      onClick={reset}
      className="absolute bottom-4 right-4 z-[1000] inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white/90 px-3 py-2 text-xs font-medium text-slate-600 shadow-lg backdrop-blur-md transition hover:bg-white hover:text-brand-purple dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
      aria-label="Reset map view"
    >
      <FiMaximize2 size={13} />
      Reset
    </button>
  )
}

const createMarkerIcon = (place) =>
  L.divIcon({
    className: 'travel-map-marker-wrapper',
    html: `
      <div class="travel-map-marker" aria-label="${place.place}">
        <span class="travel-map-marker-pulse"></span>
        <span class="travel-map-marker-dot"></span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14],
  })

export default function WorldMapPins({ destinations = [], onViewStory }) {
  const { theme } = useTheme()
  const places = useMemo(
    () => destinations.filter((destination) => Array.isArray(destination.mapCoords)),
    [destinations]
  )
  const tiles = theme === 'dark' ? DARK_TILES : LIGHT_TILES

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-slate-950">
      <style>{`
        .travel-map-marker-wrapper {
          background: transparent !important;
          border: 0 !important;
        }

        .travel-map-marker {
          position: relative;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .travel-map-marker-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 9999px;
          background: rgba(124, 58, 237, 0.22);
          border: 1px solid rgba(124, 58, 237, 0.45);
          animation: travel-map-pulse 2s ease-out infinite;
        }

        .travel-map-marker-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #3b82f6, #7c3aed);
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 14px rgba(124, 58, 237, 0.75);
        }

        @keyframes travel-map-pulse {
          0% { transform: scale(0.65); opacity: 0.8; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .dark .travel-leaflet-map .leaflet-tile-pane {
          filter: grayscale(0.85) saturate(0.35) brightness(0.75) contrast(1.15);
        }

        .leaflet-control-zoom {
          border: 1px solid rgba(0, 0, 0, 0.10) !important;
          border-radius: 10px !important;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12) !important;
        }

        .dark .leaflet-control-zoom {
          border-color: rgba(255, 255, 255, 0.10) !important;
        }

        .leaflet-control-zoom a {
          width: 38px !important;
          height: 38px !important;
          line-height: 38px !important;
          font-size: 20px !important;
          color: #475569 !important;
          background: rgba(255, 255, 255, 0.94) !important;
          border: 0 !important;
        }

        .dark .leaflet-control-zoom a {
          color: #cbd5e1 !important;
          background: rgba(15, 23, 42, 0.92) !important;
        }

        .leaflet-control-zoom a:hover {
          color: #7c3aed !important;
          background: rgba(255, 255, 255, 1) !important;
        }

        .dark .leaflet-control-zoom a:hover {
          color: #c4b5fd !important;
          background: rgba(30, 41, 59, 0.98) !important;
        }

        .travel-map-popup .leaflet-popup-content-wrapper,
        .travel-map-popup .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.98);
          color: #0f172a;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        }

        .dark .travel-map-popup .leaflet-popup-content-wrapper,
        .dark .travel-map-popup .leaflet-popup-tip {
          background: rgba(15, 23, 42, 0.97);
          color: #f8fafc;
        }

        .travel-map-popup .leaflet-popup-content {
          margin: 12px 14px;
        }

        .dark .travel-map-popup .text-slate-900 {
          color: #f8fafc !important;
        }

        .dark .travel-map-popup .text-slate-500 {
          color: #94a3b8 !important;
        }

        .travel-map-popup .leaflet-popup-close-button {
          color: #64748b !important;
        }

        .dark .travel-map-popup .leaflet-popup-close-button {
          color: #cbd5e1 !important;
        }
      `}</style>
      <div className="pointer-events-none absolute left-5 top-4 z-[900]">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          My Travel Journey
        </div>
        <div className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
          Places I have visited
        </div>
      </div>
<div className="relative z-0 isolate overflow-hidden rounded-2xl">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom
        zoomControl={false}
        className="travel-leaflet-map h-[380px] w-full sm:h-[500px]"
      >
        <ZoomControl position="topright" />

        <TileLayer
          key={theme}
          url={tiles.url}
          attribution={tiles.attribution}
          maxZoom={18}
        />

        <FitVisitedPlaces places={places} />
        <ResetMap places={places} />

        {places.map((place) => (
          <Marker
            key={place.id}
            position={place.mapCoords}
            icon={locationIcon}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.95}>
              {place.place}
            </Tooltip>

            <Popup className="travel-map-popup" closeButton>
              <div className="min-w-[190px] max-w-[240px] p-0.5">
                <div className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 shrink-0 text-violet-600" size={18} />
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      {place.place}
                    </h3>
                    <p className="text-xs text-slate-500">{place.country}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                  <FiCalendar size={13} />
                  {place.date}
                </div>

                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                  <FiImage size={13} />
                  {place.images?.length || 0} photos
                </div>

                <button
                  type="button"
                  onClick={() => onViewStory?.(place)}
                  className="mt-3 text-xs font-semibold text-violet-600 transition hover:text-violet-800"
                >
                  View Travel Story →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
    </div>
  )
}
