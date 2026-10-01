import subprocess, os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FF=r"C:\Users\Aleva\AppData\Local\Programs\Python\Python311\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
import sys
VERT = "vertical" in sys.argv
D="public/video/tomas-vertical" if VERT else "public/video/tomas"
W,H=(720,1280) if VERT else (1280,720)
SUF="-vertical" if VERT else ""
# (archivo, inicio s, fin s, velocidad)  -> cortes secos entre tomas
shots=[
 ("01-fibravalencia",0.4,3.6,1.6),
 ("02-trofeu-puchades",0.6,3.8,1.6),
 ("03-pepe-soler",0.9,3.9,1.6),
 ("04-medalla-xiques",0.2,3.2,1.6),
 ("05-medalla-senselimits",0.3,3.3,1.5) if not VERT else ("05-medalla-senselimits",0.0,2.6,1.3),
 ("06-trofeo-3x3-xiques",0.6,3.8,1.6),
 ("07-la-canyada",1.2,4.0,1.5) if not VERT else ("07-la-canyada",1.8,4.0,1.2),
 ("08-futsal-sueca",1.3,4.0,1.4),
 ("09-logo",0.0,4.0,1.3),
]
inputs=[];filt=[];total=0
for i,(n,a,b,sp) in enumerate(shots):
    inputs+=["-i",f"{D}/{n}.mp4"]
    filt.append(f"[{i}:v]trim=start={a}:end={b},setpts=(PTS-STARTPTS)/{sp},fps=24,scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},setsar=1,format=yuv420p[v{i}]")
    total+=(b-a)/sp
filt.append("".join(f"[v{i}]" for i in range(len(shots)))+f"concat=n={len(shots)}:v=1:a=0[c]")
filt.append(f"[c]fade=t=out:st={total-0.5:.3f}:d=0.5[vout]")
fg=";".join(filt)
out=f"public/video/hero-montaje{SUF}.mp4"
cmd=[FF,"-y",*inputs,"-filter_complex",fg,"-map","[vout]","-an","-c:v","libx264","-preset","slow","-crf","20","-pix_fmt","yuv420p","-movflags","+faststart",out]
print("duracion total aprox", round(total,2),"s")
r=subprocess.run(cmd,capture_output=True,text=True); print("master",r.returncode)
for args,o in ((["-c:v","libx264","-preset","slow","-crf","27","-pix_fmt","yuv420p","-movflags","+faststart"],f"public/video/hero-montaje{SUF}-web.mp4"),
               (["-c:v","libvpx-vp9","-b:v","0","-crf","36","-row-mt","1"],f"public/video/hero-montaje{SUF}-web.webm")):
    r=subprocess.run([FF,"-v","error","-y","-i",out,"-an",*args,o],capture_output=True,text=True); print(o,r.returncode,r.stderr[-200:])
subprocess.run([FF,"-v","error","-y","-ss","1.0","-i",out,"-frames:v","1","-q:v","3",f"public/video/hero-poster{SUF}.jpg"])
