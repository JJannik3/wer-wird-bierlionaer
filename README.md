# 🍺 WER WIRD BIERLIONÄR?

Eine komplett lokal laufende, moderierte Familien-Quizshow mit Glücksrad, 164 unterschiedliche Multiple-Choice-Fragen (davon 120 in der steigenden Klassik-Gewinnleiter), 8 Jokern, 4 Spielmodi, Chaos-Ereignissen, Familien-Challenges, Live-Ranking, Schätzfinale, goldener Bier-Trophäe und geheimem Braukurs-Gutschein.

**Keine Installation, kein Konto, keine Datenbank und kein Framework nötig.** Alle Dateien liegen direkt im Verzeichnis.

## Auf GitHub Pages veröffentlichen oder das vorhandene Spiel aktualisieren

1. Öffne https://github.com/new und lege ein **öffentliches** Repository namens `wer-wird-bierlionaer` an. Als Hauptbranch `main` verwenden.
2. Öffne das Repository und wähle **Add file → Upload files**. Lade diese Dateien **entpackt** gemeinsam hoch (bei einem bestehenden Repository werden die gleichnamigen Dateien mit den neuen Versionen überschrieben): `index.html`, `style.css`, `app.js`, `questions.js`, `.nojekyll` und `README.md`. Wichtig: alle im obersten Verzeichnis, nicht in einem Unterordner.
3. Klicke auf **Commit changes**. **Bei einer Aktualisierung** brauchst du GitHub Pages NICHT erneut zu aktivieren. Lade nach der Veröffentlichung die Spielseite mit **Strg+F5** (Windows) oder **Cmd+Shift+R** (Mac) neu.
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
- Klassik: **6, 8 oder 10 Stufen** pro Kandidat wählen. Jeder spielt die komplette Leiter, bevor der Nächste drankommt. Die Wahl **8 Stufen** ist für eine Familienrunde gut. Die anderen Modi spielen weiterhin **3, 5 oder 7 Runden** pro Person.
- Am Glücksrad drehen, Show starten, Fragen laut vorlesen. Du klickst als Moderator Antworten, Joker und Ereignisse an.
- Für die dramatische Schätzfrage am Ende darf jede Finalperson zunächst eine Schätzung sagen oder verdeckt auf einen Zettel schreiben. Trage die Schätzungen ein, enthülle die Lösung und starte die Siegerehrung.
- Gewinner erhält in echt ein Bier (ein alkoholfreies Getränk geht natürlich genauso). Den **versteckten Braukurs-Gutschein** kannst du danach erst mit dem großen Überraschungsknopf enthüllen und per Browser drucken.

## Die Spielregeln

**Klassische Gewinnleiter:** Jeder Kandidat beginnt bei 0 und spielt mehrere Fragen direkt nacheinander. Die Leiter hat je nach Einstellung 6, 8 oder 10 Stufen, mit den Bierpunktwerten 100, 200, 300, 500, 1.000, 2.000, 4.000, 8.000, 16.000 und 32.000. Die Stufen 3 und 6 sind Sicherheitsstufen. Wer falsch antwortet, scheidet für diese Partie aus und behält den zuletzt erreichten Sicherheitswert (ohne Sicherheitsstufe 0). Wer freiwillig aussteigt, behält den aktuellen Wert. Wer es ganz nach oben schafft, gewinnt 2.000, 8.000 oder 32.000 BP (abhängig von der eingestellten Leiterhöhe). Die höchste gesicherte Punktzahl gewinnt; Gleichstand an der Spitze wird mit einer Schätzfrage entschieden.

**Andere Modi:** Einfache Fragen +100 BP, mittlere +150 BP, schwere +200 BP. Falsche Antwort: bis zu −50 BP; Punktestände fallen nicht unter null. Ein Zusatzjoker oder Chaos-Ereignis kann diese Werte ändern.

**Fragen:** Klassik erhält **120 kuratierte Fragen auf genau 10 ansteigenden Schwierigkeitsstufen (12 Fragen je Stufe)**. Die Einstiegsstufen sind lösbar, die späteren verlangen Spezialwissen, echte kuriose Fakten und Logik. Der Pool der anderen Modi umfasst **164 unterschiedliche Fragen** und enthält fast keine Rechnerei.

**Joker:** In den drei bisherigen Modi erhalten alle Teilnehmenden zufällig zwei Joker am Spielanfang. Im Klassikmodus starten alle fair mit drei Jokern: dem 50:50-Joker, einem Familienhilfe-Joker und einem zufälligen Chaos-Joker. Jeder Joker ist einmal einsetzbar. Pro Frage darf maximal einer eingesetzt werden. Auch der Moderator erhält eine Beschreibung der Wirkung auf dem Bildschirm.

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

