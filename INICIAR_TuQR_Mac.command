#!/bin/bash
# TuQR - servidor local para Mac
cd "$(dirname "$0")"
PORT=8000
IP=$(ipconfig getifaddr en0 || ipconfig getifaddr en1)
echo ""
echo "  TuQR - Direccion para el celular: http://$IP:$PORT"
echo "  El celular debe estar en la misma red WiFi."
echo "  Para apagar, cierre esta ventana."
echo ""
(sleep 2; open "http://$IP:$PORT/qr.html") &
python3 -m http.server $PORT --bind 0.0.0.0
