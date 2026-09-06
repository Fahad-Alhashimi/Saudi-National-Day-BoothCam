(() => {
  const style = document.createElement('style');
  style.textContent = `
    .app{box-shadow:inset 0 0 120px #0004}.top{backdrop-filter:blur(8px)}
    .style{box-shadow:0 14px 30px #0002}.style.selected{transform:translateY(-4px)}
    .frame{overflow:hidden}.theme-motif{position:absolute;top:13px;bottom:13px;width:13%;opacity:.92;pointer-events:none}.theme-motif.left{left:13px}.theme-motif.right{right:13px;transform:scaleX(-1)}
    .frame span{position:absolute;left:34px;bottom:31px;background:#063d2be6;border-right:3px solid var(--theme-accent,#b79750);padding:10px 14px 9px 17px;border-radius:2px;color:#f4efe4;font-weight:700;line-height:1.55;box-shadow:0 7px 20px #0004}.frame span small{opacity:.78;font-weight:400}.frame>img{filter:drop-shadow(0 4px 8px #0007)}
  `;
  document.head.append(style);
  const frame = document.querySelector('.frame');
  const makeMotif = (side) => { const el = document.createElement('i'); el.className = `theme-motif ${side}`; frame.append(el); return el; };
  const left = makeMotif('left'), right = makeMotif('right');
  const motifs = {
    najdi: 'repeating-linear-gradient(45deg,transparent 0 14px,var(--theme-accent) 15px 18px,transparent 19px 33px),repeating-linear-gradient(-45deg,transparent 0 14px,var(--theme-accent) 15px 18px,transparent 19px 33px)',
    hijazi: 'repeating-linear-gradient(90deg,var(--theme-accent) 0 3px,transparent 3px 16px),repeating-linear-gradient(0deg,var(--theme-accent) 0 3px,transparent 3px 16px)',
    southern: 'repeating-linear-gradient(135deg,transparent 0 9px,var(--theme-accent) 10px 14px,transparent 15px 24px),repeating-linear-gradient(45deg,transparent 0 9px,var(--theme-accent) 10px 14px,transparent 15px 24px)',
    formal: 'repeating-linear-gradient(90deg,transparent 0 12px,var(--theme-accent) 13px 15px,transparent 16px 29px)',
    northern: 'repeating-conic-gradient(from 45deg at 50% 50%,transparent 0 25%,var(--theme-accent) 0 28%,transparent 0 50%)',
    eastern: 'radial-gradient(ellipse at 50% 15%,var(--theme-accent) 0 3px,transparent 4px 18px),repeating-linear-gradient(55deg,transparent 0 13px,var(--theme-accent) 14px 16px,transparent 17px 30px)'
  };
  document.getElementById('usePhoto').addEventListener('click', () => {
    const theme = window.sccSelectedTheme || ['najdi','','','','#b79750'];
    const key = theme[0], accent = theme[4];
    frame.style.setProperty('--theme-accent', accent);
    [left,right].forEach(el => { el.style.backgroundImage = motifs[key]; el.style.backgroundSize = key === 'northern' ? '34px 34px' : 'auto'; });
  });
})();
