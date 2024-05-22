@echo off

REM Check if a file path argument is provided
if "%~1"=="" (
    echo Please provide the file path as an argument.
    pause
    exit /b 1
)

REM Set project path to the provided file path
echo Project path: %~1
cd %~1 || (
    echo Failed to change directory to %~1.
    pause
    exit /b 1
)


REM Start the production build
echo Running npm production build...
call npm run prodBuild || (
    echo npm production build failed.
    pause
    exit /b 1
)

REM Keep the batch file open
pause
