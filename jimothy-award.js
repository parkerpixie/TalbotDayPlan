(() => {
  const SHOPPING_URL = 'https://www.google.com/maps/search/?api=1&query=shopping+near+me';
  let decorating = false;

  function getCounts(shell) {
    const scores = shell.querySelectorAll('.quest-score');
    const hunt = parseInt(scores[0]?.querySelector('strong')?.textContent || '0', 10) || 0;
    const personal = parseInt(scores[1]?.querySelector('strong')?.textContent || '0', 10) || 0;
    return { hunt, personal, won: hunt >= 35 && personal >= 5 };
  }

  function awardMarkup(hunt, personal, won) {
    return `
      <section class="jimothy-award ${won ? 'is-won' : 'is-locked'}" aria-label="Golden Michigan Jimothy Award">
        <div class="jimothy-award__portrait">
          <div class="jimothy-award__frame">
            <img src="assets/places/Jimothy.jpeg" alt="Jimothy, guardian of the Golden Michigan Jimothy Award">
          </div>
        </div>
        <div class="jimothy-award__copy">
          <p class="jimothy-award__eyebrow">🏆 THE GOLDEN MICHIGAN JIMOTHY AWARD 🏆</p>
          <h2>${won ? 'JIMOTHY HAS CHOSEN YOU.' : 'Earn the Golden Jimothy.'}</h2>
          <p class="jimothy-award__message">${won
            ? 'Porter, you did it. Jimothy has reviewed the evidence and found you worthy. Guess what? You earned that shopping trip. See what’s around so you can spend it as fast as it hits your paw 😉'
            : 'Jimothy is watching. Complete any 35 approved hunt finds from the 45 hunt options, plus all 5 of your own awesome photos, and the Golden Michigan Jimothy Award unlocks one shopping-trip item worth up to $30.'}
          </p>
          <div class="jimothy-award__requirements">
            <span class="jimothy-award__requirement ${hunt >= 35 ? 'is-complete' : ''}"><strong>${hunt} / 35</strong> hunt finds</span>
            <span class="jimothy-award__requirement ${personal >= 5 ? 'is-complete' : ''}"><strong>${personal} / 5</strong> Porter’s Choice</span>
          </div>
          ${won
            ? `<a class="jimothy-award__button" href="${SHOPPING_URL}" target="_blank" rel="noopener">🛍 See What’s Around Me</a>`
            : `<button class="jimothy-award__button is-locked" type="button" disabled>🔒 Shopping Trip Locked</button>`}
        </div>
      </section>`;
  }

  function decorateQuest() {
    if (decorating) return;
    const shell = document.querySelector('[data-panel="quest"] .quest-shell');
    if (!shell) return;
    decorating = true;
    const { hunt, personal, won } = getCounts(shell);
    shell.querySelector('.jimothy-award')?.remove();
    shell.insertAdjacentHTML('afterbegin', awardMarkup(hunt, personal, won));
    decorating = false;
  }

  const observer = new MutationObserver(() => {
    if (!decorating) requestAnimationFrame(decorateQuest);
  });

  function start() {
    decorateQuest();
    const questPanel = document.querySelector('[data-panel="quest"]');
    if (questPanel) observer.observe(questPanel, { childList: true, subtree: true });
    else {
      const bodyObserver = new MutationObserver(() => {
        const panel = document.querySelector('[data-panel="quest"]');
        if (!panel) return;
        bodyObserver.disconnect();
        decorateQuest();
        observer.observe(panel, { childList: true, subtree: true });
      });
      bodyObserver.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();