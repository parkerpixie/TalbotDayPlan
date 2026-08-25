// August 25 beach-day takeover.
// Loaded after app.js + food-upgrade.js so we can reuse the existing card UI while swapping in today's plan.

const beachData = [
  {
    id: "clinch-park",
    name: "Clinch Park Beach",
    image: "assets/places/Beach-Clinch-Park.jpeg",
    category: ["traverse-city", "bay", "nearby"],
    badge: "🏙️ DOWNTOWN + FULL AMENITIES",
    front: "Big sandy city beach • calm bay water • easiest boredom escape",
    sand: "Yes — a long, genuinely sandy beach with about 1,500 feet of shoreline.",
    waves: "Usually gentle because this is West Grand Traverse Bay, not open Lake Michigan. Wind can add chop, but this is normally one of the calmer choices.",
    busy: "High. This is one of Traverse City's most popular and most-used beaches, especially on a hot summer day.",
    water: "Grand Traverse Bay is generally calmer and can feel a little friendlier than open Lake Michigan, but it is still northern Michigan water.",
    nearby: "Excellent. Front Street, shops, food, the marina and downtown are right there. If sitting on a towel loses its charm, escape is measured in minutes, not another car ride.",
    amenities: "Restrooms, snack bar/concessions, lifeguards in summer, picnic tables, TART Trail, marina, kayak/paddleboard access.",
    take: "Best all-around choice if we want a real beach AND an immediate escape hatch for anyone who gets bored.",
    map: "https://www.google.com/maps/search/?api=1&query=Clinch+Park+Beach+Traverse+City+MI"
  },
  {
    id: "bryant-park",
    name: "Bryant Park Beach",
    image: "assets/places/Beach-Bryant-Park.jpeg",
    category: ["traverse-city", "bay", "nearby"],
    badge: "🌲 SAND + SHADE + PLAYGROUND",
    front: "Long sandy beach • bay swimming • trees and playground",
    sand: "Yes — a long sandy stretch with room for beach blankets and actual sand-beach behavior.",
    waves: "Generally mild West Bay waves. Much less open-water drama than the Lake Michigan side of the peninsula.",
    busy: "Medium to high on hot days. Popular, but it usually feels less downtown-hectic than Clinch Park.",
    water: "West Bay water. Still refreshing, but typically calmer than Lake Michigan proper.",
    nearby: "Good. Playground, picnic area and shade are on-site. Downtown Traverse City is only a short drive away if the beach portion of the program expires.",
    amenities: "Restrooms, lifeguards in summer, picnic area, playground, charcoal grills, tall pines and shade.",
    take: "A strong compromise beach: real sand, swimming, shade and non-swimming things to do without being planted directly in downtown traffic.",
    map: "https://www.google.com/maps/search/?api=1&query=Bryant+Park+Beach+Traverse+City+MI"
  },
  {
    id: "west-end",
    name: "West End Beach",
    image: "assets/places/Beach-West-End.jpeg",
    category: ["traverse-city", "bay", "nearby"],
    badge: "😌 BAY BEACH + MORE BREATHING ROOM",
    front: "Sandy water's edge • big grass area • near downtown",
    sand: "Yes at the shoreline, plus a large grassy park behind it. It is more beach-plus-park than endless dune sand.",
    waves: "Usually gentle bay water. Good when we want water without gambling on Lake Michigan surf conditions.",
    busy: "Medium. Popular, but generally a calmer alternative to Clinch Park.",
    water: "West Grand Traverse Bay, so typically calmer than the open lake.",
    nearby: "Very good. Downtown is just east of the park, and the grassy area gives us somewhere else to exist besides the sand.",
    amenities: "Restrooms, ample parking, grills, picnic tables, fishing, swimming and volleyball.",
    take: "Pick this over Clinch when we want Traverse City convenience but fewer humans in our immediate personal bubble.",
    map: "https://www.google.com/maps/search/?api=1&query=West+End+Beach+Traverse+City+MI"
  },
  {
    id: "suttons-bay-marina",
    name: "Suttons Bay Marina Park Beach",
    image: "assets/places/Beach-Suttons-Bay-Marina.jpeg",
    category: ["suttons-bay", "bay", "nearby", "warmer"],
    badge: "🏖️ SUGAR SAND + WALKABLE TOWN",
    front: "Shallow sugar-sand bay • playground • downtown next door",
    sand: "Very sandy. The village specifically describes the water as shallow with a sugar-sand bottom.",
    waves: "Usually gentle. Suttons Bay is protected Grand Traverse Bay water, so this is a calmer swimming choice than the Lake Michigan beaches.",
    busy: "Medium to high on a gorgeous summer day, but the park has a lot of frontage and space to spread out.",
    water: "Shallow bay water is one of the better bets if actual swimming matters today.",
    nearby: "Excellent. Downtown Suttons Bay is immediately walkable for shops, food, ice cream and wandering. This is one of the best 'beach until we're bored' choices.",
    amenities: "Bathhouse, picnic tables, grills, sand volleyball, walking paths, playground, fishing, marina and seasonal accessible beach mat.",
    take: "Possibly the sweet spot for today: sandy beach, calmer water, and Suttons Bay right there when we are done impersonating beach people.",
    map: "https://www.google.com/maps/search/?api=1&query=Suttons+Bay+Marina+Park+Beach+Michigan"
  },
  {
    id: "vans-beach",
    name: "Van's Beach",
    image: "assets/places/Beach-Vans-Leland.jpeg",
    category: ["leland", "lake-michigan", "nearby"],
    badge: "🌊 BIG LAKE + FISHTOWN ESCAPE",
    front: "Popular sandy Lake Michigan beach • walk to Fishtown",
    sand: "Yes — a real sandy Lake Michigan beach with a sandy path down from Cedar Street.",
    waves: "More variable. This is open Lake Michigan, so wind can create real waves, chop and currents. On a calm day it can be gorgeous; on a windy day it behaves like the Big Lake.",
    busy: "High for Leland. It is the town's most popular public beach and a local favorite.",
    water: "Lake Michigan cold-and-clear territory. Great for a quick swim or feet-in-the-water test; less dependable for long lounging in the water.",
    nearby: "Outstanding. Fishtown and downtown Leland are within walking distance, with shops, sandwiches, fish, coffee and things to poke around in.",
    amenities: "Parking, seasonal public restroom/pit toilet access and carry-in water access. Town amenities are close by.",
    take: "Best beach if Porter and I want a built-in Plan B. We can beach, then walk straight into Fishtown instead of staging another family summit in the parking lot.",
    map: "https://www.google.com/maps/search/?api=1&query=Vans+Beach+Leland+MI"
  },
  {
    id: "nedows-beach",
    name: "Nedow's Beach / Bartholomew Park",
    image: "assets/places/Beach-Nedows-Leland.jpeg",
    category: ["leland", "inland", "warmer", "nearby"],
    badge: "☀️ CALMER + WARMER LAKE LEELANAU",
    front: "North Lake Leelanau • dock + picnic area • seven blocks from town",
    sand: "A smaller public swimming beach rather than a giant Lake Michigan sandscape. Enough beach for a swim-and-picnic day.",
    waves: "Very mild compared with Lake Michigan. This is North Lake Leelanau, so expect lake ripples rather than surf.",
    busy: "Low to medium. Much less of a destination crowd magnet than Van's Beach.",
    water: "The inland-lake option. Generally calmer and a better bet for people who would like the water to feel less like refrigerated punishment.",
    nearby: "Good. Picnic area and dock are on-site, and Main Street/Fishtown are about seven blocks west.",
    amenities: "Public beach, picnic area, swimming area, dock and boat launch.",
    take: "Choose this if the real goal is SWIMMING rather than staring bravely at cold Lake Michigan while saying 'it's not that bad.'",
    map: "https://www.google.com/maps/search/?api=1&query=Bartholomew+Park+Nedows+Beach+Leland+MI"
  },
  {
    id: "north-bar-lake",
    name: "North Bar Lake",
    image: "assets/places/North-bar-lake.jpeg",
    category: ["sleeping-bear", "inland", "lake-michigan", "warmer"],
    badge: "🏖️ TWO LAKES IN ONE STOP",
    front: "Warm shallow inland lake + Lake Michigan over the dune",
    sand: "Yes — lots of dune sand around the inland lake and the Lake Michigan side.",
    waves: "North Bar itself is usually calm. Walk over the narrow dune and Lake Michigan can have anything from glassy water to real waves depending on wind.",
    busy: "High. This is one of Sleeping Bear's most popular beach stops and parking can fill on beautiful days.",
    water: "Best temperature hedge in the park. North Bar is shallow and typically warmer, while Lake Michigan is right next door when someone wants the full Big Lake experience.",
    nearby: "Low once we are there. The fun is the two-water setup itself. Empire is the nearest town for food and a civilization reset.",
    amenities: "Paved parking, picnic tables and vault toilets. National park rules/pass apply.",
    take: "Best Sleeping Bear choice if actual water play matters. It gives us a warm-ish answer and a Lake Michigan answer without moving the car.",
    map: "https://www.google.com/maps/search/?api=1&query=North+Bar+Lake+Michigan"
  },
  {
    id: "empire-beach",
    name: "Empire Beach Village Park",
    image: "assets/places/Beach-Empire.jpeg",
    category: ["sleeping-bear", "lake-michigan", "nearby"],
    badge: "🔥 BIG LAKE + PLAYGROUND + TOWN",
    front: "Wide sand • lighthouse • playground • walkable Empire",
    sand: "Yes — a wide public Lake Michigan sand beach.",
    waves: "Open Lake Michigan, so waves depend heavily on wind. Summer is often calmer, but this can absolutely turn into a wave beach.",
    busy: "Medium to high in summer, but the beach is wide and has more room than the tiny road-end beaches.",
    water: "Cold Lake Michigan is the main event, but South Bar Lake is just across the parking area if we want a calmer/warmer alternative.",
    nearby: "Very good. Downtown Empire is only a few blocks away, plus the lighthouse, playground, basketball and picnic area give non-swimmers something to do.",
    amenities: "Bathrooms, playground, picnic area, grills/fire rings, onsite parking for a small fee, lighthouse and nearby rentals.",
    take: "A very good family compromise: dramatic Lake Michigan beach without giving up bathrooms, town, playgrounds or the possibility of abandoning the towel entirely.",
    map: "https://www.google.com/maps/search/?api=1&query=Empire+Beach+Village+Park+Michigan"
  },
  {
    id: "glen-haven",
    name: "Glen Haven Beach",
    image: "assets/places/Glen-Haven.jpeg",
    category: ["sleeping-bear", "lake-michigan", "nearby"],
    badge: "⚓ BEACH + HISTORIC VILLAGE",
    front: "Wide Sleeping Bear Bay beach • museums and historic buildings",
    sand: "Yes — a broad sandy beach along Sleeping Bear Bay.",
    waves: "Lake Michigan water, but its position on Sleeping Bear Bay can sometimes feel less exposed than shoreline facing straight west. Conditions still change fast.",
    busy: "Medium. Popular, but the historic-village setting spreads people among several things to do.",
    water: "Classic clear, chilly Lake Michigan swimming.",
    nearby: "Excellent for boredom insurance. Historic Glen Haven, old buildings and park interpretation are right beside the beach.",
    amenities: "Restrooms, picnic area, accessible beach access and nearby historic sites. National park pass/rules apply.",
    take: "Best Sleeping Bear beach if we want the day to contain more nouns than just sand, towel and water.",
    map: "https://www.google.com/maps/search/?api=1&query=Glen+Haven+Historic+Village+Michigan"
  },
  {
    id: "good-harbor-bay",
    name: "Good Harbor Bay Beach",
    image: "assets/places/Good-Harbor-Bay.jpeg",
    category: ["sleeping-bear", "lake-michigan"],
    badge: "🌊 WIDE + NATURAL + ROOM TO ROAM",
    front: "Long sandy shoreline • open Lake Michigan • quieter feel",
    sand: "Yes — classic long Lake Michigan sand with dunes and forest behind it.",
    waves: "Open Lake Michigan. This is the beach to choose when waves sound fun, not when we need guaranteed bathtub water.",
    busy: "Low to medium compared with downtown beaches. The long shoreline gives people room to spread out even when the access points are active.",
    water: "Refreshing Lake Michigan. Beautiful, clear and not particularly interested in our opinions about temperature.",
    nearby: "Low. This is the nature-first choice. Bring what we need because shops and restaurants are not sitting behind the dunes waiting for us.",
    amenities: "Road-end beach access with basic parking/vault-toilet style facilities depending on access point. National park pass/rules apply.",
    take: "Best if the group wants an actual peaceful beach day. Worst if somebody says 'I'm bored, what else is here?' after fourteen minutes.",
    map: "https://www.google.com/maps/search/?api=1&query=Good+Harbor+Bay+Beach+Michigan"
  },
  {
    id: "esch-road",
    name: "Esch Road / Otter Creek Beach",
    image: "assets/places/Beach-Esch-Road.jpeg",
    category: ["sleeping-bear", "lake-michigan", "warmer"],
    badge: "🏞️ CREEK MEETS LAKE MICHIGAN",
    front: "Natural Lake Michigan beach + warm shallow Otter Creek",
    sand: "Yes — broad natural beach around the mouth of Otter Creek.",
    waves: "Lake Michigan can have real waves here, while the creek mouth offers shallow calmer water to splash or wade in.",
    busy: "Medium. It is a known Sleeping Bear favorite, but feels far more natural and less built-up than town beaches.",
    water: "A useful temperature compromise: cool Lake Michigan plus warmer shallow creek water.",
    nearby: "Low. The creek and shoreline are the entertainment; this is not a walk-to-shops situation.",
    amenities: "Beach access and basic park facilities. National park pass/rules apply; no lifeguard.",
    take: "A nice North-Bar-style compromise farther south: cold Big Lake for the brave, shallow creek water for everyone else.",
    map: "https://www.google.com/maps/search/?api=1&query=Esch+Road+Beach+Sleeping+Bear+Dunes"
  }
];

