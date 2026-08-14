# PRODUCT.md — Synthesis srl (reskin 2026)

## O que é
Nova versão estática do site institucional da **Synthesis srl** (formazione e consulenza — Via Panà 56/A, Noventa Padovana PD, Veneto, Itália). Reskin/upgrade do site WordPress atual (`synthesis-srl.com`): mesma empresa, mesmo conteúdo, mesma identidade — padrão visual e de UX elevado ao nível do site de referência escolhido pelo cliente (**hotmart.com**).

## Verdade do produto (não inventar, não alterar)
- Ente de formação fundado em **1996**; accreditado **Regione del Veneto** (Formazione Continua e Superiore, Dec. 217/2003, n. iscr. A0291; servizi per il lavoro L023/Dec. 515/2012); **ISO 9001:2015**; **Forma.Temp** n. 364 sez. A; **Centro d'esame PLIDA**; Modello 231.
- Credencial obrigatória em destaque fora da logo: **"Organismo di Formazione accreditato dalla Regione del Veneto"** (vive na credbar do topo, no footer e na página Contatti).
- Números reais: **20.083 utenti**, **251.355 ore di formazione**, **800 tazze di caffè** (contadores da home original).
- Contatos: tel **049 80 78 751**, **formazione@synthesis-srl.com**, P.IVA 03463230288, C.F. 02708770231. Social: Facebook/Instagram (synthesisformazione), LinkedIn (synthesis-srl).
- Todo conteúdo de cursos (títulos, códigos OPAL, destinatari, sede, datas, custos, locandinas/domande em PDF/DOC) vem extraído do site original — ver `_generator/cards.json` e `_generator/corsi.json`.
- Categorias vazias no original (Progetti Europei disoccupati; Formazione sanità) permanecem vazias com empty-state honesto.
- Staff: só **Giusy Locati (Fondatrice)** e **Nicola Grassetto (C.E.O.)** têm nome público; os demais cards são cargos com chip "Nominativo in aggiornamento" (o original usa placeholders; depoimentos Lorem ipsum do original estavam ocultos e NÃO foram reproduzidos).

## Marca (compromissos)
- Logo horizontal oficial (arquivo-fonte do cliente: `assets/img/logo-atual.png`): pantera preta + "Synthesis" azul + "srl" + "FORMAZIONE E CONSULENZA" espaçado. **Sem o círculo azul antigo.** No site é um lockup: `assets/img/pantera.png` (+ variante branca) + texto real em Poppins 600.
- Paleta: azul ciano da marca `#29ABE2` + "preto" petróleo `#071E2B` (tokens no CSS).
- Referência estética pinada pelo cliente: Hotmart (header pílula flutuante, hero em campo de cor, CTAs pílula, cards arredondados).

## Público / modo
Persuade. Visitantes: disoccupati (formação gratuita/AxL/GOL), aziende/occupati (fundos interprofissionais), cittadini stranieri (PLIDA, tirocini extra-UE), inclusão social. Ação-alvo: pedir informações (form → mailto / telefone) ou baixar locandina.

## Restrições
- Site 100% estático (sem backend): o form abre o client de e-mail via `mailto:` — trocar por backend/CF7 se migrar para WP.
- Idioma do site: italiano. Manutenção documentada em pt-BR (DESIGN.md, README-CONSEGNA.md).