**Finale (die anderen Modi):** Die besten drei (oder bei weniger Spielern alle) geben eine Schätzung ab. Im Geburtstagsmodus ist das Geburtstagskind dabei. Die kleinste absolute Abweichung zur korrekten Zahl gewinnt. Bei gleichem Abstand entscheidet der Punktestand vor dem Finale.

## Fragen bearbeiten oder ergänzen

Alle Fragen stehen in `questions.js` in den Listen `CLASSIC_QUESTIONS` und `EXTRA_QUESTIONS`. Sie haben die Felder `level` (Klassikstufe 1–10), `category`, `text`, `options` (Antworten A–D), `correct` (Index 0–3) und `explanation` (Moderatoren-Pointe nach der Auflösung). Die Reihenfolge der Antwortmöglichkeiten variiert je Frage.

Für eigene Insider-Fragen kannst du ein bestehendes Frageobjekt kopieren und Text, Antworten und `correct` ändern. Achte darauf, dass `correct` tatsächlich auf die richtige Antwort zeigt. **Keine privaten Gutscheincodes eintragen.** Die Schätzfragen sind `ESTIMATES`, die Familien-Challenges `FAMILY`.

## Faktencheck – Auswahl der Quellen

- Deutscher Brauer-Bund zu Reinheitsgebot und Hefe: https://brauer-bund.de/reinheitsgebot/fragen-und-antworten/
- Brewers Association zu Bierstilen: https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/
- NASA zur Venus: https://science.nasa.gov/venus/venus-facts/
- University of Tasmania zu Wombat-Kot: https://www.utas.edu.au/about/news-and-stories/articles/2021/scientists-get-to-the-bottom-of-wombat-cubed-poo-mystery2
- NOAA zu Seepferdchen: https://oceanservice.noaa.gov/facts/seahorse.html
- Smithsonian Zoo zu Flamingos: https://nationalzoo.si.edu/animals/news/why-are-flamingos-pink-and-other-flamingo-facts

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

## Version 2 – Änderungen gegenüber dem ersten Bierlionär

- Klassikmodus ist jetzt eine echte Einzelkandidaten-Quizshow mit 6/8/10-Stufen-Gewinnleiter, Sicherheitsstufen, Ausstieg, Kandidatenwechsel und Stichfrage bei Gleichstand.
- 100 neue Fragen für die Klassikleiter, mit kniffligem Wissen und teilweise absurden Logikrätseln.
- Ruhigeres, klareres Design und eine große Gewinnleiter direkt neben der Frage.
- Die anderen drei Modi haben ihre bisherigen Regeln und ihr Schätzfinale behalten.
- Alle Spielstände werden lokal im Browser gespeichert. Bei der Aktualisierung werden vorhandene Namen nach Möglichkeit übernommen; ein begonnenes Spiel aus der alten Version wird aus Sicherheitsgründen nicht unverändert fortgesetzt.


## V3 · Echten Braukurs-Gutschein sicher einblenden

In dieser Version wird am Ende der Geburtstagsshow der echte Jochen-Schweizer-Gutschein **als Vorschau mit vollständig verdecktem Einlösecode und QR-Code** gezeigt. Dafür werden zusätzlich die zwei Dateien `braukurs-gutschein-vorschau.png` und `braukurs-gutschein-vorschau.pdf` im Hauptverzeichnis mit hochgeladen.

**WICHTIG:** Den Original-Gutschein `VJD1628846593619_A4.pdf` **nicht** auf das öffentliche GitHub-Repository hochladen! Der Original-PDF-Gutschein enthält einen einlösbaren Code, der sonst für alle sichtbar und nutzbar wäre. Den Original-Gutschein lieber ausdrucken oder privat übergeben.

Die Bild- und PDF-Vorschau enthalten keinen Gutscheincode und keinen QR-Code. Die Originaldatei ist nicht Bestandteil dieses ZIP-Pakets.

## Version 4 – Das neue Fragen-Update

- **120 Klassikfragen** mit 12 einzigartigen Fragen je Gewinnstufe statt leichtem Mathequiz.
- **44 zusätzliche Fragen**; auch Chaos, Battle und Geburtstags-Special verwenden den neuen Pool.
- Mehr Bierwissen, Geschichte, Tiere, verblüffende Fakten und fiese Quatschlogik.
- **18 überarbeitete Schätzfinal-Fragen** mit historischen Jahreszahlen und kuriosen Zahlen statt überwiegend Kopfrechnen.
- Spielmechanik, Spielerwechsel, Gewinnleiter, Joker, Design und die sichere Braukurs-Gutschein-Vorschau bleiben unverändert.
- Die Original-PDF mit Gutschein-Code bleibt weiterhin außerhalb von GitHub.
