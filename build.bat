@echo off

REM Set project path to the provided file path
echo Project path: %~1
cd %~1 || (
    echo Failed to change directory to %~1.
    pause
    exit /b 1
)
REM Start the production build
echo Running npm production build...
call npm run build || (
    echo npm production build failed.
    pause
    exit /b 1
)

REM Keep the batch file open
pause
