const trailData = [
  {
    id: "pierce-stocking",
    name: "Pierce Stocking Scenic Drive",
    image: "assets/places/Pierce-stocking.jpeg",
    category: ["drive", "short"],
    badge: "🚗 DRIVE + OVERLOOKS",
    front: "7.4-mile one-way scenic loop • allow 1.5–2 hrs",
    how: "Drive with short optional walks",
    distance: "7.4-mile one-way driving loop",
    time: "About 1.5–2 hours if you stop often",
    terrain: "Mostly car. Overlook paths vary from paved/boardwalk to short sandy walks.",
    water: "Big Lake Michigan views, but this is not a swimming stop.",
    doHere: "Scenery, overlooks, photos, picnic stops, understand the dunes without committing to a hike.",
    take: "Best first stop when the group wants maximum Sleeping Bear with minimum negotiation.",
    map: "https://www.google.com/maps/search/?api=1&query=Pierce+Stocking+Scenic+Drive+Michigan"
  },
  {
    id: "dune-climb",
    name: "Dune Climb",
    image: "assets/places/dune-climb.jpeg",
    category: ["short", "hike"],
    badge: "🏜️ SAND • AS MUCH AS YOU WANT",
    front: "Climb the first dune and turn around whenever you want",
    how: "Walk/climb",
    distance: "Anything from a few hundred yards to 3.5 miles round trip",
    time: "10 minutes to play on the first dune; 2–4 hours if going all the way to Lake Michigan",
    terrain: "Loose, exposed sand. No shade on the long route.",
    water: "Lake Michigan is about 1.75 miles away over repeated dunes, not 'just over the next one.'",
    doHere: "Climb, run down, take photos, play in sand. The full lake hike is a completely separate level of commitment.",
    take: "Treat the first dune as the attraction. Nobody needs to accidentally enlist in the sand army.",
    map: "https://www.google.com/maps/search/?api=1&query=Dune+Climb+Sleeping+Bear+Dunes"
  },
  {
    id: "glen-haven",
    name: "Glen Haven",
    image: "assets/places/Glen-Haven.jpeg",
    category: ["short", "water"],
    badge: "⚓ HISTORY + BEACH",
    front: "Museum, historic village, boats and Lake Michigan",
    how: "Drive there, then wander",
    distance: "Choose-your-own walking around the village",
    time: "30 minutes to 2 hours",
    terrain: "Flat village paths, buildings and beach",
    water: "Lake Michigan beach is right there.",
    doHere: "Maritime Museum, old rescue boats, historic buildings, beach, photos, low-stakes exploring.",
    take: "Excellent reset stop when the group needs something besides 'another trail.'",
    map: "https://www.google.com/maps/search/?api=1&query=Glen+Haven+Historic+Village+Michigan"
  },
  {
    id: "pyramid-point",
    name: "Pyramid Point",
    image: "assets/places/Pyramid-point-1.jpg",
    category: ["short", "hike"],
    badge: "🥾 SHORT HIKE • BIG VIEW",
    front: "1.2 miles round trip to the overlook • about 45–60 min",
    how: "Walk",
    distance: "About 1.2 miles round trip to the overlook; longer if you do the full loop",
    time: "About 45–60 minutes for the overlook mission",
    terrain: "Mostly wooded trail with hills, then sand near the bluff.",
    water: "You see Lake Michigan from high above it. Do not use the bluff as a beach shortcut.",
    doHere: "Short hike, Manitou Island views, photos, a clear destination and then back to the car.",
    take: "Probably the best actual hike when you want a dramatic payoff without donating half the day.",
    map: "https://www.google.com/maps/search/?api=1&query=Pyramid+Point+Trail+Michigan"
  },
  {
    id: "empire-bluff",
    name: "Empire Bluff Trail",
    image: "assets/places/Empire-Bluff-1.jpeg",
    category: ["short", "hike"],
    badge: "🥾 WOODS → CLASSIC VIEW",
    front: "1.5 miles round trip • about 1 hour",
    how: "Walk",
    distance: "About 1.5 miles round trip",
    time: "Roughly 1 hour",
    terrain: "Wooded and rolling with some climbs; ends at a bluff overlook.",
    water: "Lake Michigan is far below. This is a view, not water access.",
    doHere: "Hike through woods, reach the boardwalk overlook, see Sleeping Bear Dune to the north.",
    take: "This is my strongest candidate for Blake's mystery 'we hiked a little and saw the dune' memory.",
    map: "https://www.google.com/maps/search/?api=1&query=Empire+Bluff+Trail+Michigan"
  },
  {
    id: "north-bar-lake",
    name: "North Bar Lake",
    image: "assets/places/North-bar-lake.jpeg",
    category: ["short", "water"],
    badge: "🏖️ SWIM + EASY WALK",
    front: "Short flat walk from parking • inland lake + Lake Michigan",
    how: "Drive, short walk, swim",
    distance: "About 760 feet from parking to North Bar Lake",
    time: "As long as you want to beach",
    terrain: "Mostly flat path and sand near the water.",
    water: "Immediate North Bar Lake access; Lake Michigan is just across the narrow dunes.",
    doHere: "Swim, beach, picnic, walk between the warmer inland lake and Lake Michigan.",
    take: "If everyone says they want 'the lake' more than 'a hike,' stop pretending and come here.",
    map: "https://www.google.com/maps/search/?api=1&query=North+Bar+Lake+Michigan"
  },
  {
    id: "cottonwood",
    name: "Cottonwood Trail",
    image: "assets/places/Cottonwood.jpeg",
    category: ["short", "hike"],
    badge: "🏜️ DUNE ECOSYSTEM",
    front: "About 1.5 miles • sandy and exposed",
    how: "Walk",
    distance: "About 1.5 miles",
    time: "Around 1 hour",
    terrain: "Mostly open sand and dune habitat. More work than the mileage sounds like.",
    water: "Lake views, but no swimming access from the trail.",
    doHere: "See dune ecology up close and use the interpretive stops as a built-in scavenger hunt.",
    take: "Interesting if you actually want dunes. Less ideal if somebody has already declared sand their mortal enemy.",
    map: "https://www.google.com/maps/search/?api=1&query=Cottonwood+Trail+Sleeping+Bear+Dunes"
  },
  {
    id: "old-indian",
    name: "Old Indian Trail",
    image: "assets/places/Old-Indian.jpeg",
    category: ["hike", "water"],
    badge: "🌲 WOODS + BEACH SPUR",
    front: "About 2.3 miles of loops • wooded dunes",
    how: "Walk",
    distance: "Roughly 2.3 miles depending on the loop; includes a short spur toward Lake Michigan",
    time: "About 1–1.5 hours",
    terrain: "Wooded ancient dunes with rolling terrain.",
    water: "A short spur from the loop reaches Lake Michigan.",
    doHere: "Quiet forest hike with an actual beach payoff.",
    take: "A better choice for someone who wants woods and a destination instead of pure exposed-dune trudging.",
    map: "https://www.google.com/maps/search/?api=1&query=Old+Indian+Trail+Sleeping+Bear+Dunes"
  },
  {
    id: "sleeping-bear-point",
    name: "Sleeping Bear Point Trail",
    image: "assets/places/Sleeping-bear-pointe.jpeg",
    category: ["hike", "water"],
    badge: "🏜️ DUNES + GHOST FOREST",
    front: "2.8-mile loop • sand, woods and lake views",
    how: "Walk",
    distance: "About 2.8-mile loop",
    time: "About 1.5–2 hours",
    terrain: "Open dunes mixed with wooded sections; sand makes it harder than a normal 2.8 miles.",
    water: "A spur can take you toward Lake Michigan, roughly under a mile from parking depending on route.",
    doHere: "Dunes, ghost forest, lake views, varied scenery.",
    take: "One of the best 'little bit of everything' trails, but still a real sandy hike.",
    map: "https://www.google.com/maps/search/?api=1&query=Sleeping+Bear+Point+Trail+Michigan"
  },
  {
    id: "good-harbor-bay",
    name: "Good Harbor Bay Trail",
    image: "assets/places/Good-Harbor-Bay.jpeg",
    category: ["short", "water"],
    badge: "😌 FLAT + BEACHY",
    front: "About 2.8 miles • one of the flatter options",
    how: "Walk or just use the beach access",
    distance: "About 2.8 miles for the trail",
    time: "1–1.5 hours for the trail; shorter if you just beach",
    terrain: "Mostly flat, moving through dunes, woods and wetlands.",
    water: "Beach access is near the beginning, so the water does not require finishing the hike.",
    doHere: "Easy woodland walk, picnic, beach, decompress.",
    take: "Strong option if the family mood says 'nature, but make it less aggressive.'",
    map: "https://www.google.com/maps/search/?api=1&query=Good+Harbor+Bay+Trail+Michigan"
  },
  {
    id: "windy-moraine",
    name: "Windy Moraine Trail",
    image: "assets/places/Wind-moraine.jpeg",
    category: ["short", "hike"],
    badge: "🌲 SHORT WOODS LOOP",
    front: "About 1.5 miles • woods and meadow",
    how: "Walk",
    distance: "About 1.5-mile loop",
    time: "About 1 hour",
    terrain: "Wooded moraine and meadow with hills.",
    water: "Glen Lake overlook rather than water access.",
    doHere: "Quiet hike, interpretive stops and a Glen Lake view.",
    take: "Pleasant and finite, but not the one I'd choose if today only gets one scenic hike.",
    map: "https://www.google.com/maps/search/?api=1&query=Windy+Moraine+Trail+Sleeping+Bear"
  },
  {
    id: "alligator-hill",
    name: "Alligator Hill Trail",
    image: "assets/places/Aligator-Hill.jpeg",
    category: ["hike"],
    badge: "🥾 LONGER WOODS OPTIONS",
    front: "Multiple loops • roughly 3 to 8 miles",
    how: "Walk",
    distance: "About 3–8 miles depending on route",
    time: "1.5 hours to several hours",
    terrain: "Forested and hilly.",
    water: "Lake Michigan and Glen Lake viewpoints; no easy swimming access.",
    doHere: "Longer wooded hike and viewpoints when somebody actually wants mileage.",
    take: "Good trail. Wrong answer if the group is already negotiating whether walking one mile is oppression.",
    map: "https://www.google.com/maps/search/?api=1&query=Alligator+Hill+Trail+Michigan"
  },
  {
    id: "bay-view",
    name: "Bay View Trail",
    image: "assets/places/Bay-view.jpeg",
    category: ["hike"],
    badge: "🌾 FARMS + RIDGE VIEWS",
    front: "Choose loops from about 2.4 miles upward",
    how: "Walk",
    distance: "About 2.4 miles for the farm loop; longer ridge options available",
    time: "1–3+ hours depending on route",
    terrain: "Fields, old farm landscape, forest and ridge sections.",
    water: "Views rather than beach access.",
    doHere: "Historic farm landscape, schoolhouse area, fields and longer scenic walking.",
    take: "Interesting when history and landscape sound better than just another woods trail.",
    map: "https://www.google.com/maps/search/?api=1&query=Bay+View+Trail+Sleeping+Bear+Dunes"
  },
  {
    id: "platte-point",
    name: "Platte Point",
    image: "assets/places/Platte-point.jpeg",
    category: ["short", "water"],
    badge: "🏖️ RIVER MEETS LAKE",
    front: "Drive-up beach area • Platte River + Lake Michigan",
    how: "Drive, beach and wander",
    distance: "Minimal walking unless you choose to explore farther",
    time: "30 minutes to an entire beach afternoon",
    terrain: "Beach sand and river mouth.",
    water: "Immediate water access where the Platte River meets Lake Michigan.",
    doHere: "Beach, swim, picnic, watch paddlers come out of the river.",
    take: "Another excellent 'we are done hiking but still want Sleeping Bear' move.",
    map: "https://www.google.com/maps/search/?api=1&query=Platte+Point+Beach+Michigan"
  }
];

