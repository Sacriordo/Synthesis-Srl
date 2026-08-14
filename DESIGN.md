---
name: Synthesis srl — Formazione e Consulenza
description: Site estático (61 páginas) em cânone plataforma-SaaS (referência Hotmart) executado na identidade azul Synthesis.
colors:
  ink: "#071E2B"        # blue-black — o "nero" da marca; credbar, section-ink, footer, badges
  ink-2: "#0D3247"      # hover do .btn-ink (--ink-3 e --blue-200 existem no :root mas não são usados)
  blue-800: "#075E93"
  blue-700: "#0A72B2"
  blue-600: "#0E86C8"   # ação primária
  blue-500: "#189BDD"
  blue-400: "#29ABE2"   # ciano do logo
  blue-300: "#62C4EC"
  blue-100: "#D7EFFA"
  blue-50: "#EDF7FC"
  cloud: "#F3F7FA"      # fundo de seção alternada e de inputs
  paper: "#FFFFFF"
  line: "#DCE7EE"
  line-2: "#C3D6E0"
  txt: "#1B2B36"
  txt-2: "#46606F"      # texto secundário no branco — 4.6:1
  txt-inv: "#FFFFFF"
  txt-inv-2: "#C2E4F5"  # texto secundário sobre ink/azul
  ok: "#12805C"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Segoe UI, sans-serif"   # --f-display
    fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)"                  # h1
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-.015em"
  headline:
    fontFamily: "Bricolage Grotesque, Segoe UI, sans-serif"
    fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)"                  # h2 (h3: clamp(1.25rem,2.2vw,1.6rem)/700)
    fontWeight: 800
  body:
    fontFamily: "Figtree, Segoe UI, sans-serif"               # --f-body
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Poppins, Figtree, sans-serif"                # --f-logo — SÓ no wordmark da marca
    fontWeight: 600
rounded:
  r-sm: "10px"
  r-md: "14px"
  r-lg: "20px"
  r-xl: "28px"
  pill: "999px"   # valor literal usado em botões, tabs, chips, head-bar
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"      # --gutter
  section: "clamp(3.4rem, 7vw, 5.6rem)"      # .section (padding-block)
  section-tight: "clamp(2.4rem, 5vw, 3.6rem)"
components:
  button-primary: { backgroundColor: "{colors.blue-600}", textColor: "#FFFFFF", rounded: "{rounded.pill}", padding: ".8rem 1.5rem" }
  button-primary-hover: { backgroundColor: "{colors.blue-700}" }
  button-ink: { backgroundColor: "{colors.ink}", textColor: "#FFFFFF", rounded: "{rounded.pill}" }
  button-ghost: { backgroundColor: "transparent", textColor: "{colors.ink}", rounded: "{rounded.pill}" }
  button-white: { backgroundColor: "#FFFFFF", textColor: "{colors.ink}", rounded: "{rounded.pill}" }
  pill-chip: { backgroundColor: "{colors.blue-50}", textColor: "{colors.blue-800}", rounded: "{rounded.pill}", padding: ".4rem .9rem" }
  card: { backgroundColor: "{colors.paper}", rounded: "{rounded.r-lg}" }
  input: { backgroundColor: "{colors.cloud}", textColor: "{colors.txt}", rounded: "{rounded.r-sm}", padding: ".78rem .95rem" }
---

# Design System: Synthesis srl — "Pantera" (reskin 2026)

## Overview

**Creative North Star: "O cânone Hotmart em azul Synthesis"** — direção fixada pelo brief do cliente e carbonizada no comentário THESIS/OWN-WORLD no topo de `index.html`.

Site estático multi-página (61 páginas) da Synthesis srl (formazione e consulenza, Noventa Padovana, Veneto). A superfície rejeita o look "brochure de ente de formação" e adota o cânone plataforma-SaaS: fundo branco com campos azuis comprometidos (petróleo `--ink` → ciano `--blue-400`), header branco flutuante em pílula sob a barra de credenciamento, CTAs em pílula, cards de raio 14–28px com sombras offset+blur, ícones stroke 1.75. A marca é a pantera preta rasterizada (`assets/img/pantera.png`, extraída do logo horizontal oficial) + faixa de credencial "Organismo di Formazione accreditato dalla Regione del Veneto" com o brasão oficial (`assets/img/u2104-regione.png`) — presentes em todas as páginas.

**Key Characteristics:** branco + campos azuis comprometidos; pílulas em toda interação; pantera-marca d'água (`.pantera-mark`, opacity .05–.08) em heros/footer; credencial da Regione sempre visível; conteúdo 100% factual (nada inventado).

## Colors

Paleta monocromática azul de 12 passos + neutros frios; um único acento funcional fora dela (`--ok`, verde de sucesso do form).

