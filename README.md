# Jolie Nail Salon — sito vetrina

Sito statico (HTML/CSS/JS vanilla, zero librerie) per **Jolie Nail Salon**, via Lodovico Montegani 13, 20141 Milano (quartiere Stadera).

## Dati attività (verificati luglio 2026)

- **Indirizzo:** Via Lodovico Montegani 13, 20141 Milano (MI)
- **Telefono:** 379 109 5328 (da scheda Google Maps e biglietto da visita in foto)
- **Email:** jolienailsalon@hotmail.com (dal biglietto da visita)
- **Orari:** lun–sab 9:00–20:30 · dom 9:00–20:00 (7 giorni su 7)
- **Prenotazioni:** [Treatwell](https://www.treatwell.it/salone/jolie-nail-salon/) — 4,8/5 con 199 recensioni verificate
- **Google Maps:** 4,9/5 con 44 recensioni
- **Team:** Lina, Lea, Susy, Ting — marchi CND Shellac e OPI
- **Instagram:** [@jolie_nail_salon](https://www.instagram.com/jolie_nail_salon/) — *attribuzione probabile ma da confermare col cliente (login wall)*

## Struttura

- `index.html` — pagina unica: hero, salone, servizi/listino, boutique press-on, galleria, recensioni, contatti
- `css/style.css` — mobile-first, palette porcellana/nero/rosa peonia, `prefers-reduced-motion` rispettato
- `js/main.js` — i18n IT/EN (dizionario `data-i18n`), menu mobile accessibile (inert + focus), reveal on scroll
- `assets/img/` — foto reali del salone; `_originali/` (escluse da git) contiene i file sorgente non ritagliati

## ⚠️ Diritti foto e contenuti — DA REGOLARIZZARE prima dell'uso commerciale

- Le foto provengono dalla **galleria Treatwell del salone** (8, caricate dal salone) e dalla **scheda Google Maps** (3–4, di autori vari). Per una demo va bene; prima di consegnare il sito al cliente servono **l'autorizzazione del salone o le foto ufficiali**.
- Il **listino prezzi** riproduce i prezzi pieni pubblicati su Treatwell a luglio 2026 — da far confermare al cliente.
- Le **citazioni recensioni** sono brevi estratti attribuiti (Google/Treatwell) — da far approvare al cliente.
- La voce "ricostruzione da 7 €" trovata su Treatwell è ambigua (probabile riparazione singola unghia) e **non è stata pubblicata**: la card rimanda a "su preventivo".

## Anteprima locale

Server `jolie-nail-salon` in `.claude/launch.json` (npx serve, porta 5502), oppure:

```
npx serve "C:\Users\krist\Desktop\Claude\jolie-nail-salon" -l 5502
```

## Pubblicazione

GitHub Pages, repo `rotenzark/jolie-nail-salon`, branch `main`, path `/`. Cache-busting `?v=N` su css/js a ogni modifica.
