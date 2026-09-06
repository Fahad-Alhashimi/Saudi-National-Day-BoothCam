(() => {
  const byId = (id) => document.getElementById(id);
  const show = (id) => {
    document.querySelectorAll('.view').forEach((view) => view.classList.add('hidden'));
    byId(id).classList.remove('hidden');
  };
  let image = '';
  const cards = byId('cards');
  const looks = [['Najdi','الطابع النجدي'],['Hijazi','الطابع الحجازي'],['Southern','الطابع الجنوبي'],['Saudi Formal','السعودي الرسمي']];
  cards.replaceChildren();
  looks.forEach(([english, arabic]) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.innerHTML = `<span class="star">✦</span><strong>${arabic}</strong><small>${english}</small>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('.card').forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
      byId('continue').disabled = false;
    });
    cards.appendChild(card);
  });
  byId('startButton').addEventListener('click', () => { document.documentElement.requestFullscreen?.().catch(() => {}); show('looks'); });
  byId('continue').addEventListener('click', () => show('photo'));
  byId('file').addEventListener('change', (event) => {
    const selected = event.target.files?.[0]; if (!selected) return;
    const reader = new FileReader();
    reader.onload = () => { image = String(reader.result); byId('source').src = image; byId('photoActions').classList.remove('hidden'); };
    reader.readAsDataURL(selected);
  });
  document.querySelector('#photo .outline').addEventListener('click', () => show('looks'));
  document.querySelector('#photo .button:not(.outline)').addEventListener('click', () => {
    show('loading'); setTimeout(() => { byId('final').src = image; show('result'); }, 1500);
  });
  document.querySelector('#result .button:not(.outline):not(.text)').addEventListener('click', () => { const link = document.createElement('a'); link.href = image; link.download = 'SCC-photo-booth.jpg'; link.click(); });
})();
