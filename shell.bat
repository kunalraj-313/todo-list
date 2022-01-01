@echo off
setlocal enabledelayedexpansion

REM Check if the date argument is provided
if "%~2" == "" (
    echo Usage: %0 ^<date^> ^<commit_message^>
    exit /b 1
)

set "date=%~1"
set "commit_message=%~2"

REM Check if the date is in the correct format (YYYY-MM-DD)
echo !date! | findstr /r "^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$" > nul
if errorlevel 1 (
    echo Error: Date must be in YYYY-MM-DD format.
    exit /b 1
)

git add .
git commit -m "!commit_message!" --date "!date!"
git filter-branch --env-filter "set GIT_COMMITTER_DATE=!GIT_AUTHOR_DATE!" -f
git push -f
