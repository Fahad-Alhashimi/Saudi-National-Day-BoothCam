(() => {
  const grid = document.getElementById('styleGrid');
  const next = document.getElementById('goCapture');
  const themes = [
    ['najdi','الطابع النجدي','Najdi','booth-assets/najdi.png','#b79750'],
    ['hijazi','الطابع الحجازي','Hijazi','booth-assets/hijazi.png','#b7784c'],
    ['southern','الطابع الجنوبي','Southern','booth-assets/southern.png','#75966d'],
    ['formal','السعودي الرسمي','Saudi Formal','booth-assets/formal.png','#b79750'],
    ['northern','الطابع الشمالي','Northern','booth-assets/northern.png','#ad734a'],
    ['eastern','الطابع الشرقي','Eastern','booth-assets/eastern.png','#839d65']
  ];
  let selectedTheme = themes[0];
  grid.replaceChildren(); grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  themes.forEach(theme => {
    const [, arabic, english, image] = theme;
    const card = document.createElement('button'); card.className = 'style';
    card.innerHTML = `<img src="${image}" alt="${english}"><span class="caption"><strong>${arabic}</strong><small>${english}</small></span>`;
    card.onclick = () => { selectedTheme = theme; window.sccSelectedTheme = theme; document.querySelectorAll('.style').forEach(x => x.classList.remove('selected')); card.classList.add('selected'); next.disabled = false; };
    grid.append(card);
  });
  const result = document.querySelector('.result');
  const frame = document.querySelector('.frame');
  const frameTitle = frame.querySelector('span');
  result.style.width = 'min(72vw, 980px)'; result.style.aspectRatio = '16 / 9';
  document.getElementById('final').style.objectFit = 'cover';
  frameTitle.innerHTML = 'النادي السعودي الثقافي<br><small dir="ltr">Saudi Cultural Club · Ajman University</small>';
  document.getElementById('usePhoto').addEventListener('click', () => {
    const accent = selectedTheme[4];
    frame.style.background = `linear-gradient(90deg, ${accent} 0 7px, rgba(6,61,43,.58) 7px 13%, transparent 28%, transparent 72%, rgba(6,61,43,.58) 87% 93%, ${accent} 93% 100%)`;
    frame.style.borderColor = accent;
    frame.style.borderWidth = '18px';
    frame.style.boxShadow = `inset 0 0 0 2px ${accent}, inset 0 0 0 13px rgba(6,61,43,.78)`;
    frame.style.alignItems = 'flex-end';
    frame.style.justifyContent = 'flex-start';
    frame.style.textAlign = 'right';
  });
})();