### Primary
- **Azul-ação** (`--blue-600`): botões primários, ícones dentro de cards, links de curso. Hover escurece para `--blue-700`; links de texto usam `--blue-700`/`--blue-800`.
### Secondary
- **Petróleo "nero" da marca** (`--ink`): credbar, `.section-ink`, footer, badges, botão `.btn-ink`. É o preto do site — não existe `#000`.
- **Ciano do logo** (`--blue-400`): wordmark, `::selection`; `--blue-300` para `em` no h1 e ícones sobre azul.
### Neutral
- **Paper/Cloud** (`--paper`/`--cloud`): fundos alternados de seção; cloud também é fundo de inputs e tabs.
- **Linhas** (`--line`, `--line-2` para dashed/ghost); **texto** `--txt`/`--txt-2` no branco, `--txt-inv`/`--txt-inv-2` sobre ink/azul.

**A Regra dos Campos Comprometidos.** Fundos azuis nunca são tints tímidos: heros internos (`.page-hero`), `.section-ink` e footer usam gradientes de `--ink` a `--blue-500/700` com radial-gradients de luz ciano; texto sobre eles `#fff` + `--txt-inv-2`. Exceção deliberada: o hero da home (`.hero-home`) é um campo CLARO (branco→`#F2F9FD` com glows ciano a 12–16%) para receber a foto real e os stat-chips — pedido do cliente, mock aprovado.

## Typography

**Display:** Bricolage Grotesque (500–800) · **Body:** Figtree (400–700) · **Logo:** Poppins 600 — só no wordmark (`.brand-line1`, `.brand-cap`). Carregadas via Google Fonts (`<link>` no `<head>` de cada página).

### Hierarchy
- **Display/h1** (800, `clamp(2.1rem,4.6vw,3.4rem)`, lh 1.12, ls −.015em): heros. No `.hero-home` o h1 é `clamp(2rem,3.9vw,3.15rem)` em `--ink`, com trecho destacado `<span class="hl">` (texto `--blue-700` + marca-texto `--blue-100` via background-image).
- **Headline/h2** (800, `clamp(1.7rem,3.2vw,2.5rem)`) · **Title/h3** (700, `clamp(1.25rem,2.2vw,1.6rem)`) · **h4** (700, 1.125rem).
- **Body** (400, 1.0625rem, lh 1.65); prosa limitada a `--w-prose: 72ch` (`.prose`). Headings usam `text-wrap:balance`.
- **Label/wordmark**: `.brand-cap` = Poppins 600, .5rem, ls .265em, uppercase.

**A Regra do Poppins.** Poppins existe apenas para o wordmark do logo. Nunca em títulos ou corpo.

## Layout

- **Container:** `.container` = `--w-max: 1200px` + `padding-inline: var(--gutter)`.
- **Cromo por página:** skip-link → `.credbar` → `.site-head` (sticky, pílula `.head-bar`) → `.drawer-veil`/`.drawer` → `main#main` → `.site-foot` → `.float-call` → `main.js`. O cromo é duplicado em cada página (site estático, sem includes).
- **Hero sob o header:** `.hero-home`/`.page-hero` puxam-se para baixo do header com `margin-top:calc(-1*(44px + 1.4rem + 42px))` e compensam com o mesmo `padding-top`. Qualquer novo hero precisa dessa dupla.
- **Profundidade e links:** páginas na raiz linkam `disoccupati/...`; páginas em `/corsi`, `/disoccupati`, `/occupati`, `/servizi-di-integrazione` prefixam tudo com `../` (assets inclusive). Não há URLs absolutas internas.
- **Grids recorrentes:** `.layout-side` (1fr + 340px, sidecard sticky top:130px), `.split` (2 col), `.contact-wrap` (.9fr/1.1fr), `.cards-grid` (auto-fill minmax(310px,1fr)), `.cards-rail` (colunas de `clamp(300px,31%,380px)` com scroll-snap).
- **Breakpoints principais:** 1140px (nav → burger), 960/900/860/840px (grids → 1 coluna), 760px (credbar esconde `.hide-s`), 700/680/640/620/600px (ajustes locais).

## Elevation & Depth

Sombras offset+blur tingidas pelo ink — nunca cinza puro. Superfícies em repouso têm `--sh-sm` ou borda; hover eleva (`translateY(-2/-3/-4px)` + sombra maior).

### Shadow Vocabulary
- **--sh-sm** (`0 1px 2px rgba(7,30,43,.06), 0 2px 8px rgba(7,30,43,.06)`): cards em repouso, chips.
- **--sh-md** (`0 2px 4px rgba(7,30,43,.07), 0 10px 24px rgba(7,30,43,.10)`): head-bar, sidecard, hover de rows.
- **--sh-lg** (`0 4px 10px rgba(7,30,43,.08), 0 24px 48px rgba(7,30,43,.16)`): dropdowns, path-card, form-card, hover de cards.
- **--sh-blue** (`0 6px 14px rgba(14,134,200,.24), 0 16px 40px rgba(14,134,200,.18)`): halo do `.btn-primary` e `.float-call`.