const foodData = [
  // EMPIRE
  {
    town: "empire", name: "Joe's Friendly Tavern", kind: "meal", price: "$10–20",
    type: "American bar & grill • burgers • breakfast",
    note: "Old-school friendly tavern energy. Burgers, sandwiches, breakfast and pub food.",
    tags: ["Burgers", "Breakfast", "Sit-down"],
    menu: "https://www.joesfriendlytavern.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Joe%27s+Friendly+Tavern+Empire+MI"
  },
  {
    town: "empire", name: "Empire Village Inn", kind: "meal", price: "$20–30",
    type: "Family-friendly bar & grill • pizza • sandwiches",
    note: "Pizza, burgers, wraps, craft beer and the much-mentioned Parmesan garlic fries.",
    tags: ["Pizza", "Burgers", "Family"],
    menu: "https://www.empirevillageinn.net/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Empire+Village+Inn+Michigan"
  },
  {
    town: "empire", name: "Little Finger Eatery", kind: "quick", price: "$1–10",
    type: "Sandwiches • wraps • paninis • lunch",
    note: "Small, casual lunch spot inside Tiffany's. Great for a quick sandwich instead of a full sit-down meal.",
    tags: ["Quick", "Sandwiches", "Lunch"],
    menu: "https://www.roostcafeandbistro.com/little-finger-eatery-49630/",
    map: "https://www.google.com/maps/search/?api=1&query=Little+Finger+Eatery+Empire+MI"
  },
  {
    town: "empire", name: "Shipwreck Cafe", kind: "quick", price: "$",
    type: "Grab-and-go sandwiches • soups • salads",
    note: "Fresh-baked buns, sandwiches and easy picnic food. Open year-round; pizza is unavailable this summer.",
    tags: ["Quick", "Sandwiches", "Picnic"],
    menu: "https://shipwreckcafe.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Shipwreck+Cafe+Empire+MI"
  },
  {
    town: "empire", name: "Adriana's Kitchen", kind: "quick", price: "$",
    type: "Seasonal authentic Mexican pop-up at Grocer's Daughter Gelato",
    note: "A newer limited-days option at the Grocer's Daughter Gelato + Sweets shop. Better treated as a fun pop-up than a guaranteed daily restaurant.",
    tags: ["Mexican", "Seasonal", "Pop-up"],
    menu: "https://www.grocersdaughter.com/pages/visit",
    map: "https://www.google.com/maps/search/?api=1&query=Adriana%27s+Kitchen+Empire+MI"
  },
  {
    town: "empire", name: "Grocer's Daughter Chocolate + Gelato", kind: "coffee", price: "$",
    type: "Chocolate • gelato • sweets",
    note: "Two bright green shops in Empire for handcrafted chocolate and gelato. Very respectable reward system.",
    tags: ["Dessert", "Gelato", "Chocolate"],
    menu: "https://www.grocersdaughter.com/pages/visit",
    map: "https://www.google.com/maps/search/?api=1&query=Grocer%27s+Daughter+Chocolate+Empire+MI"
  },

  // GLEN ARBOR
  {
    town: "glen-arbor", name: "River Club Glen Arbor", kind: "meal", price: "$20–30",
    type: "Mexican-inspired bowls, burritos & tacos • mini golf",
    note: "A genuinely useful family option: casual food, outdoor space, mini golf, live music and river views.",
    tags: ["Tacos", "Bowls", "Mini golf"],
    menu: "https://rcglenarbor.com/food-beverage/",
    map: "https://www.google.com/maps/search/?api=1&query=River+Club+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Blu", kind: "meal", price: "$$$$",
    type: "Fine dining • modern American • lake views",
    note: "The splurge. Daily-changing chef menu, serious food and panoramic Sleeping Bear Bay views.",
    tags: ["Fine dining", "Dinner", "Reservations"],
    menu: "https://www.glenarborblu.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Blu+Glen+Arbor+MI"
  },
  {
    town: "glen-arbor", name: "Cherry Public House", kind: "meal", price: "$20–30",
    type: "Pub food • burgers • cherry-inspired dishes",
    note: "Cherry Republic's restaurant with burgers, whitefish chowder, salads, kids food, pie and plenty of cherry things.",
    tags: ["Burgers", "Family", "Cherry Republic"],
    menu: "https://order.toasttab.com/online/cherry-public-house",
    map: "https://www.google.com/maps/search/?api=1&query=Cherry+Public+House+Glen+Arbor+MI"
  },
  {
    town: "glen-arbor", name: "Good Harbor Grill", kind: "meal", price: "$20–30",
    type: "American • breakfast • local whitefish • dinner",
    note: "One of the most flexible menus in town: breakfast, sandwiches, salads, fish and proper dinner entrees.",
    tags: ["Breakfast", "Whitefish", "All-day"],
    menu: "https://www.goodharborgrill.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Good+Harbor+Grill+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Boonedocks", kind: "meal", price: "$20–30",
    type: "All-American grill • burgers • fish • outdoor deck",
    note: "Casual Up North place with burgers, local whitefish, perch, sandwiches and summer ice cream nearby.",
    tags: ["Burgers", "Whitefish", "Outdoor"],
    menu: "https://www.boonedocksga.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Boonedocks+Glen+Arbor+MI"
  },
  {
    town: "glen-arbor", name: "Art's Tavern", kind: "meal", price: "$10–20",
    type: "Classic tavern • burgers • whitefish • sandwiches",
    note: "Long-standing local tavern. Good if the group wants straightforward burgers, fish sandwiches and bar-food comfort.",
    tags: ["Tavern", "Burgers", "Whitefish"],
    menu: "https://www.google.com/search?q=Art%27s+Tavern+Glen+Arbor+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Art%27s+Tavern+Glen+Arbor+MI"
  },
  {
    town: "glen-arbor", name: "L'Chayim Delicatessen", kind: "quick", price: "$10–20",
    type: "Jewish deli • bagels • lox • giant sandwich menu",
    note: "Excellent quick lunch option with bagels, corned beef, pastrami, turkey, veggie sandwiches and breakfast bagels.",
    tags: ["Deli", "Bagels", "Quick"],
    menu: "https://order.toasttab.com/online/l-chayim-delicatessen-glen-arbor-6404-western-ave",
    map: "https://www.google.com/maps/search/?api=1&query=L%27Chayim+Delicatessen+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Upriver from The Mill", kind: "quick", price: "$10–20",
    type: "Casual sandwiches • Crystal River view",
    note: "Small, casual sandwich stop overlooking the Crystal River. Good 'feed everyone and keep moving' energy.",
    tags: ["Sandwiches", "Quick", "River"],
    menu: "https://www.google.com/search?q=Upriver+from+The+Mill+Glen+Arbor+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Upriver+from+The+Mill+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Inn and Trail Gourmet", kind: "quick", price: "$",
    type: "Prepared foods • soups • sandwiches • quiche • market",
    note: "More gourmet market than restaurant. Useful for prepared food, grab-and-go lunches or something to take back to the house.",
    tags: ["Prepared food", "Market", "Quick"],
    menu: "https://www.google.com/search?q=Inn+and+Trail+Gourmet+Glen+Arbor",
    map: "https://www.google.com/maps/search/?api=1&query=Inn+and+Trail+Gourmet+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Bear Paw Pizza & Market", kind: "quick", price: "$10–20",
    type: "Pizza takeout • market",
    note: "Useful when the answer is simply PIZZA and nobody wants a sit-down debate.",
    tags: ["Pizza", "Takeout", "Quick"],
    menu: "https://www.google.com/search?q=Bear+Paw+Pizza+Market+Glen+Arbor+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Bear+Paw+Pizza+Market+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Rinco Bros Coffee Roaster", kind: "coffee", price: "$",
    type: "Coffee roaster • pastries",
    note: "Highly rated coffee stop across from Cherry Republic. Known for baked treats including blueberry buckle.",
    tags: ["Coffee", "Pastry", "Morning"],
    menu: "https://www.google.com/search?q=Rinco+Bros+Coffee+Roaster+Glen+Arbor",
    map: "https://www.google.com/maps/search/?api=1&query=Rinco+Bros+Coffee+Roaster+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Leelanau Coffee Roasting Co", kind: "coffee", price: "$1–10",
    type: "Coffee shop • breakfast treats",
    note: "Easy morning coffee stop with indoor and outdoor seating.",
    tags: ["Coffee", "Breakfast", "Quick"],
    menu: "https://www.google.com/search?q=Leelanau+Coffee+Roasting+Co+Glen+Arbor+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Leelanau+Coffee+Roasting+Co+Glen+Arbor"
  },
  {
    town: "glen-arbor", name: "Glen Arbor Bakery", kind: "coffee", price: "$1–10",
    type: "Bakery • donuts • morning sweets",
    note: "For the highly sophisticated culinary category of 'we want donuts.'",
    tags: ["Bakery", "Donuts", "Morning"],
    menu: "https://www.google.com/search?q=Glen+Arbor+Bakery+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Glen+Arbor+Bakery"
  },
  {
    town: "glen-arbor", name: "The Pine Cone", kind: "coffee", price: "$",
    type: "Ice cream",
    note: "Straightforward ice-cream stop with generous servings.",
    tags: ["Ice cream", "Dessert"],
    menu: "https://www.google.com/search?q=The+Pine+Cone+Glen+Arbor+ice+cream",
    map: "https://www.google.com/maps/search/?api=1&query=The+Pine+Cone+Glen+Arbor"
  },

  // FISHTOWN / LELAND
  {
    town: "fishtown", name: "The Cove", kind: "meal", price: "$20–30",
    type: "Waterfront American • seafood • whitefish",
    note: "The iconic Fishtown sit-down choice. Lake Michigan whitefish, steaks, seafood chowder and river views.",
    tags: ["Whitefish", "Seafood", "Waterfront"],
    menu: "https://thecove.squarespace.com/",
    map: "https://www.google.com/maps/search/?api=1&query=The+Cove+Leland+MI"
  },
  {
    town: "fishtown", name: "Village Cheese Shanty", kind: "quick", price: "$10–20",
    type: "Fishtown sandwich shack • cheese shop",
    note: "Made-to-order sandwiches and salads in the heart of Fishtown. Excellent picnic/lunch move.",
    tags: ["Sandwiches", "Quick", "Fishtown"],
    menu: "https://www.villagecheeseshanty.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Village+Cheese+Shanty+Leland+MI"
  },
  {
    town: "fishtown", name: "Blue Bird of Leland", kind: "meal", price: "$20–30",
    type: "Waterfront American • whitefish • patio",
    note: "Historic Leland restaurant with a rebuilt riverfront patio and a broad full menu.",
    tags: ["Whitefish", "American", "Waterfront"],
    menu: "https://www.bluebirdleland.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Blue+Bird+of+Leland"
  },
  {
    town: "fishtown", name: "The Riverside Inn", kind: "meal", price: "$$$",
    type: "Fine dining • river views",
    note: "More polished sit-down dining when the group wants a proper dinner rather than sandwiches on a dock.",
    tags: ["Fine dining", "Dinner", "River"],
    menu: "https://www.google.com/search?q=The+Riverside+Inn+Leland+MI+menu",
    map: "https://www.google.com/maps/search/?api=1&query=The+Riverside+Inn+Leland+MI"
  },
  {
    town: "fishtown", name: "Rick's Cafe", kind: "meal", price: "$10–40",
    type: "Seasonal riverside bar & casual food",
    note: "Outdoor sibling to The Cove beneath the dam. Casual, scenic and easy when weather cooperates.",
    tags: ["Casual", "Outdoor", "River"],
    menu: "https://thecove.squarespace.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Rick%27s+Cafe+Leland+MI"
  },
  {
    town: "fishtown", name: "Bogey's 19th Hole", kind: "meal", price: "$20–30",
    type: "Grill • dinner",
    note: "Straightforward dinner/grill option near the lodge, away from the densest Fishtown foot traffic.",
    tags: ["Grill", "Dinner"],
    menu: "https://www.google.com/search?q=Bogey%27s+19th+Hole+Leland+MI+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Bogey%27s+19th+Hole+Leland+MI"
  },
  {
    town: "fishtown", name: "Carlson's Fishery", kind: "quick", price: "$",
    type: "Smoked fish • seafood market",
    note: "A Fishtown institution for smoked and fresh fish. More fishery/market than restaurant, but absolutely food and absolutely worth knowing about.",
    tags: ["Smoked fish", "Market", "Fishtown"],
    menu: "https://www.google.com/search?q=Carlson%27s+Fishery+Leland+MI",
    map: "https://www.google.com/maps/search/?api=1&query=Carlson%27s+Fishery+Leland+MI"
  },
  {
    town: "fishtown", name: "Trish's Dishes", kind: "quick", price: "$10–20",
    type: "Sandwiches • soups • casual cafe",
    note: "Casual lunch option south of the main Fishtown cluster with sandwiches and cafe food.",
    tags: ["Sandwiches", "Lunch", "Quick"],
    menu: "https://www.google.com/search?q=Trish%27s+Dishes+Leland+MI+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Trish%27s+Dishes+Leland+MI"
  },
  {
    town: "fishtown", name: "Morning On Main", kind: "coffee", price: "$10–20",
    type: "Breakfast • morning cafe",
    note: "Breakfast-focused stop right on Main Street. Handy before wandering Fishtown.",
    tags: ["Breakfast", "Morning", "Cafe"],
    menu: "https://www.google.com/search?q=Morning+On+Main+Leland+MI+menu",
    map: "https://www.google.com/maps/search/?api=1&query=Morning+On+Main+Leland+MI"
  },
  {
    town: "fishtown", name: "Leland Brew", kind: "coffee", price: "$1–10",
    type: "Coffee in Fishtown",
    note: "Tiny coffee option right inside the Fishtown cluster.",
    tags: ["Coffee", "Fishtown", "Quick"],
    menu: "https://www.google.com/search?q=Leland+Brew+Fishtown",
    map: "https://www.google.com/maps/search/?api=1&query=Leland+Brew+Fishtown"
  },
  {
    town: "fishtown", name: "Little Boat Coffee", kind: "coffee", price: "$1–10",
    type: "Coffee shop",
    note: "Small highly rated coffee shop just off the Fishtown waterfront cluster.",
    tags: ["Coffee", "Quick"],
    menu: "https://www.google.com/search?q=Little+Boat+Coffee+Leland+MI",
    map: "https://www.google.com/maps/search/?api=1&query=Little+Boat+Coffee+Leland+MI"
  },
  {
    town: "fishtown", name: "Leland Mercantile Co", kind: "quick", price: "$",
    type: "Grocery • deli • hot food",
    note: "Not a restaurant, but useful for hot food, picnic supplies and the inevitable 'everyone wants a different thing' problem.",
    tags: ["Grocery", "Deli", "Picnic"],
    menu: "https://www.google.com/search?q=Leland+Mercantile+Co",
    map: "https://www.google.com/maps/search/?api=1&query=Leland+Mercantile+Co"
  },

  // FOOD TRUCK LOTS / TRAVERSE CITY
  {
    town: "food-trucks", name: "The Little Fleet", kind: "meal", price: "Mix",
    type: "Food truck lot • downtown Traverse City",
    note: "YES: this is the place next to Bubba's. 2026 trucks include Cordwood BBQ, Traverse City Pizza Company, Archie's sliders, Tommy the Taco and Dogwood hot dogs, plus Crocodile Palace inside.",
    tags: ["Food trucks", "Group-friendly", "Many choices"],
    menu: "https://www.thelittlefleet.com/traverse-city-food-trucks",
    map: "https://www.google.com/maps/search/?api=1&query=The+Little+Fleet+Traverse+City+MI",
    truck: true
  },
  {
    town: "food-trucks", name: "The Coin Slot / Keg Stand", kind: "meal", price: "Mix",
    type: "Arcade-bar patio • rotating food trucks",
    note: "Just a block from The Little Fleet. Traverse City Tourism specifically calls out its patio with a couple of food trucks, picnic tables and cornhole. Exact trucks rotate, so check before going hungry.",
    tags: ["Food trucks", "Arcade", "Patio"],
    menu: "https://thecoinslottc.com/find-us",
    map: "https://www.google.com/maps/search/?api=1&query=The+Coin+Slot+Traverse+City+MI",
    truck: true
  },
  {
    town: "food-trucks", name: "Silver Spruce Brewing", kind: "meal", price: "Mix",
    type: "Brewery with two food vendors",
    note: "Another multi-choice setup: 2026 reporting has Toby's Dog House food truck plus Two Sons Pizza operating at Silver Spruce.",
    tags: ["Hot dogs", "Pizza", "Casual"],
    menu: "https://www.google.com/search?q=Silver+Spruce+Brewing+Traverse+City+food",
    map: "https://www.google.com/maps/search/?api=1&query=Silver+Spruce+Brewing+Traverse+City+MI",
    truck: true
  }
];

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const trailGrid = document.getElementById("trailGrid");
const foodGrid = document.getElementById("foodGrid");
const foodSummary = document.getElementById("foodSummary");
const foodSearch = document.getElementById("foodSearch");

