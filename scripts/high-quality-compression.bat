@echo off
if not exist output mkdir output

echo Starting image compression...
echo ---------------------------------

for %%i in (*.jpg *.jpeg) do (
    echo Processing: %%i ...
    magick "%%i" -resize 1920x1080^> -quality 82 -define jpeg:extent=950KB "output\%%~nxi"
    echo Completed:  %%i
    echo ---------------------------------
)

echo All images processed successfully!
pause