**A Regra do Hover que Levanta.** Interativos sobem 2–4px no hover com sombra um degrau acima; `:active` volta a 0.

## Shapes

Cantos generosos e progressivos: `--r-sm` 10px (inputs, links de drop), `--r-md` 14px (rows, meta-chips), `--r-lg` 20px (cards, dropdowns), `--r-xl` 28px (path-card, form-card, target-panel, drawer). Pílula (999px) para tudo que é ação: botões, tabs, nav-links, badges, head-bar. Bordas `1px solid var(--line)` em superfícies, `1.5px` em rows clicáveis (`.path-list a`, `.tab-links a`, `.dl-row`), `1.5px dashed var(--line-2)` no `.empty-state`. Ícones: sistema único de SVG inline stroke 1.75 (`.ic`, `.ic-lg`, seta `.ic-arr` desliza 4px no hover).

## Components

| Componente | Classes | Notas |
|---|---|---|
| Barra de credencial | `.credbar` `.credbar-seal` `.credbar-links` | Fundo ink, 42px; brasão Regione + telefone/e-mail (`.hide-s` some <760px) |
| Header flutuante | `.site-head` `.head-bar` `.brand` `.brand-line1` `.brand-cap` | Sticky; pílula branca com `--sh-md`; `.is-stuck` liga backdrop gradiente; `.brand-inv` no footer |
| Nav + dropdowns | `.nav` `.nav-link` `.drop` `.drop-group` `.drop-sub` | Abre por hover/focus-within; sub-menu lateral; some <1140px (vira `.burger`) |
| Drawer mobile | `.drawer` `.drawer-veil` `.drawer-head` `.drawer-nav` `.acc-btn` `.acc-panel` `.drawer-foot` `.drawer-seal` | `body.drawer-open`; acordeões multinível via grid-rows 0fr→1fr |
| Botões | `.btn` + `-primary` `-ink` `-ghost` `-white` `-onblue-ghost` `-sm` | Pílula, peso 700; `-onblue-ghost`/`-white` só sobre campos azuis |
| Hero home | `.hero-home` `.hero-grid` `.chip-row` `.t-chip` `.hl` `.hero-sub` `.hero-ctas` `.link-underline` `.hero-visual` `.hero-photo` `.stat-chip.s1/.s2/.s3` `.pantera-peek` | Campo claro; chips de credencial reais; foto real 11/10 com stat-chips flutuantes e pantera espiando; TUDO acima da dobra @1280×860 |
| Card "trova il percorso" | `.path-card` `.path-list` `.path-ic` `.path-foot` | Componente disponível no CSS (não usado na home atual — as rotas vivem nos tabs) |
| Hero interno | `.page-hero` `.crumbs` `.meta-chips` `.meta-chip` | Breadcrumb + chips de meta (cursos); SEM badge/eyebrow (banido no craft-floor) |
| Seções | `.section` `.section-tight` `.section-cloud` `.section-ink` `.section-head` `.head-row` | Alternância paper/cloud/ink |
| Tabs de público | `[data-tabs]` `.tabs` `.tab` `.tab-panel` `.tab-media` `.tab-links` `.more` | Home; ARIA tabs + setas do teclado; `details.more` = "Leggi tutto" |
| Painéis alternados | `.targets` `.target-panel` `.target-media` `.target-body` `.target-links` | Imagem/texto alternando por `:nth-child(even)` |
| Card de curso | `.corso-card` `.corso-media` `.corso-badge` `.corso-title` `.corso-meta` `.corso-x` `.corso-go` | Link estendido via `::after`; badge ink (`.alt` azul); zoom da imagem no hover |
| Trilho de cards | `.rail-wrap` `.rail-btn.prev/.next` `.cards-rail` / grade `.cards-grid` | Setas pageiam 1 card; `disabled` nas pontas |
| Estado vazio | `.empty-state` | Categoria sem cursos — borda dashed, honesto, com CTA de contato |
| Números | `.numbers` `.number` `[data-count]` | Contadores no `.section-ink` da home |
| Split + chip | `.split` `.split-media` `.float-chip` | Chi siamo |
| Marquee parceiros | `.marquee` `.marquee-track` | Logos grayscale, coloridos no hover |
| Prosa + sidebar | `.prose` `.layout-side` `.sidecard` `.meta-list` `.side-note` `.fund-logo` | Sidecard sticky com CTAs; `.fund-logo` nas páginas de fundos |
| Downloads | `.dl-list` `.dl-row` `.dl-kind` | Locandinas/PDFs com `download` |
| Staff | `.staff-grid` `.staff-card` `.staff-ph` `.role` `.mail` `.pending-chip` | `.pending-chip` âmbar = "Nominativo in aggiornamento" |
| Certificações | `.cert-list` `.cert-item` | Logo 150px + texto |
| Contato/form | `.contact-wrap` `.contact-methods` `.form-card` `.form-grid` `.field` `.check-row` `.form-ok` `.form-note` `[data-mailform]` | Inputs cloud→branco no focus (anel `rgba(41,171,226,.18)`); submit abre `mailto:formazione@synthesis-srl.com` |
| Mapa / credencial | `.map-frame` (iframe lazy `data-src`) · `.accred-band` | `.accred-band` = faixa azul-50 reutilizável com brasão |
| Footer | `.site-foot` `.foot-top` `.foot-col` `.foot-brand` `.foot-seal` `.foot-social` `.foot-contact` `.foot-legal` | Ink, 4 colunas, selo Regione, pantera fantasma |
| Flutuante + utils | `.float-call` · `.pill` `.pill-row` `.ic` `.ic-arr` `.mt-1..4` `.tc` `.note-muted` `.visually-hidden` | `.float-call` fixo (só ícone <700px) |