let activeTrailFilter = "all";
let activeFoodTown = "empire";
let activeFoodFilter = "all";

function activateTab(name) {
  tabs.forEach(tab => tab.classList.toggle("is-active", tab.dataset.tab === name));
  panels.forEach(panel => panel.classList.toggle("is-active", panel.dataset.panel === name));
  window.scrollTo({ top: document.querySelector(".tabs").offsetTop, behavior: "smooth" });
}

tabs.forEach(tab => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));

document.querySelectorAll(".jump-tab").forEach(button => {
  button.addEventListener("click", () => activateTab(button.dataset.targetTab));
});

document.addEventListener("click", event => {
  const jump = event.target.closest(".jump-to-trail");
  if (!jump) return;
  activeTrailFilter = "all";
  syncTrailFilterButtons();
  renderTrails();
  activateTab("trails");
  requestAnimationFrame(() => {
    const card = document.querySelector(`[data-trail-card="${jump.dataset.trail}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("is-highlighted");
      setTimeout(() => card.classList.remove("is-highlighted"), 1200);
    }
  });
});

function trailCardMarkup(trail) {
  return `
    <article class="trail-card" data-trail-card="${trail.id}" tabindex="0" role="button" aria-label="Flip ${trail.name} trail card">
      <div class="trail-card__inner">
        <div class="trail-card__face trail-card__front">
          <img class="trail-card__image" src="${trail.image}" alt="${trail.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <div class="trail-card__image-fallback" style="display:none"></div>
          <div class="trail-card__front-content">
            <span class="trail-card__badge">${trail.badge}</span>
            <h3>${trail.name}</h3>
            <p>${trail.front}</p>
            <p class="tap-hint">Tap to flip →</p>
          </div>
        </div>
        <div class="trail-card__face trail-card__back">
          <h3>${trail.name}</h3>
          <div class="trail-details">
            <div class="trail-detail"><strong>How</strong><span>${trail.how}</span></div>
            <div class="trail-detail"><strong>Distance</strong><span>${trail.distance}</span></div>
            <div class="trail-detail"><strong>Time</strong><span>${trail.time}</span></div>
            <div class="trail-detail"><strong>Terrain</strong><span>${trail.terrain}</span></div>
            <div class="trail-detail"><strong>Water</strong><span>${trail.water}</span></div>
            <div class="trail-detail"><strong>Do here</strong><span>${trail.doHere}</span></div>
          </div>
          <p class="trail-take"><strong>Parker's practical take:</strong> ${trail.take}</p>
          <div class="trail-card__actions">
            <a class="primary-action" href="${trail.map}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Map it</a>
            <button type="button" class="flip-back">Flip back</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderTrails() {
  const trails = activeTrailFilter === "all"
    ? trailData
    : trailData.filter(trail => trail.category.includes(activeTrailFilter));
  trailGrid.innerHTML = trails.map(trailCardMarkup).join("");

  trailGrid.querySelectorAll(".trail-card").forEach(card => {
    const flip = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", event => {
      if (event.target.closest("a")) return;
      flip();
    });
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flip();
      }
    });
  });
}

