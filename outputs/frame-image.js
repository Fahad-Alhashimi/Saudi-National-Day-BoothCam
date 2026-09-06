(() => {
  const frame = document.querySelector('.frame');
  const image = document.createElement('img');
  image.alt = '';
  Object.assign(image.style, {position:'absolute',inset:'0',width:'100%',height:'100%',objectFit:'fill',pointerEvents:'none',zIndex:'5'});
  frame.append(image);
  image.className = 'raster-frame';
  const css = document.createElement('style');
  css.textContent = `
  body{background:#e9e4d9;color:#18231f}
  .app{background:#f4efe4;box-shadow:none;padding:24px 5vw 40px;min-height:100vh}
  .top{height:80px;border-bottom:1px solid #063d2b25;color:#063d2b;backdrop-filter:none}
  .top>img{background:#063d2b;padding:10px;border-radius:8px;width:76px}
  .top span{color:#063d2b;letter-spacing:2px}
  .screen{min-height:calc(100vh - 144px);padding:30px 0;gap:6px}
  #start{align-items:flex-start;text-align:right;background:linear-gradient(270deg,#f4efe4 5%,#f4efe4e8 40%,#f4efe400),url('booth-assets/najdi.png') center/cover;border-radius:22px;margin-top:24px;padding:6vw;min-height:65vh}
  h1{font-size:clamp(48px,6vw,88px);letter-spacing:-2px;line-height:1.3}h2{font-weight:600;letter-spacing:-1px}
  .sub{color:#68736e;font-size:16px}.eyebrow{color:#8b7037;font-size:10px;letter-spacing:3px}
  .btn{font-family:inherit;font-size:16px;font-weight:600;background:#063d2b;color:#f4efe4;border-radius:9px;min-height:54px;padding:14px 32px;box-shadow:none}
  .btn.alt{background:transparent;border:1px solid #063d2b40;color:#063d2b}.btn:focus-visible,.style:focus-visible,.method:focus-visible{outline:3px solid #b79750;outline-offset:4px}
  .styles{max-width:1160px;gap:18px;margin:24px 0}.style{height:210px;border-radius:12px;border:2px solid transparent;box-shadow:0 7px 18px #18231f12;transition:transform .2s,border-color .2s}
  .style img{opacity:1;object-position:70% center}.style .caption{bottom:20px;right:22px}.style strong{font-size:21px}.style small{opacity:.8;letter-spacing:1px}
  .style.selected{border-color:#b79750;box-shadow:0 0 0 3px #b7975040;transform:translateY(-2px)}
  .method{background:#fff9;border:1px solid #063d2b25;color:#063d2b;border-radius:14px;padding:36px}.method small{color:#68736e}.method:hover{background:white;border-color:#b79750}
  .note{color:#68736e}.preview{box-shadow:0 16px 40px #18231f20;border-radius:12px}
  .result{width:min(78vw,980px)!important;aspect-ratio:16/9!important;border-radius:0;box-shadow:0 18px 45px #18231f25;background:#063d2b}
  .result>#final{object-fit:contain!important;width:84%;height:80%;position:absolute;left:8%;top:8%}
  .theme-motif{display:none!important}
  .frame>.raster-frame{inset:0!important;width:100%!important;height:100%!important;filter:none!important;clip-path:polygon(0 0,100% 0,100% 100%,0 100%,0 0,8% 8%,8% 88%,92% 88%,92% 8%,8% 8%)}
  .frame>img:not(.raster-frame){z-index:7;top:auto!important;bottom:1%;right:3%;width:6%!important;filter:none!important;background:#063d2b}
  .frame span{z-index:7;bottom:2%;left:12%;right:12%;padding:0;text-align:center;border:0;background:#063d2b;box-shadow:none;font-size:14px;color:#f4efe4}
  .frame span small{display:none}
  @media(max-width:700px){.styles{grid-template-columns:repeat(2,1fr)!important}.style{height:180px}.methods{grid-template-columns:1fr}.result{width:90vw!important}}
  @media print{@page{size:landscape;margin:8mm}body,.app{background:white!important;padding:0!important}.top,.screen:not(#resultScreen),#resultScreen>h2,#resultScreen>.eyebrow,#resultScreen>div:not(.result){display:none!important}#resultScreen{display:block!important;padding:0;min-height:0}.result{width:100%!important;margin:0;box-shadow:none;break-inside:avoid;print-color-adjust:exact;-webkit-print-color-adjust:exact}}
  `;
  document.head.append(css);
  document.getElementById('usePhoto').addEventListener('click', () => {
    const key = (window.sccSelectedTheme || ['najdi'])[0];
    const map = {najdi:'najdi',hijazi:'hijazi',southern:'southern',northern:'northern',eastern:'hijazi',formal:'najdi'};
    image.src = `booth-assets/frames/${map[key]}.png`;
    frame.style.background = 'transparent'; frame.style.border = '0'; frame.style.boxShadow = 'none';
  });
})();
