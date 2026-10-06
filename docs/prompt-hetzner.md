# Prompt para la sesión de Claude Code en el servidor de Hetzner

Copia todo lo que hay debajo de la línea en una sesión de Claude Code que tenga acceso al servidor (por SSH o abierta directamente en él).

---

Eres el administrador del servidor Ubuntu de Hetzner que sirve **piq3d.com** con nginx 1.24. Tu tarea es publicar la última versión de la web y comprobar que todo responde bien. No cambies el diseño ni el contenido de ninguna página: solo despliegas y verificas.

## Contexto

- El código fuente está en GitHub: `https://github.com/apiqueres/piq3dv4.git`, rama `main`. Despliega siempre el último commit de `main` (en el momento de escribir esto, el de la fase B del SEO: 41 páginas nuevas en total).
- Es una web estática sin paso de build: se despliega copiando el repositorio tal cual a la raíz que sirve nginx. No hay que ejecutar `npm`, `node` ni `python` en el servidor.
- La configuración actual de nginx usa `try_files $uri $uri/ =404`, sirve `404.html` como `error_page`, manda el HTML con `Cache-Control: no-cache` y los `.css`/`.js` como `immutable` durante un año. Mantén esa configuración.
- Este despliegue añade **carpetas nuevas** en la raíz, cada una con su `index.html`:
  servicios (`trofeos-personalizados/`, `medallas-personalizadas/`, `placas-personalizadas/`, `llaveros-personalizados/`, `soportes-qr-nfc-restaurantes/`, `impresion-3d-personalizada/`), tipos de cliente (`trofeos-carreras-populares/`, `trofeos-clubes-deportivos/`, `trofeos-fallas/`, `trofeos-empresas/`), zonas (`trofeos-personalizados-valencia/`, `-ribera-baixa/`, `-la-safor/`), trece pueblos (`impresion-3d-<pueblo>/`), `trabajos/` (con nueve subcarpetas), `blog/` (con categorías y artículos), más `public/css/paginas.css`, `public/og/*.jpg`, `sitemap.xml` actualizado y cambios en `galeria/` y en las cuatro páginas legales. `index.html` (la portada) **no cambia**.

## Qué tienes que hacer

1. **Averigua cómo se desplegó la web hasta ahora.** Busca la raíz que sirve nginx (`grep -r "root" /etc/nginx/sites-enabled/`), comprueba si esa carpeta es un clon de git (`git -C <raíz> remote -v`) o una copia suelta, y si hay algún cron, hook o script de despliegue (`crontab -l`, `/etc/cron.d`, `ls <raíz>/.git/hooks`, `find / -name "*.sh" -newer /etc/hostname 2>/dev/null | grep -i piq`). Cuéntame qué encuentras antes de cambiar nada.
2. **Actualiza la raíz con el último commit de `main`.**
   - Si es un clon de git: `git -C <raíz> fetch origin && git -C <raíz> checkout main && git -C <raíz> reset --hard origin/main` (si hay cambios locales sin commitear, enséñamelos antes de descartarlos).
   - Si es una copia suelta: clona el repo en una carpeta temporal y sincroniza con `rsync -av --delete --exclude .git --exclude 'imagenes web' --exclude '.claude' --exclude 'public/video/tomas' --exclude 'public/video/tomas-vertical' <tmp>/ <raíz>/`. Haz antes una copia de seguridad de la raíz (`tar czf /root/piq3d-backup-$(date +%F).tgz <raíz>`).
   - Deja los permisos como estaban (normalmente `www-data` o lectura para todos).
3. **Comprueba que nginx sirve las páginas nuevas**, desde el propio servidor y con el dominio real:
   ```
   for u in $(curl -s https://piq3d.com/sitemap.xml | grep -o '<loc>[^<]*' | sed 's#<loc>https://piq3d.com##') /public/css/paginas.css /public/og/trofeos-personalizados.jpg /robots.txt /esta-no-existe/; do printf "%-55s " "$u"; curl -s -o /dev/null -w "%{http_code}\n" "https://piq3d.com$u"; done
   ```
   Todas deben devolver `200` salvo `/esta-no-existe/`, que debe devolver `404`.
4. **Comprueba las cabeceras** de una página nueva y del CSS nuevo: `curl -sI https://piq3d.com/trofeos-personalizados/` debe traer `Cache-Control: no-cache`, y `curl -sI https://piq3d.com/public/css/paginas.css` debe traer la caché larga (`immutable`). Si el CSS no lleva la cabecera larga o el HTML lleva caché larga, dime qué bloque de nginx lo provoca antes de tocarlo.
5. Si `curl -s https://piq3d.com/sitemap.xml | grep -c "<loc>"` no devuelve `47`, el despliegue no ha copiado el sitemap nuevo: revisa el paso 2.
6. **No toques** `index.html`, `robots.txt` ni la configuración de nginx salvo que un paso anterior lo exija, y en ese caso explícame el cambio antes de aplicarlo y haz copia del fichero.
7. Al terminar, dame un resumen con: la raíz de nginx, el método de despliegue que has usado (y si conviene dejarlo automatizado con un `git pull` por cron o un hook), la tabla de códigos HTTP del paso 3 y cualquier aviso en `nginx -t` o en `/var/log/nginx/error.log` de los últimos minutos.

Cuando acabes, recuérdame que envíe `https://piq3d.com/sitemap.xml` desde Google Search Console (Sitemaps → Añadir) para que Google descubra las páginas nuevas.
