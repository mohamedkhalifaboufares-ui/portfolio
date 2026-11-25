@echo off
set "NODE_DIR=C:\Users\user\AppData\Local\node-portable"
set "PATH=%NODE_DIR%;%PATH%"
cd /d "%~dp0"
echo.
echo ============================================
echo   Portfolio - serveur de developpement
echo   http://localhost:3000
echo ============================================
echo.
call npm.cmd run dev
echo.
echo Le serveur s'est arrete.
pause
