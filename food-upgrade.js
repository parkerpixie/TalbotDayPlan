// Food UX upgrade: cuisine buttons + practical "try this" picks.
// Loaded after app.js so we can enrich the existing foodData without rebuilding the trail code.

const foodEnhancements = {
  "Joe's Friendly Tavern": {
    categories: ["burgers", "sandwiches", "breakfast", "beer"],
    topPick: "Onion Wing Burger"
  },
  "Empire Village Inn": {
    categories: ["burgers", "pizza", "sandwiches", "beer"],
    topPick: "Parmesan Garlic Fries"
  },
  "Little Finger Eatery": {
    categories: ["sandwiches", "dessert"],
    topPick: "Cherry Chicken Wrap"
  },
  "Shipwreck Cafe": {
    categories: ["sandwiches", "breakfast"],
    topPick: "The Fitzgerald sandwich"
  },
  "Adriana's Kitchen": {
    categories: ["mexican"],
    topPick: "Tacos when the pop-up is running"
  },
  "Grocer's Daughter Chocolate + Gelato": {
    categories: ["dessert"],
    topPick: "Small-batch gelato"
  },
  "River Club Glen Arbor": {
    categories: ["mexican", "beer", "dessert"],
    topPick: "Cluck Yeah Chicken, their listed best seller"
  },
  "Blu": {
    categories: ["seafood"],
    topPick: "Ask for the current local fish or chef special"
  },
  "Cherry Public House": {
    categories: ["burgers", "sandwiches", "dessert", "beer", "seafood"],
    topPick: "Cherry Bacon Marmalade Burger"
  },
  "Good Harbor Grill": {
    categories: ["breakfast", "sandwiches", "seafood"],
    topPick: "Lake Michigan whitefish"
  },
  "Boonedocks": {
    categories: ["burgers", "sandwiches", "seafood", "beer"],
    topPick: "Lake Michigan whitefish"
  },
  "Art's Tavern": {
    categories: ["burgers", "sandwiches", "breakfast", "seafood", "beer"],
    topPick: "Whitefish sandwich"
  },
  "L'Chayim Delicatessen": {
    categories: ["sandwiches", "breakfast"],
    topPick: "Lox + cream cheese breakfast sandwich"
  },
  "Upriver from The Mill": {
    categories: ["sandwiches"],
    topPick: "One of the fresh daily sandwiches by the river"
  },
  "Inn and Trail Gourmet": {
    categories: ["sandwiches", "breakfast"],
    topPick: "Quiche or the prepared soup of the day"
  },
  "Bear Paw Pizza & Market": {
    categories: ["pizza", "beer"],
    topPick: "Pizza for the table"
  },
  "Rinco Bros Coffee Roaster": {
    categories: ["coffee", "breakfast", "dessert"],
    topPick: "Blueberry buckle"
  },
  "Leelanau Coffee Roasting Co": {
    categories: ["coffee", "breakfast", "dessert"],
    topPick: "Coffee + a SongBird breakfast treat"
  },
  "Glen Arbor Bakery": {
    categories: ["breakfast", "dessert"],
    topPick: "Donuts"
  },
  "The Pine Cone": {
    categories: ["dessert"],
    topPick: "A giant ice cream cone"
  },
  "The Cove": {
    categories: ["seafood", "sandwiches", "beer"],
    topPick: "Lake Michigan whitefish"
  },
  "Village Cheese Shanty": {
    categories: ["sandwiches"],
    topPick: "North Shore sandwich"
  },
  "Blue Bird of Leland": {
    categories: ["seafood", "sandwiches", "beer"],
    topPick: "Planked whitefish"
  },
  "The Riverside Inn": {
    categories: ["seafood", "beer"],
    topPick: "The current seasonal dinner special"
  },
  "Rick's Cafe": {
    categories: ["burgers", "sandwiches", "seafood", "beer"],
    topPick: "Whitefish + a seat by the dam"
  },
  "Bogey's 19th Hole": {
    categories: ["burgers", "sandwiches", "beer"],
    topPick: "The house burger or nightly grill special"
  },
  "Carlson's Fishery": {
    categories: ["seafood"],
    topPick: "Smoked fish"
  },
  "Trish's Dishes": {
    categories: ["sandwiches", "breakfast"],
    topPick: "Sandwich + soup combo"
  },
  "Morning On Main": {
    categories: ["breakfast", "coffee"],
    topPick: "Breakfast sandwich"
  },
  "Leland Brew": {
    categories: ["coffee", "breakfast"],
    topPick: "Coffee before wandering Fishtown"
  },
  "Little Boat Coffee": {
    categories: ["coffee", "breakfast"],
    topPick: "House coffee"
  },
  "Leland Mercantile Co": {
    categories: ["sandwiches", "breakfast"],
    topPick: "Whatever is hot at the deli counter"
  },
  "The Little Fleet": {
    categories: ["burgers", "pizza", "sandwiches", "beer", "asian", "mexican"],
    topPick: "Split up and let everyone choose their own truck"
  },
  "The Coin Slot / Keg Stand": {
    categories: ["burgers", "pizza", "sandwiches", "beer"],
    topPick: "Check today's food-truck lineup"
  },
  "Silver Spruce Brewing": {
    categories: ["pizza", "sandwiches", "beer"],
    topPick: "Two Sons Pizza"
  }
};

