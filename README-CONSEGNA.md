# Consegna — Novo site Synthesis srl (reskin padrão Hotmart)

O site vem em **duas versões, com o mesmo conteúdo e o mesmo visual**:

### 1. Site completo (recomendado para publicar)
Pasta inteira, 100% estática (HTML/CSS/JS puros) — sobe em qualquer hospedagem. Preview local:

```bash
python -m http.server 8741
```

→ http://localhost:8741

### 2. Arquivo único — `synthesis-sito-completo.html` (4 MB)
As **61 páginas num só arquivo**, com CSS, JavaScript, fontes e imagens embutidos. É só dar duplo clique (ou mandar por e-mail/WhatsApp): abre em qualquer navegador, **sem servidor e sem internet**. A navegação interna usa endereços como `…#/disoccupati/programma-gol.html`, então dá para mandar o link de uma página específica.

- Imagens otimizadas para o tamanho real de exibição: 20,2 MB → 3,2 MB, sem perda visível.
- Fontes (Bricolage Grotesque, Figtree, Poppins) embutidas: funciona offline.
- **Única dependência de internet**: os 46 PDFs/DOCs (locandine e domande di partecipazione, 34 MB) continuam apontando para os arquivos reais em `synthesis-srl.com` — embuti-los deixaria o arquivo com ~50 MB. No site completo (versão 1) esses arquivos são locais, em `assets/docs/`.
- Para regenerar: `python _generator/build_single.py`.

## Árvore recriada (todas visitadas no site original e recriadas como páginas próprias)

| Original (synthesis-srl.com) | Nova página |
|---|---|
| Home `/` | `index.html` |
| Synthesis `/synthesis/` | `synthesis.html` |
| Disoccupati → Formazione finanziata | `disoccupati/formazione-finanziata.html` (10 cursos) |
| Disoccupati → Formazione a pagamento | `disoccupati/formazione-a-pagamento.html` (5 cursos) |
| Disoccupati → Assegno per il lavoro (AxL) | `disoccupati/assegno-per-il-lavoro.html` |
| Disoccupati → Programma GOL | `disoccupati/programma-gol.html` |
| Disoccupati → Progetti Europei | `disoccupati/progetti-europei.html` (vazia no original → empty-state honesto) |
| Occupati → Formazione finanziata | `occupati/formazione-finanziata.html` (7 cursos) |
| Occupati → … → FSE e FSC | `occupati/fse-fsc.html` (4 cursos) |
| Occupati → … → FonTer | `occupati/fonter.html` |
| Occupati → … → Fondartigianato | `occupati/fondartigianato.html` |
| Occupati → … → For.Te. | `occupati/for-te.html` |
| Occupati → … → Fondoprofessioni | `occupati/fondoprofessioni.html` |
| Occupati → … → Fondimpresa | `occupati/fondimpresa.html` |
| Occupati → Formazione a pagamento | `occupati/formazione-a-pagamento.html` (5 cursos) |
| Occupati → Formazione finanziata sanità | `occupati/formazione-sanita.html` (vazia no original → empty-state) |
| Occupati → Progetti Europei | `occupati/progetti-europei.html` (1 projeto: ETIRD) |
| Servizi → Italiano per stranieri | `servizi-di-integrazione/italiano-per-stranieri.html` (hub; original sem texto próprio) |
| Servizi → … → Corsi preparazione PLIDA | `servizi-di-integrazione/corsi-plida.html` |
| Servizi → … → Certificazione lingua italiana | `servizi-di-integrazione/certificazione-plida.html` |
| Servizi → Integrazione cittadini extra UE | `servizi-di-integrazione/cittadini-extra-ue.html` |
| Servizi → Inclusione sociale cittadini italiani | `servizi-di-integrazione/inclusione-sociale.html` |
| Corsi completati | `corsi-completati.html` (12 cursos) |
| Certificazioni | `certificazioni.html` |
| Contatti | `contatti.html` (mapa Google real) |
| Privacy Policy | `privacy-policy.html` (texto integral) |
| **35 páginas de curso** `/corsi/...` | `corsi/*.html` — cada card clicado abre a própria página, com descrição completa, Destinatari/Sede/Inizio/**Costo**, e os botões **"Scarica la locandina"** e **"Scarica la domanda di partecipazione"** baixando os arquivos reais de `assets/docs/` |

Também preservados: **redes sociais** (Facebook, Instagram, LinkedIn) no footer, **Cookies Policy** (link iubenda original) e **Privacy Policy**, telefone/e-mail na barra do topo, botão flutuante "Chiamaci".

## Pendências para o cliente (Nicola) — nada foi inventado
1. **Staff**: só Giusy Locati (Fondatrice) e Nicola Grassetto (C.E.O.) têm nome público no site atual. Os outros 4 cards mostram o cargo real + chip "Nominativo in aggiornamento". Os depoimentos Lorem ipsum do original estavam **ocultos** (display:none) e não foram reproduzidos.
2. **E-mail corrigido**: o original tem `gestione@syntheis-srl.com` (domínio com typo, e-mail morto) na página Certificazione PLIDA → corrigi para `gestione@synthesis-srl.com`. **Confirmar com o cliente.**
3. **Datas dos cursos**: os cursos "in partenza" têm datas de 2024/2025 (dados reais do site atual). Recomendo o cliente atualizar a lista.
4. **Formulários**: sem backend — o botão abre o cliente de e-mail com a mensagem pronta (mailto para formazione@synthesis-srl.com). Ao publicar, trocar por um backend de envio se desejado.
5. **Headline do hero** ("Trasformiamo la formazione in opportunità di lavoro.") e microcopys de navegação são copy de apresentação aprovada no mock — validar com o cliente final.
6. **"Italiano per stranieri"**: no original a página existe mas não tem texto publicado; virou um hub navegável para as 2 subpáginas.

## Estrutura
- `assets/css/style.css` + `assets/js/main.js` — design system e interações (documentados em `DESIGN.md`)
- `assets/img/` — imagens reais baixadas do site + marca (`pantera.png`, `pantera-white.png`, `favicon.png`, fonte `logo-atual.png`)
- `assets/docs/` — 46 PDFs/DOCs reais (locandinas, domande, cataloghi, codice etico, carta dei servizi)
- `_generator/` — gerador Python + dados extraídos (rodar `python _generator/build.py` regenera as 61 páginas)
- `PRODUCT.md` / `DESIGN.md` — verdade do produto e sistema visual
