const A=window.NATIONAL_ASSETS,$=id=>document.getElementById(id);
const themes=[['generosity','الكرم','Generosity','#0050af'],['giving','الجود','Giving','#6565e0'],['authenticity','الأصالة','Authenticity','#5aba1c'],['determination','الهمة','Determination','#971a4d'],['courage','الشجاعة','Courage','#607c4f'],['vision','الرؤية','Vision','#7c5d21']];
let chosen=null,src='',stream=null,cameraRequest=0;
$('nationalLogo').src=A['national-logo'];$('clubLogo').src=A.club;
function stop(){cameraRequest++;stream?.getTracks().forEach(t=>t.stop());stream=null;$('video').srcObject=null;}
function screen(id){stop();['choose','capture','result'].forEach(x=>$(x).hidden=x!==id);}
themes.forEach(t=>{const b=document.createElement('button');b.className='theme';b.style.setProperty('--accent',t[3]);b.setAttribute('aria-pressed','false');b.innerHTML=`<img src="${A[t[0]]}" alt="رمز ${t[1]}"><span><strong>${t[1]}</strong><small>${t[2].toUpperCase()}</small></span>`;b.onclick=()=>{chosen=t;document.querySelectorAll('.theme').forEach(e=>{e.classList.remove('selected');e.setAttribute('aria-pressed','false')});b.classList.add('selected');b.setAttribute('aria-pressed','true');$('next').disabled=false;$('selection').textContent='طبعك: '+t[1]};$('themes').append(b)});
$('next').onclick=()=>{screen('capture');$('themeLabel').textContent='بطبع '+chosen[1]};$('back').onclick=()=>screen('choose');$('upload').onclick=()=>$('file').click();
function setPhoto(value){stop();src=value;$('photo').src=value;$('photo').hidden=false;$('video').hidden=true;$('placeholder').hidden=true;$('snap').hidden=true;$('compose').disabled=false;$('status').textContent='صورتك جاهزة لإضافة الإطار.';}
$('file').onchange=()=>{const f=$('file').files[0];if(!f)return;if(!f.type.startsWith('image/'))return;$('status').textContent='جارٍ فتح الصورة…';const r=new FileReader();r.onload=()=>setPhoto(r.result);r.readAsDataURL(f);};
$('camera').onclick=async()=>{stop();const request=cameraRequest;$('status').textContent='اسمح للمتصفح باستخدام الكاميرا.';try{const s=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1920},height:{ideal:1080}},audio:false});if(request!==cameraRequest){s.getTracks().forEach(t=>t.stop());return}stream=s;$('video').srcObject=s;$('video').hidden=false;$('photo').hidden=true;$('placeholder').hidden=true;$('snap').hidden=false;$('status').textContent='عندما تكون جاهزًا، التقط الصورة.'}catch{$('status').textContent='تعذر فتح الكاميرا. تحقق من الإذن أو استخدم رفع صورة.'}};
$('snap').onclick=()=>{const v=$('video');if(!v.videoWidth)return;const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);setPhoto(c.toDataURL('image/jpeg',.95))};
function load(s){return new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src=s})}
function paintCard(c,photo,frame,logo,club){
 c.fillStyle='#002728';c.fillRect(0,0,1920,1080);
 if(photo){const w=1752,h=816,s=Math.max(w/photo.width,h/photo.height),sw=w/s,sh=h/s;c.drawImage(photo,(photo.width-sw)/2,(photo.height-sh)/2,sw,sh,84,84,w,h)}
 else{c.fillStyle='#e9ece5';c.fillRect(84,84,1752,816);c.fillStyle='#607574';c.textAlign='center';c.font='44px Tahoma';c.fillText('هنا صورتك',960,470);c.font='25px Tahoma';c.fillText('معاينة إطار صورتك',960,530)}
 c.drawImage(frame,0,0,1920,1080);c.drawImage(logo,780,908,360,360*logo.height/logo.width);c.drawImage(club,1710,916,68,68);c.fillStyle='white';c.textAlign='right';c.font='23px Tahoma';c.fillText('النادي السعودي الثقافي',1685,948);c.font='17px Tahoma';c.fillText('جامعة عجمان',1685,976);
}
const previewPanel=document.createElement('div');
previewPanel.className='frame-preview';
previewPanel.innerHTML='<div class="preview-heading"><strong id="previewTitle">معاينة الإطار</strong><span>اختر طبعًا لمعاينة إطاره</span></div><canvas id="framePreview" width="1920" height="1080"></canvas>';
$('themes').after(previewPanel);
let previewVersion=0;
async function previewFrame(){
 const version=++previewVersion,t=chosen||themes[0];
 const [frame,logo,club,photo]=await Promise.all([load(A[t[0]+'-frame']),load(A['national-logo']),load(A.club),src?load(src):Promise.resolve(null)]);
 if(version!==previewVersion)return;
 paintCard($('framePreview').getContext('2d'),photo,frame,logo,club);
 $('previewTitle').textContent='إطار '+t[1];
}
$('themes').addEventListener('click',()=>previewFrame().catch(()=>{}));
$('back').addEventListener('click',()=>previewFrame().catch(()=>{}));
previewFrame().catch(()=>{});
$('compose').onclick=async()=>{if(!src||!chosen)return;$('compose').disabled=true;try{const [photo,frame,logo,club]=await Promise.all([load(src),load(A[chosen[0]+'-frame']),load(A['national-logo']),load(A.club)]);const ctx=$('card').getContext('2d');ctx.fillStyle='#002728';ctx.fillRect(0,0,1920,1080);const scale=Math.min(1796/photo.width,836/photo.height);ctx.drawImage(photo,960-photo.width*scale/2,62+(836-photo.height*scale)/2,photo.width*scale,photo.height*scale);ctx.drawImage(frame,0,0,1920,1080);const logoW=400,logoH=logoW*logo.height/logo.width;ctx.drawImage(logo,960-logoW/2,924,logoW,logoH);ctx.drawImage(club,1710,936,68,68);ctx.fillStyle='#ffffff';ctx.font='23px Tahoma';ctx.textAlign='right';ctx.fillText('النادي السعودي الثقافي',1685,964);ctx.font='17px Tahoma';ctx.fillText('جامعة عجمان',1685,992);screen('result');}catch{$('status').textContent='تعذر تجهيز الصورة. جرّب صورة أخرى.'}finally{$('compose').disabled=false}};
$('download').onclick=()=>{const a=document.createElement('a');a.download='SCC-national-day-'+chosen[0]+'.png';a.href=$('card').toDataURL('image/png');a.click()};$('print').onclick=()=>window.print();$('again').onclick=()=>{src='';$('photo').removeAttribute('src');$('photo').hidden=true;$('placeholder').hidden=false;$('compose').disabled=true;$('file').value='';screen('choose')};window.addEventListener('pagehide',stop);
