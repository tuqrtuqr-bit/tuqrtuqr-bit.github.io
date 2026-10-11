@echo off
chcp 65001 >nul
title TuQR - Servidor local
cd /d "%~dp0"
set PORT=8000

echo.
echo  ==========================================
echo    TuQR - Servidor de demostracion local
echo  ==========================================
echo.

rem --- Buscar la IP de esta computadora en la red WiFi ---
set "IP="
for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "(Get-NetIPConfiguration | Where-Object { $_.IPv4DefaultGateway -ne $null -and $_.NetAdapter.Status -eq 'Up' } | Select-Object -First 1).IPv4Address.IPAddress"`) do set "IP=%%i"
if not defined IP (
  echo  [!] No se encontro una red WiFi o de cable. Conecte la computadora a una red.
  set "IP=127.0.0.1"
)

rem --- Buscar Python ---
set "PY="
py -3 --version >nul 2>&1 && set "PY=py -3"
if not defined PY (
  python --version >nul 2>&1 && set "PY=python"
)
if not defined PY (
  echo  [!] No se encontro Python en esta computadora.
  echo      Instalelo gratis desde https://www.python.org/downloads/
  echo      y marque la casilla "Add Python to PATH" al instalar.
  echo.
  pause
  exit /b
)

echo  Direccion para el celular:  http://%IP%:%PORT%
echo.
echo  1. El celular debe estar en la MISMA red WiFi que esta computadora.
echo  2. Si Windows pregunta por el Firewall, presione "Permitir acceso".
echo  3. Se abrira la pagina de los codigos QR. Escaneelos con el celular.
echo.
echo  Para apagar el servidor, cierre esta ventana.
echo.

start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep 2; Start-Process 'http://%IP%:%PORT%/qr.html'"
%PY% -m http.server %PORT% --bind 0.0.0.0
pause
