@echo off

REM Check if a file path argument is provided
if "%~1"=="" (
    echo Please provide the file path as an argument.
    pause
    exit /b 1
)

REM Set project path to the provided file path
echo project path.
echo %1
cd %1

REM Start server
echo runing NPM.
call npm run prodBuild

REM Keep the batch file open
pause
