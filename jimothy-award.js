(() => {
  const SHOPPING_URL = 'https://www.google.com/maps/search/?api=1&query=shopping+near+me';
  const JIMOTHY_VIDEO = 'assets/places/Jimothy%20gif.mp4';
  let observedPanel = null;

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
          ${won ? `
            <div class="jimothy-award__surprise">
              <p class="jimothy-award__surprise-label">✨ A MESSAGE FROM JIMOTHY ✨</p>
              <video class="jimothy-award__video" controls autoplay playsinline loop preload="auto" aria-label="A surprise message from Jimothy">
                <source src="${JIMOTHY_VIDEO}" type="video/mp4">
                Your browser cannot play Jimothy's victory message.
              </video>
            </div>
            <a class="jimothy-award__button" href="${SHOPPING_URL}" target="_blank" rel="noopener">🛍 See What’s Around Me</a>
          ` : `<button class="jimothy-award__button is-locked" type="button" disabled>🔒 Shopping Trip Locked</button>`}
        </div>
      </section>`;
  }

  function observePanel(panel) {
    observedPanel = panel;
    observer.observe(panel, { childList: true, subtree: true });
  }

  function decorateQuest() {
    const shell = document.querySelector('[data-panel="quest"] .quest-shell');
    if (!shell) return;

    observer.disconnect();
    const { hunt, personal, won } = getCounts(shell);
    shell.querySelector('.jimothy-award')?.remove();
    shell.insertAdjacentHTML('afterbegin', awardMarkup(hunt, personal, won));

    if (observedPanel) observePanel(observedPanel);

    if (won) {
      const video = shell.querySelector('.jimothy-award__video');
      if (video) {
        video.currentTime = 0;
        const playAttempt = video.play();
        if (playAttempt?.catch) playAttempt.catch(() => {});
      }
    }
  }

  const observer = new MutationObserver((mutations) => {
    const onlyAwardChanges = mutations.every(mutation => mutation.target.closest?.('.jimothy-award'));
    if (onlyAwardChanges) return;
    requestAnimationFrame(decorateQuest);
  });

  function start() {
    const questPanel = document.querySelector('[data-panel="quest"]');
    if (questPanel) {
      observePanel(questPanel);
      decorateQuest();
      return;
    }

    const bodyObserver = new MutationObserver(() => {
      const panel = document.querySelector('[data-panel="quest"]');
      if (!panel) return;
      bodyObserver.disconnect();
      observePanel(panel);
      decorateQuest();
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

(() => {
  function upgradePhotoButtons() {
    document.querySelectorAll('.quest-card').forEach(card => {
      if (card.dataset.photoButtonsUpgraded === 'true') return;

      const originalInput = card.querySelector('input[data-photo-id][capture]');
      if (!originalInput) return;

      const originalLabel = originalInput.closest('label');
      if (!originalLabel) return;

      originalLabel.firstChild && (originalLabel.firstChild.textContent = '📷 Take Photo');
      originalLabel.classList.add('quest-photo-action', 'quest-photo-action--camera');

      const libraryLabel = document.createElement('label');
      libraryLabel.className = 'quest-photo-action quest-photo-action--library';
      libraryLabel.textContent = '🖼 Choose Existing Photo';

      const libraryInput = document.createElement('input');
      libraryInput.type = 'file';
      libraryInput.accept = 'image/*';
      libraryInput.setAttribute('aria-label', 'Choose an existing photo from your library');
      libraryLabel.appendChild(libraryInput);

      libraryInput.addEventListener('change', () => {
        const file = libraryInput.files?.[0];
        if (!file) return;

        try {
          const transfer = new DataTransfer();
          transfer.items.add(file);
          originalInput.files = transfer.files;
          originalInput.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (error) {
          console.error('Could not pass selected library photo to quest input.', error);
          alert('That photo could not be attached. Please try again from the photo library.');
        }
      });

      originalLabel.insertAdjacentElement('afterend', libraryLabel);
      card.dataset.photoButtonsUpgraded = 'true';
    });
  }

  let scheduled = false;
  const scheduleUpgrade = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      upgradePhotoButtons();
    });
  };

  const observer = new MutationObserver(scheduleUpgrade);

  function start() {
    upgradePhotoButtons();
    const questPanel = document.querySelector('[data-panel="quest"]');
    if (questPanel) {
      observer.observe(questPanel, { childList: true, subtree: true });
      return;
    }

    const bodyObserver = new MutationObserver(() => {
      const panel = document.querySelector('[data-panel="quest"]');
      if (!panel) return;
      bodyObserver.disconnect();
      upgradePhotoButtons();
      observer.observe(panel, { childList: true, subtree: true });
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();