@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ================================================================
rem Rename, convert, resize, and compress images to real JPEG files.
rem Requires ImageMagick 7+ (the "magick" command) to be installed.
rem Put this file in the image folder, then double-click it.
rem ================================================================

rem ---- Settings ---------------------------------------------------
set "PREFIX=Image_"
set "START_NUMBER=1"
set "PADDING=4"
set "MAX_WIDTH=1920"
set "MAX_HEIGHT=1920"
set "JPEG_QUALITY=82"
set "OUTPUT_FOLDER=compressed_jpg"

where magick >nul 2>nul
if errorlevel 1 (
    echo.
    echo ImageMagick was not found. Install ImageMagick 7+ and make sure
    echo its "magick" command is available in PATH, then run this again.
    pause
    exit /b 1
)

if not exist "%OUTPUT_FOLDER%\" mkdir "%OUTPUT_FOLDER%"

set /a NUMBER=%START_NUMBER%
set /a PROCESSED=0

rem Process common image formats in this folder only.  The original files
rem are left untouched; converted JPEGs go into OUTPUT_FOLDER.
for %%F in (*.jpg *.jpeg *.png *.bmp *.gif *.tif *.tiff *.webp *.heic) do (
    if exist "%%~fF" (
        set "NUMBER_TEXT=0000000000!NUMBER!"
        set "NUMBER_TEXT=!NUMBER_TEXT:~-%PADDING%!"
        set "OUTPUT=%OUTPUT_FOLDER%\%PREFIX%!NUMBER_TEXT!.jpg"

        echo Converting "%%~nxF" to "!OUTPUT!"
        rem -auto-orient applies phone-camera rotation; ^> keeps aspect ratio
        rem and prevents enlargement.  Removing alpha is necessary for JPEG.
        magick "%%~fF" -auto-orient -background white -alpha remove -alpha off ^
            -resize "%MAX_WIDTH%x%MAX_HEIGHT%^>" -strip -interlace Plane ^
            -sampling-factor 4:2:0 -quality %JPEG_QUALITY% "!OUTPUT!"

        if errorlevel 1 (
            echo FAILED: "%%~nxF"
        ) else (
            set /a NUMBER+=1
            set /a PROCESSED+=1
        )
    )
)

echo.
echo Done. !PROCESSED! JPEG file^(s^) were created in "%OUTPUT_FOLDER%".
pause
