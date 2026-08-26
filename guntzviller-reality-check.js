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
        <h3>Guntzviller's is not a quick little stop from the house</h3>
        <p><strong>About 30 minutes EACH WAY</strong> from the Greilickville house area to Guntzviller's Spirit of the Woods Museum near Elk Rapids. That means roughly <strong>1 hour of round-trip driving</strong> before anyone even walks inside.</p>
        <p style="margin-top:10px;">Visitors often spend about <strong>1–1½ hours at the museum</strong>, so this becomes roughly a <strong>2–2½ hour chunk of the day</strong> once the drive and visit are combined. That is a destination choice, not something we casually tack onto downtown shopping + Boardman River Nature Center.</p>
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
