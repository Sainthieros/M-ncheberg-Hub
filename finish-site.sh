#!/usr/bin/env bash
set -e
read -p "Formspree ID (z.B. f/xxxxx) oder Enter zum Überspringen: " FORMID
[ -n "$FORMID" ] && sed -i.bak "s/REPLACE_WITH_YOUR_ID/$FORMID/g" index.html && rm -f index.html.bak
git checkout -b feat/site-final || git checkout feat/site-final
git add . && git commit -m "feat(site): final site" || echo "Nichts zu committen"
git push --set-upstream origin feat/site-final
if command -v gh >/dev/null 2>&1; then gh pr create --title "feat: final site" --body "Final site ready (Masterdossier/Satzung in /docs/). Please review." --base main --label site --web; else echo "GH CLI fehlt: bitte PR manuell auf GitHub erstellen (Branch feat/site-final)"; fi
