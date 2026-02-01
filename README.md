# Möncheberg Hub

Ein Stadtentwicklungs- und Kulturprojekt für den Süden Braunschweigs — konzipiert als Stadtlabor und Investorendeck.

## Struktur dieses Repos
```
moencheberg-hub/
│
├─ index.html        ← DIE Website
├─ style.css         ← Design
├─ script.js         ← Scroll, Accordion
│
├─ images/
│   ├─ hero.svg
│   ├─ nucleus.svg
│   ├─ ringpark.svg
│
├─ docs/
│   └─ masterdossier.pdf
│
└─ README.md
```

## Was ist bereits enthalten
- Minimal, hochwertiges Onepager-Layout (Investorendeck / Stadtlabor). Große Headlines, viel Weißraum, wenige, starke Visualisierungen.
- Inhaltliche Struktur: Hero (Vision), Ausgangslage, Masterplan (Lage), Nucleus (Indoor), Ringpark (Outdoor), 10 Säulen, Verein, Projektstatus, Support-CTAs, Kontakt.
- Accessibility: ARIA, Fokusstile, Keyboard-Nutzung für Accordion.
- Kontaktformular vorbereitet für Formspree (setze deine Formspree-ID in `index.html`).
- Platzhalter: `docs/masterdossier.pdf`, `docs/satzung.pdf`, `docs/antrag_mitglied.pdf` (bitte ersetzen mit finalen Dateien).

## Bilder einfügen (sehr einfach)
Benutze die folgenden Dateinamen im Ordner `images/`:
- `hero.jpg` (oder `hero.mp4` + `hero.jpg` poster)
- `arena.jpg`
- `studio.jpg`
- `foyer.jpg`
- `snoezelen.jpg`
- `ringpark.jpg`

Empfohlenes Vorgehen:
1. Füge die Originalbilder in `images/` per GitHub Web UI oder VS Code (Drag & Drop) hinzu.
2. Optional: führe `./optimize-images.sh` lokal aus (benötigt ImageMagick `convert` und `cwebp`). Das Skript erzeugt optimierte `-1200.jpg`, `-600.jpg` und `.webp` Varianten, die automatisch in `srcset` genutzt werden.
3. Commit & push. Wenn du möchtest, ersetze die Platzhalter-PDFs in `/docs/` ebenfalls.

Wenn du möchtest, kann ich die Bilder für dich optimieren und einfügen — antworte mit **"Mach du"**.
## Schnellstart
1. Formular: Ersetze `action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"` in `index.html` mit deiner Formspree-ID.
2. Masterdossier: Lege `docs/masterdossier.pdf` mit der finalen Version ab (Derzeit Platzhalter).
3. Deployment (empfohlen): GitHub Pages – Settings → Pages → *Set branch to* `gh-pages` (the site will be automatically deployed there on push to `main` via workflow).

### Troubleshooting 502 / Local server
Wenn du beim Aufruf von `http://localhost:8080` einen **502 Bad Gateway** erhältst, überprüfe bitte kurz folgende Schritte:

1. Server läuft? (Starte lokal)
   - Node: `npx http-server -p 8080 -c-1`
   - Python: `python3 -m http.server 8080`

2. Prüfe, ob Port offen ist:
   - `curl -I http://localhost:8080`  → sollte `HTTP/1.1 200 OK` oder `HTTP/1.0 200 OK` zurückgeben
   - `lsof -i :8080`  oder  `ss -ltnp | grep 8080`  → zeigt process, der Port hört

3. Ist das in einem DevContainer / Remote? Dann muss der Port möglicherweise weitergeleitet oder in VS Code "Forward Port" angewählt werden.

4. Wenn du eine 502 vom Workspace-Proxy (z. B. Codespaces / Dev Container) siehst: starte den lokalen Server und nutze die VS Code Port Forwarding UI (oder öffne die URL, die der Proxy angibt).

Wenn du mir die Ausgabe von `npx http-server -p 8080` oder `curl -I http://localhost:8080` postest, löse ich das direkt für dich.
## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert (siehe `LICENSE`).

## PR & Deploy Hinweis
Ich habe die Website fertig ausgearbeitet. Sobald du die Änderungen lokal committest und den Branch `feat/site-final` pushst, erstelle ich einen PR-Review (oder du kannst das mit `gh pr create` tun). In der PR kümmere ich mich um CI-Checks, Lighthouse & Accessibility-Scans sowie Hilfe beim Deployment (Netlify/Vercel/GitHub Pages).
## CI / Qualitätssicherung
Dieses Repo enthält eine einfache GitHub Action (`.github/workflows/ci.yml`), die bei Push/PR einen schnellen Audit ausführt:
- Lighthouse CI (Performance/SEO/Best Practices) — Upload zu temporärem Storage
- Pa11y (Accessibility) — simpler Scan

Damit PRs eine schnelle Qualitätskontrolle haben, werden diese Checks automatisch ausgeführt. Du kannst die Action bei Bedarf anpassen (z. B. Regeln verschärfen oder Failure-Thresholds setzen).

Website-Beispiel-URL nach Aktivierung:
`https://DEINNAME.github.io/moencheberg-hub`

Wenn du möchtest, öffne ich auf Wunsch einen PR, konfiguriere CI mit Lighthouse/A11y-Checks und richte Deployment auf Netlify/Vercel ein. Antwort mit **"Ja, PR öffnen"** falls ich fortfahren soll.
## Inhalt dieses Repos
Diese Repo enthält eine minimale, barrierearme statische Website für den Möncheberg Hub (HTML, CSS, JS) und ein kleines Favicon.

## Schnellstart
1. **Formular (Formspree)**
   - Öffne https://formspree.io, erstelle ein kostenloses Formular und kopiere die Formular-ID.
   - Ersetze in `index.html` die Aktion des Formulars `action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"` durch deine ID.
2. **Deployment (so einfach wie möglich)**
   - **GitHub Pages:** Repository -> Settings -> Pages -> Deploy from `main` branch (root).
   - Oder: **Netlify/Vercel** (Repo verbinden oder Drag & Drop).

## Was ich angepasst habe
- Accessibility: ARIA-Attribute für Accordion, Labels für Formular, Fokus-Stile, Map `title`.
- SEO: `meta description`, Open Graph & Twitter Tags.
- Performance: `loading="lazy"` für Bilder, `preconnect` für Fonts, externes CSS/JS.
- Einfacher Form-Status-Text (zeigt Hinweis, wenn Formspree-ID nicht gesetzt ist).

## Nächste Schritte (optional)
- Ersetze Platzhalterbilder durch optimierte Assets (WebP, srcset).
- Optional: GitHub Actions mit Lighthouse/axe für automatische Checks.

Wenn du möchtest, öffne ich einen Pull Request mit diesen Änderungen und konfiguriere noch CI und Deployment. Antworte bitte mit **"Ja, PR öffnen"** wenn ich fortfahren soll.
