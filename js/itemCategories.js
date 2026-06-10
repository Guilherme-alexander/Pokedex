/* ═══════════════════════════════════════════════════════
   POKEAPI ITEM CATEGORY MAP — Complete & Corrected
   Source: https://pokeapi.co/api/v2/item-category
   All 50+ categories mapped to page groups
═══════════════════════════════════════════════════════ */

// ── BATTLE / HELD ITEMS (items.html) ────────────────────
// Includes: toxic-orb, flame-orb, jewels, gems, memories, incense, bad held items
const CAT_BATTLE = new Set([
  'held-items',        // Life Orb, Focus Sash, Rocky Helmet…
  'choice',            // Choice Band, Scarf, Specs
  'effort-training',   // Power Items, Macho Brace
  'bad-held-items',    // Toxic Orb, Flame Orb, Lagging Tail, Sticky Barb, Ring Target
  'bad-items',         // alias for bad held items
  'type-protection',   // Type-resist berries + Shuca/Occa/Yache
  'type-enhancement',  // Charcoal, Mystic Water, Miracle Seed
  'stat-boosts',       // X-Attack, X-Speed, Guard Spec
  'training',          // HP Up, Protein, Carbos, Calcium…
  'vitamins',          // Calcium, Iron, etc.
  'effort-drop',       // Pomeg Berry and EV-reducing items
  'plates',            // Arceus plates (Flame Plate, Splash Plate…)
  'memories',          // Silvally type memories
  'species-specific',  // Thick Club, Light Ball, Lucky Punch, Leek
  'scarves',           // Contest Scarves (holdable stat items)
  'flutes',            // Azure Flute, Blue Flute (in-battle use)
  'incense',           // Rock Incense, Sea Incense, Lax Incense (holdable)
  'jewels',            // Fire Gem, Water Gem, Normal Gem… (consumable in battle)
  'nature-mints',      // Mint items that change stat distribution
  'other-held-items',  // Misc holdable
])

// ── MEDICINE / STATUS (medicine.html) ───────────────────
const CAT_MEDICINE = new Set([
  'medicine',          // Potion, Super Potion, Hyper Potion, Max Potion, Full Restore
  'status-cures',      // Antidote, Burn Heal, Ice Heal, Awakening, Parlyz Heal, Full Heal
  'pp-recovery',       // Ether, Max Ether, Elixir, Max Elixir, PP Up, PP Max
  'revival',           // Revive, Max Revive
  'healing',           // Full Heal (in-battle)
  'picky-healing',     // Gold/Silver/Pearl healing items
  'miracle-shooter',   // Miracle Shooter items (Gen V)
])

// ── EVOLUTION (evolution.html) ──────────────────────────
const CAT_EVOLUTION = new Set([
  'evolution',         // Fire Stone, Water Stone, Dawn Stone, Dragon Scale…
])

// ── BERRIES (berries.html) ──────────────────────────────
const CAT_BERRIES = new Set([
  'berries',           // All standard berries
  'in-a-pinch',        // Salac, Petaya, Liechi, Apicot, Lansat, Starf, Micle, Custap
  'baking-only',       // Poffin ingredients (Enigma Berry, Rabuta Berry…)
])

// ── POKÉBOLAS (pokeballs.html) ──────────────────────────
const CAT_BALLS = new Set([
  'standard-balls',
  'special-balls',
  'apricorn-balls',
  'pokeballs',
])

// ── SKIP — shown inside pokemon.html ───────────────────
const CAT_SKIP = new Set([
  'mega-stones',       // Charizardite X, Gardevoirite… → pokemon.html
  'z-crystals',        // Firium Z, Waterium Z…        → pokemon.html
])

// ── OTHERS (others.html) — everything else ─────────────
const CAT_OTHERS = new Set([
  'collectibles', 'spelunking', 'loot', 'all-mail', 'apricorn-box',
  'data-cards', 'dex-completion', 'all-machines', 'event-items',
  'gameplay', 'plot-advancement', 'unused', 'mulch', 'catching-bonus',
  'dynamax-crystals', 'species-candies', 'nature-mints', 'curry-ingredients',
  'tera-shard', 'sandwich-ingredients', 'tm-materials', 'picnic', 'other',
])

/** Return which page this category belongs to */
function itemPageGroup(catName) {
  if (!catName)                 return 'others'
  if (CAT_SKIP.has(catName))   return 'skip'
  if (CAT_BALLS.has(catName))  return 'balls'
  if (CAT_EVO_CATS(catName))   return 'evolution'
  if (CAT_MED_CATS(catName))   return 'medicine'
  if (CAT_BERRY_CATS(catName)) return 'berries'
  if (CAT_BAT_CATS(catName))   return 'battle'
  return 'others'
}
// helpers to avoid Set naming collision below
function CAT_EVO_CATS(c) { return CAT_EVOLUTION.has(c) }
function CAT_MED_CATS(c) { return CAT_MEDICINE.has(c) }
function CAT_BERRY_CATS(c){ return CAT_BERRIES.has(c) }
function CAT_BAT_CATS(c)  { return CAT_BATTLE.has(c) }

/** Items allowed in team item picker (usable in battle) */
const CAT_TEAM_ALLOWED = new Set([
  // Held items
  'held-items','choice','bad-held-items','bad-items','type-protection',
  'type-enhancement','plates','memories','species-specific','scarves',
  'incense','jewels','nature-mints',
  // Consumables in battle
  'in-a-pinch','berries','baking-only',
  // Battle use
  'stat-boosts','training','vitamins','effort-training','effort-drop','flutes',
  // Medicine used in battle
  'medicine','status-cures','pp-recovery','revival','healing','picky-healing',
])

function isTeamAllowed(catName) {
  return CAT_TEAM_ALLOWED.has(catName)
}
