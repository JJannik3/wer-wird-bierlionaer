# 🍺 WER WIRD BIERLIONÄR?

Eine komplett lokal laufende, moderierte Familien-Quizshow mit Glücksrad, 144 Multiple-Choice-Fragen, 8 Jokern, 4 Spielmodi, Chaos-Ereignissen, Familien-Challenges, Live-Ranking, Schätzfinale, goldener Bier-Trophäe und geheimem Braukurs-Gutschein.

**Keine Installation, kein Konto, keine Datenbank und kein Framework nötig.** Alle Dateien liegen direkt im Verzeichnis.

## In 5 Minuten über GitHub Pages veröffentlichen

1. Öffne https://github.com/new und lege ein **öffentliches** Repository namens `wer-wird-bierlionaer` an. Als Hauptbranch `main` verwenden.
2. Öffne das Repository und wähle **Add file → Upload files**. Lade diese Dateien **entpackt** gemeinsam hoch: `index.html`, `style.css`, `app.js`, `questions.js`, `.nojekyll` und `README.md`. Wichtig: alle im obersten Verzeichnis, nicht in einem Unterordner.
3. Klicke auf **Commit changes**.
4. Öffne **Settings → Pages → Build and deployment**.
5. Stelle **Source: Deploy from a branch**, **Branch: main** und **Folder: /(root)** ein, dann **Save**.
6. Die veröffentlichte Adresse folgt normalerweise dem Muster `https://DEIN-GITHUB-NAME.github.io/wer-wird-bierlionaer/`. Den endgültigen Link findest du auch bei **Settings → Pages → Visit site**.

Hinweis: GitHub Pages ist ein statisches Hosting-Angebot. Die Website benötigt keine Serverfunktionen. GitHub Pages-Websites können öffentlich erreichbar sein – verwende also keine vertraulichen Spielerdaten oder persönlichen Gutscheincodes im Quellcode.

## Morgen beim Familienabend

- Laptop mit Fernseher/Beamer verbinden und die veröffentlichte Website öffnen.
- Mit dem **⛶-Button** oben rechts in den Vollbildmodus wechseln.
- Auf **SHOW STARTEN** klicken.
- Alle Personen mit Vornamen anmelden. Das **🎂-Symbol** neben dem Bruder anklicken, um ihn als Geburtstagskind zu markieren.
- Modus wählen. Für besonders viele absurde Regeln eignet sich **Vollrausch-Chaos**. Wenn dein Bruder das Finale auf jeden Fall spielen soll, nimm **Geburtstags-Special**.
- Die Rundenanzahl wählen. **3 Fragen pro Person** sind für einen ersten Probelauf am sinnvollsten, **5** für den normalen Familienabend.
- Am Glücksrad drehen, Show starten, Fragen laut vorlesen. Du klickst als Moderator Antworten, Joker und Ereignisse an.
- Für die dramatische Schätzfrage am Ende darf jede Finalperson zunächst eine Schätzung sagen oder verdeckt auf einen Zettel schreiben. Trage die Schätzungen ein, enthülle die Lösung und starte die Siegerehrung.
- Gewinner erhält in echt ein Bier (ein alkoholfreies Getränk geht natürlich genauso). Den **versteckten Braukurs-Gutschein** kannst du danach erst mit dem großen Überraschungsknopf enthüllen und per Browser drucken.

## Die Spielregeln

**Punkte:** einfache Fragen +100 BP, mittlere +150 BP, schwere +200 BP. Falsche Antwort: bis zu −50 BP; Punktestände fallen nicht unter null. Ein Zusatzjoker oder Chaos-Ereignis kann diese Werte ändern.

**Fragen:** Die Fragen werden zufällig gezogen und innerhalb derselben Partie nicht erneut gestellt, solange der Pool ausreicht. Schwierigkeit steigt im Verlauf grob an.

**Joker:** Alle Teilnehmenden erhalten zufällig zwei Joker am Spielanfang. Jeder Joker ist einmal einsetzbar. Pro Frage darf maximal einer eingesetzt werden. Auch der Moderator erhält eine Beschreibung der Wirkung auf dem Bildschirm.

