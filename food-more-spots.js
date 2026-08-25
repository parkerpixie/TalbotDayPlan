// Extra Traverse City food/brewery picks requested for Beach Day.
// Loaded after food-beach-day-expansion.js so these join the same FOOD cards and filters.
(() => {
  const additions = [
    {
      town: "traverse-city",
      name: "Bubba's",
      kind: "meal",
      price: "$$ • check current menu",
      type: "Downtown bar & grill • burgers • burritos • salads • sandwiches",
      note: "Adding this back because the menu is broader than burgers: Bubba's is a casual downtown spot with burgers, burritos, salads, sandwiches and breakfast. It is family-friendly and open for dinner tonight. Exact current item pricing is not clearly posted on the official web menu, so use the menu button for the final price check before we commit.",
      tags: ["Downtown", "Burgers", "Burritos", "Casual"],
      foodCategories: ["burgers", "sandwiches", "mexican", "beer", "breakfast"],
      topPick: "Good all-purpose downtown fallback",
      menu: "https://www.tcbubbas.com/menu/",
      map: "https://www.google.com/maps/search/?api=1&query=Bubba%27s+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "North Peak Brewing Company",
      kind: "meal",
      price: "$15.50–17 sandwiches/burger",
      type: "Historic brewpub • pizzas • walleye • sandwiches • large plates",
      note: "A much broader menu than just burgers. Current online ordering shows the Peak Burger at $17 and several sandwiches around $15.50, plus hearth-baked pizzas, salads, fish & chips, walleye and other full plates. This one passes the basic burger sanity check.",
      tags: ["Brewery", "Pizza", "Walleye", "Budget fit"],
      foodCategories: ["beer", "burgers", "sandwiches", "pizza", "seafood"],
      topPick: "Peak Burger $17 or Detroit Beef $15.50",
      menu: "https://www.northpeakbeer.com/traverse-city",
      map: "https://www.google.com/maps/search/?api=1&query=North+Peak+Brewing+Company+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Jolly Pumpkin Restaurant & Brewery",
      kind: "meal",
      price: "$$ • broad menu",
      type: "Old Mission brewery • artisan pizza • sandwiches • bowls • fish",
      note: "Worth including because the menu is genuinely varied: artisan pizzas, Wagyu burger, Cuban, pulled pork, crispy hot chicken, rice bowl, fish & chips, pasta and salads. It is out on Old Mission Peninsula rather than downtown, and it is not the strictest budget anchor on the list, so check current prices before choosing.",
      tags: ["Brewery", "Pizza", "Old Mission", "Variety"],
      foodCategories: ["beer", "burgers", "sandwiches", "pizza", "seafood", "italian"],
      topPick: "Cuban, rice bowl, or artisan pizza",
      menu: "https://traversecity.jollypumpkin.com/menu/",
      map: "https://www.google.com/maps/search/?api=1&query=Jolly+Pumpkin+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Nocturnal Bloom Brewing + Acorn Kitchen",
      kind: "meal",
      price: "$14–17 most Acorn mains",
      type: "New brewery + on-site kitchen • shawarma • falafel • smashburger",
      note: "This is a genuinely interesting combo. Nocturnal Bloom shares Atomic Marketplace with Acorn Kitchen, so we can get the brewery atmosphere without being stuck with brewery food. Acorn's current menu has a $14 smashburger, chicken shawarma around $15–17, falafel shawarma around $16, hummus and rotating specials. Nocturnal Bloom itself focuses on locally influenced beer, cocktails, cider, wine and NA drinks.",
      tags: ["Brewery", "Shawarma", "Hidden gem", "Patio"],
      foodCategories: ["beer", "sandwiches", "greek"],
      topPick: "Chicken shawarma + a Nocturnal Bloom drink",
      menu: "https://www.toasttab.com/local/order/acorn-kitchen-3344-cass-rd",
      map: "https://www.google.com/maps/search/?api=1&query=Nocturnal+Bloom+Brewing+Traverse+City+MI"
    },
    {
      town: "traverse-city",
      name: "Tank Space on 8th",
      kind: "meal",
      price: "$1–10 ramen • nearby burgers $12–16",
      type: "East Side brewery • ramen inside • bring-in food welcome",
      note: "Tank Space is more taproom-with-food-options than restaurant. Their own FAQ encourages bringing food from neighboring Oakwood Proper Burgers and Common Good. Even better for us, Kumite Underground Noodles now operates inside Tank Space as a very inexpensive self-serve ramen option. Oakwood next door has burgers roughly in the $12–16 range. Tank Space also serves hot dogs Thursday–Saturday nights and has its own beer, cider, wine and NA list.",
      tags: ["Brewery", "Ramen", "East Side", "Budget fit"],
      foodCategories: ["beer", "asian", "burgers", "sandwiches"],
      topPick: "Tank Space beer + Kumite ramen",
      menu: "https://tankspacetc.com/menu/",
      map: "https://www.google.com/maps/search/?api=1&query=Tank+Space+on+8th+Traverse+City+MI"
    }
  ];

  const existingNames = new Set(foodData.map(place => place.name));
  additions.forEach(place => {
    if (!existingNames.has(place.name)) {
      foodData.push(place);
      existingNames.add(place.name);
    }
  });

  renderFood();
})();
