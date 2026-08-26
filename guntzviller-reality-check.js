// August 26 reality check for the first page.
(() => {
  function addRealityCheck() {
    const plan = document.querySelector('#plan');
    const grid = plan?.querySelector('.plan-grid');
    if (!plan || !grid || document.getElementById('guntzvillerRealityCheck')) return false;

    const card = document.createElement('article');
    card.id = 'guntzvillerRealityCheck';
    card.className = 'plan-stop plan-stop--choice';
    card.innerHTML = `
      <span class="plan-stop__number">🚗</span>
      <div>
        <p class="plan-stop__time">VACATION REALITY CHECK</p>
        <h3>Guntzviller's is a 45-minute-each-way destination</h3>
        <p><strong>About 45 minutes EACH WAY</strong> from the house to Guntzviller's Spirit of the Woods Museum near Elk Rapids. That means roughly <strong>1½ hours of round-trip driving</strong> before anyone even walks inside.</p>
        <p style="margin-top:10px;">If we spend even <strong>1–1½ hours at the museum</strong>, this becomes roughly a <strong>2½–3 hour chunk of the day</strong> once the drive and visit are combined. That is not a quick side stop. It is a major destination choice that competes with downtown shopping, Grand Traverse Commons, Boardman River Nature Center, meals, and the rest of the day.</p>
        <div class="button-row">
          <a class="mini-button" href="https://www.google.com/maps/search/?api=1&query=Guntzviller%27s+Spirit+of+the+Woods+Museum+11060+US-31+Williamsburg+MI" target="_blank" rel="noopener">See where it actually is</a>
        </div>
      </div>
    `;

    grid.insertAdjacentElement('beforebegin', card);
    return true;
  }

  if (!addRealityCheck()) {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (addRealityCheck() || tries > 30) clearInterval(timer);
    }, 100);
  }
})();
