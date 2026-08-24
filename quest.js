(() => {
  const REQUIRED_HUNT = 35;
  const REQUIRED_PERSONAL = 5;
  const STORAGE_KEY = 'talbot-day-porter-quest-v2';

  const standard = [
    ['lake-michigan','🌊','Lake Michigan','The actual lake must be clearly visible. A photo of sky, dunes, or a sign does not count.'],
    ['giant-dune','🏜️','A giant dune','A clearly visible large sand dune must be the subject or a major part of the photo.'],
    ['beachgrass','🌾','American beachgrass','The actual dune grass must be visible closely enough for Mom or Dad to reasonably identify it.'],
    ['white-pine','🌲','White pine tree','Show enough needles, cones, or tree shape to make identification reasonable. A distant green tree does not count.'],
    ['maple','🍁','Maple tree','Show identifiable maple leaves or another clear feature.'],
    ['beech','🌳','American beech tree','Show smooth gray bark and/or identifiable leaves clearly enough to verify.'],
    ['hemlock','🌲','Hemlock tree','Need a clear enough photo of the tree or needles to identify it.'],
    ['cottonwood','🌳','Cottonwood tree','Show identifiable leaves, bark, or tree form.'],
    ['sand-cherry','🌿','Sand cherry','The actual plant must be visible and identifiable. Do not pick it.'],
    ['bearberry','🌱','Bearberry','The actual plant must be visible closely enough to identify. Stay on the trail.'],
    ['wildflower','🌸','Any wildflower','A real wildflower growing outdoors. Landscaping or a flower on a sign does not count.'],
    ['pitchers-thistle','🌵','Pitcher’s thistle','The living plant must be visible. Photo only from a legal trail or boardwalk position. Never step into protected vegetation.'],
    ['lonely-plant','🌱','Plant growing alone in bare sand','One living plant must be clearly surrounded mostly by open sand.'],
    ['fern','🌿','A fern','The actual fern fronds must be clearly visible.'],
    ['fungus','🍄','Mushroom or fungus','A real fungus growing outdoors must be visible. Store-bought food does not count.'],
    ['pinecone','🌲','A pinecone','A real pinecone outdoors. It may be on the tree or ground. Do not pull it off a living tree.'],
    ['log-growth','🪵','Fallen log with something growing on it','The photo must show both fallen wood and moss, fungus, lichen, or another plant growing on it.'],
    ['roots','🌳','Exposed tree roots','Roots must be clearly visible above the soil or sand.'],
    ['ghost-tree','👻','Ghost-forest tree','A dead or weathered tree in the dune landscape must be clearly visible. Ordinary lumber does not count.'],
    ['sand-ripples','〰️','Wind-made ripples in sand','The repeating natural ripple pattern must be visible. Footprints or rake marks do not count.'],
    ['smooth-stone','🪨','Smooth round beach stone','A naturally rounded beach stone must be clearly visible. Leave it where you found it after the photo.'],
    ['three-colors','🎨','Three different natural colors in sand or stones','All three clearly different natural colors must appear in one photo. Human-made colors do not count.'],
    ['dune-blowout','🌀','A dune blowout','Show a bowl or scar-like dune area where wind has removed vegetation and exposed sand. Mom or Dad decides if it qualifies.'],
    ['sand-trap','🌾','Grass trapping blown sand','Show dune grass with a visible mound or pile of sand caught around it.'],
    ['wave','🌊','A breaking wave','Capture an actual wave visibly breaking or cresting, not merely flat water.'],
    ['island','🏝️','An island visible across the water','The island must be visibly distinguishable in the photo. A photo toward where an island should be does not count.'],
    ['gull','🐦','A gull','The actual bird must be visible enough to identify as a gull.'],
    ['crow-raven','🐦‍⬛','Crow or raven','The bird itself must be visible. A black speck too small to identify does not count.'],
    ['woodpecker','🪶','A woodpecker','The actual bird must be visible enough to identify. A hole in a tree is not a woodpecker.'],
    ['raptor','🦅','Bird of prey','A hawk, eagle, osprey, or turkey vulture must be visibly identifiable. A tiny unidentified bird in the sky does not count.'],
    ['chipmunk-squirrel','🐿️','Squirrel or chipmunk','The animal itself must be visible. A hole, acorn, or “it ran behind that tree” does not count.'],
    ['deer-evidence','🦌','Deer OR clear deer evidence','Either the deer itself or a clearly identifiable deer track. Random footprints do not count.'],
    ['animal-track','🐾','Wild animal footprint','A distinct non-human, non-dog track must be visible enough for Mom or Dad to reasonably agree it is wildlife.'],
    ['butterfly','🦋','A butterfly','The actual butterfly must be visible enough to identify as a butterfly.'],
    ['bee','🐝','A bee','The actual bee must be visible in the photo. “There is probably a bee somewhere in these flowers” earns zero.'],
    ['beetle','🪲','A beetle','The beetle itself must be clearly visible. Do not handle it for the photo.'],
    ['grasshopper','🦗','Grasshopper or cricket','The insect itself must be visible enough to identify.'],
    ['dragonfly','🪰','Dragonfly or damselfly','The insect itself must be visible enough to identify.'],
    ['spiderweb','🕸️','A spiderweb','The web structure must actually be visible. A single loose strand does not count.'],
    ['park-sign','🪧','Sleeping Bear park or trail sign with Porter','The sign must visibly identify Sleeping Bear, an official park place, or an official trail, and Porter must also appear in the photo.']
  ];

  const bonus = [
    ['monarch','⭐','BONUS: Monarch butterfly','Must clearly be a monarch, not simply any orange butterfly.'],
    ['bald-eagle','⭐','BONUS: Bald eagle','The bird must be visible enough for Mom or Dad to reasonably identify it as a bald eagle.'],
    ['swimming-animal','⭐','BONUS: Wild animal swimming','The wild animal itself must be visibly in the water and swimming. People and pets do not count.'],
    ['other-mammal','⭐','BONUS: Other wild mammal','A wild mammal other than deer, squirrel, or chipmunk must be clearly visible. Pets and livestock do not count.'],
    ['mystery','⭐','BONUS: Mystery nature find','Photograph a real natural thing none of the Talbots can immediately identify. It must be one specific visible object or organism, not “the forest.”']
  ];

  const personal = [1,2,3,4,5].map(n => [
    `porter-choice-${n}`,'✨',`Porter’s Awesome Photo #${n}`,
    'Take a NEW photo during today’s adventure of anything Porter personally thinks is awesome. It does not need to match the scavenger list. It must be Porter’s own photo, taken today, and each of the five photos must show a different subject or composition. Screenshots, downloaded images, old camera-roll photos, five near-identical burst shots, or photos taken by someone else do not count. Mom and Dad verify only that these rules were followed. They do NOT get to decide whether the subject is “awesome enough.”'
  ]);

  const allHunt = [...standard, ...bonus];
  let state = loadState();

  function loadState(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function statusFor(id){ return state[id]?.status || 'empty'; }
  function setStatus(id,status,fileName=''){ state[id] = {status,fileName}; save(); render(); }

  function addQuestTab(){
    const nav = document.querySelector('.tabs__inner');
    if (!nav || nav.querySelector('[data-tab="quest"]')) return;
    const btn = document.createElement('button');
    btn.className='tab'; btn.type='button'; btn.dataset.tab='quest'; btn.textContent='PORTER QUEST';
    nav.appendChild(btn);
    btn.addEventListener('click', () => activateQuest());
  }

  function addQuestPanel(){
    const main = document.querySelector('main.main');
    if (!main || document.querySelector('[data-panel="quest"]')) return;
    const section = document.createElement('section');
    section.className='panel'; section.id='quest'; section.dataset.panel='quest';
    main.appendChild(section);
  }

  function activateQuest(){
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === 'quest'));
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('is-active', p.dataset.panel === 'quest'));
    window.scrollTo({top:document.querySelector('.tabs').offsetTop,behavior:'smooth'});
    render();
  }

  function wireExistingTabs(){
    document.querySelectorAll('.tab:not([data-tab="quest"])').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelector('[data-panel="quest"]')?.classList.remove('is-active');
        document.querySelector('[data-tab="quest"]')?.classList.remove('is-active');
      });
    });
  }

  function approvedCount(items){ return items.filter(([id]) => statusFor(id)==='approved').length; }

  function cardMarkup(item, group){
    const [id,icon,name,rule] = item;
    const status = statusFor(id);
    const label = status==='approved' ? '✓ APPROVED' : status==='pending' ? '⏳ WAITING FOR MOM/DAD' : 'NOT SUBMITTED';
    return `<article class="quest-card quest-card--${group} ${status==='approved'?'is-approved':''} ${status==='pending'?'is-pending':''}">
      <div class="quest-card__top"><span class="quest-card__icon">${icon}</span><div><h4>${name}</h4><p class="quest-card__rule">${rule}</p></div></div>
      <div class="quest-card__status">${label}</div>
      <img class="quest-photo" id="preview-${id}" alt="Photo proof for ${name}">
      <div class="quest-actions">
        <label>📷 Take / choose photo<input type="file" accept="image/*" capture="environment" data-photo-id="${id}"></label>
        ${status==='pending' ? `<button class="approve" data-approve="${id}">Mom/Dad approve</button><button class="reject" data-reject="${id}">Reject</button>` : ''}
        ${status==='approved' ? `<button class="reject" data-reject="${id}">Undo approval</button>` : ''}
      </div>
      <p class="quest-note">One target = one photo. The same photo may not be reused to claim multiple targets unless Mom or Dad explicitly agrees the photo independently proves each one.</p>
    </article>`;
  }

  function render(){
    const panel = document.querySelector('[data-panel="quest"]');
    if (!panel) return;
    const huntApproved = approvedCount(allHunt);
    const personalApproved = approvedCount(personal);
    const won = huntApproved >= REQUIRED_HUNT && personalApproved >= REQUIRED_PERSONAL;
    const huntPct = Math.min(100, huntApproved / REQUIRED_HUNT * 100);
    panel.innerHTML = `<div class="quest-shell">
      <div class="quest-banner">
        <p class="eyebrow eyebrow--dark">PORTER’S SLEEPING BEAR PHOTO QUEST</p>
        <h2>35 hunt finds + all 5 Porter photos = $30 reward</h2>
        <p>There are <strong>40 standard finds</strong>, <strong>5 hard bonus finds</strong>, and <strong>5 Porter’s Choice photos</strong>. Porter may use ANY 35 of the first 45 to satisfy the hunt requirement. The five personal photos are separate and all five are required.</p>
        <div class="quest-scoreboard">
          <div class="quest-score"><strong>${huntApproved} / 35</strong><span>approved hunt finds</span></div>
          <div class="quest-score"><strong>${personalApproved} / 5</strong><span>Porter’s Choice</span></div>
          <div class="quest-score quest-score--reward ${won?'is-won':''}"><strong>${won?'$30 UNLOCKED':'LOCKED'}</strong><span>${won?'Pick one item up to $30':'Complete both requirements'}</span></div>
        </div>
        <div class="quest-progress"><span style="width:${huntPct}%"></span></div>
      </div>

      <details class="quest-rules" open>
        <summary>THE RULES — read these before starting</summary>
        <ol>
          <li><strong>Winning requires BOTH:</strong> 35 approved hunt finds from the 45 standard/bonus targets AND all 5 approved Porter’s Choice photos.</li>
          <li><strong>Photo proof is required.</strong> Seeing something without photographing it earns nothing.</li>
          <li><strong>The actual target must be visible and identifiable.</strong> “There must be a bee somewhere in this field” does not count. A tiny mystery speck does not count as a bird, bug, island, or animal.</li>
          <li><strong>Photos must be taken during this Sleeping Bear outing.</strong> No Google images, screenshots, downloaded photos, old camera-roll pictures, AI images, or photos taken on another day.</li>
          <li><strong>Porter must take the photo</strong> unless the specific task requires Porter to appear in it. For those tasks, another Talbot may operate the camera.</li>
          <li><strong>One hunt target normally needs its own photo.</strong> One image cannot automatically be claimed five different ways. Mom or Dad may allow overlap only when the picture clearly and independently proves each target.</li>
          <li><strong>Mom or Dad approval is final for hunt finds.</strong> If the subject cannot reasonably be identified from the photo, it does not count even if Porter saw it more clearly in person.</li>
          <li><strong>Porter controls the five personal photos.</strong> Mom or Dad only verify that each is a new, original, different photo taken by Porter today. Adults do not get to reject one because they do not personally think it is awesome.</li>
          <li><strong>No touching, chasing, feeding, capturing, moving, picking, or bothering wildlife/plants for a better photo.</strong> No leaving legal trails/boardwalks or entering closed/protected areas to complete an item.</li>
          <li><strong>Safety beats points.</strong> No climbing unstable dunes, approaching edges, entering water, crossing roads unsafely, or getting near wildlife just to get a photo.</li>
          <li><strong>Bonus items are OPTIONAL.</strong> They simply give Porter five extra ways to reach 35 if some standard items are impossible to find.</li>
          <li><strong>The reward is one item costing up to $30 total</strong> from Mom and Dad after the app shows 35 hunt approvals + 5 personal approvals. Tax is included in the $30 cap unless Mom and Dad say otherwise.</li>
        </ol>
      </details>

      <div class="quest-subhead"><div><p class="eyebrow eyebrow--dark">STANDARD HUNT</p><h3>40 possible finds</h3></div><p>Need any 35 hunt approvals total, including bonuses if needed.</p></div>
      <div class="quest-grid">${standard.map(x=>cardMarkup(x,'standard')).join('')}</div>

      <div class="quest-subhead"><div><p class="eyebrow eyebrow--dark">HARD MODE</p><h3>5 optional bonus finds</h3></div><p>Each counts exactly like one standard find.</p></div>
      <div class="quest-grid">${bonus.map(x=>cardMarkup(x,'bonus')).join('')}</div>

      <div class="quest-subhead"><div><p class="eyebrow eyebrow--dark">PORTER’S CHOICE</p><h3>5 mandatory awesome photos</h3></div><p>These do not replace hunt finds. All five are required.</p></div>
      <div class="quest-grid">${personal.map(x=>cardMarkup(x,'choice')).join('')}</div>

      <div class="quest-win ${won?'is-visible':''}"><strong>🏆 QUEST COMPLETE: $30 LOOT UNLOCKED</strong><br>35 hunt finds approved + all five Porter’s Choice photos approved.</div>
      <button class="quest-reset" id="questReset" type="button">Reset entire Porter Quest</button>
    </div>`;
    wirePanel();
  }

  function wirePanel(){
    document.querySelectorAll('[data-photo-id]').forEach(input => input.addEventListener('change', event => {
      const file = event.target.files?.[0]; if (!file) return;
      const id = event.target.dataset.photoId;
      const preview = document.getElementById(`preview-${id}`);
      if (preview) { preview.src = URL.createObjectURL(file); preview.classList.add('has-photo'); }
      state[id] = {status:'pending', fileName:file.name}; save();
      const card = event.target.closest('.quest-card');
      if (card) {
        card.classList.add('is-pending');
        const statusEl = card.querySelector('.quest-card__status'); if(statusEl) statusEl.textContent='⏳ WAITING FOR MOM/DAD';
        const actions = card.querySelector('.quest-actions');
        if(actions && !actions.querySelector('[data-approve]')) actions.insertAdjacentHTML('beforeend', `<button class="approve" data-approve="${id}">Mom/Dad approve</button><button class="reject" data-reject="${id}">Reject</button>`);
        wireApprovalButtons(card);
      }
    }));
    document.querySelectorAll('.quest-card').forEach(wireApprovalButtons);
    document.getElementById('questReset')?.addEventListener('click', () => {
      if (confirm('Reset every Porter Quest approval and start over?')) { state={}; save(); render(); }
    });
  }

  function wireApprovalButtons(scope){
    scope.querySelectorAll('[data-approve]').forEach(btn => btn.onclick = () => setStatus(btn.dataset.approve,'approved'));
    scope.querySelectorAll('[data-reject]').forEach(btn => btn.onclick = () => setStatus(btn.dataset.reject,'empty'));
  }

  addQuestTab();
  addQuestPanel();
  wireExistingTabs();
  render();
})();