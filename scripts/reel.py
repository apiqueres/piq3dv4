# Reel 9:16: cartela "FUERA / LO / ABURRIDO..." + montaje vertical + cartela final con la web
import os, math, subprocess, shutil
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from PIL import Image, ImageDraw, ImageFont
FF=r"C:\Users\Aleva\AppData\Local\Programs\Python\Python311\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
W,H,FPS=720,1280,24
BG=(10,10,10); FG=(245,245,245); GREY=(148,148,148)
ANTON=lambda s: ImageFont.truetype('scripts/fonts/Anton-Regular.ttf',s)
def archivo(s,w=800,wd=78):
    f=ImageFont.truetype('scripts/fonts/Archivo.ttf',s)
    try: f.set_variation_by_axes([wd,w])
    except Exception: pass
    return f
TAN=math.tan(math.radians(10))
def ease(t): t=max(0,min(1,t)); return 1-(1-t)**4

def word_img(text,font,skew):
    bb=font.getbbox(text); w=bb[2]-bb[0]; h=bb[3]-bb[1]
    pad=int(h*TAN)+4
    im=Image.new('RGBA',(w+2*pad,h+8),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.text((pad-bb[0],4-bb[1]),text,font=font,fill=FG)
    if skew:  # inclinación tipo cursiva: la parte alta se desplaza a la derecha
        im=im.transform(im.size,Image.AFFINE,(1,TAN,-TAN*im.height*0.5,0,1,0),resample=Image.BICUBIC)
    return im

def intro_frames(out):
    os.makedirs(out,exist_ok=True)
    font=ANTON(150)
    lines=[('FUERA',False),('LO',True),('ABURRIDO...',True)]
    imgs=[word_img(t,font,s) for t,s in lines]
    lh=int(150*0.9); total=lh*len(lines); y0=(H-total)//2
    dur=2.6; n=int(dur*FPS)
    for i in range(n):
        t=i/FPS
        fr=Image.new('RGB',(W,H),BG)
        for k,(im,(txt,sk)) in enumerate(zip(imgs,lines)):
            p=ease((t-0.25-k*0.18)/0.7)
            if p<=0: continue
            box=Image.new('RGBA',(W,lh),(0,0,0,0))
            x=(W-im.width)//2; y=int((1-p)*lh*1.1)+ (lh-im.height)//2
            box.alpha_composite(im,(x,y))
            fr.paste(box,(0,y0+k*lh),box)
        fr.save(f'{out}/{i:04d}.png')
    return n

def outro_frames(out):
    os.makedirs(out,exist_ok=True)
    logo=Image.open('public/logo/logo_white.png').convert('RGBA'); logo.thumbnail((260,260))
    big=ANTON(118); small=ANTON(72); tiny=archivo(28,500,100)
    dur=3.4; n=int(dur*FPS)
    for i in range(n):
        t=i/FPS; a=ease(t/0.6)
        fr=Image.new('RGB',(W,H),BG); layer=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(layer)
        layer.alpha_composite(logo,((W-logo.width)//2,300))
        for k,txt in enumerate(['ENTRA EN','LA WEB']):
            bb=big.getbbox(txt); d.text(((W-(bb[2]-bb[0]))//2-bb[0],620+k*108-bb[1]),txt,font=big,fill=FG)
        bb=small.getbbox('piq3d.com'); d.text(((W-(bb[2]-bb[0]))//2-bb[0],885-bb[1]),'piq3d.com',font=small,fill=(240,176,0))
        bb=tiny.getbbox('Diseño e impresión 3D · Sueca'); d.text(((W-(bb[2]-bb[0]))//2-bb[0],985),'Diseño e impresión 3D · Sueca',font=tiny,fill=GREY)
        fade=1.0 if t<dur-0.5 else max(0,(dur-t)/0.5)
        layer.putalpha(layer.getchannel('A').point(lambda v: int(v*a*fade)))
        fr.paste(layer,(0,0),layer); fr.save(f'{out}/{i:04d}.png')
    return n

tmp='public/video/_reel_tmp'; shutil.rmtree(tmp,ignore_errors=True)
n1=intro_frames(f'{tmp}/intro'); n2=outro_frames(f'{tmp}/outro')
out='public/video/reel-piq3d.mp4'
cmd=[FF,'-y','-framerate',str(FPS),'-i',f'{tmp}/intro/%04d.png','-i','public/video/hero-montaje-vertical.mp4','-framerate',str(FPS),'-i',f'{tmp}/outro/%04d.png',
 '-filter_complex',f'[0:v]format=yuv420p[a];[1:v]scale={W}:{H},fps={FPS},format=yuv420p[b];[2:v]format=yuv420p[c];[a][b][c]concat=n=3:v=1:a=0[v]',
 '-map','[v]','-c:v','libx264','-preset','slow','-crf','19','-pix_fmt','yuv420p','-movflags','+faststart',out]
r=subprocess.run(cmd,capture_output=True,text=True); print('ffmpeg',r.returncode,r.stderr[-300:] if r.returncode else '')
shutil.rmtree(tmp,ignore_errors=True)
print('intro',n1/FPS,'s  outro',n2/FPS,'s ->',out)
