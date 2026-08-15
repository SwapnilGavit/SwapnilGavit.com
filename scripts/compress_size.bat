@echo off
if not exist output mkdir output

echo Starting high-quality compression...
echo ---------------------------------------

for %%i in (*.jpg *.jpeg) do (
    echo Processing: %%i ...
    magick "%%i" -strip -resize 1920x1080^> -filter Lanczos -unsharp 0x0.75+0.75+0.008 -sampling-factor 4:2:0 -quality 88 -define jpeg:extent=950KB "output\%%~nxi"
    echo Completed:  %%i
    echo ---------------------------------------
)

echo All images processed with enhanced quality!
pause