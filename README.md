# WER WIRD BIERLIONÄR? — Version 5

Die interaktive Familien-Quizshow für einen Moderator an Laptop/TV/Beamer.

## Was ist in Version 5 neu?

- **639 unterschiedliche Multiple-Choice-Fragen**, davon **595 Fragen** auf der klassischen Gewinnleiter und **44 zusätzliche Themenfragen**.
- **57 Fragekategorien**: Bierkunde, Tierisch absurd, Wissenschaft, kuriose Geschichte, Essen & Küche, Sehenswürdigkeiten, Kultur, Literatur, Popkultur, Sprachrätsel, Körper & Kuriositäten, Mythen, bizarre Fakten und viele mehr.
- **40 oder mehr Fragen auf *jeder* der 10 Gewinnstufen** (konkrete Verteilung unten), statt nur zwölf.
- Viel weniger Mathe, deutlich mehr kurioses, skurriles, aber überprüfbares Allgemeinwissen.
- Die Fragen werden pro Stufe bzw. Schwierigkeitsklasse zufällig und ohne Wiederholung innerhalb einer Runde gezogen, solange der Vorrat reicht.
- Das aufgeräumte Startmenü zeigt die neue Themenvielfalt.

### Umfang der klassischen Gewinnleiter

| Stufe | Fragen |
|---|---:|
| 1 | 40 |
| 2 | 61 |
| 3 | 65 |
| 4 | 65 |
| 5 | 65 |
| 6 | 62 |
| 7 | 63 |
| 8 | 60 |
| 9 | 57 |
| 10 | 57 |

**Insgesamt: 595 Klassikfragen.**

### Kategorien

Bier & Brauen (63), Städte & Sehenswürdigkeiten (45), Bierkunde für Angebers (36), Wissenschaftliche Wörter (35), Literatur & Autoren (33), Fiktion & Serien (32), Tierisch unnütz (30), Küche der Welt (27), Kuriose Fakten (25), Geschichte (24), Tierisch absurd (24), Tiere, die es wirklich gibt (24), Wissenschaft mit Humor (16), Kuriose Geschichte (15), Völlig bescheuert (14), Essen & Küchenchaos (14), Sprache & Unsinn (12), Bierchemie (12), Geografie & Staunen (12), Körper & Kuriositäten (11), Geografie (10), Weltwissen (10), Popkultur (10), Biermythen (9), WTF-Geschichte (7), Geografie für Leute (6), Sprachverwirrung (6), Kultur & Geschichte (6), Allgemeinwissen (5), Natur & Wissenschaft (5), Geschichte mit Pointe (5), Tiere & Superkräfte (5), Wahr oder Quatsch (4), Das ist doch erfunden (4), Mythen & Irrtümer (4), Sprachen & Rätsel (4), Kneipenwissen (3), Film & Fernsehen (3), Der Körper ist komisch (3), Kino & Popkultur (3), Küche & Kurioses (3), Geografie & Alltag (2), Alles Quatsch? (2), Alltagsparadox (2), Technik ohne Ahnung (2), Geheimnisse des Alltags (1), Sport & Stammtisch (1), Quatschlogik (1), Reise & Fernweh (1), Unnützes Wissen (1), Unnützes Weltwissen (1), Musik & Kultur (1), Pflanzen sind seltsam (1), Kuriose Berufe (1), Kulturelle Kuriositäten (1), Kuriose Erfindungen (1), Kuriose Wissenschaft (1)

## Spielablauf

1. `index.html` öffnen oder über GitHub Pages bereitstellen.
2. Spieler hinzufügen, Geburtstag markieren, Modus wählen.
3. Das Glücksrad bestimmt den Start. Jeder Spieler ist in der Klassik komplett nacheinander dran.
4. Richtige Antwort = nächste Gewinnstufe; falsche Antwort = gesicherte Stufe (3 und 6) und der nächste Kandidat; freiwilliger Ausstieg möglich.
5. Bei Gleichstand gibt es eine Stichfrage. Sieger erhält den goldenen Bierpokal; Geburtstagskind erhält anschließend eine geheime Braukurs-Überraschung.

Die anderen Modi **Vollrausch-Chaos**, **Bier Battle** und **Geburtstags-Special** sowie Joker, Rangliste und Finale bleiben erhalten.

## Auf GitHub aktualisieren

1. ZIP entpacken.
2. Im Repository im Tab **Code**: `Add file` → `Upload files`.
3. Alle enthaltenen Dateien im Stammordner hochladen; gleichnamige Dateien ersetzen.
4. `Commit changes`.
5. Nach dem GitHub-Pages-Build `https://jjannik3.github.io/wer-wird-bierlionaer/` neu laden (Mac: `Cmd + Shift + R`).

**Sicherheits-Hinweis:** In diesem Paket liegt NUR die redigierte Gutschein-Vorschau (`braukurs-gutschein-vorschau.png/.pdf`), NICHT dein echter einlösbarer Gutschein. Die geheime Original-PDF niemals öffentlich in GitHub stellen.

## Fragen bearbeiten

Alle Fragen liegen in `questions.js` in den Arrays `CLASSIC_QUESTIONS` und `EXTRA_QUESTIONS`. Index `correct` zählt von 0 bis 3. Das Feld `level` gilt nur für die klassische Gewinnleiter. Alle Fragen sind auch in den anderen Modi vorhanden.

Bei einer bestehenden Partie nach einem größeren Fragen-Update am besten im Startmenü eine neue Runde beginnen, damit kein altes Frage-Indexing verwendet wird.

## Quellen zur Kontrolle ausgewählter kurioser Fakten

- Reinheitsgebot & Brauen: https://brauer-bund.de/reinheitsgebot/fragen-und-antworten/
- Fermentation/Bierstile: https://www.brewersassociation.org/edu/brewers-association-beer-style-guidelines/
- Astronomie: https://science.nasa.gov/solar-system/
- Tierkunde: https://www.nationalgeographic.com/animals/

*Fragen sind für eine private unterhaltsame Quizrunde formuliert. Gelegentliche regionale oder historische Nuancen sind möglich.*