foodData.forEach(place => {
  const extra = foodEnhancements[place.name];
  place.foodCategories = extra?.categories || [];
  place.topPick = extra?.topPick || "Check the current menu for the house favorite";
});

// Italian near Glen Arbor that was missing from the fast Google dump.
foodData.push({
  town: "glen-arbor",
  name: "Trattoria Funistrada",
  kind: "meal",
  price: "$$$",
  type: "Italian • pasta • classic trattoria dinner",
  note: "A cozy Italian dinner spot near Big Glen Lake. Reservations are a smart move.",
  tags: ["Italian", "Dinner", "Reservations"],
  foodCategories: ["italian", "seafood"],
  topPick: "Veal Saltimbocca",
  menu: "https://trattoria-funistrada.com/menu/",
  map: "https://www.google.com/maps/search/?api=1&query=Trattoria+Funistrada+Maple+City+MI"
});

// A small Traverse City set so Italian, Greek and Asian are real filters rather than empty buttons.
foodData.push(
  {
    town: "traverse-city",
    name: "Opa! Grill & Taproom",
    kind: "meal",
    price: "$$",
    type: "Greek-inspired grill • gyros • taproom",
    note: "The straightforward Greek answer in Traverse City. Dine-in and takeout with gyros and traditional Greek-inspired plates.",
    tags: ["Greek", "Gyros", "Beer"],
    foodCategories: ["greek", "sandwiches", "beer"],
    topPick: "Gyro",
    menu: "https://www.opagrill.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Opa+Grill+Taproom+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "Red Ginger",
    kind: "meal",
    price: "$$$",
    type: "Asian-inspired fine dining • sushi",
    note: "Polished downtown option for sushi and modern Asian-inspired dishes.",
    tags: ["Asian", "Sushi", "Dinner"],
    foodCategories: ["asian", "seafood"],
    topPick: "RG Trio or Red Dragon Roll",
    menu: "https://eatatginger.com/",
    map: "https://www.google.com/maps/search/?api=1&query=Red+Ginger+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "The Good Bowl",
    kind: "meal",
    price: "$$",
    type: "Vietnamese • Southeast Asian • pho • bowls",
    note: "Vietnamese and Southeast Asian food on Front Street, with pho, bánh mì, dumplings and bowls.",
    tags: ["Asian", "Vietnamese", "Pho"],
    foodCategories: ["asian", "sandwiches"],
    topPick: "Pho Saigon",
    menu: "https://goodbowleatery.com/order",
    map: "https://www.google.com/maps/search/?api=1&query=The+Good+Bowl+Traverse+City+MI"
  },
  {
    town: "traverse-city",
    name: "Trattoria Stella",
    kind: "meal",
    price: "$$$",
    type: "Italian • farm-driven • Grand Traverse Commons",
    note: "The special-occasion Italian choice at the Commons. The menu changes daily, so this is a browse-first restaurant.",
    tags: ["Italian", "Dinner", "Reservations"],
    foodCategories: ["italian", "seafood"],
    topPick: "Burrata, then whatever pasta is shining today",
    menu: "https://stellatc.com/menu",
    map: "https://www.google.com/maps/search/?api=1&query=Trattoria+Stella+Traverse+City+MI"
  }
);

townNames["traverse-city"] = "Traverse City";

foodCardMarkup = function(place) {
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
      <div class="food-card__pick">
        <span>⭐ TRY THIS</span>
        <strong>${place.topPick}</strong>
      </div>
      <p class="food-card__note">${place.note}</p>
      <div class="food-card__tags">${tags}</div>
      <div class="food-card__actions">
        <a href="${place.menu}" target="_blank" rel="noopener">Menu / info</a>
        <a href="${place.map}" target="_blank" rel="noopener">Map</a>
      </div>
    </article>
  `;
};

renderFood = function() {
  const places = foodData.filter(place => {
    const townMatch = place.town === activeFoodTown;
    const categoryMatch = activeFoodFilter === "all" || (place.foodCategories || []).includes(activeFoodFilter);
    return townMatch && categoryMatch;
  });

  const filterLabel = activeFoodFilter === "all"
    ? ""
    : ` • ${document.querySelector(`[data-food-filter="${activeFoodFilter}"]`)?.textContent.trim() || activeFoodFilter}`;

  foodSummary.textContent = `${places.length} ${places.length === 1 ? "place" : "places"} in ${townNames[activeFoodTown]}${filterLabel}`;
  foodGrid.innerHTML = places.length
    ? places.map(foodCardMarkup).join("")
    : `<div class="empty-state"><strong>No ${activeFoodFilter} picks in ${townNames[activeFoodTown]}.</strong><br>Try another town or tap All. Some tiny Michigan towns have declined to become an international food court.</div>`;
};

renderFood();