function syncTrailFilterButtons() {
  document.querySelectorAll("[data-trail-filter]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.trailFilter === activeTrailFilter);
  });
}

document.getElementById("trailFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-trail-filter]");
  if (!button) return;
  activeTrailFilter = button.dataset.trailFilter;
  syncTrailFilterButtons();
  renderTrails();
});

const townNames = {
  "empire": "Empire",
  "glen-arbor": "Glen Arbor",
  "fishtown": "Fishtown / Leland",
  "food-trucks": "Food Truck Lots"
};

function foodCardMarkup(place) {
  const tags = place.tags.map(tag => `<span class="food-card__tag">${tag}</span>`).join("");
  return `
    <article class="food-card ${place.truck ? "food-card--truck" : ""}">
      <div class="food-card__top">
        <div>
          <h3>${place.name}</h3>
          <p class="food-card__type">${place.type}</p>
        </div>
        <span class="food-card__price">${place.price}</span>
      </div>
      <p class="food-card__note">${place.note}</p>
      <div class="food-card__tags">${tags}</div>
      <div class="food-card__actions">
        <a href="${place.menu}" target="_blank" rel="noopener">Menu / info</a>
        <a href="${place.map}" target="_blank" rel="noopener">Map</a>
      </div>
    </article>
  `;
}

