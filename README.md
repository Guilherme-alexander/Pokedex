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
- [Páginas](#-páginas)
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

## 📄 Páginas

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
| 💡 **Habilidades** | Nome, descrição e badge de habilidade oculta |
| 🌀 **Z-Moves** | Z-Moves disponíveis baseados nos tipos do Pokémon |
| 🎯 **Moves com abas** | Level Up / TM-HM / Ovo / Tutor / Todos |
| 🛡️ **Fraquezas & Resistências** | Tabela completa 18 tipos, atualiza ao trocar de forma |

### 3. `moves.html` — Movedex
| Feature | Descrição |
|---|---|
| ⚡ **Chunk loading 50/50** | Barra de progresso visível — moves carregam em lotes sem travar a UI |
| ⚡ **Z-Moves incluídos** | 32 Z-Moves (universais + exclusivos) pré-carregados instantaneamente |
| 🔍 **Filtro por tipo** | Todos os 18 tipos detectados automaticamente do resultado da API |
| 🎯 **Filtro por classe** | Físico / Especial / Status |
| ✨ **Filtro Z-Move** | Ver só Z-Moves ou só moves normais |
| 📋 **Modal de detalhe** | Poder, precisão, PP, prioridade, alvo, geração, descrição, efeito e lista de Pokémons que aprendem |
| 🔗 **Pokémons clicáveis** | Na lista "aprendido por", cada Pokémon leva à sua página de detalhes |

### 4. `compare.html` — Comparar
| Feature | Descrição |
|---|---|
| 🔍 **Autocomplete** | Busca por nome ou `#número` com dropdown de sugestões |
| ⚔️ **Stats lado a lado** | Barras espelhadas com destaque no vencedor em cada stat |
| 🏆 **Total BST** | Comparação final do BST total com destaque no mais alto |
| 🎯 **Moves compartilhados** | Moves em comum destacados em amarelo, exclusivos separados |
| 🛡️ **Defesas lado a lado** | Tabela de fraquezas/resistências dos dois Pokémons |

### 5. `team.html` — Montar Time
| Feature | Descrição |
|---|---|
| 👥 **6 slots** | Grid de 6 posições com busca por nome ou número |
| ⚡ **Movesets** | Escolha até 4 moves por Pokémon com select populado da API |
| 🏆 **Nota do time** | Grade S/A/B/C/D baseada em BST médio, variedade de tipos e fraquezas |
| 🎯 **Cobertura de tipos** | Quantos membros cobrem cada tipo |
| ⚠️ **Ameaças & Resistências** | Top fraquezas coletivas e resistências do time |
| 📊 **Stats totais** | BST total e médio por stat com barras visuais |
| 📦 **Exportar .json** | Exporta time completo com moves — reimportável |
| 📄 **Exportar .txt** | Resumo em texto simples para qualquer editor |
| 📝 **Exportar .md** | Markdown formatado para GitHub, Notion ou Obsidian |
| 📥 **Importar .json** | Restaura time completo (Pokémons + movesets) de um arquivo exportado |

---

## 📁 Estrutura do Projeto

```
pokedex/
├── index.html          # Lista principal com busca e filtros
├── pokemon.html        # Página de detalhes, formas, evolução
├── moves.html          # Movedex com chunk loading e Z-Moves
├── compare.html        # Comparador de dois Pokémons
├── team.html           # Montagem de time com análise e export
├── css/
│   ├── header.css      # Header sticky compartilhado (todas as páginas)
│   ├── shared.css      # Componentes reutilizáveis (badges, barras, modal)
│   ├── style.css       # Estilos da lista (grid de cards, busca, filtros)
│   └── status.css      # Estilos da página de detalhes do Pokémon
└── js/
    ├── shared.js       # Constantes, utils e funções compartilhadas
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
| `/api/v2/pokemon/{id}` | Stats, tipos, habilidades, moves, sprites |
| `/api/v2/pokemon-species/{id}` | Variedades (Megas, formas regionais), cadeia de evolução |
| `/api/v2/evolution-chain/{id}` | Estrutura completa da cadeia com métodos |
| `/api/v2/ability/{id}` | Descrição das habilidades em inglês |
| `/api/v2/move?limit=950` | Lista de todos os moves |
| `/api/v2/move/{id}` | Poder, precisão, PP, efeito, Pokémons que aprendem |

```
# Exemplos
https://pokeapi.co/api/v2/pokemon/6
https://pokeapi.co/api/v2/pokemon/charizard-mega-x
https://pokeapi.co/api/v2/pokemon-species/6
https://pokeapi.co/api/v2/evolution-chain/2
https://pokeapi.co/api/v2/move/flamethrower
```

---

## ⚙️ Otimizações Realizadas

### Remoção de dependências
- ❌ **jQuery removido** — 100% JavaScript vanilla ES2022
- ❌ **Zero bibliotecas externas** — sem npm, sem bundler, abre direto no browser

### Carregamento e performance
- ✅ **Batch loading (index)** — Pokémons em lotes de 20 com `Promise.all`, renderização progressiva
- ✅ **Chunk loading (movedex)** — Moves em lotes de 50 com `Promise.allSettled`, barra de progresso visual e UI nunca trava
- ✅ **Z-Moves pré-carregados** — 32 Z-Moves injetados localmente sem nenhuma requisição extra
- ✅ **Cache de habilidades** — descrições buscadas uma vez, armazenadas em `Map` durante a sessão
- ✅ **Carregamento paralelo** — habilidades + cadeia de evolução buscadas simultaneamente com `Promise.all`
- ✅ **Lazy loading de imagens** — `loading="lazy"` em todos os cards da lista

### Filtros e busca
- ✅ **Filtros locais** — busca, tipo e Z-Move operam sobre dados já carregados, zero requisição
- ✅ **Filtros incrementais** — movedex filtra conforme novos moves chegam, mesmo durante o carregamento

### CSS e design
- ✅ **CSS Variables** — sistema de tokens para cores, espaçamentos e raios; troca de tema com 1 variável
- ✅ **Tema escuro** — paleta `#0d0d0f / #18181c / #1e1e24` com accent `#e8ff47`
- ✅ **Fontes** — `Space Grotesk` (corpo) + `Exo 2` (títulos)
- ✅ **Header compartilhado** — sticky com glassmorphism, responsivo com hamburguer
- ✅ **Grid responsivo** — `auto-fill + minmax` sem media queries desnecessárias
- ✅ **CSS compartilhado** — `shared.css` com type badges, stat bars, modal e loader reutilizados em todas as páginas

### Página de detalhes
- ✅ **Artwork HD** — `official-artwork` com fallback automático
- ✅ **Formas dinâmicas** — Mega/Gmax/formas regionais atualizam tudo sem reload: stats, tipos, habilidades, Z-Moves, tabela de fraquezas
- ✅ **Matriz de efetividade local** — tabela 18×18 calculada no cliente sem nenhum endpoint extra
- ✅ **Z-Moves por tipo** — lookup table local, zero requisição adicional

### Export / Import (time)
- ✅ **Exportação .json** — estrutura completa reimportável (id, stats, tipos, habilidades, moves)
- ✅ **Exportação .txt** — texto simples legível em qualquer editor
- ✅ **Exportação .md** — Markdown com tabelas, pronto para GitHub, Notion ou Obsidian
- ✅ **Importação .json** — restaura time completo com movesets, refaz fetch dos dados frescos da API

---

## 🗺️ Roadmap — Próximos Updates

### 🔜 Em planejamento

- [ ] **Modo Shiny** — toggle para exibir sprites shiny na lista e nos detalhes
- [ ] **Comparador de Moves** — comparar dois moves lado a lado (poder, precisão, PP, efeito)
- [ ] **Filtro por geração** — Gen I até Gen IX no index e no comparador
- [ ] **Favoritos** — salvar Pokémons favoritos com `localStorage`
- [ ] **Sprites animados** — usar `.gif` do Showdown na página de detalhes e nos cards de time
- [ ] **Detalhes de Move no time** — tooltip com dados do move ao passar o mouse no moveset

### 💡 Ideias futuras

- [ ] **Modo claro / escuro** — toggle de tema via CSS variables
- [ ] **PWA** — instalável com Service Worker e cache offline
- [ ] **Pokédex sonora** — tocar o cry do Pokémon (áudio disponível na PokéAPI)
- [ ] **Busca fonética** — encontrar Pokémons por sons similares
- [ ] **Compartilhar time via URL** — encode do time em query params para copiar link

---

## 🔗 Links

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [PokéAPI Sprites (GitHub)](https://github.com/PokeAPI/sprites)

---

<div align="center">
  <sub>Feito com JavaScript vanilla · Dados por <a href="https://pokeapi.co">PokéAPI</a> · Zero dependências</sub>
</div>
