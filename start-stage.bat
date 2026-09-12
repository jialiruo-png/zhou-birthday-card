@echo off
cd /d "%~dp0"
start "周老师纪念相册大屏版" http://localhost:8000/stage.html
python -m http.server 8000
