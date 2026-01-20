@echo off
setlocal enabledextensions

echo Stopping existing VitePress servers...
call :kill_port 4173
call :kill_port 5173

echo.
echo Clearing VitePress cache and build outputs...
if exist docs\.vitepress\cache rmdir /s /q docs\.vitepress\cache
if exist docs\.vitepress\dist rmdir /s /q docs\.vitepress\dist

echo.
echo Building VitePress site...
call npm run docs:build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

echo.
echo Starting preview server...
start "" cmd /c "timeout /t 2 >nul & start http://localhost:4173"
call npm run docs:preview
goto :eof

:kill_port
set PORT=%1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
    echo  - Stopping PID %%a on port %PORT%
    taskkill /F /PID %%a >nul 2>&1
)
exit /b 0
