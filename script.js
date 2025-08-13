// Countdown to 14 Aug 2025, 08:00 IST (UTC+05:30)
(function(){
  // Target date in IST -> convert to local by constructing with UTC then offset calc
  // Simpler: build a Date string with timezone offset +05:30 and rely on Date parsing.
  const target = new Date('2025-08-14T08:00:00+05:30').getTime();

  function pad(n){ return String(n).padStart(2,'0'); }

  function tick(){
    const now = Date.now();
    let diff = target - now;

    if (diff < 0) diff = 0;

    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById('d').textContent = pad(d);
    document.getElementById('h').textContent = pad(h);
    document.getElementById('m').textContent = pad(m);
    document.getElementById('s').textContent = pad(s);

    if (diff === 0){
      // Optional: replace CTA when event starts
      const hero = document.querySelector('.hero .cta-row');
      if (hero){
        hero.insertAdjacentHTML('afterend', '<p class="live-banner" role="status">The event is now live. Welcome!</p>');
      }
      clearInterval(timer);
    }
  }

  const timer = setInterval(tick, 1000);
  tick();
})();