function renderFood() {
  const query = foodSearch.value.trim().toLowerCase();
  const places = foodData.filter(place => {
    const townMatch = place.town === activeFoodTown;
    const kindMatch = activeFoodFilter === "all" || place.kind === activeFoodFilter;
    const searchHaystack = `${place.name} ${place.type} ${place.note} ${place.tags.join(" ")}`.toLowerCase();
    return townMatch && kindMatch && (!query || searchHaystack.includes(query));
  });

  foodSummary.textContent = `${places.length} ${places.length === 1 ? "place" : "places"} in ${townNames[activeFoodTown]}${query ? ` matching “${foodSearch.value.trim()}”` : ""}`;
  foodGrid.innerHTML = places.length
    ? places.map(foodCardMarkup).join("")
    : `<div class="empty-state"><strong>No food matches that combination.</strong><br>Clear the search or pick another category. The family has not eaten the entire peninsula yet.</div>`;
}

document.getElementById("foodTownNav").addEventListener("click", event => {
  const button = event.target.closest("[data-food-town]");
  if (!button) return;
  activeFoodTown = button.dataset.foodTown;
  document.querySelectorAll("[data-food-town]").forEach(item => item.classList.toggle("is-active", item === button));
  renderFood();
});

document.getElementById("foodFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-food-filter]");
  if (!button) return;
  activeFoodFilter = button.dataset.foodFilter;
  document.querySelectorAll("[data-food-filter]").forEach(item => item.classList.toggle("is-active", item === button));
  renderFood();
});

foodSearch.addEventListener("input", renderFood);

renderTrails();
renderFood();