- 🧠 Gehirnzellen-Leihgabe: Ein Familienmitglied darf laut helfen.
- 😈 Der Saboteur: Ein Spieler ist bei seinem nächsten regulären Zug ohne Joker.
- 🔀 Bier-Bumerang: Die Frage geht an eine andere Person. Bei deren falscher Antwort erhält der ursprüngliche Spieler 50 BP.
- 🎰 Alles oder Nichts: Richtiger Gewinn oder falscher Punktabzug wird verdoppelt.
- 📣 Familienrat: Die Familie darf 20 Sekunden lang beraten.
- 🫣 Blindes Huhn: Zwei falsche Antworten verschwinden.
- 👑 König der Kneipe: Nach der normalen Frage erhält ein anderer Spieler eine Bonusfrage; richtig +75 BP, falsch 0 BP.
- 💣 Punkte-Diebstahl: Bei richtiger Antwort zusätzlich bis zu 100 BP von jemand anderem stehlen, bei falscher entsprechend bis zu 100 BP abgeben.

**Ereignisse:** Je nach Modus erscheinen zwischendurch Glücks- und Chaos-Karten: Biersteuer, Punkte-Tausch, Aufholbonus, Jokerregen, Verdopplung, härtere Strafpunkte oder Umkehr der Spielreihenfolge.

**Familienaufstand:** Alle zeigen auf die Person, die am besten zu einer absurd formulierten Beschreibung passt. Bei einem Unentschieden entscheidet die Moderation. Die ausgewählte Person erhält +100 BP.

**Bier Battle:** Zwei angezeigte Kandidaten treten direkt an. Der Moderator wählt, wer als Erstes gebuzzert hat. Diese Person antwortet. Ist die Antwort falsch, erhält der andere Kandidat +50 BP. Kein zusätzlicher Hardware-Buzzer nötig.

**Geburtstags-Special:** Das Geburtstagskind wird auch dann ins Finale aufgenommen, wenn es in der Vorrunde nicht zu den Top 3 gehört. Im Finale gewinnt trotzdem die beste Schätzung.

**Finale:** Die besten drei (oder bei weniger Spielern alle) geben eine Schätzung ab. Im Geburtstagsmodus ist das Geburtstagskind dabei. Die kleinste absolute Abweichung zur korrekten Zahl gewinnt. Bei gleichem Abstand entscheidet der Punktestand vor dem Finale.

## Fragen bearbeiten oder ergänzen

Die Fragen liegen in `questions.js`. Jeder Datensatz ist eine eigene Zeile und besteht aus:

`Schwierigkeit | Frage | Antwort A | Antwort B | Antwort C | Antwort D | richtige Antwort (0=A, 1=B, 2=C, 3=D) | Erklärung`

Beispiel:

`1|Wie viele Liter hat eine bayerische Maß?|0,5|1|1,5|2|1|Ein Liter. Prost!`

Setze die Zeile in einer der `add('Kategorie', \` ... \`)`-Gruppen ein. Achte darauf, kein `|` innerhalb der Texte zu verwenden.

Schätzfragen und Familien-Challenges stehen am Ende derselben Datei in `ESTIMATES` und `FAMILY`.

## Technisches & Hinweise

- `index.html`: Einstiegspunkt.
- `style.css`: Farben, Animationen, mobiles Layout und Druckansicht.
- `questions.js`: Fragenpool, Schätzfragen und Familien-Challenges.
- `app.js`: gesamte Spiel- und Moderationslogik einschließlich Ton und Konfetti.
- `.nojekyll`: GitHub Pages soll die Dateien direkt ausliefern.
- `README.md`: diese Anleitung.

**Ton:** Alle Effekte werden direkt im Browser erzeugt und nicht als Audio-Dateien heruntergeladen. Rechts oben schaltest du sie an oder aus. Der Browser benötigt gewöhnlich einen Klick auf die Website, ehe Ton abgespielt werden kann.

**Spielstand:** Das Spiel speichert Namen und den aktuellen Stand automatisch im `localStorage` dieses Browsers. Dieses Speichern synchronisiert **nicht** über verschiedene Geräte und ist bei gelöschten Browserdaten verloren. Falls man zurück zur Startseite geht, kann man per Browser-Zurück nicht verlässlich die alte Partie fortsetzen; ein Seiten-Reload lädt den zuletzt gespeicherten Zustand.

**Beachte:** Die Website ist bewusst ein **Ein-Bildschirm-Spiel**, keine separate Teilnahme-App mit Smartphones. Der Moderator bedient alles; die Familie schaut gemeinsam zu und antwortet laut. Die Fragen sind Unterhaltung, kein wissenschaftliches Fachquiz.

**Keine Abhängigkeiten:** Die vier Programmdateien funktionieren auch offline. Für die Nutzung ohne GitHub Pages kannst du `index.html` direkt im Browser öffnen; falls der Browser lokale Skripte einschränkt, ist GitHub Pages die einfachere Variante.
