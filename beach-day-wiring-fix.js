// August 26 shopping + Boardman River Nature Center takeover.
// Loaded after the beach-day takeover so today's shopping plan wins without touching Food or Porter Quest data.
(() => {
  if (!document.getElementById('shopping-day-upgrade-css')) {
    const shopStyles = document.createElement('link');
    shopStyles.id = 'shopping-day-upgrade-css';
    shopStyles.rel = 'stylesheet';
    shopStyles.href = 'shopping-day-upgrade.css?v=20260826-1';
    document.head.appendChild(shopStyles);
  }

  const downtownStores = [
    {
      name: "Rocket Fizz Traverse City",
      icon: "🍭",
      tag: "FRONT STREET • CANDY + WEIRD SODA",
      category: "treats",
      address: "111B E Front St, Traverse City, MI 49684",
      description: "A wall-to-wall sugar detour packed with retro candy, international sweets, novelty treats and the kind of bizarre bottled sodas that turn shopping into a dare.",
      website: "https://rocketfizz.com/",
      info: "https://www.traversecity.com/listings/rocket-fizz-traverse-city/3588/"
    },
    {
      name: "Great Lakes Bath & Body",
      icon: "🧼",
      tag: "FRONT STREET • BODY CARE",
      category: "gifts",
      address: "110 E Front St, Traverse City, MI 49684",
      description: "Handcrafted soaps, lotions, body butters, bath salts and Michigan-inspired scents. An easy stop for small gifts that are useful instead of becoming vacation shelf clutter.",
      website: "https://greatlakesbathandbody.com/"
    },
    {
      name: "Doug Murdick's Fudge",
      icon: "🍫",
      tag: "FRONT STREET • FUDGE",
      category: "treats",
      address: "116 E Front St, Traverse City, MI 49684",
      description: "A Traverse City institution making fudge in copper kettles and working it on marble tables since 1964. You can watch it being made, then make several deeply serious flavor decisions.",
      website: "https://www.murdicksfudge.com/"
    },
    {
      name: "M22",
      icon: "🌊",
      tag: "FRONT STREET • UP NORTH APPAREL",
      category: "michigan",
      address: "125 E Front St, Traverse City, MI 49684",
      description: "The polished Northern Michigan lifestyle shop for M22-logo apparel, hats, accessories and gifts. Very 'we went Up North and have the sweatshirt to prove it.'",
      website: "https://m22.com/"
    },
    {
      name: "On The Rocks",
      icon: "💎",
      tag: "FRONT STREET • ROCKS + FOSSILS",
      category: "curiosities",
      address: "139 E Front St, Traverse City, MI 49684",
      description: "Family-owned jewelry, minerals, fossils and housewares with lots of one-of-a-kind pieces. This is the stop for sparkly geology, interesting stones and things that look like they belong in a tiny museum cabinet.",
      website: "https://www.ontherockstc.com/"
    },
    {
      name: "Nifty Things!",
      icon: "✨",
      tag: "FRONT STREET • GIFTS + JEWELRY",
      category: "gifts",
      address: "143 E Front St, Traverse City, MI 49684",
      description: "This is the mystery 143 E Front Street shop from the list. It is a very browseable mix of jewelry, snarky gifts, pet things, kitchen goodies, lake-themed pieces and souvenirs you did not know existed five minutes ago.",
      website: "https://niftythingsonline.com/"
    },
    {
      name: "Glitz & Spurs",
      icon: "👢",
      tag: "FRONT STREET • BOUTIQUE",
      category: "style",
      address: "203 E Front St, Traverse City, MI 49684",
      description: "A fashion-forward boutique that grew out of a traveling horse-show shop. Expect playful women's clothing, denim, dresses, accessories and a little Western personality without becoming a costume shop.",
      website: "https://glitzandspurs.com/"
    },
    {
      name: "Critters Clothing & Souvenirs",
      icon: "🧢",
      tag: "FRONT STREET • SOUVENIRS",
      category: "michigan",
      address: "208 E Front St, Traverse City, MI 49684",
      description: "The straightforward souvenir stop: Traverse City and Up North shirts, sweatshirts, mugs, cups and vacation keepsakes. Useful when someone suddenly remembers they promised to bring somebody a Michigan thing.",
      website: "https://www.traversecity.com/listings/critters-clothing-%26-souvenirs/1066/"
    },
    {
      name: "Identity Resort Wear",
      icon: "👕",
      tag: "FRONT STREET • RESORT WEAR",
      category: "style",
      address: "212 E Front St, Traverse City, MI 49684",
      description: "Casual resort clothing and Traverse City vacation wear right in the main Front Street cluster. Good for tees, layers and easy Up North clothes rather than precious boutique fashion.",
      website: "https://identitytc.com/",
      info: "https://www.traversecity.com/listings/identity-resort-wear/1071/"
    },
    {
      name: "Higher Art Gallery",
      icon: "🎨",
      tag: "FRONT STREET • ART GALLERY",
      category: "art",
      address: "219 E Front St, Traverse City, MI 49684",
      description: "A woman-owned contemporary gallery showing emerging and established artists, with a strong focus on women artists. A better stop for actual artwork and ceramics than another rack of tourist tees.",
      website: "https://www.higherartgallery.com/"
    },
    {
      name: "Backcountry North",
      icon: "🥾",
      tag: "FRONT STREET • OUTDOOR GEAR",
      category: "outdoors",
      address: "227 E Front St, Traverse City, MI 49684",
      description: "Locally owned outdoor shop with apparel, footwear, travel gear and hiking/camping equipment. The downtown store is dog-friendly and especially good for Patagonia-style layers, packs and practical vacation gear.",
      website: "https://backcountrynorth.com/"
    },
    {
      name: "Mr. Bill's Shirt Company",
      icon: "👚",
      tag: "FRONT STREET • SHIRTS + SOUVENIRS",
      category: "michigan",
      address: "228 E Front St, Traverse City, MI 49684",
      description: "A classic downtown T-shirt and souvenir shop with Traverse City graphics and custom-printed apparel. This is the uncomplicated 'I want a shirt from the place I visited' stop.",
      website: "https://www.traversecity.com/listings/mr-bills-shirt-company/567/"
    },
    {
      name: "Becky Thatcher Designs",
      icon: "💍",
      tag: "FRONT STREET • ART JEWELRY",
      category: "art",
      address: "234 E Front St, Traverse City, MI 49684",
      description: "Distinctive handmade fine jewelry built around stones and natural textures, including Petoskey stones, beach stones, fossils and rarer gemstones. More wearable art than souvenir counter.",
      website: "https://www.beckythatcherdesigns.com/"
    },
    {
      name: "Orvis Streamside Shop",
      icon: "🎣",
      tag: "FRONT STREET • FLY FISHING + OUTDOORS",
      category: "outdoors",
      address: "300 E Front St, Traverse City, MI 49684",
      description: "A specialty outdoor stop with fly-fishing gear plus clothing and accessories from outdoor brands. Worth a browse for anyone who likes rivers, fishing or technical outdoorsy things more than decorative shopping.",
      website: "https://www.orvis.com/",
      info: "https://www.traversecity.com/listings/orvis-streamside-shop/1034/"
    },
    {
      name: "Lakes and Grapes",
      icon: "🍇",
      tag: "FRONT STREET • GREAT LAKES STYLE",
      category: "style",
      address: "326 E Front St, Traverse City, MI 49684",
      description: "Traverse City-designed Great Lakes lifestyle apparel with lake-house-meets-wine-country energy. Tees, hoodies, hats, home goods and gifts that feel more designed than generic souvenir-shop merch.",
      website: "https://lakesandgrapes.com/"
    },
    {
      name: "Eugene's Record Co-op",
      icon: "💿",
      tag: "FRONT STREET • RECORD STORE • OPENS 11",
      category: "records",
      address: "346 E Front St Ste 6, Traverse City, MI 49684",
      description: "The downtown vinyl mission: records, turntables and music gear in a small local co-op. This is a must-hit if the morning needs crate digging, but it opens at 11 AM, so let the earlier shops warm up the shopping muscles first.",
      website: "https://www.eugenesrecordcoop.com/"
    },
    {
      name: "Obscura Jewelry and Curiosities",
      icon: "🕯️",
      tag: "EAST FRONT • CURIOUS + GOTHIC",
      category: "curiosities",
      address: "441 E Front St, Traverse City, MI 49684",
      description: "The oddball jewel of the list: a dark, moody mix of jewelry, local artisan work, curiosities, candles, books, perfumes and eclectic decor. Very strong 'I found a strange little shop and disappeared into it' potential.",
      website: "https://www.traversecity.com/listings/obscura-jewelry-and-curiosities/7162/"
    },
    {
      name: "I'm Planty AF",
      icon: "🪴",
      tag: "CASS STREET • PLANTS",
      category: "curiosities",
      address: "122 Cass St, Traverse City, MI 49684",
      description: "A gloriously unserious plant shop with common and rare houseplants, terrarium supplies, classes and planty gifts. A prime Parker trap, in the best possible way.",
      website: "https://implantyaf.com/"
    },
    {
      name: "Enjoy Michigan",
      icon: "✋",
      tag: "UNION STREET • MICHIGAN GOODS",
      category: "michigan",
      address: "118 S Union St, Traverse City, MI 49684",
      description: "Original Michigan apparel mixed with curated Michigan-made goods and a retro state-pride feel. Good if you want something local without defaulting to the exact same tourist logo every other person is wearing.",
      website: "https://www.enjoy-michigan.com/"
    },
    {
      name: "My Secret Stash",
      icon: "🪩",
      tag: "UNION STREET • MICHIGAN MAKERS",
      category: "gifts",
      address: "124 S Union St, Traverse City, MI 49684",
      description: "A giant dose of local-maker energy with work from 100+ Michigan designers, artists and crafters. Think pottery, art, jewelry, funny gifts, Michigan goods and the sort of eclectic browsing that can accidentally eat 45 minutes.",
      website: "https://www.mysecretstash.com/"
    },
    {
      name: "The Cheese Lady",
      icon: "🧀",
      tag: "WEST FRONT • CHEESE • LONGER WALK",
      category: "treats",
      address: "600 W Front St, Traverse City, MI 49684",
      description: "A specialty cheese shop with a huge rotating selection of artisan cheeses from around the world, plus crackers, preserves and other accompaniments. Samples and staff guidance make this much more fun than buying cheese has any right to be.",
      website: "https://traversecity.thecheeselady.net/"
    },
    {
      name: "Candle Factory & Home Elements",
      icon: "🕯️",
      tag: "GRANDVIEW • CANDLES + HOME",
      category: "gifts",
      address: "301 W Grandview Pkwy, Traverse City, MI 49684",
      description: "A long-running waterfront-area candle shop with soy candles plus tabletop, kitchen textiles and home pieces. It sits outside the tight Front Street core, but makes sense as a west-end add-on.",
      website: "https://soycandles.com/"
    },
    {
      name: "Nawbin Beads and Artifacts",
      icon: "🪨",
      tag: "EAST FRONT • BEADS + ARTIFACTS",
      category: "curiosities",
      address: "925 E Front St, Traverse City, MI 49686",
      description: "A 120-year-old storefront packed with beads, Petoskey-stone pieces, fossils, meteorites, artifacts, world art, pendants and assorted strange treasures. This is farther east than the main crawl, so save it for a short drive if the curiosity meter is still hungry.",
      website: "https://nawbin.com/"
    },
    {
      name: "Traverse City Candle Co.",
      icon: "🔥",
      tag: "DRIVE STOP • LOCAL SOY CANDLES",
      category: "gifts",
      address: "1432 Richman Ct, Traverse City, MI 49696",
      description: "Local 100% soy candles built around Northern Michigan memories and scents, including North Bar, Leland Blue and Dune Climb. This address is well outside the downtown walk, so treat it as a drive stop rather than part of the Front Street loop.",
      website: "https://www.traversecitycandleco.com/",
      info: "https://www.traversecity.com/listings/traverse-city-candle-co/2353/"
    },
    {
      name: "TOP Comics",
      icon: "💥",
      tag: "MUST HIT • DRIVE STOP • WED 10–7",
      category: "comics",
      address: "966 W South Airport Rd Suite B, Traverse City, MI 49686",
      description: "Northern Michigan's long-running comic and collectibles shop, with new single issues, vintage comics, collected editions, posters, collecting supplies and figures. Important: it moved off 8th Street years ago, so this is the current South Airport Road address.",
      website: "https://www.thetopcomics.com/"
    }
  ];

  const commonsStores = [
    {
      name: "Landmark Books",
      icon: "📚",
      tag: "COMMONS • USED + RARE BOOKS",
      category: "books",
      description: "A used bookstore with classic literature, poetry, modern fiction and Michigania, plus autographed and rare books and vintage typewriters. Excellent rummage potential.",
      website: "https://landmarkbookstc.com/"
    },
    {
      name: "Underground Toys",
      icon: "👾",
      tag: "COMMONS • TOYS + GAMES",
      category: "comics",
      description: "A playful shop of unusual toys, games, dolls, books and gifts with an emphasis on independent, sustainable and STEAM-focused brands. This feels like the Commons stop most likely to keep Porter browsing.",
      website: "https://www.underground.toys/"
    },
    {
      name: "Moonstruck Gardens",
      icon: "🌙",
      tag: "COMMONS • STICKERS + LITTLE THINGS",
      category: "gifts",
      description: "A tiny treasure cave of stickers, pins, stationery and other little goodies tucked into every corner. Very high browse-to-square-foot ratio.",
      website: "https://www.moonstruckgardens.net/"
    },
    {
      name: "Sanctuary Goods",
      icon: "🌿",
      tag: "COMMONS • 150-ish MAKERS",
      category: "art",
      description: "Nearly 150 makers under one roof, with jewelry, accessories, fine art, home decor and giftable lifestyle goods. One of the strongest general-purpose browsing stops in the Commons.",
      website: "https://www.sanctuarygoods.com/"
    },
    {
      name: "Crystal Lake Alpaca Boutique",
      icon: "🦙",
      tag: "COMMONS • ALPACA EVERYTHING",
      category: "style",
      description: "Soft alpaca hats, mittens, scarves, sweaters, stuffed animals and famously cozy socks. Basically a store engineered to make everyone touch merchandise and say 'okay, that IS really soft.'",
      website: "https://www.crystallakealpacaboutique.com/"
    },
    {
      name: "High Five Threads",
      icon: "✋",
      tag: "COMMONS • MICHIGAN APPAREL",
      category: "michigan",
      description: "Michigan-designed apparel built around state pride and the mitten shape, with shirts and accessories that feel more graphic-design shop than souvenir rack.",
      website: "https://www.highfivethreads.com/"
    },
    {
      name: "The Haberdashery",
      icon: "🥃",
      tag: "COMMONS • GIFTS FOR HIM",
      category: "gifts",
      description: "A deliberately guy-focused gift shop with local artwork, hand-carved wildlife, bar accessories, bookends and interesting stones. Good when the group has hit its lifetime limit of scented lotions.",
      website: "https://www.facebook.com/thehaberdasherytc/"
    },
    {
      name: "Haven: A Clothing Market",
      icon: "👗",
      tag: "COMMONS • MODERN CLOTHING",
      category: "style",
      description: "Modern everyday clothing with clean lines and fresh, wearable styles. A more contemporary boutique option inside the historic-building labyrinth.",
      website: "https://havenclothingtc.com/"
    },
    {
      name: "Silver Fox Jewelry",
      icon: "🦊",
      tag: "COMMONS • JEWELRY",
      category: "art",
      description: "Sterling silver, gold and semi-precious gemstone jewelry, with hand-selected pieces that lean timeless and wearable rather than novelty souvenir.",
      website: "https://www.silverfoxjewelrytc.com/"
    },
    {
      name: "The Refillery Traverse City",
      icon: "♻️",
      tag: "COMMONS • REFILL + SUSTAINABLE",
      category: "gifts",
      description: "Refillable personal-care and household goods built around lower-waste shopping. Bring a container or grab one there and refill instead of buying another pile of plastic bottles.",
      website: "https://refillerytc.com/"
    },
    {
      name: "Bohmey Lifestyle Boutique",
      icon: "🏡",
      tag: "COMMONS • HOME + BEAUTY",
      category: "style",
      description: "A curated boutique of home decor, beauty products and accessories chosen with quality and sustainability in mind. Strong 'pretty things I did not plan to buy' energy.",
      website: "https://bohmeyboutique.com/"
    },
    {
      name: "Premier Floral Design & Gift Emporium",
      icon: "💐",
      tag: "COMMONS • FLORAL + HOME GIFTS",
      category: "gifts",
      description: "More than flowers: cards, journals, home decor and unusual gift items sit alongside the floral side of the business. A good quiet little browse stop in the Mercato.",
      website: "https://www.facebook.com/PremierFloralDesign/"
    },
    {
      name: "Baby Dill",
      icon: "🧸",
      tag: "COMMONS • BABY + FAMILY GIFTS",
      category: "gifts",
      description: "Clean and natural baby and mama essentials, perinatal items and gifts for babies, aunties and grandparents. Niche unless someone needs a baby gift, very useful if they do.",
      website: "https://www.instagram.com/babydill_tc/"
    },
    {
      name: "Sweet Asylum",
      icon: "🍬",
      tag: "COMMONS • CANDY • INSIDE B50",
      category: "treats",
      description: "A sugar stash inside B50 The Village Store with taffy, Jelly Belly, chocolates, nostalgic candy and brightly colored things designed to undo everyone's sensible-shopping intentions.",
      website: "https://www.thevillagetc.com/shop"
    },
    {
      name: "Laughing Fish Gallery & Art Cafe",
      icon: "🐟",
      tag: "COMMONS • CLOSED WEDNESDAY",
      category: "art",
      closedToday: true,
      description: "A bright mother-daughter art gallery plus a drop-in art café where visitors can paint handmade wooden projects. It looks fun, but it is closed Tuesday and Wednesday, so today it is officially a window-peeking-only option.",
      website: "https://www.laughingfishmi.com/"
    },
    {
      name: "B50 The Village Store",
      icon: "🏛️",
      tag: "COMMONS • VILLAGE SHOP + HISTORY",
      category: "michigan",
      description: "The Commons home-base shop for Village souvenirs, historical artifacts, tour information and tickets, T-shirts, glassware, books, snacks and drinks.",
      website: "https://www.facebook.com/B50thevillagestore/"
    }
  ];

  const commonsAddress = "The Village at Grand Traverse Commons, 830 Cottageview Dr, Traverse City, MI 49684";
  const mapUrl = (place) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
  const escapeHtml = (value) => String(value).replace(/[&<>'\"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[char]));

  function updateChrome() {
    const heroEyebrow = document.querySelector('.hero .eyebrow');
    if (heroEyebrow) heroEyebrow.textContent = 'NORTHERN MICHIGAN • AUGUST 26, 2026';

    const heroChips = document.querySelector('.hero__chips');
    if (heroChips) {
      heroChips.innerHTML = `
        <span>🛍️ Front Street shop crawl</span>
        <span>💿 Records + comics</span>
        <span>🏛️ Grand Traverse Commons</span>
        <span>🌿 Boardman River Nature Center</span>
      `;
    }

    const shopTab = document.querySelector('.tab[data-tab="trails"]');
    if (shopTab) shopTab.textContent = 'SHOP HOP';
  }

  function openShopping(filter = 'all') {
    const tab = document.querySelector('.tab[data-tab="trails"]');
    if (tab) tab.click();
    requestAnimationFrame(() => {
      const filterButton = document.querySelector(`[data-shop-filter="${filter}"]`);
      if (filterButton) filterButton.click();
      document.getElementById('trails')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function updateToday() {
    const heading = document.querySelector('#plan .section-heading > div');
    if (heading) {
      heading.innerHTML = `
        <p class="eyebrow eyebrow--dark">TODAY'S LOOSE PLAN</p>
        <h2>Shop first. Trees later.</h2>
      `;
    }
    const status = document.querySelector('#plan .status-pill');
    if (status) status.textContent = 'Nature Center closes at 4 PM';

    const planGrid = document.querySelector('#plan .plan-grid');
    if (planGrid) {
      planGrid.innerHTML = `
        <article class="plan-stop plan-stop--primary">
          <span class="plan-stop__number">1</span>
          <div>
            <p class="plan-stop__time">SHOPPING MORNING • START AROUND 10</p>
            <h3>Front Street is the main event</h3>
            <p>State Street is nearby, but the dense shopping spine is Front Street. Start in the 100–300 blocks and wander east. Most of the list stacks up beautifully on foot.</p>
            <button class="text-link today-shop-link" type="button" data-shop-jump="downtown">Open Downtown store cards →</button>
          </div>
        </article>

        <article class="plan-stop">
          <span class="plan-stop__number">2</span>
          <div>
            <p class="plan-stop__time">11 AM MUST-HIT</p>
            <h3>Eugene's Record Co-op</h3>
            <p>Do the early Front Street shops first, then aim for Eugene's when it opens at 11. It is at 346 E Front, so it fits naturally near the east end of the downtown crawl.</p>
            <div class="button-row">
              <a class="mini-button" href="https://www.eugenesrecordcoop.com/" target="_blank" rel="noopener">Website</a>
              <a class="mini-button" href="${mapUrl("Eugene's Record Co-op, 346 E Front St Ste 6, Traverse City, MI")}" target="_blank" rel="noopener">Map it</a>
            </div>
          </div>
        </article>

        <article class="plan-stop plan-stop--choice">
          <span class="plan-stop__number">3</span>
          <div>
            <p class="plan-stop__time">COMIC BOOK DETOUR</p>
            <h3>TOP Comics, but not on 8th Street anymore</h3>
            <p>TOP moved to 966 W South Airport Rd Suite B. It is a drive stop, not part of the downtown walk. Wednesday hours are 10 AM–7 PM, and yes, they have new issues, vintage comics, collected editions, figures and supplies.</p>
            <div class="button-row">
              <a class="mini-button" href="https://www.thetopcomics.com/" target="_blank" rel="noopener">Website</a>
              <a class="mini-button" href="${mapUrl("Top Comics, 966 W South Airport Rd Suite B, Traverse City, MI")}" target="_blank" rel="noopener">Map it</a>
            </div>
          </div>
        </article>

        <article class="plan-stop">
          <span class="plan-stop__number">4</span>
          <div>
            <p class="plan-stop__time">OPTIONAL SECOND SHOPPING CLUSTER</p>
            <h3>Grand Traverse Commons</h3>
            <p>The Mercato is open 10–5 today and gives us an indoor cluster of books, toys, art, Michigan goods, alpaca things, candy and boutiques without moving the car between every shop.</p>
            <button class="text-link today-shop-link" type="button" data-shop-jump="commons">Open Commons store cards →</button>
          </div>
        </article>

        <article class="plan-stop plan-stop--food">
          <span class="plan-stop__number">5</span>
          <div>
            <p class="plan-stop__time">AFTER SHOPPING • HARD STOP BEFORE 4 PM</p>
            <h3>Boardman River Nature Center</h3>
            <p>1450 Cass Rd. The Nature Center is open Tuesday–Friday 10–4, with an interactive interpretive gallery and rotating Michigan nature exhibits at the edge of the 505-acre Natural Education Reserve. There is also a nature playscape outside.</p>
            <div class="button-row">
              <a class="mini-button" href="https://www.gtcountymi.gov/facilities/facility/details/Boardman-River-Nature-Center-40" target="_blank" rel="noopener">Nature Center info</a>
              <a class="mini-button" href="${mapUrl("Boardman River Nature Center, 1450 Cass Rd, Traverse City, MI")}" target="_blank" rel="noopener">Map it</a>
            </div>
          </div>
        </article>
      `;
    }

    const quickPicks = document.querySelector('#plan .quick-picks');
    if (quickPicks) {
      quickPicks.innerHTML = `
        <div class="quick-picks__title">
          <p class="eyebrow eyebrow--dark">SHOPPING SHORTCUTS</p>
          <h3>Pick the rabbit hole.</h3>
        </div>
        <button class="mood-card today-shop-link" type="button" data-shop-jump="curiosities"><span class="mood-card__icon">🕯️</span><strong>Weird little treasures</strong><small>Obscura + rocks + plants</small></button>
        <button class="mood-card today-shop-link" type="button" data-shop-jump="records"><span class="mood-card__icon">💿</span><strong>Records</strong><small>Eugene's at 11</small></button>
        <button class="mood-card today-shop-link" type="button" data-shop-jump="comics"><span class="mood-card__icon">💥</span><strong>Comics + toys</strong><small>TOP + Underground Toys</small></button>
        <button class="mood-card today-shop-link" type="button" data-shop-jump="commons"><span class="mood-card__icon">🏛️</span><strong>One-building browsing</strong><small>Grand Traverse Commons</small></button>
      `;
    }

    document.querySelectorAll('.today-shop-link').forEach(button => {
      button.addEventListener('click', () => openShopping(button.dataset.shopJump || 'all'));
    });
  }

  function storeCard(store, area) {
    const address = store.address || commonsAddress;
    const siteLabel = store.website.includes('traversecity.com') || store.website.includes('thevillagetc.com') ? 'Shop info' : 'Website';
    const infoLink = store.info && store.info !== store.website
      ? `<a class="shop-card__link shop-card__link--quiet" href="${escapeHtml(store.info)}" target="_blank" rel="noopener">Local listing</a>`
      : '';
    const closed = store.closedToday ? '<span class="shop-card__closed">Closed today</span>' : '';

    return `
      <article class="shop-card ${store.closedToday ? 'shop-card--closed' : ''}" data-shop-category="${escapeHtml(store.category)}" data-shop-area="${escapeHtml(area)}">
        <div class="shop-card__topline">
          <span class="shop-card__icon" aria-hidden="true">${store.icon}</span>
          <span class="shop-card__tag">${escapeHtml(store.tag)}</span>
        </div>
        <h3>${escapeHtml(store.name)}</h3>
        ${closed}
        <p class="shop-card__description">${escapeHtml(store.description)}</p>
        <p class="shop-card__address">📍 ${escapeHtml(address)}</p>
        <div class="shop-card__actions">
          <a class="shop-card__link" href="${escapeHtml(store.website)}" target="_blank" rel="noopener">${siteLabel}</a>
          <a class="shop-card__link" href="${mapUrl(`${store.name}, ${address}`)}" target="_blank" rel="noopener">Map it</a>
          ${infoLink}
        </div>
      </article>
    `;
  }

  function setupShoppingPanel() {
    const panel = document.getElementById('trails');
    if (!panel) return;

    panel.innerHTML = `
      <div class="section-heading section-heading--stack-mobile shop-hop-heading">
        <div>
          <p class="eyebrow eyebrow--dark">SHOP HOP</p>
          <h2>Front Street treasure hunt + Commons wandering</h2>
          <p class="section-copy">The densest downtown shopping is the Front Street core, especially between Union and Boardman. Cards are split into the two useful buckets for today. The few stores outside the walkable core are clearly marked as drive or longer-walk stops.</p>
        </div>
        <div class="resource-buttons">
          <a class="outline-button" href="https://www.downtowntc.com/explore/shopping.html" target="_blank" rel="noopener">Downtown shopping directory</a>
          <a class="outline-button" href="https://www.thevillagetc.com/shop" target="_blank" rel="noopener">Commons shop directory</a>
        </div>
      </div>

      <div class="shop-route-note">
        <strong>🧭 Easiest downtown attack:</strong>
        <span>Start around Union / the 100 block of E Front, work east through the 200s and 300s, hit Eugene's at 11, then decide whether Obscura at 441 E Front is the perfect finale. Cheese Lady, Nawbin, Candle Factory, Traverse City Candle Co. and TOP Comics are outside that tight core.</span>
      </div>

      <div class="filter-row shop-filters" id="shopFilters" aria-label="Filter store cards">
        <button class="filter-chip is-active" type="button" data-shop-filter="all">Everything</button>
        <button class="filter-chip" type="button" data-shop-filter="downtown">🏙️ Downtown</button>
        <button class="filter-chip" type="button" data-shop-filter="commons">🏛️ Commons</button>
        <button class="filter-chip" type="button" data-shop-filter="curiosities">🕯️ Weird + wonderful</button>
        <button class="filter-chip" type="button" data-shop-filter="records">💿 Records</button>
        <button class="filter-chip" type="button" data-shop-filter="comics">💥 Comics + toys</button>
        <button class="filter-chip" type="button" data-shop-filter="art">🎨 Art + jewelry</button>
        <button class="filter-chip" type="button" data-shop-filter="michigan">✋ Michigan stuff</button>
        <button class="filter-chip" type="button" data-shop-filter="treats">🍬 Edible chaos</button>
      </div>

      <section class="shop-bucket" data-shop-bucket="downtown">
        <div class="shop-bucket__heading">
          <div>
            <p class="eyebrow eyebrow--dark">BUCKET ONE</p>
            <h3>Downtown Traverse City</h3>
            <p>Front Street is doing most of the heavy lifting here, with Cass and Union side quests plus a few clearly labeled drive stops.</p>
          </div>
          <span class="shop-count">${downtownStores.length} stops</span>
        </div>
        <div class="shop-grid">${downtownStores.map(store => storeCard(store, 'downtown')).join('')}</div>
      </section>

      <section class="shop-bucket" data-shop-bucket="commons">
        <div class="shop-bucket__heading">
          <div>
            <p class="eyebrow eyebrow--dark">BUCKET TWO</p>
            <h3>Grand Traverse Commons</h3>
            <p>The Mercato is open 10–5 today. Most of these are clustered indoors, which makes this the low-effort option when nobody wants to keep re-parking.</p>
          </div>
          <span class="shop-count">${commonsStores.length} shops</span>
        </div>
        <div class="shop-grid">${commonsStores.map(store => storeCard(store, 'commons')).join('')}</div>
      </section>
    `;

    const buttons = [...panel.querySelectorAll('[data-shop-filter]')];
    const cards = [...panel.querySelectorAll('.shop-card')];
    const buckets = [...panel.querySelectorAll('.shop-bucket')];

    function applyFilter(filter) {
      buttons.forEach(button => button.classList.toggle('is-active', button.dataset.shopFilter === filter));

      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.shopArea === filter || card.dataset.shopCategory === filter;
        card.hidden = !matches;
      });

      buckets.forEach(bucket => {
        const visibleCards = [...bucket.querySelectorAll('.shop-card')].some(card => !card.hidden);
        bucket.hidden = !visibleCards;
      });
    }

    buttons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.shopFilter)));
    applyFilter('all');
  }

  updateChrome();
  updateToday();
  setupShoppingPanel();
})();

// Preserve the existing delegated tab behavior for any legacy TODAY links.
document.addEventListener('click', event => {
  const jump = event.target.closest('#plan .jump-tab');
  if (!jump || typeof activateTab !== 'function') return;
  activateTab(jump.dataset.targetTab);
});
