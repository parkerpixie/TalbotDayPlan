// Beach Day food expansion: broaden today's Traverse City shortlist beyond burgers/breweries.
// Loaded after beach-day-upgrade.js so it can add back good-value tacos, pasta, Asian food,
// Detroit-style pizza, deli picks, and the morning donut mission without changing today's price guardrail.

(() => {
  const additions = [
    {
      town: "traverse-city",
      name: "Taqueria TC Latino",
      kind: "meal",
      price: "$3 tacos • ~$9–13 combos",
      type: "Authentic Mexican • tacos • tamales • tortas • burritos",
      note: "No-frills local Mexican spot and a strong hidden-gem/value pick. Current online pricing has tacos around $3, taco combos under $10, and many larger dishes around $12–13.",
      tags: ["Mexican", "Tacos", "Hidden gem", "Budget fit"],
      foodCategories: ["mexican", "sandwiches"],
      topPick: "A few tacos or a wet burrito combo",
      menu: "https://www.doordash.com/store/taqueria-tc-latino-traverse-city-40215666/",
      map: "https://www.google.com/maps/search/?api=1&query=Taqueria+TC+Latino+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Taqueria Las Lagunas",
      kind: "meal",
      price: "$3.50 tacos • $14–15 plates",
      type: "Family-owned Mexican • street tacos • whitefish tacos",
      note: "One of the more interesting off-the-tourist-strip finds. Official menu lists $3.50 tacos, $4 whitefish tacos, and most burrito/enchilada/chimichanga plates around $14–15.",
      tags: ["Mexican", "Whitefish tacos", "Hidden gem", "Budget fit"],
      foodCategories: ["mexican", "seafood"],
      topPick: "Whitefish tacos $4 each",
      menu: "https://laslagunastc.com/",
      map: "https://www.google.com/maps/search/?api=1&query=Taqueria+Las+Lagunas+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Mama Lu's",
      kind: "meal",
      price: "$4.50 tacos",
      type: "Modern taco shop • creative tacos • downtown",
      note: "Downtown taco option when everyone wants to mix and match instead of ordering a giant entree. The current posted menu lists tacos at $4.50 each, with chicken, steak, carnitas, fish, shrimp and vegetable options.",
      tags: ["Mexican", "Tacos", "Downtown", "Mix-and-match"],
      foodCategories: ["mexican", "seafood"],
      topPick: "Pick three different tacos",
      menu: "https://mamalustc.com/",
      map: "https://www.google.com/maps/search/?api=1&query=Mama+Lu%27s+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "The Flying Noodle",
      kind: "meal",
      price: "$14–19 pasta",
      type: "House-made pasta • Italian • downtown",
      note: "This is the non-fancy-pasta answer. Current menu pricing keeps classic and specialty pastas roughly $14–19, with sandwiches and personal deep-dish pizza around the mid-teens too.",
      tags: ["Italian", "Pasta", "Downtown", "Budget fit"],
      foodCategories: ["italian", "sandwiches", "pizza"],
      topPick: "Bolognese $18 or classic Alfredo/Marinara $14",
      menu: "https://flyingnoodletc.com/",
      map: "https://www.google.com/maps/search/?api=1&query=The+Flying+Noodle+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Thai Cafe",
      kind: "meal",
      price: "$",
      type: "Thai • curries • pad Thai • pho • fried rice",
      note: "Small casual Thai spot with a large noodle/curry/rice menu. A good change-of-pace option when pub food sounds like absolutely not. Their spice scale runs hotter than many places, so order accordingly.",
      tags: ["Thai", "Asian", "Noodles", "Casual"],
      foodCategories: ["asian"],
      topPick: "Peanut Curry Pad Thai or pho",
      menu: "https://www.tcthaicafe.com/menus",
      map: "https://www.google.com/maps/search/?api=1&query=Thai+Cafe+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "K-Pocha",
      kind: "meal",
      price: "$8–19 most mains",
      type: "Korean street food • ramen • bibimbap • Korean corn dogs",
      note: "Fun wildcard for Beach Day: Korean corn dogs, ramen, bibimbap, kimchi fried rice, Korean fried chicken and dumplings. Current ordering menus put many full meals around $16–19, with snacks/combos lower.",
      tags: ["Korean", "Asian", "Street food", "Budget fit"],
      foodCategories: ["asian", "sandwiches"],
      topPick: "Bibimbap, kimchi fried rice, or a Korean corn dog combo",
      menu: "https://www.doordash.com/store/k-pocha-llc-traverse-city-34874441/",
      map: "https://www.google.com/maps/search/?api=1&query=K-Pocha+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Charles & Reid Detroit Pizza",
      kind: "meal",
      price: "$15–20 small pies",
      type: "Detroit-style pizza • casual downtown counter",
      note: "Highly rated Detroit-style pizza with crispy cheese edges. Small pies start around $15 and several stay under $20; specialty pies can go higher, so this is still easy to keep sane if we order intentionally.",
      tags: ["Pizza", "Detroit style", "Downtown", "Local favorite"],
      foodCategories: ["pizza", "sandwiches", "beer"],
      topPick: "The Brick $15 or Pep in Yo' Step $19",
      menu: "https://www.charlesandreid.com/menu",
      map: "https://www.google.com/maps/search/?api=1&query=Charles+and+Reid+Detroit+Pizza+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Raduno",
      kind: "quick",
      price: "$14–18",
      type: "Neighborhood deli • fresh pasta • Cuban • falafel",
      note: "Excellent hidden-gem-ish early option, but note the 6 PM close. Current menu has Cuban, muffaletta and falafel sandwiches around $14, brisket/turkey $15, and house pasta roughly $14–18.",
      tags: ["Early dinner", "Sandwiches", "Pasta", "Hidden gem"],
      foodCategories: ["sandwiches", "italian"],
      topPick: "Cuban $14",
      menu: "https://radunotc.com/lunch-menu/",
      map: "https://www.google.com/maps/search/?api=1&query=Raduno+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Folgarelli's Market & Wine Shop",
      kind: "quick",
      price: "$9–17 sandwiches",
      type: "Italian deli • enormous sandwich menu • market",
      note: "A Traverse City institution for takeout sandwiches and picnic food. More than 45 sandwiches, most comfortably below $20. Closes around 5:30 PM, so this is a grab-it-before-dinner option rather than a late sit-down meal.",
      tags: ["Deli", "Sandwiches", "Picnic", "Closes early"],
      foodCategories: ["sandwiches", "italian"],
      topPick: "The Godfather $12.75 or Italian Combo $12.25",
      menu: "https://www.folgarellis.net/sandwich-menu",
      map: "https://www.google.com/maps/search/?api=1&query=Folgarelli%27s+Market+Wine+Shop+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Potter's Bakery",
      kind: "coffee",
      price: "Morning bakery stop",
      type: "4th-generation bakery • 24+ donut varieties • fritters",
      note: "This is the donut mission. Family-owned since 1929, with more than 24 kinds of donuts. Go early for the best selection; the bakery itself notes Sunday service runs until they sell out.",
      tags: ["Donuts", "Bakery", "Go early", "Take home"],
      foodCategories: ["dessert", "breakfast"],
      topPick: "Cherry-apple fritter or a mixed donut box",
      menu: "https://pottersbakery.com/",
      map: "https://www.google.com/maps/search/?api=1&query=Potter%27s+Bakery+Traverse+City+MI"
    }
  ];

  const existingNames = new Set(foodData.map(place => place.name));
  additions.forEach(place => {
    if (!existingNames.has(place.name)) {
      foodData.push(place);
      existingNames.add(place.name);
    }
  });

  const heading = document.querySelector("#food .section-heading > div");
  if (heading) {
    heading.innerHTML = `
      <p class="eyebrow eyebrow--dark">FOOD • TODAY'S SHORTLIST</p>
      <h2>Not just burgers. Pick what actually sounds good.</h2>
      <p class="section-copy">The $20 burger/sandwich rule is a price sanity check, not a cuisine requirement. Today's Traverse City list now includes tacos, Mexican, pasta, Thai, Korean street food, Detroit pizza, breweries, deli options and the donut mission.</p>
    `;
  }

  renderFood();
})();
