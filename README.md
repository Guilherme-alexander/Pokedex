<div align="center">

# 🔴 Pokédex

**Uma Pokédex completa e interativa construída com JavaScript vanilla e PokéAPI**

[![PokéAPI](https://img.shields.io/badge/PokéAPI-v2-ef5350?style=flat-square&logo=pokemon&logoColor=white)](https://pokeapi.co)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Grid%20%2B%20Flexbox-1572b6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-e34f26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Zero Dependencies](https://img.shields.io/badge/dependências-zero-brightgreen?style=flat-square)](.)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Páginas & Funcionalidades](#-páginas--funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [API Reference](#-api-reference)
- [Otimizações Realizadas](#-otimizações-realizadas)
- [Roadmap — Próximos Updates](#-roadmap--próximos-updates)

---

## 🧩 Sobre o Projeto

Pokédex web full-featured que consome a [PokéAPI v2](https://pokeapi.co/docs/v2) para exibir dados completos de até **800 Pokémons**, com **5 páginas interligadas** por um header compartilhado: lista, detalhes, movedex, comparador e montagem de time com análise automática e exportação.

O projeto foi **inteiramente reescrito** do zero: jQuery removido, código migrado para JavaScript ES2022 moderno, CSS refatorado com variáveis customizadas, carregamento progressivo em batch e design system coeso com tema escuro.

---

## 📄 Páginas & Funcionalidades

### 1. `index.html` — Pokédex Principal
| Feature | Descrição |
|---|---|
| 🔎 **Busca em tempo real** | Filtra por nome ou `#número` com destaque no resultado |
| 🏷️ **Filtro por tipo** | 18 tipos — Fire, Water, Grass, etc. Combina com busca |
| ⌨️ **Atalho de teclado** | `/` para focar a busca, `Esc` para limpar |
| 📦 **Carregamento em batch** | Lotes de 20 com renderização progressiva — sem travar a UI |
| 📱 **Responsivo** | Grid `auto-fill + minmax` para qualquer tamanho de tela |

### 2. `pokemon.html` — Detalhe do Pokémon
| Feature | Descrição |
|---|---|
| 🖼️ **Artwork oficial HD** | Sprite `official-artwork` com fallback para sprite padrão |
| 📊 **Base Stats** | Barras animadas e coloridas por stat (HP, Ataque, Defesa…) |
| 🔄 **Seletor de formas** | Toggle entre Normal / Mega X / Mega Y / Gigantamax / Regional |
| ⚡ **Mega Evoluções** | Cards clicáveis que atualizam stats, tipos, habilidades e fraquezas sem reload |
| 🧬 **Cadeia de Evolução** | Todos os estágios com método (nível, troca, amizade, pedra…) e múltiplos galhos |
| 🪨 **Imagem do item de evolução** | Sprites de pedras e itens (Fire Stone, Dawn Stone, etc.) exibidos na seta da cadeia |
| 💡 **Habilidades** | Nome, descrição e badge de habilidade oculta |
| 🌀 **Z-Moves + Z-Crystals** | Z-Moves com imagem da Z-Crystal correspondente (Firium Z, Waterium Z…) |
| 🪨 **Mega Stones** | Imagem da Mega Stone no card de forma, no seletor e lista "Mega Stones necessárias" na seção de evolução |
| 🎯 **Moves com abas** | Level Up / TM-HM / Ovo / Tutor / Todos |
| 📋 **Modal de move** | Clicar em qualquer move abre modal com poder, precisão, PP, efeito e Pokémons que aprendem |
| 🛡️ **Fraquezas & Resistências** | Tabela completa 18 tipos, atualiza ao trocar de forma |

### 3. `moves.html` — Movedex
| Feature | Descrição |
|---|---|
| ⚡ **Chunk loading 50/50** | Barra de progresso visível — moves carregam em lotes de 50 sem travar a UI |
| ⚡ **Z-Moves incluídos** | 32 Z-Moves pré-carregados instantaneamente com badge `Z` |
| 🔍 **Filtro por tipo** | 18 tipos detectados automaticamente |
| 🎯 **Filtro por classe** | Físico / Especial / Status |
| ✨ **Filtro Z-Move** | Ver só Z-Moves ou só moves normais |
| 📋 **Modal de detalhe** | Poder, precisão, PP, prioridade, alvo, geração, descrição, efeito e lista de Pokémons que aprendem |

### Item Pages — 7 páginas separadas por categoria

| Página | Conteúdo | Categorias da PokéAPI |
|---|---|---|
| `items.html` | Held Items, Choice, Bad Held, Gems/Jewels, Plates, Memories, Incenso, Mints | `held-items`, `choice`, `bad-held-items`, `jewels`, `plates`, `memories`, `incense`, `nature-mints`… |
| `pokeballs.html` | Todas as Pokébolas com taxa de captura e multiplicador | `standard-balls`, `special-balls`, `apricorn-balls` |
| `evolution.html` | Pedras e itens de evolução | `evolution` |
| `berries.html` | Todas as Berries (comuns, pinch, poffin) | `berries`, `in-a-pinch`, `baking-only` |
| `medicine.html` | Poções, antídotos, curas de status, PP, Revive | `medicine`, `status-cures`, `pp-recovery`, `revival`, `healing` |
| `others.html` | TMs/HMs, colecionáveis, itens de jogo, Dynamax | `all-machines`, `collectibles`, `event-items`, `dynamax-crystals`… |

Todas as páginas de itens usam **chunk loading de 25 em 25** com barra de progresso, filtros por subcategoria, busca em tempo real e modal de detalhe completo.

> **Mega Stones e Z-Crystals** são exibidos diretamente na `pokemon.html` — no seletor de formas e na seção de evolução.

### 4. `compare.html` — Comparar
| Feature | Descrição |
|---|---|
| 🔍 **Autocomplete** | Busca por nome ou `#número` com dropdown de sugestões |
| 📡 **Gráfico Radar SVG** | Radar puro em SVG — A em vermelho, B em azul — comparação visual dos stats |
| ⚔️ **Stats lado a lado** | Barras espelhadas (A vermelho / B azul) com destaque no vencedor |
| 🏆 **Total BST** | Comparação do BST total |
| 💡 **Habilidades** | Habilidades de ambos os Pokémons lado a lado, com indicação de oculta |
| 🎯 **Moves compartilhados** | Moves em comum em amarelo, exclusivos separados |
| 🛡️ **Defesas com totais** | Tabela de fraquezas/resistências + contador de fraquezas, resistências e imunidades de cada Pokémon |

### 5. `team.html` — Montar Time
| Feature | Descrição |
|---|---|
| 👥 **6 slots** | Grid de 6 posições com busca por nome ou número |
| 🎲 **Randomizar Time** | Gera um time de 6 Pokémons aleatórios automaticamente |
| 🗑️ **Limpar Time** | Remove todos os Pokémons com confirmação |
| ⚡ **Movesets** | Escolha até 4 moves por Pokémon com select populado da API |
| 🏆 **Nota do time** | Grade S/A/B/C/D baseada em BST médio, variedade de tipos e fraquezas |
| 🎯 **Cobertura de tipos** | Quantos membros cobrem cada tipo |
| ⚠️ **Ameaças & Resistências** | Top fraquezas coletivas e resistências do time |
| 📊 **Stats totais** | BST total e médio por stat com barras visuais |
| 📦 **Exportar .json** | Time completo com moves — 100% reimportável |
| 📄 **Exportar .txt** | Resumo em texto simples legível em qualquer editor |
| 📝 **Exportar .md** | Markdown formatado para GitHub, Notion ou Obsidian |
| 📥 **Importar** | Detecta automaticamente o formato (.json, .txt ou .md), valida e restaura o time completo |

---

## 📁 Estrutura do Projeto

```
pokedex/
├── index.html          # Lista com busca, filtros e batch loading
├── pokemon.html        # Detalhes: formas, evolução, moves clicáveis, modal de move
├── moves.html          # Movedex com chunk loading, Z-Moves e filtros
├── compare.html        # Comparador com radar SVG, habilidades e totais de defesa
├── team.html           # Time: randomizar, clear, análise, export/import multi-formato
├── css/
│   ├── header.css      # Header sticky com glassmorphism (todas as páginas)
│   ├── shared.css      # Componentes reutilizáveis (badges, barras, modal, loader)
│   ├── style.css       # Estilos da lista (grid, busca, filtros, cards)
│   └── status.css      # Estilos da página de detalhes do Pokémon
└── js/
    ├── shared.js       # Constantes, utils, calcDefenses, renderDefGrid
    └── requests.js     # Fetch em batch, filtros, busca e renderização do index
```

---

## 🚀 Como Usar

Por ser um projeto estático, basta servir com qualquer servidor local:

```bash
# Node.js
npx serve .

# Python
python -m http.server 8080

# VS Code — instale "Live Server" e clique em "Go Live"
```

Acesse `http://localhost:8080` no navegador.

> **⚠️ Importante:** Abrir `index.html` direto pelo sistema de arquivos (`file://`) causa erros de CORS. Use sempre um servidor local.

---

## 📡 API Reference

Dados fornecidos pela [PokéAPI v2](https://pokeapi.co/docs/v2) — gratuita, sem autenticação.

| Endpoint | Uso |
|---|---|
| `/api/v2/pokemon?limit=800` | Lista de todos os Pokémons |
| `/api/v2/pokemon/{id\|name}` | Stats, tipos, habilidades, moves, sprites, formas |
| `/api/v2/pokemon-species/{id}` | Variedades (Megas, formas regionais), cadeia de evolução |
| `/api/v2/evolution-chain/{id}` | Estrutura completa da cadeia com métodos e itens |
| `/api/v2/ability/{id}` | Descrição das habilidades em inglês |
| `/api/v2/move?limit=950` | Lista de todos os moves |
| `/api/v2/move/{id\|name}` | Poder, precisão, PP, efeito, Pokémons que aprendem |
| Sprites GitHub | `PokeAPI/sprites` — sprites de Pokémons e ícones de itens |

```
# Exemplos
https://pokeapi.co/api/v2/pokemon/6
https://pokeapi.co/api/v2/pokemon/charizard-mega-x
https://pokeapi.co/api/v2/pokemon-species/6
https://pokeapi.co/api/v2/evolution-chain/2
https://pokeapi.co/api/v2/move/flamethrower

# Sprites de itens (para pedras de evolução)
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fire-stone.png
```

---

## ⚙️ Otimizações Realizadas

### Remoção de dependências
- ❌ **jQuery removido** — 100% JavaScript vanilla ES2022
- ❌ **Zero bibliotecas externas** — sem npm, sem bundler, abre direto no browser

### Carregamento e performance
- ✅ **Batch loading (index)** — Pokémons em lotes de 20 com `Promise.all`, renderização progressiva
- ✅ **Chunk loading (movedex)** — Moves em lotes de 50 com `Promise.allSettled` + `setTimeout`, barra de progresso visual, UI nunca trava
- ✅ **Z-Moves pré-carregados** — 32 Z-Moves injetados localmente sem nenhuma requisição extra
- ✅ **Cache de habilidades** — descrições buscadas uma vez por sessão
- ✅ **Cache de move detail** — moves detalhados cacheados após primeira abertura do modal
- ✅ **Carregamento paralelo** — habilidades + cadeia de evolução + sprites da evo chain em `Promise.all`
- ✅ **Lazy loading de imagens** — `loading="lazy"` em todos os cards da lista

### Filtros e busca
- ✅ **Filtros totalmente locais** — busca, tipo, classe e Z-Move operam sobre dados em memória, zero requisição
- ✅ **Filtros incrementais (movedex)** — filtros funcionam mesmo durante o carregamento, sobre os moves já disponíveis

### Visual e UX
- ✅ **Radar SVG puro** — gráfico hexagonal gerado com SVG vanilla, sem biblioteca de charts, A=vermelho B=azul
- ✅ **Imagens de itens de evolução** — sprites do GitHub exibidos na seta da cadeia (Fire Stone, Dawn Stone, etc.)
- ✅ **Modal de move na página do Pokémon** — clicar em qualquer move abre modal completo com todos os dados
- ✅ **Randomizar time** — gera 6 Pokémons aleatórios com fetch paralelo
- ✅ **Importação multi-formato** — detecta e parseia `.json`, `.txt` e `.md` com validação e feedback de erro
- ✅ **Habilidades no comparador** — exibidas lado a lado com cor A/B e badge de oculta
- ✅ **Totais de defesa no comparador** — contador de fraquezas, resistências e imunidades acima de cada tabela

### CSS e design
- ✅ **CSS Variables** — tokens globais em `:root`, troca de tema trivial
- ✅ **Tema escuro** — paleta `#0d0d0f / #18181c / #1e1e24` com accent `#e8ff47`
- ✅ **Header compartilhado** — sticky com glassmorphism, hamburguer em mobile
- ✅ **CSS compartilhado** — `shared.css` com type badges, stat bars, modal e loader reutilizados em todas as páginas

---

## 🗺️ Roadmap — Próximos Updates

### 🔜 Em planejamento

- [ ] **Modo Shiny** — toggle para exibir sprites shiny na lista e nos detalhes
- [ ] **Filtro por geração** — Gen I até Gen IX no index e no comparador
- [ ] **Favoritos** — salvar Pokémons favoritos com `localStorage`
- [ ] **Sprites animados** — usar `.gif` do Showdown na página de detalhes e nos cards de time
- [ ] **Detalhes de Move no time** — tooltip com dados do move ao passar o mouse no moveset
- [ ] **Comparar 3 Pokémons** — expandir o comparador para suportar um terceiro slot

### 💡 Ideias futuras

- [ ] **Modo claro / escuro** — toggle de tema via CSS variables
- [ ] **PWA** — instalável com Service Worker e cache offline
- [ ] **Pokédex sonora** — tocar o cry do Pokémon via áudio da PokéAPI
- [ ] **Compartilhar time via URL** — encode do time em query params para copiar link
- [ ] **Tier list** — arrastar Pokémons para tiers (S/A/B/C/D) com export de imagem

---

## 🔗 Links

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [PokéAPI Sprites (GitHub)](https://github.com/PokeAPI/sprites)

---

<div align="center">
  <sub>Feito com JavaScript vanilla · Dados por <a href="https://pokeapi.co">PokéAPI</a> · Zero dependências</sub>
</div>
