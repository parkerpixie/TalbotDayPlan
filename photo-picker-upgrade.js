(() => {
  function upgradePhotoButtons() {
    document.querySelectorAll('.quest-card').forEach(card => {
      if (card.dataset.photoButtonsUpgraded === 'true') return;

      const originalInput = card.querySelector('input[data-photo-id][capture]');
      if (!originalInput) return;

      const originalLabel = originalInput.closest('label');
      if (!originalLabel) return;

      const id = originalInput.dataset.photoId;
      originalLabel.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = '';
      });
      originalLabel.insertAdjacentText('afterbegin', '📷 Take Photo');
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