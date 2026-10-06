import json, html, os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
items=json.load(open('public/img/galeria/manifest.json',encoding='utf-8'))
idx=open('index.html',encoding='utf-8').read()
head=idx[idx.index('<!-- HEADER -->'):idx.index('<main id="top">')]
foot=idx[idx.index('<!-- FOOTER -->'):idx.index('<script src="public/vendor/')]
def rel(x): return x.replace('href="public/','href="../public/').replace('src="public/','src="../public/').replace('href="#top"','href="../"').replace('href="#','href="../#').replace('href="galeria/"','href="./"')
head=rel(head); foot=rel(foot)
# Columnas Servicios / Zonas / Blog (las escribe scripts/build-paginas.mjs)
cols=open('scripts/paginas/footer-cols.html',encoding='utf-8').read().strip()
if 'footer__cols' not in foot:
    _i=foot.index('</section>',foot.index('<section class="footer__info">'))
    foot=foot[:_i]+'      '+cols+chr(10)+'    '+foot[_i:]
order=['Trofeos','Medallas','Merchandising','Cartas QR']
secs=[]
for i,cat in enumerate(order):
    cards=''.join(f'        <li class="gal__item reveal-up"><figure><img src="../{it["src"]}" alt="{html.escape(it["title"])}" width="{it["w"]}" height="{it["h"]}" loading="lazy"><figcaption>{html.escape(it["title"])}</figcaption></figure></li>\n' for it in items if it['cat']==cat)
    anchor=cat.lower().replace(' ','-'); light=i%2==0
    secs.append(f'  <section class="gal" id="{anchor}" data-scheme="{"light" if light else "dark"}">\n    <div class="gal__head">\n      <h2 class="tag{"" if light else " tag--light"}"><span>{cat}</span></h2>\n      <h3 class="gal__title"><span class="words"><span class="mask"><span class="word">{cat}</span></span></span></h3>\n    </div>\n    <ul class="gal__grid">\n{cards}    </ul>\n  </section>\n')
btn='<a class="btn btn--large btn--light reveal-up" href="https://wa.me/34623754444" target="_blank" rel="noopener" data-hover="mask"><span class="btn__bg"></span><span class="btn__content"><span class="btn__label">Escríbenos</span><svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h14M11 4l6 6-6 6"/></svg></span><span class="btn__mask" aria-hidden="true"><span class="btn__label">Escríbenos</span><svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h14M11 4l6 6-6 6"/></svg></span></a>'
loader=idx[idx.index('<!-- LOADER -->'):idx.index('<!-- HEADER -->')].replace('src="public/','src="../public/')
fonts=idx[idx.index('<link rel="stylesheet" href="public/fonts/'):idx.index('<link rel="stylesheet" href="styles.css')].replace('href="public/','href="../public/')
page=f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Galería — PIQ3D</title>
<meta name="description" content="Todos los trofeos, medallas, merchandising y cartas QR impresos en 3D por PIQ3D en Sueca.">
<link rel="icon" href="../public/logo/extrusor_white.png">
{fonts}<link rel="stylesheet" href="../styles.css?v=19">
<link rel="stylesheet" href="../public/css/paginas.css?v=1">
</head>
<body class="page-galeria">

{loader}{head}<main id="top">

  <section class="gal-hero" data-scheme="dark">
    <h2 class="tag tag--light"><span>Galería</span></h2>
    <h1 class="gal-hero__title"><span class="words"><span class="mask"><span class="word">Todo lo que</span></span></span><br><span class="words"><span class="mask"><span class="word">hemos impreso</span></span></span></h1>
    <p class="gal-hero__desc reveal-up">Trofeos, medallas, merchandising y cartas QR salidos del taller de Sueca. Cada pieza, diseñada desde cero.</p>
    <nav class="gal-hero__nav reveal-up" aria-label="Categorías"><a class="ulink" href="#trofeos">Trofeos</a><a class="ulink" href="#medallas">Medallas</a><a class="ulink" href="#merchandising">Merchandising</a><a class="ulink" href="#cartas-qr">Cartas QR</a></nav>
  </section>

{''.join(secs)}
  <section class="touch gal-cta" data-scheme="dark">
    <div class="touch__content">
      <h2 class="tag tag--light"><span>Contacto</span></h2>
      <h3 class="touch__title"><span class="words"><span class="mask"><span class="word">¿El tuyo?</span></span></span></h3>
      <p class="reveal-up gal-cta__p">Cuéntanos qué necesitas y te pasamos presupuesto con el diseño 3D incluido.</p>
      {btn}
    </div>
  </section>

</main>

{foot}<script src="../public/vendor/gsap.min.js"></script>
<script src="../public/vendor/ScrollTrigger.min.js"></script>
<script src="../public/vendor/lenis.min.js"></script>
<script src="../main.js?v=13"></script>
</body>
</html>
'''
open('galeria/index.html','w',encoding='utf-8').write(page)
print('galeria ok', page.count('gal__item'))
