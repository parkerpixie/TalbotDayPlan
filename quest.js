(() => {
  const REQUIRED_HUNT = 35;
  const REQUIRED_PERSONAL = 5;
  const STORAGE_KEY = 'talbot-day-porter-quest-v2';

  const trailStandard = [
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

  const trailBonus = [
    ['monarch','⭐','BONUS: Monarch butterfly','Must clearly be a monarch, not simply any orange butterfly.'],
    ['bald-eagle','⭐','BONUS: Bald eagle','The bird must be visible enough for Mom or Dad to reasonably identify it as a bald eagle.'],
    ['swimming-animal','⭐','BONUS: Wild animal swimming','The wild animal itself must be visibly in the water and swimming. People and pets do not count.'],
    ['other-mammal','⭐','BONUS: Other wild mammal','A wild mammal other than deer, squirrel, or chipmunk must be clearly visible. Pets and livestock do not count.'],
    ['mystery','⭐','BONUS: Mystery nature find','Photograph a real natural thing none of the Talbots can immediately identify. It must be one specific visible object or organism, not “the forest.”']
  ];

  const beachStandard = [
    ['beach-sign','🪧','A beach sign','Photograph a sign that clearly names the beach, park, marina, or beach access.'],
    ['beach-waterline','🌊','Water meeting the sand','The photo must clearly show the shoreline where water and sand meet.'],
    ['beach-footprints','👣','Footprints in the sand','A clear trail or pattern of human footprints in beach sand. Porter’s own footprints count.'],
    ['beach-smooth-stone','🪨','A smooth round stone','Photograph a naturally rounded beach stone. Leave it where it is after the photo.'],
    ['beach-striped-stone','🦓','A striped stone','A beach stone with at least one clearly visible natural stripe or band.'],
    ['beach-heart-stone','💜','A heart-ish shaped stone','Find a naturally shaped stone that reasonably resembles a heart. No arranging multiple stones into a heart.'],
    ['beach-driftwood','🪵','A piece of driftwood','Naturally weathered wood on or near the beach. Do not move a giant log for photographic excellence.'],
    ['beach-grass','🌾','Beach grass','Photograph grass growing naturally in or beside beach sand. Stay on legal paths and open beach areas.'],
    ['beach-gull','🐦','A gull','The bird must be visible enough to identify as a gull.'],
    ['beach-water-bird','🦆','A duck or goose','A duck or goose on the water, shore, or nearby grass.'],
    ['beach-feather','🪶','A feather','A naturally found feather on the ground or sand. Photo only; no need to pick it up.'],
    ['beach-butterfly','🦋','A butterfly','The actual butterfly must be visible enough to identify.'],
    ['beach-dragonfly','🪰','A dragonfly or damselfly','The insect itself must be visible enough to identify.'],
    ['beach-bug','🪲','A bug on the sand','Any naturally occurring insect visibly standing or moving on beach sand.'],
    ['beach-breaking-wave','🌊','A breaking wave','Catch a wave visibly cresting, breaking, or curling onto shore. Tiny bay waves count if the break is visible.'],
    ['beach-foam','☁️','Wave foam','Photograph visible white foam left by or riding on a wave.'],
    ['beach-ripples','〰️','Ripples in wet sand','A natural repeating ripple pattern in wet sand made by water or wind.'],
    ['beach-sun-sparkle','✨','Sun sparkling on the water','Visible points or a path of sunlight reflecting brightly off the water.'],
    ['beach-cloud-reflection','☁️','A cloud reflected in water','The reflection of at least one cloud must be visible in water. A puddle counts if it is naturally there.'],
    ['beach-clear-bottom','🔎','The lake bottom through clear water','Photograph shallow water clear enough that stones or sand beneath the surface are visibly identifiable.'],
    ['beach-sailboat','⛵','A sailboat','A real sailboat must be visibly identifiable on the water or at a marina.'],
    ['beach-motorboat','🚤','A motorboat','Any visibly identifiable motorized boat on the water, docked, or at a marina.'],
    ['beach-kayak','🛶','A kayak or canoe','A kayak or canoe on the water, beach, rack, or shoreline.'],
    ['beach-paddleboard','🏄','A paddleboard','A stand-up paddleboard on the water or shore. It does not need a person on it.'],
    ['beach-buoy','🟠','A buoy','Any floating marker buoy or clearly identifiable beach/swim-area buoy.'],
    ['beach-dock','🛟','A dock or pier','A dock, pier, marina walkway, or substantial structure extending over the water.'],
    ['beach-lighthouse','💡','A lighthouse or navigation light','A lighthouse, pier light, or clearly identifiable navigation beacon.'],
    ['beach-umbrella','🏖️','A beach umbrella','A real beach or sun umbrella set up outdoors near the water. Avoid close-up photos of strangers.'],
    ['beach-chair','🪑','A beach chair','A folding, lounge, or beach chair being used or set up near the beach.'],
    ['beach-sandcastle','🏰','A sand creation','A sandcastle, sculpture, moat, mound, drawing, or other clearly intentional creation in the sand. Porter may make one.'],
    ['beach-toy','🪣','A beach toy','A bucket, shovel, ball, float, frisbee, or other obvious beach-play object.'],
    ['beach-colorful-towel','🎨','A colorful beach towel','A towel with at least three clearly different colors visible.'],
    ['beach-safety','🛟','A beach safety item or sign','A lifeguard chair, rescue equipment, swim-zone sign, water-safety sign, or warning flag/sign.'],
    ['beach-picnic','🧺','A picnic table near the water','A real picnic table with the beach, lake, marina, or shoreline area visibly nearby.'],
    ['beach-shade-tree','🌳','A shade tree by the beach','A substantial tree growing close enough to the beach or park that someone could realistically sit under it for shade.'],
    ['beach-shell','🐚','A shell or shell fragment','A naturally occurring shell or shell fragment on the shore. Photograph it where found.'],
    ['beach-washup','🌿','Something natural washed ashore','Leaves, aquatic plants, bark, wood, or another natural object visibly deposited at the waterline. Trash does not count.'],
    ['beach-bird-tracks','🐾','Bird tracks in the sand','A recognizable line or set of small bird footprints in beach sand.'],
    ['beach-porter-shadow','🕶️','Porter’s shadow on the sand','Porter must take a photo showing their own shadow clearly cast on beach sand.'],
    ['beach-horizon','🌅','A clean water horizon','Frame a photo where the distant water-and-sky horizon is clearly visible and is a major part of the composition.']
  ];

  const beachBonus = [
    ['beach-bonus-petoskey','⭐','BONUS: Petoskey stone','Must clearly show the distinctive fossil coral pattern. Photo proof must be good enough for Mom or Dad to reasonably identify it.'],
    ['beach-bonus-eagle-osprey','⭐','BONUS: Bald eagle or osprey','The bird must be visible enough to reasonably identify as a bald eagle or osprey. A tiny sky speck does not count.'],
    ['beach-bonus-fish','⭐','BONUS: Fish visible in the water','The actual fish must be visible beneath or at the surface of the water. A mysterious dark blur does not count.'],
    ['beach-bonus-swimmer','⭐','BONUS: Wild animal swimming','A wild animal must be visibly swimming in the water. People and pets do not count.'],
    ['beach-bonus-watercraft','⭐','BONUS: Three kinds of watercraft in one photo','One photo must clearly contain three different types of watercraft, such as sailboat + motorboat + kayak. Three motorboats do not count.']
  ];

  const personal = [1,2,3,4,5].map(n => [
    `porter-choice-${n}`,'✨',`Porter’s Awesome Photo #${n}`,
    'Take an original vacation photo of anything Porter personally thinks is awesome. Each of the five must show a different subject or composition. Screenshots, downloaded images, AI images, or photos taken by someone else do not count. Mom and Dad verify the rules only; they do NOT get to decide whether the subject is awesome enough.'
  ]);

  const trailHunt = [...trailStandard, ...trailBonus];
  const beachHunt = [...beachStandard, ...beachBonus];
  const allHunt = [...trailHunt, ...beachHunt];
  let state = loadState();
  let activeQuest = 'beach';
  let activeStatus = 'open';

  function loadState(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function statusFor(id){ return state[id]?.status || 'empty'; }
  function setStatus(id,status,fileName=''){
    state[id] = {...(state[id] || {}), status, fileName:fileName || state[id]?.fileName || ''};
    save();
    render();
  }

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
  function pendingCount(items){ return items.filter(([id]) => statusFor(id)==='pending').length; }

  function currentItems(){ return activeQuest === 'beach' ? beachHunt : trailHunt; }
  function currentStandard(){ return activeQuest === 'beach' ? beachStandard : trailStandard; }
  function currentBonus(){ return activeQuest === 'beach' ? beachBonus : trailBonus; }

  function matchesStatus(item){
    const status = statusFor(item[0]);
    if (activeStatus === 'all') return true;
    if (activeStatus === 'open') return status !== 'approved';
    if (activeStatus === 'waiting') return status === 'pending';
    if (activeStatus === 'done') return status === 'approved';
    return true;
  }

  function cardMarkup(item, group){
    const [id,icon,name,rule] = item;
    const status = statusFor(id);
    const label = status==='approved' ? '✓ DONE' : status==='pending' ? '⏳ WAITING' : 'TO FIND';
    return `<article class="quest-card quest-card--${group} ${status==='approved'?'is-approved':''} ${status==='pending'?'is-pending':''}">
      <div class="quest-card__main">
        <span class="quest-card__icon">${icon}</span>
        <div class="quest-card__copy">
          <div class="quest-card__titleline"><h4>${name}</h4><span class="quest-card__status">${label}</span></div>
          <details class="quest-item-rule"><summary>What counts?</summary><p>${rule}</p></details>
        </div>
      </div>
      <img class="quest-photo" id="preview-${id}" alt="Photo proof for ${name}">
      <div class="quest-actions">
        <label class="quest-camera">📷 ${status==='empty'?'Photo':'Replace'}<input type="file" accept="image/*" capture="environment" data-photo-id="${id}"></label>
        ${status==='pending' ? `<button class="approve" data-approve="${id}">✓ Approve</button><button class="reject" data-reject="${id}">Reject</button>` : ''}
        ${status==='approved' ? `<button class="reject" data-reject="${id}">Undo</button>` : ''}
      </div>
    </article>`;
  }

  function questListMarkup(){
    const standardVisible = currentStandard().filter(matchesStatus);
    const bonusVisible = currentBonus().filter(matchesStatus);
    const totalVisible = standardVisible.length + bonusVisible.length;
    if (!totalVisible) {
      const message = activeStatus === 'waiting' ? 'Nothing is waiting for approval.' : activeStatus === 'done' ? 'Nothing approved in this quest yet.' : 'Everything in this view is complete. Nice work.';
      return `<div class="quest-empty"><strong>${message}</strong><br>Use the status buttons above to change the view.</div>`;
    }
    return `
      ${standardVisible.length ? `<div class="quest-compact-list">${standardVisible.map(x=>cardMarkup(x,'standard')).join('')}</div>` : ''}
      ${bonusVisible.length ? `<div class="quest-subhead quest-subhead--compact"><div><p class="eyebrow eyebrow--dark">HARD MODE</p><h3>5 optional bonus finds</h3></div><p>Each counts as one hunt find.</p></div><div class="quest-compact-list">${bonusVisible.map(x=>cardMarkup(x,'bonus')).join('')}</div>` : ''}
    `;
  }

  function personalMarkup(){
    const personalApproved = approvedCount(personal);
    return `<details class="quest-personal" ${personalApproved < REQUIRED_PERSONAL ? '' : ''}>
      <summary><span><strong>✨ Porter’s Choice</strong><small>${personalApproved} / 5 approved · shared across both quest days</small></span><span class="quest-chevron">⌄</span></summary>
      <p class="quest-personal-copy">These five are part of the same $30 prize. Any Porter’s Choice photos already approved yesterday stay approved today.</p>
      <div class="quest-compact-list">${personal.map(x=>cardMarkup(x,'choice')).join('')}</div>
    </details>`;
  }

  function render(){
    const panel = document.querySelector('[data-panel="quest"]');
    if (!panel) return;
    const huntApproved = approvedCount(allHunt);
    const personalApproved = approvedCount(personal);
    const trailApproved = approvedCount(trailHunt);
    const beachApproved = approvedCount(beachHunt);
    const currentApproved = approvedCount(currentItems());
    const currentPending = pendingCount(currentItems());
    const won = huntApproved >= REQUIRED_HUNT && personalApproved >= REQUIRED_PERSONAL;
    const huntPct = Math.min(100, huntApproved / REQUIRED_HUNT * 100);

    panel.innerHTML = `<div class="quest-shell">
      <div class="quest-banner">
        <p class="eyebrow eyebrow--dark">PORTER’S VACATION PHOTO QUEST</p>
        <h2>Same $30 prize. Now with Beach Mode.</h2>
        <p>Yesterday’s Trail Quest approvals still count. Today’s Beach Quest gives Porter 40 easier beach finds + 5 hard bonuses. Reach <strong>35 approved hunt finds total across either quest</strong> plus all 5 Porter’s Choice photos to unlock the same reward.</p>
        <div class="quest-scoreboard quest-scoreboard--four">
          <div class="quest-score"><strong>${huntApproved} / 35</strong><span>total hunt finds</span></div>
          <div class="quest-score"><strong>${beachApproved}</strong><span>Beach approved</span></div>
          <div class="quest-score"><strong>${trailApproved}</strong><span>Trail approved</span></div>
          <div class="quest-score quest-score--reward ${won?'is-won':''}"><strong>${won?'$30 UNLOCKED':`${personalApproved} / 5`}</strong><span>${won?'Prize earned':'Porter’s Choice'}</span></div>
        </div>
        <div class="quest-progress"><span style="width:${huntPct}%"></span></div>
      </div>

      <div class="quest-switch" aria-label="Choose Porter Quest">
        <button class="quest-switch__button ${activeQuest==='beach'?'is-active':''}" data-quest-mode="beach"><span>🏖️</span><strong>Beach Quest</strong><small>${beachApproved} approved · TODAY</small></button>
        <button class="quest-switch__button ${activeQuest==='trail'?'is-active':''}" data-quest-mode="trail"><span>🌲</span><strong>Trail Quest</strong><small>${trailApproved} approved · AUG 24</small></button>
      </div>

      <details class="quest-rules">
        <summary>Rules + $30 prize</summary>
        <ol>
          <li><strong>Winning requires BOTH:</strong> 35 approved hunt finds total across Trail Quest and Beach Quest AND all 5 approved Porter’s Choice photos.</li>
          <li><strong>Yesterday still counts.</strong> Approved Trail Quest finds and Porter’s Choice photos remain part of the total.</li>
          <li><strong>Photo proof is required.</strong> The actual target must be visible and identifiable in Porter’s photo.</li>
          <li><strong>Beach Quest photos must be taken during today’s beach adventure.</strong> Trail Quest approvals from yesterday remain valid. No Google images, screenshots, downloads, AI images, or random old camera-roll photos.</li>
          <li><strong>Porter takes the photo</strong> unless a task specifically requires Porter to appear in it.</li>
          <li><strong>One target normally needs its own photo.</strong> Mom or Dad may allow overlap only when the picture clearly and independently proves each target.</li>
          <li><strong>Mom or Dad approval is final for hunt finds.</strong> Porter controls what counts as awesome for the five Porter’s Choice photos.</li>
          <li><strong>Do not touch, chase, feed, capture, move, pick, or bother wildlife/plants.</strong> Leave stones, shells, feathers, driftwood and natural finds where they belong after photographing them.</li>
          <li><strong>Safety beats points.</strong> No unsafe water entry, climbing, road crossing, edge approaching, or wildlife chasing for a photo.</li>
          <li><strong>Respect other people.</strong> Avoid close-up photos of strangers. If people happen to be in the distant background of a beach scene, that is fine.</li>
          <li><strong>Bonus items are optional.</strong> Each approved bonus counts exactly like one regular hunt find.</li>
          <li><strong>The prize stays the same:</strong> one item costing up to $30 total from Mom and Dad after 35 hunt approvals + all 5 Porter’s Choice approvals. Tax is included unless Mom and Dad say otherwise.</li>
        </ol>
      </details>

      <div class="quest-toolbar">
        <div>
          <p class="eyebrow eyebrow--dark">${activeQuest==='beach'?'BEACH QUEST · TODAY':'TRAIL QUEST · AUG 24'}</p>
          <h3>${activeQuest==='beach'?'40 easy-ish finds + 5 hard bonuses':'Yesterday’s original 40 + 5 bonuses'}</h3>
          <p>${currentApproved} approved${currentPending ? ` · ${currentPending} waiting for approval` : ''}</p>
        </div>
        <div class="quest-status-filters" aria-label="Filter quest items by status">
          <button class="${activeStatus==='open'?'is-active':''}" data-quest-status="open">Open</button>
          <button class="${activeStatus==='waiting'?'is-active':''}" data-quest-status="waiting">Waiting</button>
          <button class="${activeStatus==='done'?'is-active':''}" data-quest-status="done">Done</button>
          <button class="${activeStatus==='all'?'is-active':''}" data-quest-status="all">All</button>
        </div>
      </div>

      ${questListMarkup()}
      ${personalMarkup()}

      <div class="quest-win ${won?'is-visible':''}"><strong>🏆 QUEST COMPLETE: $30 LOOT UNLOCKED</strong><br>35 total hunt finds approved + all five Porter’s Choice photos approved.</div>

      <details class="quest-maintenance"><summary>Quest maintenance</summary><button class="quest-reset" id="questReset" type="button">Reset ALL Trail + Beach Quest progress</button></details>
    </div>`;
    wirePanel();
  }

  function wirePanel(){
    document.querySelectorAll('[data-quest-mode]').forEach(btn => btn.addEventListener('click', () => {
      activeQuest = btn.dataset.questMode;
      activeStatus = 'open';
      render();
    }));

    document.querySelectorAll('[data-quest-status]').forEach(btn => btn.addEventListener('click', () => {
      activeStatus = btn.dataset.questStatus;
      render();
    }));

    document.querySelectorAll('[data-photo-id]').forEach(input => input.addEventListener('change', event => {
      const file = event.target.files?.[0]; if (!file) return;
      const id = event.target.dataset.photoId;
      const preview = document.getElementById(`preview-${id}`);
      if (preview) { preview.src = URL.createObjectURL(file); preview.classList.add('has-photo'); }
      state[id] = {...(state[id] || {}), status:'pending', fileName:file.name}; save();
      const card = event.target.closest('.quest-card');
      if (card) {
        card.classList.add('is-pending');
        const statusEl = card.querySelector('.quest-card__status'); if(statusEl) statusEl.textContent='⏳ WAITING';
        const actions = card.querySelector('.quest-actions');
        if(actions && !actions.querySelector('[data-approve]')) actions.insertAdjacentHTML('beforeend', `<button class="approve" data-approve="${id}">✓ Approve</button><button class="reject" data-reject="${id}">Reject</button>`);
        wireApprovalButtons(card);
      }
    }));

    document.querySelectorAll('.quest-card').forEach(wireApprovalButtons);
    document.getElementById('questReset')?.addEventListener('click', () => {
      if (confirm('Reset every Trail Quest, Beach Quest, and Porter’s Choice approval?')) { state={}; save(); render(); }
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