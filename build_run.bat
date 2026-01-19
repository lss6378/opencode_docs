@echo off
echo Building VitePress site...
call npm run docs:build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

echo.
echo Starting preview server...
start http://localhost:4173
call npm run docs:preview
