@echo off
setlocal enabledelayedexpansion

REM Set directory path
set folder_path=.

REM Step 1: Pass 1 - Rename all non-batch files to a temporary name
set /a counter=1
for %%f in ("%folder_path%\*.*") do (
    set "ext=%%~xf"
    if /i not "!ext!"==".bat" (
        ren "%%f" "temp_!counter!.tmp"
        set /a counter+=1
    )
)

REM Step 2: Pass 2 - Rename temporary files to sequential image numbers with .jpg
set /a counter=1
for %%f in ("%folder_path%\temp_*.tmp") do (
    ren "%%f" "zanskar-!counter!.jpg"
    set /a counter+=1
)

echo All files have been safely re-indexed to .jpg!
pause