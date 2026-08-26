// August 26 shopper-attribution corrections.
// Loaded after SHOP HOP is rendered so store cards can show the right Talbot lane.
(() => {
  const EXCLUSIVE = {
    "I'm Planty AF": ["Blake"],
    "M22": ["Blake"],
    "Backcountry North": ["Blake"],
    "The Haberdashery": ["Blake"],
    "Orvis Streamside Shop": ["Blake"],
    "Candle Factory & Home Elements": ["Nancy"],
    "Traverse City Candle Co.": ["Nancy"],
    "Becky Thatcher Designs": ["Parker"],
    "Silver Fox Jewelry": ["Parker"],
    "Higher Art Gallery": ["Parker"],
    "Landmark Books": ["Parker"]
  };

  const MIXED = {
    "On The Rocks": ["Parker", "Porter"],
    "Nifty Things!": ["Parker", "Porter"],
    "Obscura Jewelry and Curiosities": ["Parker", "Porter", "Nancy"],
    "My Secret Stash": ["Parker", "Porter"],
    "Sanctuary Goods": ["Parker", "Porter"]
  };

  const PERSON_META = {
    Parker: { icon: "💍", label: "Parker pick" },
    Blake: { icon: "🌿", label: "Blake pick" },
    Porter: { icon: "🎮", label: "Porter pick" },
    Nancy: { icon: "🕯️", label: "Nancy pick" }
  };

  function addStyles() {
    if (document.getElementById('shopper-preference-corrections-css')) return;
    const style = document.createElement('style');
    style.id = 'shopper-preference-corrections-css';
    style.textContent = `
      .shop-card__people {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 10px 0 2px;
      }
      .shop-card__person {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 5px 9px;
        border-radius: 999px;
        background: var(--forest-soft, #dce8e1);
        color: var(--forest-dark, #1f3b32);
        font-size: .74rem;
        font-weight: 800;
        line-height: 1.1;
      }
      .shop-card[data-shop-people~="Parker"] .shop-card__person[data-person="Parker"] { background: #f2e8ef; color: #71455a; }
      .shop-card[data-shop-people~="Blake"] .shop-card__person[data-person="Blake"] { background: #e5efe8; color: #31584a; }
      .shop-card[data-shop-people~="Porter"] .shop-card__person[data-person="Porter"] { background: #e8edf5; color: #425570; }
      .shop-card[data-shop-people~="Nancy"] .shop-card__person[data-person="Nancy"] { background: #f5ebdf; color: #7a5831; }
    `;
    document.head.appendChild(style);
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function inferPeople(card, name) {
    if (EXCLUSIVE[name]) return [...EXCLUSIVE[name]];
    if (MIXED[name]) return [...MIXED[name]];

    const category = (card.dataset.shopCategory || '').toLowerCase();
    const text = card.textContent.toLowerCase();
    const people = [];

    // Blake: plants and genuinely outdoorsy stores.
    if (/plant|outdoor|hiking|camping|fly.fishing|fishing gear/.test(text) || category === 'outdoors') {
      people.push('Blake');
    }

    // Parker: jewelry, art galleries and interesting local/handmade work.
    if (/jewel|gemstone|ring|necklace|earring/.test(text)) people.push('Parker');
    if (category === 'art' && !/toy|gift/.test(text)) people.push('Parker');

    // Nancy: candle-focused shops.
    if (/candle|soy candle/.test(text)) people.push('Nancy');

    // Porter: trinkets, gifts, rocks, records, comics, collectibles and toy-store treasure hunting.
    if (
      category === 'gifts' ||
      category === 'records' ||
      category === 'comics' ||
      /trinket|gift|souvenir|rock|fossil|mineral|record|vinyl|comic|collectible|toy|pin|sticker|artifact/.test(text)
    ) {
      people.push('Porter');
    }

    return unique(people);
  }

  function setDescription(card, text) {
    const description = card.querySelector('.shop-card__description');
    if (description) description.textContent = text;
  }

  function updateCounts() {
    document.querySelectorAll('.shop-bucket').forEach(bucket => {
      const count = bucket.querySelectorAll('.shop-card').length;
      const label = bucket.querySelector('.shop-count');
      if (label) label.textContent = `${count} ${count === 1 ? 'shop' : 'shops'}`;
    });
  }

  function applyCorrections() {
    const cards = [...document.querySelectorAll('.shop-card')];
    if (!cards.length) return false;

    cards.forEach(card => {
      const name = card.querySelector('h3')?.textContent.trim();
      if (!name) return;

      if (name === 'Baby Dill') {
        card.remove();
        return;
      }

      if (name === "I'm Planty AF") {
        setDescription(
          card,
          "A gloriously unserious plant shop with common and rare houseplants, terrarium supplies, classes and planty gifts. This one is squarely in Blake's lane."
        );
      }

      const people = inferPeople(card, name);
      card.dataset.shopPeople = people.join(' ');

      card.querySelector('.shop-card__people')?.remove();
      if (!people.length) return;

      const peopleRow = document.createElement('div');
      peopleRow.className = 'shop-card__people';
      peopleRow.setAttribute('aria-label', 'Best match for');
      people.forEach(person => {
        const meta = PERSON_META[person];
        const badge = document.createElement('span');
        badge.className = 'shop-card__person';
        badge.dataset.person = person;
        badge.textContent = `${meta.icon} ${meta.label}`;
        peopleRow.appendChild(badge);
      });

      const description = card.querySelector('.shop-card__description');
      if (description) description.insertAdjacentElement('beforebegin', peopleRow);
      else card.appendChild(peopleRow);
    });

    updateCounts();
    return true;
  }

  addStyles();

  // SHOP HOP is normally already rendered by beach-day-wiring-fix.js.
  // The retries make this robust if a phone loads scripts more slowly.
  if (!applyCorrections()) {
    let tries = 0;
    const retry = setInterval(() => {
      tries += 1;
      if (applyCorrections() || tries >= 20) clearInterval(retry);
    }, 100);
  }
})();
