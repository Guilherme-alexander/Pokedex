<div align="center">

# 🔴 Pokédex

**Uma Pokédex completa e interativa construída com JavaScript vanilla e PokéAPI**

[![PokéAPI](https://img.shields.io/badge/PokéAPI-v2-ef5350?style=flat-square&logo=pokemon&logoColor=white)](https://pokeapi.co)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Grid%20%2B%20Flexbox-1572b6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-e34f26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [API Reference](#-api-reference)
- [Otimizações Realizadas](#-otimizações-realizadas)
- [Roadmap — Próximos Updates](#-roadmap--próximos-updates)

---

## 🧩 Sobre o Projeto

Pokédex web que consome a [PokéAPI v2](https://pokeapi.co/docs/v2) para exibir dados completos de até **800 Pokémons**, com página de detalhes rica em informações, filtros por tipo, busca em tempo real e suporte a Mega Evoluções, formas regionais e Z-Moves.

O projeto foi inteiramente reescrito: **jQuery removido**, código migrado para **JavaScript ES Modules moderno**, tipagem de CSS refatorada com variáveis customizadas e layout refeito com **tema escuro** e design system consistente.

---

## ✨ Funcionalidades

### Index — Lista de Pokémons
| Feature | Descrição |
|---|---|
| 🔎 **Busca em tempo real** | Filtra por nome ou número (`#025`, `25`, `pikachu`) com highlight no resultado |
| 🏷️ **Filtro por tipo** | 18 tipos disponíveis — Fire, Water, Grass, etc. Combina com a busca |
| ⌨️ **Atalho de teclado** | `/` para focar a busca, `Esc` para limpar |
| 📦 **Carregamento em batch** | Pokémons carregados em lotes de 20 com renderização progressiva |
| 📱 **Responsivo** | Grid adaptativo de cards para qualquer tamanho de tela |

### Pokémon — Página de Detalhes
| Feature | Descrição |
|---|---|
| 🖼️ **Artwork oficial** | Usa a arte oficial de alta resolução quando disponível |
| 📊 **Base Stats** | Barras animadas e coloridas por stat (HP, Ataque, Defesa…) |
| 🔄 **Seletor de formas** | Troca entre Normal / Mega X / Mega Y / Gigantamax / Alola / Galar dinamicamente |
| ⚡ **Mega Evoluções** | Cards clicáveis que atualizam toda a página com stats, tipos e habilidades da forma |
| 🧬 **Cadeia de Evolução** | Exibe todos os estágios com método (nível, troca, amizade, pedra…) e múltiplos galhos (ex: Eevee) |
| 💡 **Habilidades** | Nome, descrição e identificação de habilidade oculta |
| ⚔️ **Z-Moves** | Lista os Z-Moves disponíveis baseado nos tipos do Pokémon |
| 🎯 **Moves com abas** | Level Up / TM-HM / Ovo / Tutor / Todos |
| 🛡️ **Fraquezas & Resistências** | Tabela completa 18 tipos calculada localmente, inclui imunidades e duplas fraquezas |

---

## 📁 Estrutura do Projeto

```
pokedex/
├── index.html          # Lista principal com busca e filtros
├── pokemon.html        # Página de detalhes do Pokémon
├── css/
│   ├── style.css       # Estilos da lista (tema escuro, grid, cards)
│   └── status.css      # Estilos da página de detalhes
└── js/
    └── requests.js     # Fetch em batch, filtros, busca e renderização
```

---

## 🚀 Como Usar

Por ser um projeto estático, basta servir os arquivos com qualquer servidor local:

```bash
# Com Node.js
npx serve .

# Com Python
python -m http.server 8080

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Depois acesse `http://localhost:8080` no navegador.

> **Nota:** Abrir `index.html` direto pelo sistema de arquivos (`file://`) pode causar erros de CORS nas requisições à API. Use sempre um servidor local.

---

## 📡 API Reference

Dados fornecidos pela [PokéAPI v2](https://pokeapi.co/docs/v2) — gratuita, sem autenticação.

| Endpoint | Uso |
|---|---|
| `/api/v2/pokemon/{id}` | Stats, tipos, habilidades, moves, sprites |
| `/api/v2/pokemon-species/{id}` | Variedades, cadeia de evolução, formas |
| `/api/v2/evolution-chain/{id}` | Estrutura completa da cadeia |
| `/api/v2/ability/{id}` | Descrição das habilidades |

**Exemplos:**
```
https://pokeapi.co/api/v2/pokemon/6
https://pokeapi.co/api/v2/pokemon/charizard-mega-x
https://pokeapi.co/api/v2/pokemon-species/6
https://pokeapi.co/api/v2/evolution-chain/2
```

---

## ⚙️ Otimizações Realizadas

### Remoção de dependências
- ❌ **jQuery removido** — todo o código migrado para JavaScript vanilla ES2022
- ❌ **Sem bibliotecas externas** — zero dependências de terceiros

### Arquitetura e código
- ✅ **Carregamento em batch** — requisições em lotes de 20 com `Promise.all`, evitando 800 chamadas simultâneas e respeito ao fair use da PokéAPI
- ✅ **Renderização progressiva** — cards aparecem conforme os lotes chegam, sem travar a UI
- ✅ **Cache de habilidades** — descrições buscadas uma única vez e armazenadas em memória durante a sessão
- ✅ **Carregamento paralelo** — habilidades e cadeia de evolução buscadas simultaneamente com `Promise.all`
- ✅ **Lazy loading de imagens** — atributo `loading="lazy"` em todos os cards da lista
- ✅ **Filtros locais** — busca e filtro por tipo operam sobre dados já carregados, sem novas requisições

### CSS e design
- ✅ **CSS Variables** — sistema de tokens para cores, espaçamentos e raios, facilitando temas
- ✅ **Tema escuro** — design system coeso com paleta `#0d0d0f` / `#18181c` / `#1e1e24`
- ✅ **Tipografia** — fontes `Space Grotesk` + `Exo 2` via Google Fonts
- ✅ **Animações CSS** — `floatPoke` na artwork e `bounce` nos cards em hardware-accelerated transforms
- ✅ **Grid responsivo** com `auto-fill` + `minmax` sem media queries excessivas

### Página de detalhes
- ✅ **Artwork oficial** — usa `official-artwork` em HD com fallback para sprite padrão
- ✅ **Troca de forma dinâmica** — Mega/Gmax/formas regionais atualizam stats, tipos, habilidades, Z-Moves e tabela de fraquezas sem reload
- ✅ **Cálculo local de efetividade** — matriz 18×18 calculada no cliente, sem endpoint extra
- ✅ **Z-Moves calculados** — lookup table local por tipo, sem requisição adicional

---

## 🗺️ Roadmap — Próximos Updates

### 🔜 Em planejamento

- [ ] **Busca fonética** — encontrar Pokémons por sons parecidos (ex: "bulbassauro" → Bulbasaur)
- [ ] **Comparador de Pokémons** — selecionar dois e comparar stats lado a lado
- [ ] **Modo Shiny** — toggle para exibir sprites shiny na lista e na página de detalhes
- [ ] **Favoritos** — salvar Pokémons favoritos com `localStorage`
- [ ] **Paginação / scroll infinito** — opção alternativa ao carregamento completo
- [ ] **Filtro por geração** — filtrar Pokémons por geração (Gen I até Gen IX)
- [ ] **Detalhes dos Moves** — ao clicar num move, exibir poder, acurácia e descrição

### 💡 Ideias futuras

- [ ] **Modo escuro / claro** — toggle de tema
- [ ] **PWA** — tornar instalável com Service Worker e cache offline
- [ ] **Animações de batalha** — sprites animados (`.gif` do showdown) na página de detalhes
- [ ] **Pokédex sonora** — tocar o cry do Pokémon via API de áudio

---

## 🔗 Links

- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [PokéAPI Sprites (GitHub)](https://github.com/PokeAPI/sprites)

---

<div align="center">
  <sub>Feito com JavaScript vanilla · Dados por <a href="https://pokeapi.co">PokéAPI</a></sub>
</div>