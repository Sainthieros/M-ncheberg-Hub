#!/usr/bin/env bash
set -euo pipefail

# Simple image optimizer: requires ImageMagick (convert) and cwebp
# Usage: ./optimize-images.sh

if ! command -v convert >/dev/null 2>&1; then
  echo "ImageMagick 'convert' fehlt. Installiere: apt install imagemagick (oder brew install imagemagick)."
  exit 1
fi
if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp fehlt. Installiere: apt install webp (oder brew install webp)."
  exit 1
fi

mkdir -p images/optimized || true

for img in images/*.{jpg,jpeg,png}; do
  [ -f "$img" ] || continue
  base=$(basename "$img")
  name="${base%.*}"
  echo "Optimizing $img -> images/${name}-1200.jpg, ${name}-600.jpg and webp variants"
  convert "$img" -resize 1200x -strip -interlace Plane -quality 85 "images/${name}-1200.jpg"
  convert "$img" -resize 600x -strip -interlace Plane -quality 80 "images/${name}-600.jpg"
  cwebp -q 80 "images/${name}-1200.jpg" -o "images/${name}-1200.webp"
  cwebp -q 80 "images/${name}-600.jpg" -o "images/${name}-600.webp"
done

echo "Optimierung abgeschlossen. Verwende die generierten Dateien in srcset."