// Replace yesterday's trail list with today's beach list.
trailData.splice(0, trailData.length, ...beachData);

// Update the page chrome for August 25.
const heroEyebrow = document.querySelector(".hero .eyebrow");
if (heroEyebrow) heroEyebrow.textContent = "NORTHERN MICHIGAN • AUGUST 25, 2026";
const heroChips = document.querySelector(".hero__chips");
if (heroChips) {
  heroChips.innerHTML = `
    <span>🏖️ Beach day</span>
    <span>🌊 Bay calm or Big Lake waves</span>
    <span>🧊 Water temperature realism</span>
    <span>🍔 Dinner without a $24 burger</span>
  `;
}
const beachTab = document.querySelector('[data-tab="trails"]');
if (beachTab) beachTab.textContent = "BEACH CARDS";

const planPanel = document.getElementById("plan");
if (planPanel) {
  planPanel.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow eyebrow--dark">TODAY'S BEACH-DAY PLAN</p>
        <h2>Pick how much beach commitment we actually want.</h2>
        <p class="section-copy">The important variable is not 'which beach is prettiest.' They are all annoyingly pretty. It is whether we want warmer water, real Lake Michigan waves, or civilization close enough to escape when sitting still gets boring.</p>
      </div>
      <span class="status-pill">Warm day • flexible plan</span>
    </div>

    <div class="plan-grid">
      <article class="plan-stop plan-stop--primary">
        <span class="plan-stop__number">1</span>
        <div>
          <p class="plan-stop__time">BEST ALL-AROUND BET</p>
          <h3>Suttons Bay Marina Park</h3>
          <p>Sugar sand, shallow calmer bay water, playground and volleyball, with downtown Suttons Bay immediately available when we have achieved sufficient Beach.</p>
          <button class="text-link jump-to-trail" data-trail="suttons-bay-marina">See the beach card →</button>
        </div>
      </article>

      <article class="plan-stop">
        <span class="plan-stop__number">2</span>
        <div>
          <p class="plan-stop__time">BEST BEACH + WANDERING COMBO</p>
          <h3>Van's Beach + Fishtown</h3>
          <p>Real Lake Michigan beach, actual waves when the wind cooperates, then walk into Fishtown and Leland the instant our attention spans wander off without us.</p>
          <button class="text-link jump-to-trail" data-trail="vans-beach">See the beach card →</button>
        </div>
      </article>

      <article class="plan-stop">
        <span class="plan-stop__number">3</span>
        <div>
          <p class="plan-stop__time">BEST IF WE ACTUALLY WANT TO SWIM</p>
          <h3>North Bar Lake or Nedow's Beach</h3>
          <p>Both give us inland-lake water that is calmer and generally friendlier than open Lake Michigan. North Bar also puts Lake Michigan right over the dune.</p>
          <div class="button-row">
            <button class="mini-button jump-to-trail" data-trail="north-bar-lake">North Bar</button>
            <button class="mini-button jump-to-trail" data-trail="nedows-beach">Nedow's</button>
          </div>
        </div>
      </article>

      <article class="plan-stop plan-stop--choice">
        <span class="plan-stop__number">4</span>
        <div>
          <p class="plan-stop__time">BEST ZERO-COMMITMENT OPTION</p>
          <h3>Clinch Park</h3>
          <p>Beach in downtown Traverse City. If we love it, great. If we last 32 minutes, also great: shops, food, marina and the TART Trail are already there.</p>
          <button class="text-link jump-to-trail" data-trail="clinch-park">See the beach card →</button>
        </div>
      </article>

      <article class="plan-stop plan-stop--food">
        <span class="plan-stop__number">5</span>
        <div>
          <p class="plan-stop__time">DINNER RULE</p>
          <h3>Traverse City or Suttons Bay, but no luxury cheeseburger nonsense</h3>
          <p>Tonight's food list is curated around casual places where burgers and sandwiches stay at $20 or under. Traverse City is loaded first; Suttons Bay has its own button too.</p>
          <button class="text-link jump-tab" data-target-tab="food">Open FOOD →</button>
        </div>
      </article>
    </div>

    <div class="quick-picks">
      <div class="quick-picks__title">
        <p class="eyebrow eyebrow--dark">CHOOSE BY MOOD</p>
        <h3>No committee meeting required.</h3>
      </div>
      <button class="mood-card jump-to-trail" data-trail="suttons-bay-marina"><span class="mood-card__icon">🏖️</span><strong>Best compromise</strong><small>Suttons Bay</small></button>
      <button class="mood-card jump-to-trail" data-trail="vans-beach"><span class="mood-card__icon">🐟</span><strong>Beach + Fishtown</strong><small>Van's Beach</small></button>
      <button class="mood-card jump-to-trail" data-trail="north-bar-lake"><span class="mood-card__icon">🌡️</span><strong>Warmer water</strong><small>North Bar Lake</small></button>
      <button class="mood-card jump-to-trail" data-trail="clinch-park"><span class="mood-card__icon">🏙️</span><strong>Maximum escape routes</strong><small>Clinch Park</small></button>
    </div>
  `;
}

const beachPanelHeading = document.querySelector("#trails .section-heading > div");
if (beachPanelHeading) {
  beachPanelHeading.innerHTML = `
    <p class="eyebrow eyebrow--dark">BEACH DECODER</p>
    <h2>What each beach actually feels like</h2>
    <p class="section-copy">Tap a photo card to flip it. The back answers the useful questions: real sand or not, wave personality, crowd level, water-temperature reality, amenities and what we can do nearby when sitting on sand stops being enchanting.</p>
  `;
}
const resourceButtons = document.querySelector("#trails .resource-buttons");
if (resourceButtons) {
  resourceButtons.innerHTML = `
    <a class="outline-button" href="https://www.traversecity.com/outdoors/beaches/" target="_blank" rel="noopener">Traverse City beach guide</a>
    <a class="outline-button" href="https://www.nps.gov/slbe/planyourvisit/beaches.htm" target="_blank" rel="noopener">Sleeping Bear beach safety</a>
  `;
}
const filters = document.getElementById("trailFilters");
if (filters) {
  filters.setAttribute("aria-label", "Filter beaches");
  filters.innerHTML = `
    <button class="filter-chip is-active" data-trail-filter="all">Everything</button>
    <button class="filter-chip" data-trail-filter="traverse-city">🏙️ Traverse City</button>
    <button class="filter-chip" data-trail-filter="suttons-bay">🏖️ Suttons Bay</button>
    <button class="filter-chip" data-trail-filter="leland">🐟 Leland</button>
    <button class="filter-chip" data-trail-filter="sleeping-bear">🐻 Sleeping Bear</button>
    <button class="filter-chip" data-trail-filter="warmer">🌡️ Warmer water bet</button>
    <button class="filter-chip" data-trail-filter="nearby">🛍️ Stuff nearby</button>
  `;
}

trailCardMarkup = function(beach) {
  return `
    <article class="trail-card" data-trail-card="${beach.id}" tabindex="0" role="button" aria-label="Flip ${beach.name} beach card">
      <div class="trail-card__inner">
        <div class="trail-card__face trail-card__front">
          <img class="trail-card__image" src="${beach.image}" alt="${beach.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="trail-card__image-fallback" style="display:none;align-items:center;justify-content:center;padding:2rem;text-align:center;font-weight:700;">📷 Beach photo goes here</div>
          <div class="trail-card__front-content">
            <span class="trail-card__badge">${beach.badge}</span>
            <h3>${beach.name}</h3>
            <p>${beach.front}</p>
            <p class="tap-hint">Tap to flip →</p>
          </div>
        </div>
        <div class="trail-card__face trail-card__back">
          <h3>${beach.name}</h3>
          <div class="trail-details">
            <div class="trail-detail"><strong>Sand</strong><span>${beach.sand}</span></div>
            <div class="trail-detail"><strong>Waves</strong><span>${beach.waves}</span></div>
            <div class="trail-detail"><strong>Crowds</strong><span>${beach.busy}</span></div>
            <div class="trail-detail"><strong>Water feel</strong><span>${beach.water}</span></div>
            <div class="trail-detail"><strong>If we get bored</strong><span>${beach.nearby}</span></div>
            <div class="trail-detail"><strong>Amenities</strong><span>${beach.amenities}</span></div>
          </div>
          <p class="trail-take"><strong>Practical take:</strong> ${beach.take}</p>
          <div class="trail-card__actions">
            <a class="primary-action" href="${beach.map}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Map it</a>
            <button type="button" class="flip-back">Flip back</button>
          </div>
        </div>
      </div>
    </article>
  `;
};

activeTrailFilter = "all";
syncTrailFilterButtons();
renderTrails();

// TODAY'S DINNER LIST -------------------------------------------------------
// The rule: basic burgers/sandwiches should be $20 or less, and we are not focusing
// on restaurants where ordinary dinner quickly becomes $30+ per person.

for (let i = foodData.length - 1; i >= 0; i--) {
  if (foodData[i].town === "traverse-city" || foodData[i].town === "suttons-bay") {
    foodData.splice(i, 1);
  }
}

foodData.push(
  {
    town: "traverse-city",
    name: "Rare Bird Brewpub",
    kind: "meal",
    price: "$13–16 burgers/sandwiches",
    type: "Brewpub • burgers • chicken sandwiches • bánh mì",
    note: "Yes, the brewery absolutely serves real food. Current menu: Classic Burger $13; Pub Burger $15; Buffalo/Curry Chicken $15; Turkey Club $15; Bánh Mì and Grilled Chicken $16. Chips included; fries are a $3 upgrade.",
    tags: ["Brewery", "Burgers", "Sandwiches", "Budget fit"],
    foodCategories: ["beer", "burgers", "sandwiches"],
    topPick: "Pub Burger $15 or Turkey Club $15",
    menu: "https://order.toasttab.com/online/rare-bird-brew-pub",
    map: "https://www.google.com/maps/search/?api=1&query=Rare+Bird+Brewpub+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "The Workshop Brewing Company",
    kind: "meal",
    price: "$9–18 food",
    type: "Brewery • smash burgers • flatbreads • pub food",
    note: "A very budget-friendly brewery dinner. Big Kahuna smash burger is $9; Mucky Duck BBQ Burger $14; flatbreads run about $14–18. Current Tuesday food hours begin around 4 PM.",
    tags: ["Brewery", "Burgers", "Flatbread", "Budget fit"],
    foodCategories: ["beer", "burgers", "pizza", "sandwiches"],
    topPick: "Big Kahuna Burger $9",
    menu: "https://order.toasttab.com/online/the-workshop-brewing-company-tc-221-garland-st-ste-a",
    map: "https://www.google.com/maps/search/?api=1&query=The+Workshop+Brewing+Company+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "Identity Brewing Company",
    kind: "meal",
    price: "$12–14 burgers/sandwiches",
    type: "Downtown brewery • burger • biscuit sandwiches • wraps",
    note: "The IBC Burger is $14. Biscuit sandwiches such as the IBC Club and Western Club are $12; Cuban and chicken sandwiches are around $14. Good downtown option when we want brewery without brewery-price creep.",
    tags: ["Brewery", "Burgers", "Sandwiches", "Downtown"],
    foodCategories: ["beer", "burgers", "sandwiches"],
    topPick: "IBC Burger $14 or IBC Club $12",
    menu: "https://www.toasttab.com/local/order/new-dish-cafe-108-south-union-street",
    map: "https://www.google.com/maps/search/?api=1&query=Identity+Brewing+Company+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "Slabtown Burgers",
    kind: "meal",
    price: "$12–17 burgers",
    type: "Local burger joint • fresh-cut fries • shakes",
    note: "Not a brewery, just a very straightforward burger answer. Current owner menu has Cheeseburger $12, Mushroom/Olive $13, Bacon $14, Rodeo $14.50 and Slabtown Special $17. Fresh-cut fries are $4.25.",
    tags: ["Burgers", "Casual", "Local", "Budget fit"],
    foodCategories: ["burgers", "sandwiches"],
    topPick: "Rodeo Burger $14.50",
    menu: "https://www.doordash.com/store/slabtown-cafe-%26-burgers-712039/",
    map: "https://www.google.com/maps/search/?api=1&query=Slabtown+Burgers+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "Right Brain Brewery",
    kind: "meal",
    price: "$14.50–19 pizzas",
    type: "Brewery • Neapolitan-style pizza • pretzels",
    note: "No burger mission here, but the brewery has its own kitchen and every listed pizza lands under $20: cheese $14.50, pepperoni $16, several specialty pies $17–19.",
    tags: ["Brewery", "Pizza", "Budget fit"],
    foodCategories: ["beer", "pizza"],
    topPick: "Sweet & Spicy Pepperoni $17",
    menu: "https://www.rightbrainbrewery.com/20/food-menu",
    map: "https://www.google.com/maps/search/?api=1&query=Right+Brain+Brewery+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "The Filling Station Microbrewery",
    kind: "meal",
    price: "$10–20 typical",
    type: "Train-depot brewery • wood-fired flatbread pizza",
    note: "YES, this brewery serves food and reviews love the pizza. Important catch for TODAY: its official 2026 hours list Tuesday and Wednesday as CLOSED. Keeping it visible as a 'not tonight' answer so we don't accidentally drive there hungry.",
    tags: ["Brewery", "Pizza", "CLOSED TUESDAY"],
    foodCategories: ["beer", "pizza"],
    topPick: "Great option another day — closed today",
    menu: "https://thefillingstationmicrobrewery.com/traverse-city-restaurant/",
    map: "https://www.google.com/maps/search/?api=1&query=The+Filling+Station+Microbrewery+Traverse+City+MI"
  },
  {
    town: "suttons-bay",
    name: "V.I. Grill",
    kind: "meal",
    price: "$13–18 burgers",
    type: "Casual grill • burgers • sandwiches • local taps",
    note: "Current Toast menu passes the burger test cleanly: build-your-own fresh-ground burger $13 and the loaded Villager Burger $18, both with fries, tots or kettle chips.",
    tags: ["Burgers", "Casual", "Local beer", "Budget fit"],
    foodCategories: ["burgers", "sandwiches", "beer"],
    topPick: "Villager Burger $18",
    menu: "https://www.toasttab.com/local/order/v-i-grill",
    map: "https://www.google.com/maps/search/?api=1&query=VI+Grill+Suttons+Bay+MI"
  },
  {
    town: "suttons-bay",
    name: "Hop Lot Brewing Co.",
    kind: "meal",
    price: "$13–16 sandwiches",
    type: "Outdoor brewery/beer garden • smoked meats • sandwiches",
    note: "This is the Suttons Bay brewery-food winner. Recent menu pricing: pulled pork $13, smoked brisket $14, grilled cheese + tomato basil $14, fried chicken $15 and the Drewben $16.",
    tags: ["Brewery", "Sandwiches", "Beer garden", "Budget fit"],
    foodCategories: ["beer", "sandwiches"],
    topPick: "Smoked Brisket Sandwich $14",
    menu: "https://hoplotbrewing.com/menu/",
    map: "https://www.google.com/maps/search/?api=1&query=Hop+Lot+Brewing+Company+Suttons+Bay+MI"
  }
);

townNames["traverse-city"] = "Traverse City";
townNames["suttons-bay"] = "Suttons Bay";

const foodHeading = document.querySelector("#food .section-heading > div");
if (foodHeading) {
  foodHeading.innerHTML = `
    <p class="eyebrow eyebrow--dark">FOOD • TODAY'S DINNER SHORTLIST</p>
    <h2>Casual dinner without accidentally ordering a mortgage.</h2>
    <p class="section-copy">Today we're prioritizing Traverse City and Suttons Bay. Price rule: if an ordinary burger or sandwich breaks $20, it does not make the shortlist. Brewery does not automatically mean 'three fries artfully leaning on a $24 burger.'</p>
  `;
}

const townNav = document.getElementById("foodTownNav");
if (townNav && !townNav.querySelector('[data-food-town="suttons-bay"]')) {
  const tcButton = townNav.querySelector('[data-food-town="traverse-city"]');
  const button = document.createElement("button");
  button.className = "town-chip";
  button.dataset.foodTown = "suttons-bay";
  button.textContent = "Suttons Bay";
  if (tcButton) tcButton.insertAdjacentElement("afterend", button);
  else townNav.appendChild(button);
}

activeFoodTown = "traverse-city";
activeFoodFilter = "all";
document.querySelectorAll("[data-food-town]").forEach(item => item.classList.toggle("is-active", item.dataset.foodTown === activeFoodTown));
document.querySelectorAll("[data-food-filter]").forEach(item => item.classList.toggle("is-active", item.dataset.foodFilter === activeFoodFilter));
renderFood();
