@echo off
set "NODE_DIR=C:\Users\user\AppData\Local\node-portable"
set "PATH=%NODE_DIR%;%PATH%"
cd /d "%~dp0"
call npm.cmd run build
echo.
pause
