(() => {
  const DB_NAME = 'talbot-day-quest-photos';
  const STORE = 'photos';

  function openDB(){
    return new Promise((resolve,reject) => {
      const req = indexedDB.open(DB_NAME,1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function putPhoto(id,file){
    const db = await openDB();
    await new Promise((resolve,reject) => {
      const tx = db.transaction(STORE,'readwrite');
      tx.objectStore(STORE).put(file,id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  }

  async function getPhoto(id){
    const db = await openDB();
    const result = await new Promise((resolve,reject) => {
      const tx = db.transaction(STORE,'readonly');
      const req = tx.objectStore(STORE).get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return result;
  }

  async function deletePhoto(id){
    const db = await openDB();
    await new Promise((resolve,reject) => {
      const tx = db.transaction(STORE,'readwrite');
      tx.objectStore(STORE).delete(id);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  }

  async function clearPhotos(){
    const db = await openDB();
    await new Promise((resolve,reject) => {
      const tx = db.transaction(STORE,'readwrite');
      tx.objectStore(STORE).clear();
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  }

  async function restoreVisiblePreviews(){
    const inputs = document.querySelectorAll('[data-photo-id]');
    for (const input of inputs){
      const id = input.dataset.photoId;
      const img = document.getElementById(`preview-${id}`);
      if (!img || img.dataset.restored === '1') continue;
      const blob = await getPhoto(id).catch(() => null);
      if (blob){
        img.src = URL.createObjectURL(blob);
        img.classList.add('has-photo');
        img.dataset.restored = '1';
      }
    }
  }

  document.addEventListener('change', event => {
    const input = event.target.closest?.('[data-photo-id]');
    const file = input?.files?.[0];
    if (input && file) putPhoto(input.dataset.photoId,file).catch(() => {});
  }, true);

  document.addEventListener('click', event => {
    const reject = event.target.closest?.('[data-reject]');
    if (reject) deletePhoto(reject.dataset.reject).catch(() => {});
    if (event.target?.id === 'questReset') clearPhotos().catch(() => {});
    if (event.target?.dataset?.tab === 'quest') setTimeout(restoreVisiblePreviews,80);
  }, true);

  const observer = new MutationObserver(() => {
    if (document.querySelector('[data-panel="quest"].is-active')) restoreVisiblePreviews();
  });
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(restoreVisiblePreviews,250);
})();

// Keep shopping-family corrections in their own file while loading them after SHOP HOP renders.
(() => {
  if (document.getElementById('shopper-preference-corrections-script')) return;
  const script = document.createElement('script');
  script.id = 'shopper-preference-corrections-script';
  script.src = 'shopper-preference-corrections.js?v=20260826-2';
  document.body.appendChild(script);
})();