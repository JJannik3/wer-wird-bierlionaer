/* BIERLIONÄR V4 — neue, kuratierte Fragen.
   Klassik: pro Gewinnstufe 12 unterschiedliche Multiple-Choice-Fragen;
   alle anderen Modi: gemischter Pool mit den Klassikfragen und 44 weiteren Fakten.
   Nach jeder Auflösung gibt es eine kurze, meist absurde Erklärung.
   Fragen lassen sich weiter unten in CLASSIC_QUESTIONS und EXTRA_QUESTIONS ändern. */
(() => {
  'use strict';
  const CLASSIC_QUESTIONS = [
  {
    "level": 1,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welche Zutat macht ein klassisches Pils vor allem bitter?",
    "options": [
      "Hopfen",
      "Hefe",
      "Salz",
      "Gerstenstroh"
    ],
    "correct": 0,
    "explanation": "Hopfen liefert die typische Bittere. Salz macht höchstens den Brezelkorb interessanter."
  },
  {
    "level": 1,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Wie viele Herzen hat ein Oktopus?",
    "options": [
      "Eins",
      "Acht",
      "Zwei",
      "Drei"
    ],
    "correct": 3,
    "explanation": "Drei Herzen. Der Oktopus ist damit emotional besser ausgestattet als unsere Familiengruppe."
  },
  {
    "level": 1,
    "category": "Allgemeinwissen",
    "difficulty": 1,
    "text": "In welchem Land liegt die Stadt Porto?",
    "options": [
      "Portugal",
      "Italien",
      "Spanien",
      "Griechenland"
    ],
    "correct": 0,
    "explanation": "Portugal. Porto klingt nicht nur wie ein Getränk, die Stadt gibt auch dem Portwein seinen Namen."
  },
  {
    "level": 1,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was beschreibt ein „Helles“ in erster Linie?",
    "options": [
      "Einen hellen Bierstil",
      "Ein Bier unter 1 Prozent Alkohol",
      "Bier nur für den Vormittag",
      "Bier ohne Kohlensäure"
    ],
    "correct": 0,
    "explanation": "Helles bezeichnet einen hellen Bierstil, nicht den Geisteszustand nach der dritten Runde."
  },
  {
    "level": 1,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Warum sind Flamingos typischerweise rosa?",
    "options": [
      "Wegen des Salzgehalts der Luft",
      "Wegen rosa Sonnenlicht",
      "Weil sie erröten",
      "Farbstoffe aus der Nahrung"
    ],
    "correct": 3,
    "explanation": "Carotinoide aus Algen und Krebstieren färben das Gefieder. Flamingos betreiben Ernährungstuning."
  },
  {
    "level": 1,
    "category": "Kneipenwissen",
    "difficulty": 1,
    "text": "Aus welchem Land stammt das Oktoberfest ursprünglich?",
    "options": [
      "Schweiz",
      "Deutschland",
      "Tschechien",
      "Österreich"
    ],
    "correct": 1,
    "explanation": "1810 wurde in München gefeiert. Die Diskussion um den Preis der Maß folgte vermutlich kurz darauf."
  },
  {
    "level": 1,
    "category": "Geografie & Alltag",
    "difficulty": 1,
    "text": "Was bedeutet die Abkürzung „GPS“?",
    "options": [
      "Geographic Party Signal",
      "General Pub Service",
      "Global Pizza Search",
      "Global Positioning System"
    ],
    "correct": 3,
    "explanation": "GPS navigiert dich zur Adresse, nicht automatisch wieder aus dem Biergarten."
  },
  {
    "level": 1,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Was ist ein Axolotl?",
    "options": [
      "Ein ausgestorbener Dinosaurier",
      "Ein tropischer Käfer",
      "Ein japanischer Reisbrand",
      "Ein mexikanischer Schwanzlurch"
    ],
    "correct": 3,
    "explanation": "Der Axolotl ist ein Salamander, der in der Natur meistens im Larvenstadium bleibt."
  },
  {
    "level": 1,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Wofür steht IPA auf einem Bieretikett?",
    "options": [
      "International Pils Association",
      "Irish Pub Alcohol",
      "India Pale Ale",
      "Imperial Party Ale"
    ],
    "correct": 2,
    "explanation": "India Pale Ale. Die Abkürzung ist kein geheimes WLAN-Passwort der Brauerei."
  },
  {
    "level": 1,
    "category": "Allgemeinwissen",
    "difficulty": 1,
    "text": "Welches dieser Tiere ist ein Säugetier?",
    "options": [
      "Pinguin",
      "Fledermaus",
      "Krokodil",
      "Forelle"
    ],
    "correct": 1,
    "explanation": "Fledermäuse sind Säugetiere und können aktiv fliegen. Pinguine verzichten großzügig darauf."
  },
  {
    "level": 1,
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "Was wird beim Abtrocknen anderer Dinge selbst nass?",
    "options": [
      "Ein Bierdeckel",
      "Ein Kühlschrank",
      "Ein Stein",
      "Ein Handtuch"
    ],
    "correct": 3,
    "explanation": "Das Handtuch. Es arbeitet sich quasi in seinen eigenen Untergang."
  },
  {
    "level": 1,
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Welche Farbe hat die Flugschreiber-„Black Box“ normalerweise?",
    "options": [
      "Grasgrün",
      "Unsichtbar",
      "Leuchtendes Orange",
      "Tiefschwarz"
    ],
    "correct": 2,
    "explanation": "Orange erleichtert die Suche. „Black Box“ ist marketingtechnisch etwas irreführend."
  },
  {
    "level": 2,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welches dieser Biere wird klassisch obergärig gebraut?",
    "options": [
      "Helles",
      "Kölsch",
      "Märzen",
      "Pils"
    ],
    "correct": 1,
    "explanation": "Kölsch ist obergärig. Die Kölner nehmen es übrigens sehr persönlich, wenn man das verwechselt."
  },
  {
    "level": 2,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welches Tier kann mit den Füßen schmecken?",
    "options": [
      "Frosch",
      "Pinguin",
      "Schmetterling",
      "Goldfisch"
    ],
    "correct": 2,
    "explanation": "Schmetterlinge haben Geschmacksrezeptoren an den Füßen. Ein Spaziergang über Pommes wäre spannend."
  },
  {
    "level": 2,
    "category": "Geschichte",
    "difficulty": 1,
    "text": "In welcher Stadt wurde das bayerische Reinheitsgebot von 1516 verkündet?",
    "options": [
      "Ingolstadt",
      "Bamberg",
      "Nürnberg",
      "München"
    ],
    "correct": 0,
    "explanation": "Ingolstadt. Nicht München. Das ist für einige Stammtische schon eine Zumutung."
  },
  {
    "level": 2,
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was gilt botanisch als Beere?",
    "options": [
      "Erdbeere",
      "Banane",
      "Himbeere",
      "Brombeere"
    ],
    "correct": 1,
    "explanation": "Die Banane gilt botanisch als Beere. Die Erdbeere dagegen nicht. Die Natur trollt uns."
  },
  {
    "level": 2,
    "category": "Geografie & Alltag",
    "difficulty": 1,
    "text": "Welche Stadt ist die Hauptstadt Kanadas?",
    "options": [
      "Ottawa",
      "Toronto",
      "Montreal",
      "Vancouver"
    ],
    "correct": 0,
    "explanation": "Ottawa. Toronto hat die Größe, Ottawa den Amtstitel."
  },
  {
    "level": 2,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was bedeutet „Lager“ bei Bier ursprünglich?",
    "options": [
      "Es ist nur für Lastwagenfahrer",
      "Es enthält weniger Alkohol",
      "Es wird immer aus Roggen gebraut",
      "Es wurde gelagert"
    ],
    "correct": 3,
    "explanation": "Der Begriff kommt vom Lagern, insbesondere kühl. Es liegt also an der Aufbewahrung, nicht am Bierbauch."
  },
  {
    "level": 2,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Bei welchem Tier trägt das Männchen die Jungen aus?",
    "options": [
      "Flamingo",
      "Eichhörnchen",
      "Pinguin",
      "Seepferdchen"
    ],
    "correct": 3,
    "explanation": "Beim Seepferdchen trägt das Männchen die Embryonen im Brutbeutel aus. Familienplanung auf Expertenniveau."
  },
  {
    "level": 2,
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welcher dieser Gegenstände wurde zuerst erfunden?",
    "options": [
      "Buchdruck mit beweglichen Lettern in Europa",
      "Telefon",
      "Mikrowelle",
      "Glühbirne"
    ],
    "correct": 0,
    "explanation": "Gutenbergs Drucktechnik stammt aus dem 15. Jahrhundert. Der Anruf beim Drucker musste noch warten."
  },
  {
    "level": 2,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Wie nennt man die feste Masse, die nach dem Läutern des Malzes zurückbleibt?",
    "options": [
      "Treber",
      "Würzebrot",
      "Hefewatte",
      "Schaumfänger"
    ],
    "correct": 0,
    "explanation": "Treber ist der Rückstand aus den festen Malzbestandteilen. Kein beleidigender Spitzname für den Braumeister."
  },
  {
    "level": 2,
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was misst ein Barometer?",
    "options": [
      "Temperatur",
      "Laune",
      "Luftdruck",
      "Alkoholgehalt"
    ],
    "correct": 2,
    "explanation": "Luftdruck. Für schlechte Stimmung in der Familie gibt es leider kein normiertes Messgerät."
  },
  {
    "level": 2,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welcher Vogel kann auf der Stelle in der Luft schweben und rückwärts fliegen?",
    "options": [
      "Kolibri",
      "Pinguin",
      "Albatros",
      "Strauß"
    ],
    "correct": 0,
    "explanation": "Kolibris sind wendige Flugkünstler. Der Strauß hat sich höflich abgemeldet."
  },
  {
    "level": 2,
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "Was kommt einmal in „Bier“, aber zweimal in „Bierbar“ vor?",
    "options": [
      "Der Buchstabe E",
      "Ein Kater",
      "Der Buchstabe B",
      "Der Buchstabe I"
    ],
    "correct": 2,
    "explanation": "Im Wort Bierbar steht B zweimal, in Bier einmal. Sprachforschung mit Zapfanlage."
  },
  {
    "level": 3,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welche Zutat fehlte ausdrücklich im ursprünglichen Reinheitsgebot von 1516?",
    "options": [
      "Wasser",
      "Gerste",
      "Hopfen",
      "Hefe"
    ],
    "correct": 3,
    "explanation": "Im Wortlaut standen Gerste, Hopfen und Wasser. Hefe war zwar beteiligt, galt aber noch nicht als eigene Zutat."
  },
  {
    "level": 3,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welche Form haben die Hinterlassenschaften von Wombats häufig?",
    "options": [
      "Spiralen",
      "Perfekte Kugeln",
      "Würfel",
      "Sterne"
    ],
    "correct": 2,
    "explanation": "Wombats scheiden tatsächlich würfelähnlichen Kot aus. Sogar der Darm kann Geometrie."
  },
  {
    "level": 3,
    "category": "Geografie",
    "difficulty": 1,
    "text": "Was ist flächenmäßig die größte Wüste der Erde?",
    "options": [
      "Gobi",
      "Antarktische Wüste",
      "Sahara",
      "Atacama"
    ],
    "correct": 1,
    "explanation": "Die Antarktis ist eine Kältewüste. „Wüste“ bedeutet nicht automatisch Badelatschenwetter."
  },
  {
    "level": 3,
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welche Epoche kam in Europa zuerst?",
    "options": [
      "Industrialisierung",
      "Aufklärung",
      "Renaissance",
      "Mittelalter"
    ],
    "correct": 3,
    "explanation": "Das Mittelalter begann weit vor der Renaissance. Die Streamingdienste kamen noch etwas später."
  },
  {
    "level": 3,
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Welcher Stoff sorgt bei Zwiebeln vor allem für tränende Augen?",
    "options": [
      "Reiner Alkohol",
      "Salzstaub",
      "Reizendes schwefelhaltiges Gas",
      "Kohlendioxid"
    ],
    "correct": 2,
    "explanation": "Beim Schneiden entsteht ein flüchtiger schwefelhaltiger Reizstoff. Die Zwiebel gewinnt jedes Drama."
  },
  {
    "level": 3,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "In welcher Stadt wurde der erste Pilsner-Urquell-Sud 1842 gebraut?",
    "options": [
      "Dresden",
      "Pilsen",
      "Prag",
      "Wien"
    ],
    "correct": 1,
    "explanation": "Das goldene Pilsner-Bier hat seinen Ursprung im böhmischen Pilsen. Der Name war ein ziemlich guter Tipp."
  },
  {
    "level": 3,
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Was haben Haie bereits getan, bevor es die ersten Bäume gab?",
    "options": [
      "Sie bauten Nester in Bäumen",
      "Sie züchteten Menschen",
      "Sie schwammen schon in den Meeren",
      "Sie verschwanden komplett"
    ],
    "correct": 2,
    "explanation": "Haie entstanden lange vor den ersten Bäumen. Ein Hai sieht heute also ziemlich viele neue Gesichter."
  },
  {
    "level": 3,
    "category": "Geografie",
    "difficulty": 1,
    "text": "Zu welchem Land gehören die Kanarischen Inseln politisch?",
    "options": [
      "Frankreich",
      "Marokko",
      "Portugal",
      "Spanien"
    ],
    "correct": 3,
    "explanation": "Die Kanaren gehören zu Spanien und liegen vor der nordwestafrikanischen Küste. Europäische Politik, afrikanischer Atlantik."
  },
  {
    "level": 3,
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was ist auf dem Mond wegen der geringen Schwerkraft anders?",
    "options": [
      "Man verliert die Körpermasse",
      "Man wiegt dort weniger",
      "Ein Tag dauert eine Stunde",
      "Luft ist dichter"
    ],
    "correct": 1,
    "explanation": "Die Gewichtskraft ist geringer, die Masse bleibt gleich. Das ist die freundlichste Waage im Sonnensystem."
  },
  {
    "level": 3,
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Wofür steht die Einheit IBU bei Bier?",
    "options": [
      "Bierschaumhöhe",
      "Alkoholprozent",
      "Zapftemperatur",
      "Bittereeinheiten"
    ],
    "correct": 3,
    "explanation": "International Bitterness Units. Weniger ein Geschmacksurteil als eine technische Bittere-Kennzahl."
  },
  {
    "level": 3,
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welches dieser Ereignisse fand zuletzt statt?",
    "options": [
      "Erste Mondlandung",
      "Erfindung des Buchdrucks",
      "Entdeckung Amerikas durch Kolumbus 1492",
      "Französische Revolution"
    ],
    "correct": 0,
    "explanation": "1969 landeten erstmals Menschen auf dem Mond. Das Bier aus der Kantine ist nicht dokumentiert."
  },
  {
    "level": 3,
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "Ein Hahn legt auf einem Dach ein Ei. Wohin rollt es?",
    "options": [
      "Zur Dachrinne",
      "Nirgendwo, Hähne legen keine Eier",
      "Rechts",
      "Links"
    ],
    "correct": 1,
    "explanation": "Hähne legen keine Eier. Wenn doch, bitte erst Wissenschaftler und dann die Nachbarn rufen."
  },
  {
    "level": 4,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Welcher Bierstil ist besonders mit Bamberg und geräuchertem Malz verbunden?",
    "options": [
      "Saison",
      "Porter",
      "Milkshake IPA",
      "Rauchbier"
    ],
    "correct": 3,
    "explanation": "Bamberger Rauchbier erhält das Raucharoma aus geräuchertem Malz. Frühstücksschinken im Glas ist nicht nötig."
  },
  {
    "level": 4,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Welcher Stoff färbt das Blut vieler Oktopusse blau?",
    "options": [
      "Chlorophyll",
      "Goldstaub",
      "Mikroplastik",
      "Hämocyanin mit Kupfer"
    ],
    "correct": 3,
    "explanation": "Der kupferhaltige Sauerstofftransportstoff Hämocyanin macht es blau. Adel im Ozean."
  },
  {
    "level": 4,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Was ist an Erdnüssen botanisch bemerkenswert?",
    "options": [
      "Sie wachsen ausschließlich auf Bäumen",
      "Sie sind Pilze",
      "Sie sind Hülsenfrüchte",
      "Sie enthalten keine Proteine"
    ],
    "correct": 2,
    "explanation": "Erdnüsse sind Hülsenfrüchte. Botanisch ist das eine Identitätskrise im Snackregal."
  },
  {
    "level": 4,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Welches Land schenkte den USA die Freiheitsstatue?",
    "options": [
      "Italien",
      "Kanada",
      "England",
      "Frankreich"
    ],
    "correct": 3,
    "explanation": "Die Freiheitsstatue war ein Geschenk aus Frankreich. Ein stattlicher Souvenirartikel."
  },
  {
    "level": 4,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Welcher deutsche Bierstil wird traditionell mit Düsseldorf verbunden?",
    "options": [
      "Berliner Weisse",
      "Altbier",
      "Kölsch",
      "Rauchbier"
    ],
    "correct": 1,
    "explanation": "Düsseldorfer Altbier ist obergärig. In Köln bestellt man es besser sehr vorsichtig."
  },
  {
    "level": 4,
    "category": "Geografie",
    "difficulty": 2,
    "text": "Welcher Kontinent hat die meisten Länder?",
    "options": [
      "Südamerika",
      "Europa",
      "Australien",
      "Afrika"
    ],
    "correct": 3,
    "explanation": "Afrika hat 54 international weithin anerkannte Staaten. Das ist mehr als jeder andere Kontinent."
  },
  {
    "level": 4,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Was wird im Höcker eines Kamels hauptsächlich gespeichert?",
    "options": [
      "Sand",
      "Wasser in einer Blase",
      "Fett",
      "Milch"
    ],
    "correct": 2,
    "explanation": "Kamelhöcker speichern Fettreserven, keine Wassertanks. Das ist die enttäuschendste Nachricht für durstige Kamele."
  },
  {
    "level": 4,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Was beschreibt „Petrichor“?",
    "options": [
      "Geruch nach Regen auf trockenem Boden",
      "Einen Geruch im Kühlschrank",
      "Angst vor Tieren",
      "Die Form von Schneeflocken"
    ],
    "correct": 0,
    "explanation": "Petrichor heißt der charakteristische Duft nach Regen auf trockenem Boden. Poetischer als „nasses Pflaster“."
  },
  {
    "level": 4,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Was wurde früher gebaut?",
    "options": [
      "Kolosseum in Rom",
      "Empire State Building",
      "Eiffelturm",
      "Brandenburger Tor"
    ],
    "correct": 0,
    "explanation": "Das Kolosseum stammt aus dem 1. Jahrhundert n. Chr. Das ist ein ziemlich alter Veranstaltungsort."
  },
  {
    "level": 4,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Was macht „Dry Hopping“ mit Bier besonders?",
    "options": [
      "Es entfernt sämtliches Wasser",
      "Es ersetzt das Malz",
      "Es tötet jede Hefe",
      "Es verstärkt oft das Hopfenaroma"
    ],
    "correct": 3,
    "explanation": "Bei Kalthopfung wird Hopfen während oder nach der Gärung zugesetzt, um Aromen zu betonen."
  },
  {
    "level": 4,
    "category": "Völlig bescheuert",
    "difficulty": 2,
    "text": "Was davon ist streng genommen kein Palindrom?",
    "options": [
      "Otto",
      "Rentner",
      "Bier",
      "Lagerregal"
    ],
    "correct": 2,
    "explanation": "„Bier“ liest sich rückwärts anders. „Lagerregal“ hingegen ist die Superkraft jedes Hobbybrauers."
  },
  {
    "level": 4,
    "category": "Weltwissen",
    "difficulty": 2,
    "text": "Welcher Planet hat keine natürlichen Monde?",
    "options": [
      "Jupiter",
      "Venus",
      "Mars",
      "Neptun"
    ],
    "correct": 1,
    "explanation": "Venus hat keinen Mond. Merkur übrigens auch – der ist bloß nicht in den Antworten."
  },
  {
    "level": 5,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Was ist „Gruit“ historisch beim Bierbrauen?",
    "options": [
      "Ein spezieller Kronkorken",
      "Eine Kräutermischung als Würzmittel",
      "Ein Brauereisteuerformular",
      "Eine Zapftechnik"
    ],
    "correct": 1,
    "explanation": "Gruit war eine Kräuterwürze für Bier, bevor Hopfen dominierte. Mittelalterliches Craft Beer."
  },
  {
    "level": 5,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Womit sind Pangolinschuppen hauptsächlich vergleichbar?",
    "options": [
      "Mit Kalkstein",
      "Mit Porzellan",
      "Mit Fischgräten",
      "Mit Fingernägeln aus Keratin"
    ],
    "correct": 3,
    "explanation": "Pangolinschuppen bestehen aus Keratin – dem Stoff deiner Fingernägel. Tierische Rüstung aus Nagelmaterial."
  },
  {
    "level": 5,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Welcher berühmte Herrscher starb auf der Insel St. Helena?",
    "options": [
      "Julius Caesar",
      "Alexander der Große",
      "Napoleon Bonaparte",
      "Karl der Große"
    ],
    "correct": 2,
    "explanation": "Napoleon starb 1821 auf St. Helena. Der Inselurlaub war nicht freiwillig."
  },
  {
    "level": 5,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Warum steigt warme Luft in einem Raum häufig auf?",
    "options": [
      "Sie wiegt grundsätzlich nichts",
      "Sie ist stärker magnetisch",
      "Weil die Schwerkraft oben schwächer ist",
      "Sie ist bei gleichem Druck weniger dicht"
    ],
    "correct": 3,
    "explanation": "Erwärmte Luft dehnt sich aus und hat eine geringere Dichte. Die Decke bekommt die warme Portion."
  },
  {
    "level": 5,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Was beschreibt „Stammwürze“ beim Brauen?",
    "options": [
      "Die Zahl der Kohlensäureblasen",
      "Den aktuellen Alkoholgehalt",
      "Die Temperatur beim Zapfen",
      "Gelöste Stoffe in der Würze vor der Gärung"
    ],
    "correct": 3,
    "explanation": "Stammwürze ist kein Beweis, dass ein Braumeister von einem Stamm abstammt."
  },
  {
    "level": 5,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Welches Tier besitzt einen giftigen Sporn an den Hinterbeinen, zumindest als Männchen?",
    "options": [
      "Wombat",
      "Känguru",
      "Schnabeltier",
      "Koala"
    ],
    "correct": 2,
    "explanation": "Männliche Schnabeltiere besitzen giftige Sporne. Auch Kuscheltiere können schlechte Laune haben."
  },
  {
    "level": 5,
    "category": "Geografie",
    "difficulty": 2,
    "text": "Welche Meerenge trennt Europa und Afrika am westlichen Mittelmeer?",
    "options": [
      "Straße von Gibraltar",
      "Bosporus",
      "Straße von Hormus",
      "Beringstraße"
    ],
    "correct": 0,
    "explanation": "Gibraltar liegt zwischen Spanien und Marokko. Kein geeigneter Schwimmweg für nach dem Quiz."
  },
  {
    "level": 5,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Was wurde in der Antike auf Papyrus üblicherweise geschrieben?",
    "options": [
      "Musik auf Vinyl",
      "Noten auf Silizium",
      "Texte mit Tinte",
      "Digitale QR-Codes"
    ],
    "correct": 2,
    "explanation": "Papyrus war ein wichtiger Schriftträger. Keine Cloud, aber viel Speicherkapazität auf Rollen."
  },
  {
    "level": 5,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Was wird beim „Eisbock“ gezielt teilweise entfernt?",
    "options": [
      "Hopfenbittere",
      "Malzstärke durch Sieben",
      "Kohlendioxid durch Vakuum",
      "Gefrorenes Wasser"
    ],
    "correct": 3,
    "explanation": "Durch teilweises Gefrieren und Entfernen von Eis wird das Bier konzentriert. Frost als Trickkiste."
  },
  {
    "level": 5,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Welcher Geschmack wird hauptsächlich mit „Umami“ bezeichnet?",
    "options": [
      "Herzhaft-würzig",
      "Scharf",
      "Sauer",
      "Bitter"
    ],
    "correct": 0,
    "explanation": "Umami meint einen herzhaft-würzigen Geschmack. Die fünfte Geschmacksrichtung, die beim Familienessen mitredet."
  },
  {
    "level": 5,
    "category": "Völlig bescheuert",
    "difficulty": 2,
    "text": "Du überholst in einem Rennen die Person auf Platz zwei. Auf welchem Platz bist du?",
    "options": [
      "Disqualifiziert wegen Ehrgeiz",
      "Auf Platz zwei",
      "Auf Platz eins",
      "Auf Platz drei"
    ],
    "correct": 1,
    "explanation": "Wer den Zweiten überholt, ist selbst Zweiter. Papa darf den Pokal wieder abstellen."
  },
  {
    "level": 5,
    "category": "Weltwissen",
    "difficulty": 2,
    "text": "Wie heißt die Hauptstadt der Türkei?",
    "options": [
      "Izmir",
      "Istanbul",
      "Ankara",
      "Antalya"
    ],
    "correct": 2,
    "explanation": "Ankara ist die Hauptstadt. Istanbul ist größer, aber nicht der Amtssitz."
  },
  {
    "level": 6,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Warum heißt Bockbier historisch vermutlich „Bock“?",
    "options": [
      "Wegen der Stadt Einbeck",
      "Wegen des Rezepts eines Klosters namens Bock",
      "Wegen der Stärke des Geweihs",
      "Wegen eines Ziegenopfers"
    ],
    "correct": 0,
    "explanation": "Aus dem Einbecker Bier wurde über Sprachwandlungen „Bockbier“. Die Ziege kam später aufs Etikett."
  },
  {
    "level": 6,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Welche Vögel können sich nachweislich menschliche Gesichter über längere Zeit merken?",
    "options": [
      "Krähen",
      "Flamingos ausschließlich",
      "Pinguine",
      "Hühner nur bei Vollmond"
    ],
    "correct": 0,
    "explanation": "Krähen erkennen einzelne Menschen wieder. Freundlich sein zahlt sich also aus."
  },
  {
    "level": 6,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Welche der folgenden Personen lebte zeitlich am frühesten?",
    "options": [
      "William Shakespeare",
      "Napoleon",
      "Kleopatra VII.",
      "Jeanne d’Arc"
    ],
    "correct": 2,
    "explanation": "Kleopatra lebte im 1. Jahrhundert v. Chr. Shakespeare hätte sie also nicht persönlich interviewen können."
  },
  {
    "level": 6,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Welche Aussage über einen Tag auf der Venus ist richtig?",
    "options": [
      "Eine Eigenrotation dauert länger als ein Sonnenumlauf",
      "Er dauert exakt 24 Stunden",
      "Es gibt gar keine Rotation",
      "Er ist kürzer als auf Merkur"
    ],
    "correct": 0,
    "explanation": "Venus braucht für eine Drehung ungefähr 243 Erdtage, für einen Umlauf um die Sonne 225."
  },
  {
    "level": 6,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Was beschreibt „Lambic“ aus Belgien traditionell besonders?",
    "options": [
      "Spontanvergorenes Bier",
      "Ein Bier ohne Malz",
      "Bier ausschließlich aus Reis",
      "Ein Pils mit Limonade"
    ],
    "correct": 0,
    "explanation": "Lambic wird traditionell durch Mikroorganismen aus Umgebung und Brauerei spontan vergoren."
  },
  {
    "level": 6,
    "category": "Geografie",
    "difficulty": 2,
    "text": "Welche Hauptstadt liegt direkt an der Donau?",
    "options": [
      "Madrid",
      "Budapest",
      "Amsterdam",
      "Oslo"
    ],
    "correct": 1,
    "explanation": "Die Donau fließt durch Budapest. Das ideale Quizflusskreuzfahrtziel."
  },
  {
    "level": 6,
    "category": "Tierisch unnütz",
    "difficulty": 2,
    "text": "Was ist die Besonderheit der Zähne eines Haies?",
    "options": [
      "Haie haben grundsätzlich nur zwei Zähne",
      "Viele Arten ersetzen Zähne fortlaufend",
      "Sie fallen nie aus",
      "Sie bestehen aus Holz"
    ],
    "correct": 1,
    "explanation": "Bei vielen Haiarten werden Zähne laufend nachgebildet. Zahnzusatzversicherung unnötig."
  },
  {
    "level": 6,
    "category": "Geschichte",
    "difficulty": 2,
    "text": "Wie heißt die römische Stadt, die 79 n. Chr. durch den Vesuv verschüttet wurde?",
    "options": [
      "Pompeji",
      "Sparta",
      "Troja",
      "Alexandria"
    ],
    "correct": 0,
    "explanation": "Pompeji wurde durch den Vesuvausbruch verschüttet. Die Ascheschicht wurde zur Zeitkapsel."
  },
  {
    "level": 6,
    "category": "Kuriose Fakten",
    "difficulty": 2,
    "text": "Welche dieser Pflanzen ist botanisch näher mit einer Tomate verwandt?",
    "options": [
      "Sonnenblume",
      "Kartoffel",
      "Erdbeere",
      "Kokospalme"
    ],
    "correct": 1,
    "explanation": "Tomate und Kartoffel gehören zu den Nachtschattengewächsen. Familientreffen als Pommes mit Ketchup."
  },
  {
    "level": 6,
    "category": "Bier & Brauen",
    "difficulty": 2,
    "text": "Welches Gas kann sich in schlecht belüfteten Gärkellern gefährlich sammeln?",
    "options": [
      "Kohlendioxid",
      "Helium",
      "Ozon aus dem Malz",
      "Argon aus dem Hopfen"
    ],
    "correct": 0,
    "explanation": "CO₂ aus der Gärung kann Sauerstoff verdrängen. Der Braumeister braucht also mehr als gute Rezepte."
  },
  {
    "level": 6,
    "category": "Völlig bescheuert",
    "difficulty": 2,
    "text": "Ein Arzt gibt dir drei Tabletten und sagt: alle 30 Minuten eine. Wann ist die letzte dran, wenn du sofort die erste nimmst?",
    "options": [
      "Nach 30 Minuten",
      "Nach 60 Minuten",
      "Nach drei Stunden",
      "Nach 90 Minuten"
    ],
    "correct": 1,
    "explanation": "Jetzt, nach 30 und nach 60 Minuten. Zeitrechnung ohne Taschenrechner – versprochen."
  },
  {
    "level": 6,
    "category": "Weltwissen",
    "difficulty": 2,
    "text": "Welches Land nutzt die Währung Forint?",
    "options": [
      "Polen",
      "Tschechien",
      "Rumänien",
      "Ungarn"
    ],
    "correct": 3,
    "explanation": "In Ungarn zahlt man mit Forint. Fürint wäre allerdings ein schönes Biermaß."
  },
  {
    "level": 7,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Wodurch entsteht beim Weizenbier häufig das typische Bananenaroma?",
    "options": [
      "Durch besonders gelben Hopfen",
      "Durch von Hefe gebildete Ester",
      "Durch echte Bananen im Reinheitsgebot",
      "Durch Bananschalen im Sud"
    ],
    "correct": 1,
    "explanation": "Vor allem Isoamylacetat aus der Hefe sorgt für die Bananennote. Die Banane bleibt im Obstkorb."
  },
  {
    "level": 7,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Welcher Meeressäuger schläft oft mit einer aktiveren Gehirnhälfte?",
    "options": [
      "Quallenfisch",
      "Delfin",
      "Seestern",
      "Krake"
    ],
    "correct": 1,
    "explanation": "Delfine können unihemisphärisch schlafen. Eine Hälfte passt auf, die andere macht Feierabend."
  },
  {
    "level": 7,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welcher antike Denker war Lehrer Alexanders des Großen?",
    "options": [
      "Aristoteles",
      "Sokrates",
      "Epikur",
      "Platon"
    ],
    "correct": 0,
    "explanation": "Aristoteles unterrichtete Alexander. Nachhilfe mit historischen Folgen."
  },
  {
    "level": 7,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Woraus besteht die weiße „Asche“ auf einem brennenden Räucherstäbchen überwiegend?",
    "options": [
      "Aus Zucker",
      "Aus reinem Kohlenstoff",
      "Aus gefrorenem Rauch",
      "Aus anorganischen Rückständen"
    ],
    "correct": 3,
    "explanation": "Asche enthält vor allem unverbrennbare Mineralstoffe. Kein Schnee für Miniaturmenschen."
  },
  {
    "level": 7,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Wie heißt der Brauschritt, bei dem durch gezielte Strömung Trubstoffe in der Mitte gesammelt werden?",
    "options": [
      "Karbonisierung",
      "Whirlpool",
      "Krausen",
      "Kaskade"
    ],
    "correct": 1,
    "explanation": "Beim Whirlpool wird heiße Würze kreisend bewegt, sodass sich Trubkegel bildet. Wie Badewanne, nur mit besserem Ergebnis."
  },
  {
    "level": 7,
    "category": "Geografie",
    "difficulty": 3,
    "text": "Welche Stadt liegt an der Mündung des Tejo?",
    "options": [
      "Lissabon",
      "Marseille",
      "Barcelona",
      "Neapel"
    ],
    "correct": 0,
    "explanation": "Lissabon liegt am Tejo-Ästuar. Das Wasser findet den Atlantik, sogar ohne GPS."
  },
  {
    "level": 7,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Was steckt hinter dem „Einhorn-Horn“ beim Narwal wirklich?",
    "options": [
      "Ein Horn aus Hornhaut",
      "Ein verknöcherter Stirnknochen",
      "Ein langer oberer Eckzahn",
      "Eine gefrorene Flosse"
    ],
    "correct": 2,
    "explanation": "Der Narwal trägt einen gewaltigen verlängerten Zahn. Zahnarzttermine dauern etwas länger."
  },
  {
    "level": 7,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welche Schrift wurde von Jean-François Champollion entscheidend entziffert?",
    "options": [
      "Runen der Wikinger",
      "Ägyptische Hieroglyphen",
      "Keilschrift der Sumerer",
      "Maya-Schrift"
    ],
    "correct": 1,
    "explanation": "Der Stein von Rosette half bei der Entzifferung der Hieroglyphen. Ein legendärer Spickzettel."
  },
  {
    "level": 7,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Warum glüht Neon in einer klassischen Neonröhre rotorange?",
    "options": [
      "Wegen eines Farbstoffs aus Karotten",
      "Angeregte Neonatome senden Licht aus",
      "Die Röhre enthält flüssiges Feuer",
      "Das Gas wird zu Glas"
    ],
    "correct": 1,
    "explanation": "Neon leuchtet bei elektrischer Anregung typisch rotorange. Viele „Neon“-Schilder nutzen andere Gase."
  },
  {
    "level": 7,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Wofür steht die Einheit Grad Plato beim Brauen?",
    "options": [
      "Schaumhöhe in Zentimetern",
      "Massenanteil gelöster Stoffe in der Würze",
      "Gradzahl der Ausschanktemperatur",
      "Alkoholgehalt eines fertigen Biers"
    ],
    "correct": 1,
    "explanation": "Grad Plato beschreibt näherungsweise den Extraktgehalt der Würze. Nicht Philosophie im Sudhaus."
  },
  {
    "level": 7,
    "category": "Völlig bescheuert",
    "difficulty": 3,
    "text": "Ein Mann fährt mit seinem Auto vor ein Hotel und weiß, dass er pleite ist. Warum?",
    "options": [
      "Er hat vergessen zu tanken",
      "Er spielt Monopoly",
      "Er ist ein Taxifahrer",
      "Das Hotel ist geschlossen"
    ],
    "correct": 1,
    "explanation": "In Monopoly kann ein Hotel den finanziellen Untergang bedeuten. Selten war ein Brettspiel so teuer."
  },
  {
    "level": 7,
    "category": "Weltwissen",
    "difficulty": 3,
    "text": "In welchem heutigen Staat lag die antike Stadt Karthago?",
    "options": [
      "Tunesien",
      "Libyen",
      "Griechenland",
      "Ägypten"
    ],
    "correct": 0,
    "explanation": "Karthago lag bei Tunis. Hannibal musste also etwas weiter als zum nächsten Biergarten."
  },
  {
    "level": 8,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welche Pflanzenfamilie teilen sich Hopfen und Cannabis?",
    "options": [
      "Hanfgewächse",
      "Rosengewächse",
      "Nachtschattengewächse",
      "Doldenblütler"
    ],
    "correct": 0,
    "explanation": "Beide gehören zu den Cannabaceae. Keine Sorge: Hopfenbier ist kein Geheimtrick."
  },
  {
    "level": 8,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Was ist am „Blut“ von Pfeilschwanzkrebsen besonders?",
    "options": [
      "Es enthält reines Eisenpulver",
      "Es ist ein Gas",
      "Es ist immer durchsichtig",
      "Es ist wegen Kupferverbindungen blau"
    ],
    "correct": 3,
    "explanation": "Pfeilschwanzkrebse besitzen kupferbasiertes Hämocyanin. Das Blau kommt nicht vom Meerwasser."
  },
  {
    "level": 8,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welcher Vertrag beendete 1648 den Dreißigjährigen Krieg?",
    "options": [
      "Westfälischer Friede",
      "Versailler Vertrag",
      "Frieden von Utrecht",
      "Wiener Kongress"
    ],
    "correct": 0,
    "explanation": "Der Westfälische Friede wurde 1648 geschlossen. Nach drei Jahrzehnten war das auch höchste Zeit."
  },
  {
    "level": 8,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Welche Farbe kann das Licht eines Sterns nicht allein aufgrund seiner Temperatur haben?",
    "options": [
      "Rot",
      "Weiß",
      "Blau",
      "Grün als typische Sternfarbe"
    ],
    "correct": 3,
    "explanation": "Sterne senden breite Spektren aus; typisch „grüne Sterne“ entstehen dadurch nicht. Physik ist eine Spaßbremse."
  },
  {
    "level": 8,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Was ist ein „Saison“ ursprünglich als Bierstil?",
    "options": [
      "Ein ungehopftes Reisbier",
      "Ein ausschließlich alkoholfreies Bier",
      "Traditionell ein belgisches Farmhouse Ale",
      "Ein bayerisches Winter-Weizen"
    ],
    "correct": 2,
    "explanation": "Saison ist historisch in der wallonischen Brautradition verankert. Klingt nach Modekollektion, ist aber Bier."
  },
  {
    "level": 8,
    "category": "Geografie",
    "difficulty": 3,
    "text": "Welches Meer liegt zwischen Australien und Neuseeland?",
    "options": [
      "Schwarzes Meer",
      "Tasmansee",
      "Kaspisches Meer",
      "Rotes Meer"
    ],
    "correct": 1,
    "explanation": "Die Tasmansee trennt Australien und Neuseeland. Die Fähre wäre eine lange Angelegenheit."
  },
  {
    "level": 8,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Warum ist das Fell von Seeottern so wichtig?",
    "options": [
      "Sie isolieren vor allem mit extrem dichtem Fell",
      "Ihr Fell erzeugt Strom",
      "Ihr Fell ist wasserlöslich",
      "Sie schwitzen darüber Salz aus"
    ],
    "correct": 0,
    "explanation": "Seeotter haben keine dicke isolierende Speckschicht wie viele andere Meeressäuger und nutzen dichtes Fell."
  },
  {
    "level": 8,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Wer ließ die Terrakotta-Armee in China für sein Grab anfertigen?",
    "options": [
      "Konfuzius",
      "Kublai Khan",
      "Qin Shihuangdi",
      "Mao Zedong"
    ],
    "correct": 2,
    "explanation": "Der erste Kaiser der Qin-Dynastie ließ die Armee schaffen. Ein sehr aufwendiges Grab-Accessoire."
  },
  {
    "level": 8,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Was bedeutet die Abkürzung „SOS“ ursprünglich als internationales Notsignal?",
    "options": [
      "Save Our Ship",
      "Signal Of Safety",
      "Es ist kein Akronym für feste Worte",
      "Save Our Souls"
    ],
    "correct": 2,
    "explanation": "SOS wurde als gut erkennbares Morsezeichen ausgewählt. Die bekannten Worterklärungen kamen später."
  },
  {
    "level": 8,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welche Aromastoffgruppe kann bei Weizenbier nach Gewürznelke riechen?",
    "options": [
      "Kochsalz",
      "Phenole, etwa 4-Vinylguajakol",
      "Ameisensäure",
      "Chlorophyll"
    ],
    "correct": 1,
    "explanation": "Bestimmte Hefestämme bilden 4-Vinylguajakol. Der Gewürzschrank bleibt zu."
  },
  {
    "level": 8,
    "category": "Völlig bescheuert",
    "difficulty": 3,
    "text": "Was ist an der Aussage „Ein Strauß steckt bei Gefahr den Kopf in den Sand“ richtig?",
    "options": [
      "Sie ist ein verbreiteter Mythos",
      "Strauße graben dafür Löcher mit dem Schnabel",
      "Nur Männchen tun das",
      "Sie gilt für alle Strauße"
    ],
    "correct": 0,
    "explanation": "Strauße stecken bei Gefahr nicht einfach den Kopf in den Sand. Sonst wäre Evolution sehr kurz gewesen."
  },
  {
    "level": 8,
    "category": "Weltwissen",
    "difficulty": 3,
    "text": "Was ist unter anderem eine Besonderheit der antarktischen Wüste?",
    "options": [
      "Sehr geringe Niederschläge",
      "Sie ist von Kakteen bedeckt",
      "Sie liegt komplett auf der Nordhalbkugel",
      "Sie besteht nur aus Sand"
    ],
    "correct": 0,
    "explanation": "Wüsten werden über Trockenheit definiert. Frost kann also locker dazugehören."
  },
  {
    "level": 9,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welcher Begriff beschreibt in der Brautechnik „Diacetyl“ besonders treffend?",
    "options": [
      "Eine Hopfensorte aus England",
      "Einen speziellen Bierdeckel",
      "Eine Braukessel-Legierung",
      "Eine Verbindung mit butterartigem Aroma"
    ],
    "correct": 3,
    "explanation": "Diacetyl kann in Bier an Butter oder Butterscotch erinnern. Für Popcorn gut, im Bier nicht immer gewünscht."
  },
  {
    "level": 9,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Was ist über die Entwicklung der menschlichen und Oktopusaugen besonders interessant?",
    "options": [
      "Sie zeigen konvergente Evolution",
      "Oktopusse haben grundsätzlich keine Netzhaut",
      "Sie haben dieselbe direkte Augen-Abstammung",
      "Menschenaugen stammen vom Oktopus ab"
    ],
    "correct": 0,
    "explanation": "Kameraartige Augen entwickelten sich in verschiedenen Tierlinien unabhängig. Die Natur kann ähnliche Lösungen mehrfach finden."
  },
  {
    "level": 9,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welche historische Stadt war Hauptstadt des Byzantinischen Reichs?",
    "options": [
      "Athen",
      "Konstantinopel",
      "Rom",
      "Antiochia"
    ],
    "correct": 1,
    "explanation": "Konstantinopel war über Jahrhunderte das Machtzentrum des Oströmischen Reichs. Heute heißt die Stadt Istanbul."
  },
  {
    "level": 9,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Was ist am kochenden Wasser auf dem Mount Everest ungewöhnlich?",
    "options": [
      "Es kocht erst über 150 °C",
      "Es verwandelt sich sofort in Eis",
      "Es kocht überhaupt nicht",
      "Es kocht wegen des niedrigen Luftdrucks unter 100 °C"
    ],
    "correct": 3,
    "explanation": "Durch den geringen Luftdruck sinkt die Siedetemperatur. Der Berg ist ein miserabler Ort für al dente Pasta."
  },
  {
    "level": 9,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Was bedeutet „Attenuation“ in der Brauereipraxis?",
    "options": [
      "Würzekochzeit",
      "Vergärungsgrad",
      "Fassdurchmesser",
      "Hopfenoxidation"
    ],
    "correct": 1,
    "explanation": "Die Attenuation beschreibt den Vergärungsgrad der Würze. Klingt nach Latein-Klausur mit Fassbier."
  },
  {
    "level": 9,
    "category": "Geografie",
    "difficulty": 3,
    "text": "Welche Hauptstadt liegt am Zusammenfluss von Save und Donau?",
    "options": [
      "Wien",
      "Zagreb",
      "Belgrad",
      "Bratislava"
    ],
    "correct": 2,
    "explanation": "Belgrad liegt am Zusammenfluss von Save und Donau. Zwei Flüsse, eine schwierige Quizfrage."
  },
  {
    "level": 9,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Welches dieser Tiere gehört zu den Kloakentieren?",
    "options": [
      "Ameisenigel",
      "Biber",
      "Meerschweinchen",
      "Nacktmull"
    ],
    "correct": 0,
    "explanation": "Ameisenigel und Schnabeltiere legen Eier und sind Säugetiere. Evolution mit Extrafunktionen."
  },
  {
    "level": 9,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Von welcher Schrift wurde das griechische Alphabet maßgeblich angeregt?",
    "options": [
      "Ägyptische Hieroglyphen direkt ohne Zwischenstufe",
      "Runen",
      "Maya-Schrift",
      "Phönizische Schrift"
    ],
    "correct": 3,
    "explanation": "Das griechische Alphabet entwickelte sich aus der phönizischen Schrift. Sogar Buchstaben haben eine Familiengeschichte."
  },
  {
    "level": 9,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Warum sind die Scheinfarben mancher Insektenflügel winkelabhängig?",
    "options": [
      "Interferenz und Strukturfarben",
      "Die Tiere färben sich aktiv mit Tinte",
      "Die Luft schmeckt anders",
      "Der Flügel wird heiß"
    ],
    "correct": 0,
    "explanation": "Mikroskopische Strukturen verändern reflektiertes Licht. Ein Natur-Filter ohne Instagram."
  },
  {
    "level": 9,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welche Aussage über „Brettanomyces“ im Bier stimmt?",
    "options": [
      "Es ist ein Getreide",
      "Es ist eine CO₂-Flaschenmarke",
      "Es ist eine Hefegattung, die spezielle Aromen erzeugen kann",
      "Es ist nur ein Hopfenöl"
    ],
    "correct": 2,
    "explanation": "Brettanomyces kann erdige oder stallartige Noten bilden. „Pferdedecke“ ist wirklich eine Geschmacksbeschreibung."
  },
  {
    "level": 9,
    "category": "Völlig bescheuert",
    "difficulty": 3,
    "text": "Auf einer Insel stehen zwei Personen: eine lügt immer, eine sagt immer die Wahrheit. Welche Frage hilft, wenn du nur eine fragen darfst, welcher Weg zum Bier führt?",
    "options": [
      "„Bist du ehrlich?“",
      "„Welchen Weg würde der andere mir nennen?“ – dann den anderen nehmen",
      "„Magst du Bier?“",
      "„Ist der Himmel blau?“"
    ],
    "correct": 1,
    "explanation": "Beide zeigen bei dieser Konstruktion auf den falschen Weg. Also einfach den anderen nehmen."
  },
  {
    "level": 9,
    "category": "Weltwissen",
    "difficulty": 3,
    "text": "Welcher Chemiker ordnete Elemente zu einem Periodensystem mit Vorhersagen noch unbekannter Elemente?",
    "options": [
      "Isaac Newton",
      "Michael Faraday",
      "Dmitri Mendelejew",
      "Louis Pasteur"
    ],
    "correct": 2,
    "explanation": "Mendelejew sagte Eigenschaften damals noch nicht entdeckter Elemente voraus. Mehr Voraussicht als unser Kühlschrank."
  },
  {
    "level": 10,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welcher Aromastoff ist maßgeblich für den „Lichtgeschmack“ mancher Biere verantwortlich?",
    "options": [
      "Milchsäure",
      "3-Methyl-2-buten-1-thiol",
      "Koffein",
      "Vanillin"
    ],
    "correct": 1,
    "explanation": "Bei Lichteinwirkung können aus Hopfenbitterstoffen schwefelhaltige Verbindungen entstehen, die „stinktierartig“ riechen."
  },
  {
    "level": 10,
    "category": "Völlig bescheuert",
    "difficulty": 3,
    "text": "Ein Mann sieht ein Foto und sagt: „Ich habe keine Geschwister. Aber der Vater dieses Mannes ist der Sohn meines Vaters.“ Wen zeigt das Foto?",
    "options": [
      "Seinen Onkel",
      "Seinen Vater",
      "Seinen Sohn",
      "Sich selbst"
    ],
    "correct": 2,
    "explanation": "Der Sohn seines Vaters ist er selbst. Also ist er der Vater der Person auf dem Foto. Denkpause inklusive."
  },
  {
    "level": 10,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welche Sprache der Antike ist auf dem Stein von Rosette neben Hieroglyphen und demotischer Schrift zu finden?",
    "options": [
      "Sanskrit",
      "Hebräisch",
      "Latein",
      "Altgriechisch"
    ],
    "correct": 3,
    "explanation": "Der dreisprachig beschriftete Stein half beim Entziffern ägyptischer Schriften. Drei Fassungen, endlich eine lesbar."
  },
  {
    "level": 10,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Welcher physikalische Effekt erklärt die scheinbare Verschiebung eines Sternorts durch die Bewegung der Erde?",
    "options": [
      "Aberration des Lichts",
      "Photoeffekt",
      "Dopplereffekt beim Bieröffnen",
      "Corioliskraft"
    ],
    "correct": 0,
    "explanation": "Die jährliche Aberration entsteht durch die Relativbewegung zwischen Beobachter und Licht. Sterne werden nicht wirklich herumgeschoben."
  },
  {
    "level": 10,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Was beschreibt die „Kräusen“-Phase beim Bierbrauen?",
    "options": [
      "Eine spezielle Malzröstung",
      "Eine Fasslagerung im Schnee",
      "Die Reinigung des Zapfhahns",
      "Eine schaumige Phase der Hauptgärung"
    ],
    "correct": 3,
    "explanation": "Kräusen nennt man den Schaumteppich bei aktiver Gärung. Der sieht aus, als hätte das Bier Haare."
  },
  {
    "level": 10,
    "category": "Geografie",
    "difficulty": 3,
    "text": "Welcher Staat hat den größten Anteil am Einzugsgebiet des Amazonas?",
    "options": [
      "Peru",
      "Brasilien",
      "Bolivien",
      "Kolumbien"
    ],
    "correct": 1,
    "explanation": "Brasilien umfasst den größten Teil des Amazonasbeckens. Der Fluss ist internationaler als viele Stammtische."
  },
  {
    "level": 10,
    "category": "Tierisch unnütz",
    "difficulty": 3,
    "text": "Welcher biologische Mechanismus hilft Laubfröschen beim Festhalten an glatten Oberflächen?",
    "options": [
      "Saugnäpfe mit Batterien",
      "Feuchte Haftpolster an den Zehen",
      "Kleine Krallen aus Metall",
      "Elektromagnete"
    ],
    "correct": 1,
    "explanation": "Laubfrösche haften durch spezialisierte Zehenpolster und dünne Flüssigkeitsfilme. Keine Klebestifte nötig."
  },
  {
    "level": 10,
    "category": "Geschichte",
    "difficulty": 3,
    "text": "Welcher Forscher beschrieb die Blutkreislauf-Funktion des Herzens im 17. Jahrhundert systematisch?",
    "options": [
      "Robert Koch",
      "William Harvey",
      "Andreas Vesalius",
      "Antonie van Leeuwenhoek"
    ],
    "correct": 1,
    "explanation": "Harvey veröffentlichte 1628 seine Erklärung des Blutkreislaufs. Zum Glück nicht als TikTok-Video."
  },
  {
    "level": 10,
    "category": "Kuriose Fakten",
    "difficulty": 3,
    "text": "Welches Element verdankt seinen Namen einer nordischen Göttin?",
    "options": [
      "Helium",
      "Vanadium",
      "Argon",
      "Neon"
    ],
    "correct": 1,
    "explanation": "Vanadium ist nach Vanadis, einem Beinamen Freyjas, benannt. Das Periodensystem hat Mythologie im Gepäck."
  },
  {
    "level": 10,
    "category": "Bier & Brauen",
    "difficulty": 3,
    "text": "Welche Verbindung wird beim Bierbrauen mit „DMS“ abgekürzt und kann an gekochten Mais erinnern?",
    "options": [
      "Dimethylsulfid",
      "Dibutylmethan",
      "Dinatriummalat",
      "Doppelt gemalzter Sud"
    ],
    "correct": 0,
    "explanation": "Dimethylsulfid ist ein flüchtiger Aromastoff, dessen Überschuss oft als gekochter Mais beschrieben wird."
  },
  {
    "level": 10,
    "category": "Völlig bescheuert",
    "difficulty": 3,
    "text": "Du bist im komplett dunklen Zimmer mit einer Kerze, einer Öllampe und einem Kamin. Was zündest du zuerst an?",
    "options": [
      "Den Kamin",
      "Die Kerze",
      "Die Öllampe",
      "Das Streichholz"
    ],
    "correct": 3,
    "explanation": "Ohne Streichholz geht gar nichts los. Gut, dass in dieser Runde niemand das Licht angemacht hat."
  },
  {
    "level": 10,
    "category": "Weltwissen",
    "difficulty": 3,
    "text": "Welches der folgenden Völker verwendete das Quipu als Aufzeichnungssystem?",
    "options": [
      "Inka",
      "Wikinger",
      "Römer",
      "Phönizier"
    ],
    "correct": 0,
    "explanation": "Die Inka nutzten Knotenschnüre zur Informationsverwaltung. Tabellenkalkulation mit Wolle."
  }
];
  const EXTRA_QUESTIONS = [
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welche Eigenschaft haben Eulenaugen?",
    "options": [
      "Sie sitzen hinten am Kopf",
      "Sie leuchten aus eigener Kraft",
      "Sie können wie Kaugummi herausgezogen werden",
      "Sie sind im Schädel nur begrenzt beweglich"
    ],
    "correct": 3,
    "explanation": "Eulen müssen ihren Kopf stark drehen, um den Blick zu ändern. Ja, die Kopfbewegung ist Absicht."
  },
  {
    "category": "Küche & Kurioses",
    "difficulty": 1,
    "text": "Welche Farbe hat eine reife grüne Paprika normalerweise?",
    "options": [
      "Blau",
      "Schwarz",
      "Violett",
      "Grün"
    ],
    "correct": 3,
    "explanation": "Manchmal liegt die Antwort doch vor einem. Dieses eine Mal darf die Familie tief durchatmen."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welche antike Hochkultur nutzte Hieroglyphen?",
    "options": [
      "Inka",
      "Altes Ägypten",
      "Römisches Reich",
      "Wikinger"
    ],
    "correct": 1,
    "explanation": "Ägyptische Hieroglyphen waren ein Schriftsystem, keine uralte Emoji-Tastatur."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was passiert hauptsächlich bei der alkoholischen Gärung?",
    "options": [
      "Hopfen verwandelt sich in Kork",
      "Wasser wird zu Malz",
      "Salz wird zu Schaum",
      "Hefe setzt Zucker zu Ethanol und CO₂ um"
    ],
    "correct": 3,
    "explanation": "Hefe ist die unsichtbare Belegschaft der Brauerei."
  },
  {
    "category": "Allgemeinwissen",
    "difficulty": 1,
    "text": "Wie nennt man das Phänomen, dass eine Erinnerung durch einen Geruch ausgelöst wird?",
    "options": [
      "Nordlicht-Effekt",
      "Proust-Effekt",
      "Placebo-Bier",
      "Doppler-Effekt"
    ],
    "correct": 1,
    "explanation": "Der Proust-Effekt bezeichnet geruchsgetriggerte autobiografische Erinnerungen. Mamas Küche lässt grüßen."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Was ist eine Quokka?",
    "options": [
      "Eine Biermarke aus Peru",
      "Eine scharfe Paprika",
      "Ein kleines Beuteltier",
      "Ein Fisch aus der Tiefsee"
    ],
    "correct": 2,
    "explanation": "Das Quokka ist ein australisches Beuteltier mit scheinbar dauerndem Grinsen."
  },
  {
    "category": "Küche & Kurioses",
    "difficulty": 1,
    "text": "Welche Zutat lässt Brot durch Gärung aufgehen?",
    "options": [
      "Öl",
      "Kakao",
      "Pfeffer",
      "Hefe"
    ],
    "correct": 3,
    "explanation": "Hefe erzeugt Kohlendioxid. Backen und Brauen teilen sich mehr als die Küche."
  },
  {
    "category": "Weltwissen",
    "difficulty": 1,
    "text": "Welche dieser Städte liegt NICHT in Italien?",
    "options": [
      "Porto",
      "Turin",
      "Bologna",
      "Neapel"
    ],
    "correct": 0,
    "explanation": "Porto liegt in Portugal. Aber alle vier klingen nach gutem Abendessen."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was ist ein Bier-Sommelier?",
    "options": [
      "Ein Gerichtsvollzieher für Bier",
      "Ein Fassreiniger",
      "Ein Arzt für Hopfenallergien",
      "Eine Person mit Expertise in Bierstilen und Verkostung"
    ],
    "correct": 3,
    "explanation": "Bier-Sommeliers befassen sich unter anderem mit Sensorik und Kombinationen von Speisen."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Was ist bei Kängurus in Australien besonders charakteristisch?",
    "options": [
      "Viele Weibchen haben einen Beutel",
      "Alle können rückwärts fliegen",
      "Sie legen im Winter Eier",
      "Sie leben ausschließlich im Meer"
    ],
    "correct": 0,
    "explanation": "Der Beutel schützt und versorgt das Jungtier. Praktischer als jeder Kinderwagen."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Welche Frucht gehört zur Familie der Nachtschattengewächse?",
    "options": [
      "Tomate",
      "Apfel",
      "Kokosnuss",
      "Orange"
    ],
    "correct": 0,
    "explanation": "Die Tomate gehört wie Kartoffel und Aubergine zu den Nachtschattengewächsen."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welcher geschmackliche Eindruck kann aus Hopfen stammen?",
    "options": [
      "Reiner Zucker",
      "Zitrusnoten",
      "Speck durch Hefe allein",
      "Vanillepudding ohne Zusätze"
    ],
    "correct": 1,
    "explanation": "Einige Hopfensorten können zitrische, tropische oder harzige Aromen liefern."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welche Kultur entwickelte in Mesopotamien die Keilschrift?",
    "options": [
      "Sumerer",
      "Maya",
      "Wikinger",
      "Azteken"
    ],
    "correct": 0,
    "explanation": "Die Sumerer gehören zu den frühesten Anwendern der Keilschrift. Auch die hatten Papierkram."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welche Tiergruppe besitzt weder Knochen noch Wirbelsäule?",
    "options": [
      "Delfine",
      "Seepferdchen",
      "Quallen",
      "Haie"
    ],
    "correct": 2,
    "explanation": "Quallen bestehen größtenteils aus Wasser und besitzen kein Knochenskelett."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was ist der Unterschied zwischen Meteoroid und Meteorit?",
    "options": [
      "Meteoroiden bestehen aus Wolken",
      "Meteoroiden sind immer größer als Planeten",
      "Ein Meteorit erreicht den Erdboden",
      "Meteoriten kreisen nur um Jupiter"
    ],
    "correct": 2,
    "explanation": "Meteoroiden sind Körper im All; erreichen Bruchstücke den Boden, heißen sie Meteoriten."
  },
  {
    "category": "Sprache & Unsinn",
    "difficulty": 1,
    "text": "Was bedeutet „Torschlusspanik“ ursprünglich bildlich?",
    "options": [
      "Panik vor einem aufgebrauchten Bierfass",
      "Angst vorm Elfmeterschießen",
      "Angst vor einer Rolltreppe",
      "Angst vor dem Schließen eines Stadttors"
    ],
    "correct": 3,
    "explanation": "Das Wort erinnert an verschlossene Stadttore. Heute beschreibt es den Druck, etwas zu verpassen."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welcher Stoff ist maßgeblich für Kohlensäure im Bier?",
    "options": [
      "Gelöstes Kohlendioxid",
      "Gelöster Sauerstoff",
      "Silber aus Kronkorken",
      "Stickstoff aus Leitungswasser"
    ],
    "correct": 0,
    "explanation": "CO₂ entsteht bei der Gärung und kann zusätzlich bei der Karbonisierung eingebracht werden."
  },
  {
    "category": "Weltwissen",
    "difficulty": 1,
    "text": "Was ist das flächenmäßig kleinste Land der Welt?",
    "options": [
      "Monaco",
      "San Marino",
      "Liechtenstein",
      "Vatikanstadt"
    ],
    "correct": 3,
    "explanation": "Vatikanstadt ist der kleinste international anerkannte Staat. Wenig Fläche, viel Geschichte."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Warum „leuchtet“ ein Glühwürmchen?",
    "options": [
      "Wegen winziger Batterien",
      "Biolumineszenz durch chemische Reaktion",
      "Durch reflektierte Straßenlampen",
      "Durch Sonnenbrand"
    ],
    "correct": 1,
    "explanation": "Glühwürmchen erzeugen Licht durch chemische Reaktionen. Umweltfreundlicher als jede Partylichterkette."
  },
  {
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "Ein Mann steht im strömenden Regen ohne Regenschirm. Kein Haar wird nass. Warum?",
    "options": [
      "Er wohnt unter Wasser",
      "Der Regen ist trocken",
      "Er ist glatzköpfig",
      "Seine Haare sind wasserfest"
    ],
    "correct": 2,
    "explanation": "Weil er keine Haare hat. Ein Klassiker unter den Fragen, die man gerne überdenkt."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welche Stadt ist besonders für Kölsch bekannt?",
    "options": [
      "Kassel",
      "Kempten",
      "Kiel",
      "Köln"
    ],
    "correct": 3,
    "explanation": "Der Name verrät es. Kölsch ist zusätzlich regional geschützt."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was ist ein „Katzenauge“ an der Straße typischerweise?",
    "options": [
      "Ein rückstrahlender Reflektor",
      "Ein Haustierpass",
      "Eine Kamera mit Katzenerkennung",
      "Ein optisches Gerät zum Mäusezählen"
    ],
    "correct": 0,
    "explanation": "Rückstrahler machen Fahrbahnmarkierungen sichtbarer. Katzen sind nicht anwesend."
  },
  {
    "category": "Allgemeinwissen",
    "difficulty": 1,
    "text": "Welcher dieser Wissenschaftler beschäftigte sich besonders mit der Evolution durch natürliche Selektion?",
    "options": [
      "Marie Curie",
      "Alan Turing",
      "Charles Darwin",
      "Albert Einstein"
    ],
    "correct": 2,
    "explanation": "Darwin und Wallace entwickelten die Theorie der natürlichen Selektion. Nicht alles ist vom stärksten Bier abhängig."
  },
  {
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "Welche dieser Aussagen kann wahr sein, ohne dass ein Mensch fliegen kann?",
    "options": [
      "Ein Mensch fliegt im Flugzeug",
      "Ein Mensch fliegt durch bloßes Denken",
      "Ein Mensch fliegt mit den Armen",
      "Ein Mensch fliegt aus eigener Kraft wie ein Adler"
    ],
    "correct": 0,
    "explanation": "Mit dem Flugzeug kann man fliegen, ohne selbst Flügel zu haben. Sprachlich sauber, aber trotzdem gemein."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welcher Bierstil wird manchmal mit einem Klecks Himbeer- oder Waldmeistersirup serviert?",
    "options": [
      "Dry Stout",
      "Helles",
      "India Pale Ale",
      "Berliner Weiße"
    ],
    "correct": 3,
    "explanation": "Berliner Weiße wird traditionell teils mit Sirup serviert. Für alle, die ihre saure Überraschung erst süß machen."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welcher Begriff bezeichnet den Einmarsch napoleonischer Truppen nach Russland 1812?",
    "options": [
      "Rosenkrieg",
      "Krimkrieg",
      "Hundertjähriger Krieg",
      "Russlandfeldzug"
    ],
    "correct": 3,
    "explanation": "Napoleons Russlandfeldzug endete in einer Katastrophe. Winterurlaub war damals falsch geplant."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welches dieser Tiere kann den Kopf besonders weit drehen, ohne ihn rundherum zu schrauben?",
    "options": [
      "Eule",
      "Delfin",
      "Faultier",
      "Pferd"
    ],
    "correct": 0,
    "explanation": "Eulen können ihren Kopf sehr weit drehen, aber nicht unendlich oft. Das wäre anatomisch zu viel Show."
  },
  {
    "category": "Küche & Kurioses",
    "difficulty": 1,
    "text": "Was ist „Aquafaba“?",
    "options": [
      "Eine tropische Fischart",
      "Kochflüssigkeit von Hülsenfrüchten",
      "Ein spanisches Wasserfass",
      "Ein Name für Eiskristalle"
    ],
    "correct": 1,
    "explanation": "Aquafaba ist oft Kichererbsenwasser und lässt sich sogar zu Schaum aufschlagen. Küchenzauberei aus der Dose."
  },
  {
    "category": "Weltwissen",
    "difficulty": 1,
    "text": "Wo liegt die historische Region Transsilvanien?",
    "options": [
      "Rumänien",
      "Ungarn ausschließlich",
      "Bulgarien",
      "Slowakei"
    ],
    "correct": 0,
    "explanation": "Transsilvanien liegt in Rumänien. Dracula lässt grüßen, historisch aber komplizierter."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was ist beim Brauen „Kalttrub“?",
    "options": [
      "Eine gefrorene Malzsorte",
      "Eine Absperrung im Biergarten",
      "Ausgefällte Stoffe beim Abkühlen der Würze",
      "Schimmel im Kühlschrank"
    ],
    "correct": 2,
    "explanation": "Beim Abkühlen können unter anderem Eiweißbestandteile ausfallen. Der Name klingt gruseliger als der Prozess."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welche Forscherin gewann Nobelpreise in zwei verschiedenen Naturwissenschaften?",
    "options": [
      "Marie Curie",
      "Ada Lovelace",
      "Jane Goodall",
      "Rosalind Franklin"
    ],
    "correct": 0,
    "explanation": "Marie Curie erhielt Nobelpreise für Physik und Chemie. Mehrfacher Spitzenplatz ohne Glücksrad."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welches Tier nutzt Elektrizität zur Jagd und Verteidigung?",
    "options": [
      "Clownfisch",
      "Seepferdchen",
      "Karpfen",
      "Zitteraal"
    ],
    "correct": 3,
    "explanation": "Zitteraale erzeugen starke elektrische Entladungen. Eine Powerbank mit schlechter Laune."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Was ist ein „Geosmin“ besonders bekannt für?",
    "options": [
      "Erdigen Geruch",
      "Süße im Honig",
      "Schärfe im Chili",
      "Farbe von Bierglas"
    ],
    "correct": 0,
    "explanation": "Geosmin trägt zu typischem erdigem Geruch bei, etwa nach Regen. Sehr gut für Nase, sehr schlecht für die Rechtschreibung."
  },
  {
    "category": "Allgemeinwissen",
    "difficulty": 1,
    "text": "Was ist bei einem „Ohrwurm“ gemeint?",
    "options": [
      "Ein Wurm, der in jedem Ohr lebt",
      "Ein hartnäckig im Kopf bleibendes Musikstück",
      "Eine Biersorte aus Wales",
      "Ein medizinischer Kopfhörer"
    ],
    "correct": 1,
    "explanation": "Der Ohrwurm ist eine Melodie, die im Kopf hängenbleibt. Leider nicht immer eine gute."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Welche Besonderheit besitzen Fangschreckenkrebse?",
    "options": [
      "Sie leben immer als Paare im Himmel",
      "Manche schlagen extrem schnell mit Fangarmen zu",
      "Sie haben keine Augen",
      "Sie ernähren sich nur von Steinen"
    ],
    "correct": 1,
    "explanation": "Die Schläge mancher Arten sind enorm schnell und kräftig. Der Boxverein des Meeres."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Was versteht man unter einem „Flight“ bei einer Bierverkostung?",
    "options": [
      "Den Transport eines Fasses per Flugzeug",
      "Mehrere kleine Proben verschiedener Biere",
      "Ein Bier mit Flügeln",
      "Eine besonders hohe Schaumkrone"
    ],
    "correct": 1,
    "explanation": "Ein Tasting-Flight bietet mehrere kleine Probierportionen. Die einzige Flugreise, die auf dem Tisch endet."
  },
  {
    "category": "Geografie",
    "difficulty": 1,
    "text": "Welches Gewässer trennt Großbritannien vom europäischen Festland?",
    "options": [
      "Panamakanal",
      "Sueskanal",
      "Ärmelkanal",
      "Bosporus"
    ],
    "correct": 2,
    "explanation": "Der Ärmelkanal trennt die Insel vom Kontinent. Für eine Fähre noch ein lösbares Problem."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Welches Organ ist beim Menschen das größte innere Organ?",
    "options": [
      "Leber",
      "Milz",
      "Herz",
      "Gallenblase"
    ],
    "correct": 0,
    "explanation": "Die Leber ist das größte innere Organ. Nicht nur für den Stammtisch wichtig."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welche römische Zahl steht für 500?",
    "options": [
      "D",
      "L",
      "C",
      "M"
    ],
    "correct": 0,
    "explanation": "D steht für 500. D wie „Das ist viel zu viel für die Runde“."
  },
  {
    "category": "Tierisch unnütz",
    "difficulty": 1,
    "text": "Bei welchen Säugetieren kann eine Art Winterschlaf mehrere Monate dauern?",
    "options": [
      "Fledermäuse",
      "Giraffen",
      "Elefanten",
      "Delfine"
    ],
    "correct": 0,
    "explanation": "Einige Fledermäuse halten über Monate Winterschlaf. Perfektes Vorbild für Montagmorgen."
  },
  {
    "category": "Bier & Brauen",
    "difficulty": 1,
    "text": "Welche Temperatur wird für klassische untergärige Gärung grob eher genutzt?",
    "options": [
      "Kühl, etwa 8 bis 14 °C",
      "Unter −20 °C",
      "Konstant 100 °C",
      "Mindestens 60 °C"
    ],
    "correct": 0,
    "explanation": "Untergärige Lagerbiere vergären meist kühler als viele Ales. Die Hefe mag es entspannt."
  },
  {
    "category": "Geschichte",
    "difficulty": 1,
    "text": "Welcher antike Herrscher führte seine Armee samt Kriegselefanten über die Alpen?",
    "options": [
      "Ramses II.",
      "Caesar",
      "Hannibal",
      "Attila"
    ],
    "correct": 2,
    "explanation": "Hannibal zog im Zweiten Punischen Krieg über die Alpen. Mit Elefanten – wegen fehlender Autobahn."
  },
  {
    "category": "Völlig bescheuert",
    "difficulty": 1,
    "text": "In welcher Situation kannst du einen leeren Bierkrug auf den Tisch stellen, ohne ihn zu berühren?",
    "options": [
      "Nur mit Magneten",
      "Nur bei Vollmond",
      "Wenn das Bier besonders kalt ist",
      "Wenn du Handschuhe trägst und ihn damit hältst"
    ],
    "correct": 3,
    "explanation": "Wer Handschuhe trägt, berührt den Krug nicht direkt mit der Haut. Gemein, aber korrekt."
  },
  {
    "category": "Kuriose Fakten",
    "difficulty": 1,
    "text": "Warum erscheinen Wolken oft weiß?",
    "options": [
      "Viele Wassertröpfchen streuen sichtbares Licht",
      "Weil sie Kreidestaub enthalten",
      "Weil ihre Temperatur immer null ist",
      "Weil sie Sonnenlicht selbst herstellen"
    ],
    "correct": 0,
    "explanation": "Wolken streuen verschiedene sichtbare Wellenlängen. Eine riesige Lichtshow ohne Nebelmaschine."
  }
];
  const QUESTIONS = [...CLASSIC_QUESTIONS.map(({level,...q})=>q), ...EXTRA_QUESTIONS];
  const ESTIMATES = [
  {
    "text": "In welchem Jahr wurde das bayerische Reinheitsgebot erlassen?",
    "answer": 1516,
    "unit": "Jahr",
    "explanation": "1516, in Ingolstadt. Die Hefe war im damaligen Wortlaut noch nicht erwähnt."
  },
  {
    "text": "In welchem Jahr wurde das erste Pilsner Urquell gebraut?",
    "answer": 1842,
    "unit": "Jahr",
    "explanation": "1842 in Pilsen. Ein historischer Meilenstein in der Biergeschichte."
  },
  {
    "text": "In welchem Jahr begann das Münchner Oktoberfest?",
    "answer": 1810,
    "unit": "Jahr",
    "explanation": "1810 war das Hochzeitsfest der Startschuss."
  },
  {
    "text": "In welchem Jahr wurde die Brauerei Guinness in Dublin gegründet?",
    "answer": 1759,
    "unit": "Jahr",
    "explanation": "Arthur Guinness unterschrieb den berühmten Pachtvertrag 1759."
  },
  {
    "text": "In welchem Jahr sank die Titanic?",
    "answer": 1912,
    "unit": "Jahr",
    "explanation": "1912 ging die Titanic unter. Ein Filmtitel erspart hier die Recherche."
  },
  {
    "text": "In welchem Jahr wurde der Eiffelturm für das Publikum eröffnet?",
    "answer": 1889,
    "unit": "Jahr",
    "explanation": "1889, anlässlich der Pariser Weltausstellung."
  },
  {
    "text": "In welchem Jahr fiel die Berliner Mauer?",
    "answer": 1989,
    "unit": "Jahr",
    "explanation": "1989. Die Schlagzeilen von damals sind unvergessen."
  },
  {
    "text": "In welchem Jahr fand die erste bemannte Mondlandung statt?",
    "answer": 1969,
    "unit": "Jahr",
    "explanation": "1969 landete Apollo 11 auf dem Mond."
  },
  {
    "text": "In welchem Jahr wurde das erste iPhone vorgestellt?",
    "answer": 2007,
    "unit": "Jahr",
    "explanation": "2007 stellte Steve Jobs das erste iPhone vor."
  },
  {
    "text": "In welchem Jahr wurde Nintendo als Spielkartenfirma gegründet?",
    "answer": 1889,
    "unit": "Jahr",
    "explanation": "Nintendo wurde 1889 gegründet – lange vor Super Mario."
  },
  {
    "text": "In welchem Jahr wurde Wikipedia gestartet?",
    "answer": 2001,
    "unit": "Jahr",
    "explanation": "Wikipedia startete 2001. Seitdem weiß der Familienrat verdächtig viel."
  },
  {
    "text": "In welchem Jahr wurde Pluto entdeckt?",
    "answer": 1930,
    "unit": "Jahr",
    "explanation": "Pluto wurde 1930 entdeckt. Die Diskussion um seinen Planetenstatus kam später."
  },
  {
    "text": "In welchem Jahr wurden die ersten modernen Olympischen Spiele in Athen ausgetragen?",
    "answer": 1896,
    "unit": "Jahr",
    "explanation": "1896 in Athen. Eine sportliche Schätzung ohne Liegestütze."
  },
  {
    "text": "In welchem Jahr wurde Penicillin von Alexander Fleming entdeckt?",
    "answer": 1928,
    "unit": "Jahr",
    "explanation": "1928 beobachtete Fleming die antibakterielle Wirkung eines Schimmelpilzes."
  },
  {
    "text": "In welchem Jahr startete die erste bemannte Raumfahrt mit Juri Gagarin?",
    "answer": 1961,
    "unit": "Jahr",
    "explanation": "1961 umkreiste Juri Gagarin die Erde."
  },
  {
    "text": "Wie viele Erdtage dauert eine Umdrehung der Venus um ihre eigene Achse ungefähr?",
    "answer": 243,
    "unit": "Erdtage",
    "explanation": "Etwa 243 Erdtage, länger als ihr Sonnenjahr."
  },
  {
    "text": "Wie viele Halswirbel haben Menschen typischerweise?",
    "answer": 7,
    "unit": "Halswirbel",
    "explanation": "Sieben Halswirbel – genau wie eine Giraffe."
  },
  {
    "text": "Wie viele natürliche Monde hat die Venus?",
    "answer": 0,
    "unit": "Monde",
    "explanation": "Keinen. Die Venus braucht offenbar keine Begleitung."
  }
];
  const FAMILY = [
    'Wer würde bei einer Zombie-Apokalypse zuerst versuchen, mit den Zombies zu verhandeln?',
    'Wer könnte eine Bedienungsanleitung lesen und trotzdem alles falsch zusammenbauen?',
    'Wer würde als Erster sein Handy im Kühlschrank finden?',
    'Wer würde im Supermarkt nur wegen der Kostproben vorbeikommen?',
    'Wer könnte am ehesten bei einer Quizshow die Frage falsch verstehen und trotzdem gewinnen?',
    'Wer braucht am längsten, um sich für ein Restaurant zu entscheiden?',
    'Wer würde einen Lottogewinn zuerst in eine völlig sinnlose Anschaffung investieren?',
    'Wer wird am ehesten berühmt, ohne zu wissen warum?',
    'Wer ist am wahrscheinlichsten fünf Minuten zu spät und behauptet, schon da zu sein?',
    'Wer würde ein Möbelstück aufbauen und danach fünf Schrauben übrig haben?',
    'Wer könnte beim Monopoly den Familienfrieden endgültig beenden?',
    'Wer könnte überzeugend Werbung für ein Produkt machen, das gar nicht existiert?',
    'Wer würde einen komplizierten Cocktail bestellen und dann doch Wasser trinken?',
    'Wer würde die Fernbedienung suchen, während sie in seiner Hand liegt?',
    'Wer könnte im Urlaub aus Versehen im falschen Hotel einchecken?',
    'Wer wäre die schlechteste Person für eine geheime Überraschungsparty?',
    'Wer würde mitten in einer dramatischen Rede anfangen zu lachen?',
    'Wer würde einen eigenen Feiertag einführen, nur damit alle ausschlafen können?',
    'Wer würde beim Versteckspielen einschlafen?',
    'Wer kann am schlechtesten verlieren, obwohl er das Gegenteil behauptet?',
    'Wer würde aus Versehen seine eigene Geburtstagstorte anschneiden, bevor alle da sind?',
    'Wer würde in einer Show mit dem goldenen Bierpokal eine Dankesrede von zehn Minuten halten?'
  ];
  window.BIER_DATA = Object.freeze({QUESTIONS, CLASSIC_QUESTIONS, ESTIMATES, FAMILY});
})();
