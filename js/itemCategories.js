/* ═══════════════════════════════════════════════════════
   POKEAPI ITEM CATEGORY MAP
   Source: https://pokeapi.co/api/v2/item-category?limit=100
   Each key = category.name from API
   Each value = which page/group it belongs to
═══════════════════════════════════════════════════════ */

// ── BATTLE ITEMS page (items.html) ──────────────────────
const CAT_BATTLE = new Set([
  'held-items',         // generic held items (life-orb, focus-sash, etc)
  'choice',             // choice band/scarf/specs
  'effort-training',    // macho-brace, power-items
  'effort-drop',        // PP-reducing items
  'type-protection',    // type-enhancing held items (charcoal, mystic-water)
  'in-a-pinch',         // pinch berries as held (kept also in berries page)
  'other-held-items',   // miscellaneous holdable
  'training',           // vitamins, PP-ups, feathers
  'vitamins',           // calcium, iron, etc
  'plates',             // arceus type plates
  'scarves',            // contest scarves (still holdable)
  'species-specific',   // thick-club, light-ball, lucky-punch
  'type-enhancement',   // charcoal, miracle-seed (alias)
  'stat-boosts',        // x-attack, x-speed, etc (battle items used in-battle)
  'battle-items',       // generic battle items
  'pp-recovery',        // ether, elixir
  'revival',            // revive, max-revive (battle bag)
  'flutes',             // blue/white/yellow flute
  'healing',            // potions in battle
])

// ── MEDICINE / STATUS page (medicine.html) ──────────────
const CAT_MEDICINE = new Set([
  'medicine',           // potions, antidotes, full heal
  'status-cures',       // antidote, burn heal, ice heal, awakening, parlyz heal
  'picky-healing',      // gold/silver/pearl items that restore
  'miracle-shooter',    // miracle shooter items
])

// ── EVOLUTION page (evolution.html) ─────────────────────
const CAT_EVOLUTION = new Set([
  'evolution',          // fire-stone, water-stone, dawn-stone, etc
])

// ── BERRIES page (berries.html) ─────────────────────────
const CAT_BERRIES = new Set([
  'berries',
  'berry-pockets',
  'effort-drop',        // also in berries (pomeg, etc)
  'in-a-pinch',         // salac, petaya, etc
  'baking-only',        // poffin ingredients
  'type-protection',    // shuca/yache/occa berries (overlap with battle — show on both)
])

// ── OTHERS page (others.html) ───────────────────────────
const CAT_OTHERS = new Set([
  'collectibles',
  'spelunking',
  'loot',
  'apricorn-box',
  'data-cards',
  'jewels',
  'miracle-shooter',
  'all-mail',
  'bad-held-items',
  'repels',
  'mulch',
  'catching-bonus',
  'dex-completion',
  'incense',
  'gameplay',
  'plot-advancement',
  'unused',
  'all-machines',       // TMs/HMs — put here
  'contest-costumes',
  'fishing-rod',
  'event-items',
  'curry-ingredients',
  'sandwich-ingredients',
])

// ── POKÉBOLAS page (pokeballs.html) ─────────────────────
const CAT_BALLS = new Set([
  'standard-balls',
  'special-balls',
  'apricorn-balls',
  'pokeballs',
  'ultra-balls',        // alias
])

// ── MEGA / Z — skip (shown in pokemon.html) ─────────────
const CAT_SKIP = new Set([
  'mega-stones',
  'z-crystals',
])

/* Helper: given a category name, return the page key */
function itemPageGroup(catName) {
  if (!catName) return 'others'
  if (CAT_SKIP.has(catName))      return 'skip'
  if (CAT_BALLS.has(catName))     return 'balls'
  if (CAT_EVOLUTION.has(catName)) return 'evolution'
  if (CAT_MEDICINE.has(catName))  return 'medicine'
  if (CAT_BERRIES.has(catName))   return 'berries'
  if (CAT_BATTLE.has(catName))    return 'battle'
  return 'others'
}

/* Battle-usable items (for team.html item picker) */
const CAT_TEAM_ALLOWED = new Set([
  'held-items','choice','effort-training','type-protection','in-a-pinch',
  'other-held-items','training','vitamins','plates','species-specific',
  'type-enhancement','stat-boosts','battle-items','pp-recovery','revival',
  'berries','berry-pockets','effort-drop','baking-only','scarves',
  'healing','medicine','status-cures',
])

function isTeamAllowed(catName) {
  return CAT_TEAM_ALLOWED.has(catName)
}