## Motion

Easing única: `--ease: cubic-bezier(.22,.9,.24,1)`. Tudo em `assets/js/main.js` (IIFE, sem dependências).

- **Reveal `.rv`**: opacity 0 + translateY(26px) → `.in` (34px no hero). Delays escalonados `.rv-d1..d4` (.08–.32s). IntersectionObserver (threshold .08, rootMargin −8%), revela uma vez e faz unobserve.
- **Contadores `[data-count]`**: 1800ms ease-out-quart, formatação `it-IT`, disparam a 40% visível.
- **Marquee**: JS duplica o track; `animation: marquee 46s linear infinite`, pausa no hover, máscara de fade nas bordas.
- **Tabs**: troca de painel anima `tabIn` (.45s, fade + 10px).
- **Micro**: hover levanta (botões/cards/rows), `.ic-arr` translateX(4px), chevrons giram 180°, imagem de curso `scale(1.045)`.
- **`prefers-reduced-motion: reduce`**: CSS zera durations/animations, `.rv` já visível, marquee vira wrap estático; JS pula IO/duplicação, contadores mostram valor final, scroll do rail vira `auto`.

## Do's and Don'ts

### Do:
- **Do** reusar o cromo inteiro (credbar→header→drawer→footer→float-call) copiando de uma página da mesma profundidade — os prefixos `../` já vêm corretos.
- **Do** aplicar `.rv` (+ `.rv-d*`) a cada bloco novo de seção; a revelação é o sistema de entrada padrão.
- **Do** manter o par negativo-margin/padding-top dos heros e o `em` ciano no h1.
- **Do** usar `.empty-state` quando uma categoria não tem cursos e `.pending-chip` quando um dado oficial ainda não foi publicado.

### Don't:
- **Don't** inventar fatos, números, nomes ou cursos — o conteúdo vem do site original; onde falta, a página diz isso explicitamente (regra do `_generator/build.py`).
- **Don't** usar `#000`, cinzas quentes ou sombras não-tingidas; o escuro é `--ink` e as sombras levam rgba(7,30,43,…).
- **Don't** usar Poppins fora do wordmark, nem cantos retos/raios fora da escala `--r-*`/pílula.
- **Don't** trocar os ícones por bibliotecas externas — só SVG inline stroke 1.75 (`.ic`).

## Regeneração das páginas

**Versão em arquivo único.** `python _generator/build_single.py` empacota as 61 páginas em `synthesis-sito-completo.html` (4 MB): CSS/JS inline, fontes e imagens em data URI (dicionário `IMG` resolvido em runtime, para não repetir o mesmo data URI em várias páginas), seção de contato deduplicada e roteador por hash (`#/rota`). Pré-requisitos, rodados uma vez: `optimize_images.py` (gera `img_cache.json`) e `fetch_fonts.py` (gera `fonts.css`). Os downloads apontam para os arquivos reais em synthesis-srl.com. Verificação de integridade: `python _generator/check_links.py` (checa todas as referências locais das 61 páginas).

O site é gerado por `_generator/build.py` (autossuficiente: lê `asset_map.json`, `cards.json`, `corsi.json` e `privacy-policy.txt` da própria pasta e escreve as 61 páginas na raiz). Rode `python _generator/build.py` após qualquer mudança de conteúdo/cromo; edições pontuais também podem ir direto no HTML. CSS e JS são únicos e compartilhados: `assets/css/style.css` e `assets/js/main.js`.
