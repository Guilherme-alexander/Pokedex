/* ═══════════════════════════════════════════
   SHARED CONSTANTS & UTILS
═══════════════════════════════════════════ */
const TYPE_COLORS = {
  fire:'#fd7d24',water:'#1E90FF',grass:'#9bcc50',bug:'#7a9e4a',
  flying:'#aaaaaa',poison:'#b97fc9',electric:'#ffbd00',ground:'#cdb25a',
  fairy:'#e27a9d',psychic:'#dc439d',fighting:'#ea3b3b',rock:'#a38c21',
  ghost:'#9b82d3',ice:'#51c4e7',dragon:'#9988ff',dark:'#777777',
  steel:'#aaaaaa',normal:'#aaaaaa'
}
const TYPE_CHART = {
  normal:{fighting:2,ghost:0},
  fire:{water:2,ground:2,rock:2,fire:.5,grass:.5,ice:.5,bug:.5,steel:.5,fairy:.5},
  water:{electric:2,grass:2,fire:.5,water:.5,ice:.5,steel:.5},
  electric:{ground:2,electric:.5,flying:.5,steel:.5},
  grass:{fire:2,ice:2,poison:2,flying:2,bug:2,water:.5,electric:.5,grass:.5,ground:.5},
  ice:{fire:2,fighting:2,rock:2,steel:2,ice:.5},
  fighting:{flying:2,psychic:2,fairy:2,bug:.5,rock:.5,dark:.5},
  poison:{ground:2,psychic:2,fighting:.5,poison:.5,bug:.5,grass:.5,fairy:.5},
  ground:{water:2,grass:2,ice:2,electric:0,poison:.5,rock:.5},
  flying:{electric:2,ice:2,rock:2,fighting:.5,bug:.5,grass:.5,ground:0},
  psychic:{bug:2,ghost:2,dark:2,fighting:.5,psychic:.5},
  bug:{fire:2,flying:2,rock:2,fighting:.5,ground:.5,grass:.5},
  rock:{water:2,grass:2,fighting:2,ground:2,steel:2,normal:.5,fire:.5,poison:.5,flying:.5},
  ghost:{ghost:2,dark:2,normal:0,fighting:0,poison:.5,bug:.5},
  dragon:{ice:2,dragon:2,fairy:2,fire:.5,water:.5,electric:.5,grass:.5},
  dark:{fighting:2,bug:2,fairy:2,ghost:.5,dark:.5,psychic:0},
  steel:{fire:2,fighting:2,ground:2,normal:.5,grass:.5,ice:.5,flying:.5,psychic:.5,bug:.5,rock:.5,dragon:.5,steel:.5,poison:0,fairy:.5},
  fairy:{poison:2,steel:2,fighting:.5,bug:.5,dark:.5,dragon:0}
}
const ALL_TYPES=['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy']
const TYPE_ABBR={normal:'NOR',fire:'FIR',water:'WAT',electric:'ELE',grass:'GRA',ice:'ICE',fighting:'FIG',poison:'POI',ground:'GRO',flying:'FLY',psychic:'PSY',bug:'BUG',rock:'ROC',ghost:'GHO',dragon:'DRA',dark:'DAR',steel:'STE',fairy:'FAI'}
const TYPE_BG={normal:'#9EA0A5',fire:'#fd7d24',water:'#1E90FF',electric:'#ffbd00',grass:'#78C850',ice:'#98D8D8',fighting:'#C03028',poison:'#A040A0',ground:'#E0C068',flying:'#A890F0',psychic:'#F85888',bug:'#A8B820',rock:'#B8A038',ghost:'#705898',dragon:'#7038F8',dark:'#705848',steel:'#B8B8D0',fairy:'#EE99AC'}
const STAT_COLORS={hp:'#ff5959',attack:'#f5ac78',defense:'#fae078','special-attack':'#9db7f5','special-defense':'#a7db8d',speed:'#fa92b2'}
const STAT_LABELS={hp:'HP',attack:'Ataque',defense:'Defesa','special-attack':'Atq. Esp.','special-defense':'Def. Esp.',speed:'Velocidade'}
const MOVE_DAMAGE_CLASS_COLOR={physical:'#f5ac78',special:'#9db7f5',status:'#a7db8d'}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
const pad = n => String(n).padStart(3,'0')
const slug = s => s.replace(/-/g,' ')

async function apiFetch(url) {
  const r = await fetch(url)
  return r.json()
}

function calcDefenses(types) {
  const eff = {}
  ALL_TYPES.forEach(att => {
    let m = 1
    types.forEach(def => { m *= (TYPE_CHART[att]?.[def] ?? 1) })
    eff[att] = m
  })
  return eff
}

function renderDefGrid(types) {
  const eff = calcDefenses(types)
  return ALL_TYPES.map(att => {
    const m = eff[att]
    let label = m===0?'0':m===.25?'¼':m===.5?'½':m===2?'2':m===4?'4':''
    const cls = m<1?'def-low':m>1?'def-high':'def-neutral'
    return `<div class="def-cell">
      <div class="def-type-badge" style="background:${TYPE_BG[att]}">${TYPE_ABBR[att]}</div>
      <div class="def-mult ${m===0?'def-zero':cls}">${label}</div>
    </div>`
  }).join('')
}

function renderTypeBadges(types) {
  return types.map(t=>`<span class="type type-${t}">${t}</span>`).join('')
}

function renderStatBars(stats) {
  return stats.map(s => {
    const n=s.stat.name, v=s.base_stat
    return `<div class="stat-row">
      <span class="stat-name">${STAT_LABELS[n]||n}</span>
      <span class="stat-value">${v}</span>
      <div class="stat-bar-bg">
        <div class="stat-bar-fill" style="width:${Math.min(100,Math.round(v/255*100))}%;background:${STAT_COLORS[n]||'#888'}"></div>
      </div>
    </div>`
  }).join('')
}

function renderHeaderActive(page) {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(l => {
    if (l.dataset.page === page) l.classList.add('active')
  })
}
