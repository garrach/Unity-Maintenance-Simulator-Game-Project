@echo off

REM Check if the project path is provided
if "%~1"=="" (
    echo Project path is not provided.
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

REM Check if the npm package argument is provided
if "%~2"=="" (
    echo No npm package argument provided. Installing all packages from package.json.
    call npm install || (
        echo npm install failed.
        pause
        exit /b 1
    )
) else (
    echo Installing npm package: %~2
    call npm install %~2 || (
        echo npm install %~2 failed.
        pause
        exit /b 1
    )
)

REM Keep the batch file open
pause
