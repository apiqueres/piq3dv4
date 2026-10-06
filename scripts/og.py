"""Imágenes Open Graph (1200x630) de las páginas interiores.

    python scripts/og.py

Lee scripts/paginas/og.json (lo escribe build-paginas.mjs): una lista de
{out, src, titulo, etiqueta}. Para cada entrada compone fondo oscuro,
la foto a la derecha (sin recortar, encajada), el logo y el título en
Anton a la izquierda, y guarda un JPG en public/og/.
"""
import json, os, textwrap
from PIL import Image, ImageDraw, ImageFont

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
W, H = 1200, 630
DARK, LIGHT, GREY = (10, 10, 10), (245, 245, 245), (148, 148, 148)
anton = lambda s: ImageFont.truetype('scripts/fonts/Anton-Regular.ttf', s)
archivo = lambda s: ImageFont.truetype('scripts/fonts/Archivo.ttf', s)
logo = Image.open('public/logo/logo_white.png').convert('RGBA')
logo = logo.resize((int(logo.width * 72 / logo.height), 72), Image.LANCZOS)

os.makedirs('public/og', exist_ok=True)
items = json.load(open('scripts/paginas/og.json', encoding='utf-8'))
for it in items:
    im = Image.new('RGB', (W, H), DARK)
    d = ImageDraw.Draw(im)
    # Foto a la derecha, encajada en 520x630 sin recortar.
    foto = Image.open(it['src']).convert('RGB')
    foto.thumbnail((520, H - 80), Image.LANCZOS)
    im.paste(foto, (W - 40 - foto.width, (H - foto.height) // 2))
    # Columna izquierda: logo, etiqueta, título, dominio.
    im.paste(logo, (56, 48), logo)
    d.text((56, 150), it['etiqueta'].upper(), font=archivo(22), fill=GREY)
    size = 76
    while True:
        f = anton(size)
        lines = textwrap.wrap(it['titulo'].upper(), width=max(8, int(560 / (size * 0.46))))
        if len(lines) <= 4 or size <= 44:
            break
        size -= 6
    y = 196
    for ln in lines:
        d.text((56, y), ln, font=f, fill=LIGHT)
        y += int(size * 1.02)
    d.text((56, H - 70), 'piq3d.com', font=archivo(26), fill=(240, 176, 0))
    im.save(it['out'], 'JPEG', quality=86, optimize=True)
    print('  og', it['out'])
print(f'  {len(items)} imágenes')
