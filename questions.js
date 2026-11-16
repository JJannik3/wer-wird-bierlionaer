/* Fragenpool: 144 reguläre und 100 nach Stufe sortierte Klassik-Fragen, 18 Schätzfinals und Familien-Challenges.
   Format: Schwierigkeit | Frage | A | B | C | D | korrekte Antwort (0-3) | Erklärung
   Du kannst jederzeit Fragen hinzufügen oder ändern. */
(() => {
  const QUESTIONS = [];
  const add = (category, body) => body.trim().split('\n').map(line => {
    const [difficulty, text, a, b, c, d, correct, explanation] = line.split('|').map(s => s.trim());
    if (!explanation) throw Error('Fehlerhafte Frage: ' + line);
    QUESTIONS.push({ category, difficulty: Number(difficulty), text, options: [a,b,c,d], correct: Number(correct), explanation });
  });

  add('🍺 Bier & Brauen', `
1|Wie nennt man das Auflösen von Malzinhaltsstoffen in warmem Wasser beim Brauen?|Maischen|Schmoren|Panschen|Pökeln|0|Maischen heißt der Arbeitsschritt. Klingt nach Küchenunfall, ist aber Handwerk.
1|Was bedeutet „Helles“ bei Bier vor allem?|Es wird im Dunkeln gebraut|Es ist hell in der Farbe|Es enthält gar keinen Hopfen|Es leuchtet im Dunkeln|1|Helles ist ein helles, meist untergäriges Lagerbier.
1|Wie viel Liter fasst eine klassische bayerische Maß?|0,33 Liter|0,5 Liter|1 Liter|2 Liter|2|Eine Maß = ein Liter. Über den Schaum wird trotzdem leidenschaftlich diskutiert.
1|Welche Zutat gibt Bier typischerweise die Bitterkeit?|Hopfen|Salz|Kartoffeln|Gurkenwasser|0|Die Bitterstoffe stammen hauptsächlich vom Hopfen.
1|Was bildet sich beim Gären durch die Hefe?|Goldstaub und Glitzer|Alkohol und Kohlendioxid|Milch und Honig|Nur Schaum|1|Hefe wandelt vergärbaren Zucker vor allem in Alkohol und CO₂ um.
1|Was ist Malz meistens?|Geröstete Kartoffel|Gekeimtes und getrocknetes Getreide|Getrocknete Zitrone|Pulverisierte Brezel|1|Für Bier verwendet man häufig Gerstenmalz.
1|Wofür steht die Abkürzung IBU auf Bieretiketten?|International Beer Units|International Bitterness Units|Institut für Bier-Unfälle|Iron Beer Upgrade|1|IBU ist eine Maßeinheit für die berechnete Bittere des Biers.
1|Welche Farbe hat klassisches Pils meist?|Hellgold|Tiefschwarz|Pink|Türkis|0|Pils ist gewöhnlich hellgold und deutlich gehopft.
1|Was sorgt normalerweise für den Schaum auf Bier?|Kleine Luftballons|Kohlendioxid und schaumstabilisierende Stoffe|Nur der Glasrand|Der Kühlschrank|1|CO₂ bildet Blasen; Eiweiße und andere Stoffe stabilisieren sie.
1|Welche Getreideart ist bei klassischem Weizenbier namensgebend?|Reis|Roggen|Weizen|Hafer|2|Verrückt, aber wahr: Weizenbier enthält Weizen.
2|Wann wurde das berühmte bayerische Reinheitsgebot erlassen?|1516|1810|1945|2001|0|1516. Das wissen sogar manche, die ihre eigene Postleitzahl vergessen.
2|Was bedeutet obergärig beim Bier?|Die Hefe sammelt sich beim Gären eher oben|Man braut auf Bergen|Es gibt mehr Schaum|Die Flasche muss aufrecht stehen|0|Der Begriff bezieht sich auf das Gärverhalten der Hefe.
2|Was ist die „Würze“ beim Bierbrauen?|Gewürzmischung aus dem Supermarkt|Zuckerhaltige Flüssigkeit vor der Gärung|Das Etikett|Die letzte Runde|1|Die Würze entsteht nach dem Maischen und Läutern.
2|Wobei hilft das Läutern?|Trennen der flüssigen Würze von den festen Bestandteilen|Bier lauter machen|Hefe einfrieren|Gläser polieren|0|Beim Läutern werden Treber und Würze getrennt.
2|Was ist ein IPA?|Indian Party Alarm|India Pale Ale|International Pils Association|Italienischer Pfirsich Aperitif|1|India Pale Ale ist häufig deutlich hopfenbetont.
2|Was ist Treber?|Der Rest des ausgelaugten Malzes|Ein spezielles Bierglas|Der Braumeister-Gehilfe|Ein Zapfhahn|0|Treber ist der feste Rückstand nach dem Läutern.
2|Wozu dient die Hopfengabe beim Kochen?|Unter anderem für Bittere und Aroma|Damit das Bier blau wird|Zum Einfrieren|Damit die Hefe mehr schläft|0|Je nach Zeitpunkt bringt Hopfen Bittere, Geschmack und Aroma.
2|Was misst ein Refraktometer beim Brauen typischerweise?|Zuckergehalt beziehungsweise Brechungsindex|Die Größe des Braumeisters|Schaumhöhe im Stadion|Hopfenfarbe bei Nacht|0|Mit dem Brechungsindex lässt sich die Konzentration gelöster Stoffe abschätzen.
2|Wie nennt man das gezielte Zugeben von Hopfen nach der Hauptgärung?|Kalthopfung / Dry Hopping|Warmduschen|Fassflüstern|Hopfenjonglage|0|Kalthopfung bringt vor allem Hopfenaromen ins Bier.
2|Was ist ein untergäriger Bierstil?|Pils|Klassisches Hefeweizen|Belgisches Saison|Traditionelles Kölsch|0|Pils wird mit untergäriger Hefe gebraut.
3|Wie heißt die Dichtekennzahl für Würze vor der Gärung oft?|Stammwürze|Endgeschwindigkeit|Druckhöhe|Malzgewicht pro Glas|0|Die Stammwürze beschreibt gelöste Inhaltsstoffe in der Würze.
3|Welches Gas kann bei der Gärung in geschlossenen Räumen gefährlich werden?|Helium|Kohlendioxid|Neon|Sauerstoff aus der Flasche|1|CO₂ kann Sauerstoff verdrängen. Brauereien brauchen gute Lüftung.
3|Was bewirkt die Eiweißrast bei bestimmten Maischverfahren?|Beeinflusst den Abbau größerer Eiweißmoleküle|Gefriert die Maische|Entfernt alle Hopfenöle|Tötet jede Hefe im Umkreis|0|Temperatur und Zeit steuern enzymatische Vorgänge.
3|Was ist eine Dekoktion?|Teilmaische abkochen und zurückgeben|Bier mit Limo mischen|Hefe im Eiswürfel einfrieren|Zapfanlage desinfizieren|0|Dekoktion ist ein klassisches Maischverfahren.
`);

  add('🧠 Unnützes Weltwissen', `
1|Wie viele Herzen hat ein Oktopus?|Eins|Zwei|Drei|Sieben|2|Drei Herzen. Mehr als so mancher Familienchat.
1|Welche Farbe hat die „Black Box“ im Flugzeug normalerweise?|Schwarz|Orange|Lila|Durchsichtig|1|Leuchtendes Orange hilft beim Wiederfinden.
1|Wie viele Beine hat eine Spinne normalerweise?|Vier|Sechs|Acht|Zehn|2|Acht. Und trotzdem schafft sie es an die Zimmerdecke.
1|Was ist die Hauptstadt von Australien?|Sydney|Melbourne|Canberra|Perth|2|Canberra. Sydney hat leider nur den Ruhm.
1|Welches Tier ist das größte heute lebende Landtier?|Nilpferd|Afrikanischer Elefant|Giraffe|Nashorn|1|Der Afrikanische Elefant ist das Schwergewicht unter den Landtieren.
1|Wie viele Seiten hat ein Würfel?|Vier|Fünf|Sechs|Acht|2|Sechs. Bei der Familienrunde zählen die Würfelseiten, nicht deine Ausreden.
1|Welcher Planet ist der Sonne am nächsten?|Venus|Mars|Merkur|Jupiter|2|Merkur hält die Poleposition.
1|Aus welcher Pflanze wird traditionell Tequila hergestellt?|Agave|Kaktusfeige|Ananas|Hopfen|0|Tequila wird aus Blauer Agave hergestellt.
1|Wie viele Minuten hat eine Stunde?|50|60|100|120|1|60. Außer wenn man auf den Kuchen wartet.
1|Was misst ein Thermometer?|Gewicht|Temperatur|Geschwindigkeit|Lautstärke|1|Ein Thermometer misst Temperatur, nicht Geduld.
2|Welche dieser Hauptstädte liegt am weitesten nördlich?|Berlin|Madrid|Oslo|Rom|2|Oslo liegt deutlich nördlicher.
2|Wie viele Felder hat ein normales Schachbrett?|36|64|81|100|1|Acht mal acht = 64.
2|Welches Säugetier kann aktiv fliegen?|Fledermaus|Flughörnchen|Koala|Känguru|0|Flughörnchen gleiten nur; Fledermäuse fliegen aktiv.
2|Welches chemische Symbol steht für Gold?|Go|Au|Ag|Gd|1|Au kommt vom lateinischen Aurum.
2|Wie viele Zähne hat ein erwachsener Mensch typischerweise maximal inklusive Weisheitszähnen?|24|28|32|36|2|Normalerweise sind es maximal 32.
2|Was wurde als erstes erfunden?|Das Telefon|Der Buchdruck mit beweglichen Lettern in Europa|Das Internet|Das Flugzeug|1|Gutenbergs Buchdruck ist viel älter als Telefon und Flugzeug.
2|Was ist ein Axolotl?|Ein Salamander|Ein tropischer Vogel|Eine Algenart|Ein Schneckenhaus|0|Axolotl sind mexikanische Schwanzlurche und echte Internetstars.
2|Welche dieser Sprachen gehört zur romanischen Sprachfamilie?|Deutsch|Finnisch|Spanisch|Türkisch|2|Spanisch stammt wie Französisch aus dem Lateinischen.
2|Welche dieser Zahlen ist eine Primzahl?|21|27|29|33|2|29 ist nur durch 1 und 29 teilbar.
2|Wofür steht die Abkürzung „www“?|World Wide Web|Wild Waffle Weekend|Wide World Watch|Web With Widgets|0|World Wide Web. Nicht World Wide Wurst.
3|Welches Element hat die Ordnungszahl 8?|Stickstoff|Sauerstoff|Kohlenstoff|Wasserstoff|1|Sauerstoff steht an Position 8 im Periodensystem.
3|Wie viele Zeitzonen hat die Erde in der idealisierten 15-Grad-Einteilung?|12|18|24|36|2|360 Grad geteilt durch 15 ergibt 24 idealisierte Zeitzonen.
3|Welcher Planet dreht sich am langsamsten um die eigene Achse?|Jupiter|Erde|Venus|Neptun|2|Venus benötigt ungefähr 243 Erdtage pro Eigenrotation.
3|Was ist die größte Wüste der Erde nach Fläche?|Sahara|Gobi|Antarktische Wüste|Kalahari|2|Auch Kältewüsten sind Wüsten. Die Antarktis ist die größte.
`);

  add('🤡 Völliger Quatsch', `
1|Was wiegt mehr: 1 kg Federn oder 1 kg Bierdeckel?|Federn|Bierdeckel|Beides gleich viel|Kommt auf den Wirt an|2|Ein Kilogramm bleibt ein Kilogramm. Auch am Stammtisch.
1|Du hast drei Äpfel und nimmst zwei weg. Wie viele hast du?|Einen|Zwei|Drei|Keinen|1|Du hast die zwei, die du genommen hast.
1|Was wird beim Trocknen immer nasser?|Ein Handtuch|Ein Schwamm|Ein Zapfhahn|Ein Keks|0|Das Handtuch wird nass, während es etwas anderes trocknet.
1|Was hat einen Hals, aber keinen Kopf?|Eine Flasche|Eine Giraffe|Ein Krokodil|Ein Onkel|0|Flaschenhals. Der Klassiker mit leichter Kneipenatmosphäre.
1|Was hat vier Beine, kann aber nicht laufen?|Ein Tisch|Ein Hund|Eine Katze|Ein Pferd|0|Der Tisch wartet seit Jahren auf seinen ersten Spaziergang.
1|Was kommt einmal in „Minute“, zweimal in „Moment“ und nie in „Stunde“ vor?|Der Buchstabe M|Ein Bier|Der Buchstabe E|Das Wort Zeit|0|Das M kommt in Minute einmal und in Moment zweimal vor.
1|Was kannst du brechen, ohne es zu berühren?|Ein Versprechen|Ein Teller|Eine Tasse|Einen Bleistift|0|Versprechen kann man leider komplett kontaktlos brechen.
1|Welche Frage kannst du nicht ehrlich mit „Ja“ beantworten, wenn sie stimmt?|Schläfst du gerade?|Hast du Hunger?|Bist du hier?|Kennst du Bier?|0|Wer wirklich schläft, antwortet nicht ehrlich mit Ja.
1|Was hat Zähne, kann aber nicht beißen?|Ein Kamm|Ein Hai|Ein Wolf|Ein Nachbar|0|Kämme sind äußerst zahm.
1|Was läuft, hat aber keine Beine?|Die Nase|Das Pferd|Der Hund|Der Kellner|0|Eine Nase kann laufen. Das macht sie im Winter besonders gern.
2|Welcher Monat hat 28 Tage?|Nur Februar|Jeder Monat|Nur Dezember|Keiner|1|Alle Monate haben mindestens 28 Tage.
2|Wie oft kann man 10 von 100 abziehen?|Zehnmal|Fünfmal|Einmal|Unendlich oft|2|Nach dem ersten Mal ziehst du 10 von 90 ab.
2|Was kann um die Welt reisen und bleibt trotzdem in der Ecke?|Eine Briefmarke|Ein Stuhl|Ein Fernseher|Ein Schuh|0|Die Briefmarke klebt in der Ecke des Umschlags.
2|Ein Hahn legt ein Ei aufs Dach. Wohin rollt es?|Nach links|Nach rechts|Gar nicht|Zum Nachbarn|2|Hähne legen keine Eier. Das ist für manche überraschend.
2|Was ist voller Löcher und hält trotzdem Wasser?|Ein Schwamm|Ein Sieb aus Draht|Eine kaputte Tasse|Ein löchriger Eimer|0|Der Schwamm nutzt viele kleine Poren.
2|Wenn ein rotes Haus aus roten Steinen besteht und ein blaues aus blauen, woraus ist ein Gewächshaus?|Grünen Steinen|Glas|Holz|Hoffnung|1|Ein Gewächshaus ist gewöhnlich aus Glas oder transparentem Material.
2|Was gehört dir, wird aber öfter von anderen benutzt?|Dein Name|Dein Kühlschrank|Dein Pullover|Dein Schlüssel|0|Andere sagen deinen Namen viel öfter als du selbst.
2|Was wird größer, je mehr man wegnimmt?|Ein Loch|Ein Baum|Ein Glas|Eine Pizza|0|Ein Loch wächst durch Wegnehmen.
2|Was kannst du behalten, nachdem du es jemandem gegeben hast?|Dein Wort|Deine Zahnbürste|Dein Fahrrad|Dein Handy|0|Man kann sein Wort geben und halten.
2|Wo befindet sich Freitag vor Donnerstag?|Im Kalender|Im Wörterbuch|In dieser Woche|In Bayern|1|Alphabetisch kommt Freitag vor Donnerstag.
3|Welche Zahl erhältst du, wenn du 30 durch 1/2 teilst und 10 addierst?|25|40|70|100|2|30 durch 0,5 = 60; plus 10 = 70.
3|Ein Bauer hat 17 Schafe. Alle bis auf 9 laufen weg. Wie viele bleiben?|8|9|17|0|1|Alle bis auf neun bedeutet: neun sind noch da.
3|Du fährst einen Bus. An der ersten Haltestelle steigen 4 ein, an der zweiten 3 aus. Wie alt ist der Fahrer?|7|23|So alt wie du|Unbekannt|2|Du fährst den Bus. Gute Fahrt!
3|Was ist am Ende des Regenbogens?|Ein Goldtopf|Der Buchstabe N|Eine Wolke|Ein Bierfass|1|Im Wort Regenbogen steht am Ende ein N.
`);

  add('🕵️ Wahr oder Unsinn?', `
1|Welche Aussage stimmt?|Pinguine können fliegen|Bananen wachsen an krautigen Pflanzen|Der Mond hat eigenes Licht|Spinnen haben sechs Beine|1|Die Bananenpflanze ist botanisch eine riesige krautige Pflanze.
1|Was stimmt tatsächlich?|Honig kann bei guter Lagerung sehr lange haltbar bleiben|Wasser ist immer lila|Elefanten haben Flügel|Salz schmilzt bei Zimmertemperatur|0|Honig ist durch wenig Wasser und weitere Eigenschaften sehr haltbar.
1|Welche Aussage über Haie ist richtig?|Alle Haie leben im Süßwasser|Haie sind Fische|Haie sind Säugetiere|Alle Haie sind kleiner als 1 Meter|1|Haie sind Knorpelfische.
1|Was ist richtig?|Tomaten sind botanisch Früchte|Karotten sind Früchte|Kartoffeln wachsen am Baum|Äpfel sind Nüsse|0|Die Tomate ist botanisch eine Frucht.
1|Welche Aussage stimmt?|Schall ist im Vakuum schneller|Licht kann sich im Vakuum ausbreiten|Vakuum enthält viel Luft|Eis ist heißer als Feuer|1|Licht braucht kein Medium; Schall dagegen schon.
1|Welche Aussage ist wahr?|Wale atmen mit Kiemen|Wale müssen zum Atmen auftauchen|Wale sind Fische|Wale legen Eier|1|Wale sind Säugetiere mit Lungen.
1|Was ist richtig?|Im Weltall herrscht grundsätzlich überall absolute Schwerelosigkeit|Die Erde umkreist die Sonne|Die Sonne umkreist die Erde einmal täglich|Der Mond ist ein Planet|1|Die Erde umkreist die Sonne ungefähr einmal im Jahr.
1|Welche Aussage ist wahr?|Bienen haben sechs Beine|Bienen haben acht Beine|Bienen haben zwei Beine|Bienen haben keine Beine|0|Bienen sind Insekten mit sechs Beinen.
1|Was ist wahr?|Ein Regenbogen entsteht durch Lichtbrechung und Reflexion|Ein Regenbogen ist aus Zucker|Es gibt nachts keine Farben|Wolken bestehen aus Watte|0|Licht wird in Wassertropfen gebrochen und reflektiert.
1|Welche Aussage über Hunde stimmt?|Hunde hören nur schwarzweiß|Hunde können hohe Töne hören|Hunde haben keine Nase|Alle Hunde bellen gleich|1|Hunde nehmen auch hohe Frequenzen wahr.
2|Welche dieser Aussagen stimmt?|Koalas sind Bären|Koalas sind Beuteltiere|Koalas sind Reptilien|Koalas sind Nagetiere|1|Koalas gehören zu den Beuteltieren.
2|Was stimmt?|Erdbeeren sind botanisch echte Beeren|Bananen sind botanisch Beeren|Äpfel sind Beeren|Kirschen sind Nüsse|1|Botanische Definitionen machen Obstsalat kompliziert.
2|Welche Aussage über Gewitter ist wahr?|Blitz ist immer lautlos|Donner entsteht durch rasch erhitzte Luft|Blitze sind aus Glas|Donner kommt von Wolkenschubsen|1|Der Blitz erhitzt Luft schlagartig; das erzeugt eine Druckwelle.
2|Was ist wahr?|Eisbären haben unter ihrem Fell schwarze Haut|Eisbärenfell ist immer schwarz|Eisbären leben mit Pinguinen in freier Wildbahn|Eisbären fressen nur Pflanzen|0|Unter dem hell erscheinenden Fell haben Eisbären schwarze Haut.
2|Welche Behauptung stimmt?|Tintenfische haben blaues Blut|Menschen haben grünes Blut|Pferde haben farbloses Blut|Haie haben goldene Knochen|0|Bei vielen Kopffüßern sorgt kupferhaltiges Hämocyanin für blaues Blut.
2|Welche Aussage stimmt?|Schnecken haben grundsätzlich keine Zähne|Viele Schnecken besitzen eine Raspelzunge|Schnecken bestehen aus Metall|Schnecken sind Vögel|1|Die Radula ist eine Art Raspelzunge mit vielen kleinen Zähnchen.
2|Welche Aussage ist richtig?|Ein Tag auf der Venus ist länger als ihr Jahr|Die Venus hat 24 Monde|Die Venus ist eine Eisscheibe|Die Venus hat keine Atmosphäre|0|Eine Venusrotation dauert etwa 243 Erdtage; der Umlauf etwa 225.
2|Welche Aussage ist wahr?|Blut ist in menschlichen Adern blau|Menschliches Blut ist auch ohne Sauerstoff rot|Blut ist in Adern durchsichtig|Blut besteht nur aus Wasser|1|Sauerstoffarmes Blut ist dunkelrot, nicht blau.
2|Welche Aussage stimmt?|Der Eiffelturm steht in Berlin|Der Eiffelturm wurde 1889 eröffnet|Der Eiffelturm ist aus Holz|Der Eiffelturm ist 1 km hoch|1|Der Eiffelturm wurde für die Weltausstellung 1889 errichtet.
2|Was stimmt?|Jeder Stern ist ein Planet|Unsere Sonne ist ein Stern|Die Sonne ist ein Mond|Sterne bestehen aus Eiswürfeln|1|Die Sonne ist ein gewöhnlicher Stern unserer Galaxie.
3|Welche Aussage trifft zu?|Ein Liter Wasser wiegt bei jeder Temperatur exakt 1 kg|Wasser erreicht seine höchste Dichte bei rund 4 °C|Eis ist dichter als Wasser|Wasser verdampft nur über 100 °C|1|Wasser hat bei etwa 4 °C seine größte Dichte.
3|Was stimmt?|Die Antarktis ist eine Wüste|Die Sahara ist eine Eiswüste|Wüsten sind immer heiß|Regenwald ist die trockenste Landschaft|0|Wüsten werden unter anderem anhand geringer Niederschläge definiert.
3|Welche Aussage ist korrekt?|Tardigraden heißen auch Bärtierchen|Bärtierchen sind winzige Bären|Bärtierchen sind Vögel|Bärtierchen leben nur in Wüsten|0|Bärtierchen sind mikroskopisch kleine wirbellose Tiere.
3|Welcher Satz stimmt?|Venus ist der heißeste Planet unseres Sonnensystems|Merkur ist der heißeste Planet|Neptun ist der heißeste Planet|Erde ist der heißeste Planet|0|Die dichte Venusatmosphäre erzeugt einen starken Treibhauseffekt.
`);

  add('🧩 Logik & Denkfallen', `
1|Wie viel ist 7 × 8?|54|56|64|58|1|7 mal 8 = 56. Hoffentlich ist die Tafel nicht zu weit weg.
1|Wenn heute Montag ist, welcher Tag ist übermorgen?|Dienstag|Mittwoch|Donnerstag|Sonntag|1|Übermorgen ist Mittwoch.
1|Welche Zahl setzt die Reihe fort: 2, 4, 6, 8, ...?|9|10|11|12|1|Immer plus 2.
1|Wie viele Ecken haben drei Dreiecke zusammen?|6|9|12|15|1|Jedes Dreieck hat drei Ecken.
1|Was ist die Hälfte von 50?|15|20|25|30|2|50 geteilt durch 2 = 25.
1|Wie viele Monate haben genau 30 Tage?|3|4|5|6|1|April, Juni, September und November.
1|Welcher Buchstabe folgt: A, C, E, G, ...?|H|I|J|K|1|Es wird jeweils ein Buchstabe übersprungen.
1|Eine Pizza wird in acht gleich große Stücke geteilt. Du isst zwei. Welcher Anteil ist weg?|1/8|1/4|1/3|1/2|1|Zwei von acht = ein Viertel.
1|Du wirfst eine faire Münze. Was ist die Chance auf Kopf?|25 %|50 %|75 %|100 %|1|Bei einer fairen Münze sind beide Seiten gleich wahrscheinlich.
1|Wie viele Nullen hat eine Million?|4|5|6|7|2|1.000.000 hat sechs Nullen.
2|Drei Personen teilen zwölf Brezeln gerecht. Wie viele bekommt jede?|3|4|5|6|1|12 geteilt durch 3 = 4.
2|Welche Zahl ist ein Vielfaches von 9?|28|36|46|52|1|9 mal 4 = 36.
2|Ein Zug fährt 60 km/h. Wie weit kommt er in 30 Minuten?|15 km|30 km|45 km|60 km|1|Eine halbe Stunde bei 60 km/h ergibt 30 km.
2|Was ist 20 % von 150?|20|25|30|35|2|0,2 mal 150 = 30.
2|Welcher Wert ist am größten?|0,7|2/3|65 %|0,69|0|0,7 entspricht 70 % und ist am größten.
2|Welche Zahl ist durch 3 teilbar?|101|112|123|134|2|1+2+3=6, also ist 123 durch 3 teilbar.
2|Ein Rechteck ist 4 m lang und 3 m breit. Wie groß ist die Fläche?|7 m²|10 m²|12 m²|14 m²|2|4 mal 3 = 12 Quadratmeter.
2|Du bekommst 20 % Rabatt auf 50 Euro. Was bezahlst du?|30 Euro|35 Euro|40 Euro|45 Euro|2|10 Euro Rabatt bleiben 40 Euro.
2|Welche Zahl fehlt: 1, 1, 2, 3, 5, ...?|6|7|8|9|2|Die Fibonacci-Reihe addiert jeweils die zwei vorherigen Zahlen.
2|Was ist die Quadratwurzel aus 144?|10|11|12|14|2|12 mal 12 = 144.
3|Fünf Maschinen brauchen fünf Minuten für fünf Teile. Wie lange brauchen 100 solche Maschinen für 100 Teile?|5 Minuten|20 Minuten|100 Minuten|500 Minuten|0|Jede Maschine fertigt in fünf Minuten ein Teil.
3|Eine Zahl wird verdoppelt und dann um 6 erhöht. Ergebnis: 20. Welche Zahl war es?|6|7|8|9|1|2 × 7 + 6 = 20.
3|Was ist 2 hoch 5?|16|25|32|64|2|2 × 2 × 2 × 2 × 2 = 32.
3|Zwei Würfel zeigen jeweils eine Sechs mit Wahrscheinlichkeit 1/6. Wie wahrscheinlich sind zwei Sechsen?|1/6|1/12|1/36|1/18|2|Bei unabhängigen Würfen: 1/6 mal 1/6 = 1/36.
`);

  add('🎬 Popkultur & Alltag', `
1|Welcher Klempner ist für seine rote Mütze bekannt?|Sonic|Mario|Pikachu|Shrek|1|Mario hat wohl das bekannteste Klempner-Outfit der Spielegeschichte.
1|In welcher Filmreihe gibt es einen Ring, der „sie alle knechtet“?|Star Wars|Der Herr der Ringe|Indiana Jones|Toy Story|1|Der Eine Ring aus Mittelerde.
1|Welche Figur wohnt in einer Ananas ganz tief im Meer?|SpongeBob|Shrek|Batman|Winnie Puuh|0|SpongeBob Schwammkopf. Ananas mit Meerblick.
1|Welches Tier ist „Simba“?|Löwe|Tiger|Bär|Wolf|0|Simba ist der Löwenjunge aus Der König der Löwen.
1|Was ist eine „Selfie“?|Selbst aufgenommenes Foto|Ein Fahrradschloss|Ein Gemüse|Ein Sofakissen|0|Selfie bedeutet meist ein Selbstporträtfoto.
1|Welche Farbe hat die klassische Coca-Cola-Markenkennzeichnung?|Blau|Rot|Grün|Lila|1|Coca-Cola verwendet seit langem markantes Rot.
1|Welche Sportart spielt man mit einem Puck?|Basketball|Eishockey|Tennis|Golf|1|Der Puck saust beim Eishockey übers Eis.
1|Wie heißt das Haus von Harry Potter in Hogwarts?|Slytherin|Hufflepuff|Gryffindor|Ravenclaw|2|Harry wird Gryffindor zugeteilt.
1|In welcher Sportart gibt es einen Elfmeter?|Fußball|Tischtennis|Schach|Volleyball|0|Elf Meter, ein Ball, viele Nerven.
1|Was gehört zu einer klassischen Pizza Margherita?|Tomate, Mozzarella und Basilikum|Ananas, Schokolade und Gurke|Nur Pommes|Nur Senf|0|Tomate, Mozzarella und Basilikum sind typisch.
2|Welche Band veröffentlichte „Bohemian Rhapsody“?|ABBA|Queen|Coldplay|The Beatles|1|Queen. Jetzt bitte nicht sieben Minuten lang mitsingen.
2|Was ist bei „Mario Kart“ ein typischer Gegenstand?|Blaue Panzer|Echte Autoreifen|Löffel|Haarbürsten|0|Die blauen Panzer ruinieren zuverlässig Familienfreundschaften.
2|Welche Filmfigur trägt häufig einen Hut und eine Peitsche?|Indiana Jones|Darth Vader|Homer Simpson|E.T.|0|Indiana Jones lebt gefährlich und trägt dennoch Hut.
2|In welcher Serie wohnt Homer Simpson?|South Park|Die Simpsons|Friends|Breaking Bad|1|Homer ist in Springfield zuhause.
2|Was bedeutet „AFK“ in Gaming-Chats?|Away From Keyboard|All Fast Karts|Always Friendly King|Another Free Key|0|AFK heißt sinngemäß: gerade nicht am Rechner.
2|Was heißt „DIY“?|Do It Yourself|Dance In Yellow|Drink It Yesterday|Digital Internet Yoga|0|DIY bedeutet selber machen.
2|Welches Spiel verwendet hauptsächlich quadratische Blöcke?|Minecraft|Ein Drache auf Skiern|Candy Crush|FIFA|1|Minecraft besteht aus einer Welt voller Blöcke.
2|Welche Band ist für „Dancing Queen“ bekannt?|ABBA|Rammstein|Metallica|Nirvana|0|ABBA. Die Tanzfläche gehört jetzt der Familie.
2|Wobei spielt ein „Keeper“ eine typische Rolle?|Fußball|Tischtennis-Doppel|Weitsprung|Boule|0|Keeper ist umgangssprachlich ein Torwart.
2|Was ist ein „Meme“ im Internet meistens?|Ein verbreitetes witziges Bild oder Format|Ein Motoröl|Ein Braukessel|Ein Hundehalsband|0|Memes sind wiedererkennbare und oft variierte Internetinhalte.
3|Wie heißt die Währung im Videospiel Super Mario meist?|Ringe|Münzen|Rubine|Kronkorken|1|Mario sammelt Münzen, Sonic dagegen Ringe.
3|Welcher Film spielt großteils auf einem Luxusdampfer, der 1912 sank?|Titanic|Avatar|Gladiator|Inception|0|Titanic von 1997 erzählt eine Geschichte an Bord der RMS Titanic.
3|Welches dieser Spiele hat eine „Enderdrache“-Bossfigur?|Minecraft|Tetris|Wii Sports|Rocket League|0|Der Enderdrache wartet in Minecraft im Ende.
3|Wie heißt der Hobbit, der den Einen Ring nach Mordor tragen soll?|Bilbo Beutlin|Frodo Beutlin|Samweis Gamdschie|Peregrin Tuk|1|Frodo erhält die Aufgabe, den Ring zu vernichten.
`);

  const ESTIMATES = [
    {text:'In welchem Jahr wurde das bayerische Reinheitsgebot erlassen?',answer:1516,unit:'Jahr',explanation:'Das Datum ist 1516. Ein erstaunlich altes „Bitte nichts Falsches ins Bier“.'},
    {text:'In welchem Jahr fand das erste Oktoberfest in München statt?',answer:1810,unit:'Jahr',explanation:'1810 fand das Fest zur Hochzeit von Ludwig und Therese statt.'},
    {text:'Wie viele Milliliter passen in eine klassische bayerische Maß?',answer:1000,unit:'ml',explanation:'Ein Liter = 1000 Milliliter. Prost Mathematik.'},
    {text:'Wie viele Tage hat ein Schaltjahr?',answer:366,unit:'Tage',explanation:'Ein Schaltjahr hat einen zusätzlichen 29. Februar.'},
    {text:'Wie viele Minuten hat eine volle Woche?',answer:10080,unit:'Minuten',explanation:'7 × 24 × 60 = 10.080.'},
    {text:'Wie viele Felder haben fünf gewöhnliche Schachbretter zusammen?',answer:320,unit:'Felder',explanation:'5 × 64 = 320 Felder.'},
    {text:'Wie viele Zentimeter sind 2,5 Kilometer?',answer:250000,unit:'cm',explanation:'1 Kilometer = 100.000 Zentimeter.'},
    {text:'Wie viele Sekunden stecken in 24 Stunden?',answer:86400,unit:'Sekunden',explanation:'24 × 60 × 60 = 86.400 Sekunden.'},
    {text:'Wie viele Bundesländer hat Deutschland?',answer:16,unit:'Bundesländer',explanation:'Deutschland hat 16 Bundesländer.'},
    {text:'Wie viele Tasten hat ein übliches modernes Klavier?',answer:88,unit:'Tasten',explanation:'Das Standardklavier besitzt 88 Tasten.'},
    {text:'In welchem Jahr wurde der Eiffelturm eröffnet?',answer:1889,unit:'Jahr',explanation:'Die Eröffnung war 1889.'},
    {text:'Wie viele Karten hat ein übliches französisches Kartenspiel ohne Joker?',answer:52,unit:'Karten',explanation:'Vier Farben mit jeweils 13 Karten.'},
    {text:'Wie viele Stunden haben 14 Tage?',answer:336,unit:'Stunden',explanation:'14 × 24 = 336.'},
    {text:'Wie viele Spieler stehen beim Fußball zu Beginn regulär in zwei Mannschaften insgesamt auf dem Feld?',answer:22,unit:'Spieler',explanation:'11 plus 11 ergibt 22 Spieler.'},
    {text:'In welchem Jahr wurde die erste Mondlandung von Menschen durchgeführt?',answer:1969,unit:'Jahr',explanation:'Apollo 11 landete 1969 auf dem Mond.'},
    {text:'Wie viele Gramm sind 3,5 Kilogramm?',answer:3500,unit:'Gramm',explanation:'3,5 Kilogramm sind 3500 Gramm.'},
    {text:'Wie viele Seiten ergeben vier normale sechsseitige Würfel zusammen?',answer:24,unit:'Seiten',explanation:'Vier mal sechs ergibt 24.'},
    {text:'Wie viele Monate umfassen drei Jahre?',answer:36,unit:'Monate',explanation:'3 × 12 = 36 Monate.'}
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
  // Klassischer TV-Quizmodus: pro Stufe eigene Fragen, in exakt steigender Schwierigkeit.
  // Format: Gewinnstufe | Frage | Antwort A | B | C | D | korrekte Antwort (0-3) | Erklärung.
  const CLASSIC_QUESTIONS = [];
  `1|Wie viele Sekunden hat eine Minute?|60|100|24|360|0|Eine Minute hat 60 Sekunden. Das ist die Warm-up-Frage, kein TÜV-Test.
1|Was ist die Hauptstadt von Frankreich?|Rom|Paris|Marseille|Madrid|1|Paris. Ein Baguette darf dafür leider nicht als Joker eingesetzt werden.
1|Was benötigt eine Zimmerpflanze zum Wachsen?|Licht und Wasser|Einen Führerschein|Eine Fernbedienung|Einen Bierdeckel|0|Licht und Wasser sind eine solide Basis. Die Fernbedienung bringt eher wenig.
1|Welcher Monat kommt direkt nach September?|August|November|Dezember|Oktober|3|Oktober folgt auf September, auch wenn der Kalender nach den Sommerferien nicht mehr mitspielt.
1|Wie viele Spieler hat eine Fußballmannschaft normalerweise gleichzeitig auf dem Feld?|9|10|11|12|2|Elf Spieler, einschließlich Torwart.
1|Was zeigt ein Thermometer an?|Temperatur|Luftfeuchtigkeit|Geschwindigkeit|Lautstärke|0|Thermometer messen Temperaturen.
1|Wie heißt das Gerät, mit dem man Fotos macht?|Toaster|Kamera|Kompass|Wasserkocher|1|Eine Kamera. Die anderen Geräte haben selten einen Auslöser.
1|Was ist 5 mal 6?|11|25|30|56|2|5 × 6 = 30. Mathematisch sauber gezapft.
1|Welches Getränk wird traditionell aus Hopfen, Malz, Wasser und Hefe hergestellt?|Kaffee|Bier|Apfelsaft|Tomatensuppe|1|Bier. Die Tomatensuppe hätte allerdings einen gewagten Abgang.
1|Wie viele Seiten hat ein Dreieck?|2|3|4|5|1|Drei Seiten. Es heißt nicht ohne Grund Dreieck.
2|Wie viele Stunden haben drei volle Tage?|48|60|72|96|2|3 × 24 = 72 Stunden.
2|In welcher Stadt steht der schiefe Turm von Pisa?|Rom|Pisa|Mailand|Venedig|1|In Pisa. Der Name hat einen gewissen Hinweischarakter.
2|Welcher Planet wird als roter Planet bezeichnet?|Venus|Jupiter|Mars|Neptun|2|Mars wirkt durch eisenhaltigen Staub rötlich.
2|Was ist ein Palindrom?|Ein Wort, das rückwärts gleich gelesen wird|Ein Wort ohne Vokale|Ein Name für vier Buchstaben|Ein besonders langer Satz|0|Beispiel: OTTO. Funktioniert vorwärts wie rückwärts.
2|Wie viele Gramm sind 2,5 Kilogramm?|250|2500|25000|25|1|2,5 × 1000 = 2500 Gramm.
2|Wie viele Schachfelder hat ein gewöhnliches Schachbrett?|32|48|64|81|2|8 × 8 = 64 Felder.
2|Was ist ein anderes Wort für das Ergebnis einer Division?|Produkt|Differenz|Summe|Quotient|3|Der Quotient ist das Ergebnis einer Division.
2|Welcher dieser Stoffe ist bei Raumtemperatur gewöhnlich gasförmig?|Eisen|Sauerstoff|Speisesalz|Zucker|1|Sauerstoff ist unter normalen Raumbedingungen ein Gas.
2|Welche Himmelsrichtung liegt rechts, wenn du nach Norden blickst?|Westen|Süden|Osten|Nordwesten|2|Rechts von Norden ist Osten.
2|Wie viele Minuten sind zweieinhalb Stunden?|125|130|150|180|2|2,5 × 60 = 150 Minuten.
3|Wie viele Bundesländer hat Deutschland?|14|15|16|17|2|Deutschland hat 16 Bundesländer.
3|Welches chemische Symbol steht für Gold?|Ag|Au|Fe|Go|1|Au stammt vom lateinischen aurum.
3|Welcher dieser Tiere gehört zu den Säugetieren?|Pinguin|Delfin|Krokodil|Forelle|1|Delfine sind Säugetiere und müssen Luft holen.
3|Wenn du in einem Rennen den Zweiten überholst, auf welchem Platz bist du?|Erster|Zweiter|Dritter|Letzter|1|Du nimmst den Platz des Zweiten ein. Nicht den des Ersten.
3|Was ist 15 Prozent von 200?|15|20|30|35|2|0,15 × 200 = 30.
3|Wie heißt die Einheit des elektrischen Widerstands?|Volt|Watt|Ohm|Ampere|2|Der elektrische Widerstand wird in Ohm gemessen.
3|Wofür steht die Abkürzung WWW?|World Wide Web|World Word Work|Wide Web World|World Wired Way|0|World Wide Web. Keine Geheimsprache der Quizleitung.
3|Welche dieser Zahlen ist eine Primzahl?|21|27|29|33|2|29 ist nur durch 1 und 29 ohne Rest teilbar.
3|Was ist eine Dekade?|Ein Jahrhundert|Ein Jahrzehnt|Ein Monat|Ein Jahrtausend|1|Eine Dekade umfasst zehn Jahre.
3|Was bedeutet „untergärig“ beim Bier?|Bier wird unterirdisch gelagert|Die Hefe gärt bei relativ niedrigen Temperaturen|Die Flasche liegt unten|Das Bier hat keinen Schaum|1|Untergärige Hefen werden typischerweise bei niedrigeren Temperaturen eingesetzt.
4|Welcher Stoff hat die chemische Formel CO₂?|Kohlenstoffmonoxid|Kohlendioxid|Sauerstoff|Methan|1|CO₂ besteht aus einem Kohlenstoff- und zwei Sauerstoffatomen.
4|Ein Zug fährt 90 km in 60 Minuten. Wie weit kommt er bei gleichbleibendem Tempo in 20 Minuten?|20 km|25 km|30 km|45 km|2|20 Minuten sind ein Drittel einer Stunde, also 30 km.
4|Was ist der größte Ozean der Erde?|Atlantik|Indischer Ozean|Pazifik|Arktischer Ozean|2|Der Pazifik hat die größte Fläche.
4|Welche Zahl setzt die Reihe fort: 2, 4, 8, 16, ...?|20|24|30|32|3|Jede Zahl wird verdoppelt. Danach kommt 32.
4|Worin liegt der Unterschied zwischen einem Kilobyte und einem Kilogramm?|Beide messen Masse|Eines misst Datenmenge, das andere Masse|Beide messen Temperatur|Es gibt keinen|1|Byte und Gramm messen ganz verschiedene Größen.
4|Welche der folgenden Städte liegt an der Donau?|Hamburg|Regensburg|Hannover|Wuppertal|1|Die Donau fließt durch Regensburg.
4|Womit misst man den Luftdruck?|Barometer|Thermometer|Hygrometer|Tachometer|0|Das Barometer ist das Messgerät für Luftdruck.
4|Wie viele mögliche Ergebnisse hat der Wurf zweier idealer Münzen, wenn die Reihenfolge zählt?|2|3|4|6|2|Kopf/Kopf, Kopf/Zahl, Zahl/Kopf, Zahl/Zahl – vier Kombinationen.
4|Wie heißt das Filtern der Würze vom Treber beim Bierbrauen?|Läutern|Destillieren|Pasteurisieren|Karbonisieren|0|Beim Läutern werden feste Maischereste und flüssige Würze getrennt.
4|Ein Liter Wasser und ein Liter Bier: Welches Volumen ist größer?|Wasser|Bier|Beide gleich|Abhängig von der Glasform|2|Ein Liter bleibt ein Liter. Es geht um Volumen, nicht Gewicht.
5|Wie viel ist 3 hoch 4?|12|27|64|81|3|3 × 3 × 3 × 3 = 81.
5|Welches dieser Elemente hat die Ordnungszahl 1?|Sauerstoff|Wasserstoff|Helium|Kohlenstoff|1|Wasserstoff steht ganz vorne im Periodensystem.
5|Welcher Begriff bezeichnet in der Statistik den mittleren Wert einer sortierten Liste?|Varianz|Median|Modus|Standardabweichung|1|Der Median teilt die sortierten Werte in zwei Hälften.
5|Drei Geschwister haben zusammen 48 Jahre. Wie alt sind sie zusammen in zehn Jahren?|58|68|78|108|2|Drei Personen werden jeweils zehn Jahre älter, also 48 + 30 = 78.
5|Wie viele Milliliter sind 0,075 Liter?|7,5|75|750|7500|1|0,075 × 1000 = 75 ml.
5|Was beschreibt die Stammwürze beim Brauen?|Alkoholgehalt des fertigen Biers|Anteil gelöster Stoffe vor der Gärung|Alter der Brauerei|Die Farbe des Malzes|1|Stammwürze gibt Auskunft über die gelösten Extraktstoffe in der Würze.
5|Du wirfst einen fairen Würfel zweimal. Wie groß ist die Wahrscheinlichkeit für zweimal die Sechs?|1/6|1/12|1/36|1/18|2|Die beiden unabhängigen Wahrscheinlichkeiten werden multipliziert: 1/6 × 1/6 = 1/36.
5|Welche dieser Mengenangaben ist die größte?|0,4 Liter|350 ml|4 dl|450 ml|3|450 ml schlägt 400 ml und 350 ml.
5|Welche Zahl ist das Ergebnis von 2³ + 3²?|13|17|25|36|1|8 + 9 = 17.
5|Wie viele verschiedene zweistellige Zahlen lassen sich aus 1, 2 und 3 ohne Wiederholung bilden?|3|6|9|12|1|3 Möglichkeiten für die Zehnerstelle und 2 für die Einerstelle: 6.
6|Ein Preis steigt erst um 20 Prozent und fällt dann um 20 Prozent. Wie ändert sich der Preis insgesamt?|Er bleibt gleich|Er fällt um 4 Prozent|Er steigt um 4 Prozent|Er fällt um 20 Prozent|1|1,2 × 0,8 = 0,96, also 4 Prozent weniger.
6|Welcher pH-Wert ist bei 25 °C neutral?|0|5|7|14|2|Neutral bedeutet bei 25 °C pH 7.
6|Welche Zahl fehlt: 1, 1, 2, 3, 5, 8, ...?|11|12|13|16|2|Die Fibonacci-Folge addiert jeweils die beiden letzten Zahlen.
6|Wenn vier Maschinen vier Teile in vier Minuten produzieren, wie lange brauchen acht gleichartige Maschinen für acht Teile?|2 Minuten|4 Minuten|8 Minuten|16 Minuten|1|Jede Maschine macht ein Teil in vier Minuten. Acht Maschinen schaffen acht Teile ebenfalls in vier Minuten.
6|Ein Fass enthält 40 Liter. Du entnimmst 25 Prozent des Inhalts. Wie viele Liter bleiben übrig?|10|15|25|30|3|Ein Viertel von 40 sind 10. Es bleiben 30 Liter.
6|Bei einem normalen Kartenspiel mit 52 Karten: Wie viele Könige gibt es?|2|3|4|8|2|Es gibt einen König je Farbe, also vier.
6|Welches dieser Bier-Verfahren kann zusätzliche Hopfenaromen bringen, ohne dass dabei gekocht wird?|Kalthopfung|Schockfrosten|Entsalzen|Entkoffeinieren|0|Beim Dry Hopping wird Hopfen nach dem Kochen zugegeben.
6|Was ist die Quadratwurzel aus 0,0009?|0,003|0,03|0,3|3|1|0,03 × 0,03 = 0,0009.
6|Eine Uhr zeigt 15:45. Wie viele Minuten sind es bis 18:10?|125|135|145|155|2|Von 15:45 bis 18:00 sind es 135 Minuten, plus zehn = 145.
6|Ein fairer Würfel wird einmal geworfen. Wie groß ist die Chance für eine gerade Zahl?|1/6|1/3|1/2|2/3|2|2, 4 und 6 sind drei von sechs gleichwahrscheinlichen Ergebnissen.
7|Welches Ergebnis hat 7! (sieben Fakultät)?|720|2520|5040|10080|2|7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040.
7|Welche Zahl erfüllt 3x + 7 = 31?|6|7|8|9|2|3x = 24, also x = 8.
7|Ein fairer Würfel wird zweimal geworfen. Wie wahrscheinlich ist mindestens eine Sechs?|1/6|11/36|1/3|5/18|1|Gegenwahrscheinlichkeit: 1 − (5/6)² = 11/36.
7|Welche Aussage über Licht im Vakuum ist korrekt?|Es braucht Luft|Seine Geschwindigkeit beträgt ungefähr 300.000 km/s|Es ist langsamer als Schall|Es hat keine Ausbreitungsgeschwindigkeit|1|Im Vakuum bewegt sich Licht mit etwa 299.792 km/s.
7|Wie viele verschiedene Anordnungen haben die drei Buchstaben A, B und C?|3|6|9|12|1|3! = 6 unterschiedliche Anordnungen.
7|Ein Würfel hat die Kantenlänge 3 cm. Welches Volumen hat er?|9 cm³|18 cm³|27 cm³|36 cm³|2|3³ = 27 Kubikzentimeter.
7|Was passiert mit der Häufigkeit einer Note, wenn sich ihre Frequenz verdoppelt?|Sie wird eine Oktave höher|Sie wird eine Oktave tiefer|Sie wird doppelt so laut|Sie bleibt gleich|0|Eine Frequenzverdopplung entspricht einer Oktave.
7|Du hast zwei exakt gleich schwere Kisten. Eine steht aufrecht, eine liegt flach. Was ist gleich?|Ihre Gewichtskraft|Ihre Grundfläche|Ihre Höhe|Ihr Druck auf den Boden|0|Die Gewichtskraft ist gleich, der Druck kann sich wegen der Kontaktfläche ändern.
7|Ein Rabatt von 25 Prozent senkt den Preis auf 60 Euro. Was kostete der Artikel vorher?|70 €|75 €|80 €|85 €|2|60 Euro entsprechen 75 Prozent des ursprünglichen Preises. 60/0,75 = 80.
7|Welches dieser Wörter ist kein Anagramm von „AMPEL“?|PALME|LAMPE|MALPE|PALMEN|3|PALMEN hat sechs Buchstaben. Die anderen verwenden dieselben fünf Buchstaben.
8|Wie viele Minuten sind genau 1,5 Tage?|1440|1800|2160|2880|2|1,5 × 24 × 60 = 2160 Minuten.
8|Ein Bakterienstamm verdoppelt sich jede Stunde. Nach 8 Stunden ist ein Gefäß voll. Wann war es halbvoll?|Nach 2 Stunden|Nach 4 Stunden|Nach 6 Stunden|Nach 7 Stunden|3|Bei Verdopplung ist es genau eine Stunde vorher halbvoll.
8|Welcher dieser Brüche ist am größten?|5/12|7/16|3/7|4/9|3|4/9 ist etwa 0,444; die anderen liegen darunter.
8|Wie viele eindeutige Händedrucke gibt es, wenn sich sechs Personen einmal gegenseitig die Hand geben?|12|15|18|30|1|Es gibt 6 × 5 / 2 = 15 Paare.
8|Ein Passwort enthält genau drei Ziffern von 0 bis 9, Wiederholungen erlaubt. Wie viele Passwörter gibt es?|30|100|900|1000|3|Für jede Stelle gibt es 10 Optionen: 10³ = 1000. 000 zählt als Passwort.
8|Welche Aussage zur Wahrscheinlichkeit ist richtig?|Zwei unabhängige faire Münzwürfe ergeben immer einmal Kopf|P(Kopf und Kopf) ist 1/4|P(Kopf und Kopf) ist 1/2|Nach Kopf muss Zahl kommen|1|Alle vier Ausgänge sind gleich wahrscheinlich, Kopf/Kopf ist einer davon.
8|Wenn ein Rezept für 5 Liter 400 g Malz braucht, wie viel braucht es proportional für 13 Liter?|780 g|920 g|1040 g|1200 g|2|400 × 13/5 = 1040 Gramm.
8|Welche dieser Zahlen ist durch 9 teilbar?|8271|8272|8273|8274|0|8 + 2 + 7 + 1 = 18. Die Quersumme ist durch 9 teilbar.
8|Ein Quadrat hat eine Diagonale von 10 cm. Wie groß ist seine Fläche?|25 cm²|50 cm²|75 cm²|100 cm²|1|Die Fläche ist Diagonale²/2 = 100/2 = 50 cm².
8|In einer Familie hat jedes von vier Kindern genau drei Geschwister. Wie viele Kinder gibt es?|4|8|12|16|0|Es sind dieselben vier Kinder: Jedes hat die anderen drei als Geschwister.
9|Wie viele verschiedene fünfstellige PINs gibt es, wenn jede Ziffer verschieden sein muss und 0 vorne erlaubt ist?|15.120|30.240|60.480|100.000|1|10 × 9 × 8 × 7 × 6 = 30.240 mögliche PINs.
9|Eine Zahl wird durch 5 geteilt und liefert Rest 3. Welchen Rest liefert ihr Doppeltes bei Division durch 5?|0|1|2|3|1|2 × 3 = 6. Bei Division durch 5 bleibt Rest 1.
9|Für welchen Wert von x gilt 2^(x+1) = 64?|4|5|6|7|1|64 = 2⁶. Also x + 1 = 6 und x = 5.
9|Wie viele verschiedene Diagonalen hat ein regelmäßiges Achteck?|16|18|20|24|2|n(n−3)/2 ergibt 8 × 5 / 2 = 20 Diagonalen.
9|Welchen Mittelwert haben die Zahlen 2, 4, 6, 8, 10, 12?|6|7|8|9|1|Die Summe beträgt 42. Durch 6 geteilt ergibt das 7.
9|Ein Würfel wird dreimal geworfen. Wie groß ist die Wahrscheinlichkeit, keine Sechs zu werfen?|25/36|125/216|5/18|1/2|1|(5/6)³ = 125/216. Die Sechs hält sich hier drei Würfe lang zurück.
9|Ein Bierfass ist zu 3/5 gefüllt. Du entnimmst 1/3 des vorhandenen Inhalts. Welcher Anteil des ganzen Fasses bleibt?|1/5|2/5|3/10|4/5|1|3/5 × 2/3 = 2/5 des ganzen Fasses.
9|Wie viele unterschiedliche dreistellige Zahlen kann man aus den Ziffern 0, 1, 2, 3 bilden, ohne eine Ziffer doppelt zu verwenden?|12|18|24|36|1|Hunderterstelle: 3 Optionen; dann 3 und 2, insgesamt 18.
9|Du hast 100 € und verlierst nacheinander 10 % und 10 % des jeweils aktuellen Betrags. Wie viel bleibt?|80 €|81 €|82 €|90 €|1|100 × 0,9 × 0,9 = 81 Euro.
9|Was ist das kleinste gemeinsame Vielfache von 12 und 18?|24|30|36|72|2|36 ist das kleinste positive Vielfache beider Zahlen.
10|Wie viele Möglichkeiten gibt es, aus acht verschiedenen Personen genau drei für ein Team auszuwählen, ohne Rollen?|24|56|112|336|1|8 über 3 = 8 × 7 × 6 / (3 × 2 × 1) = 56.
10|Eine Uhr geht pro Stunde 4 Minuten nach. Sie wird um 12:00 richtig gestellt. Welche Zeit zeigt sie nach 6 echten Stunden?|17:24|17:36|18:24|18:00|1|Sechs Stunden × vier Minuten = 24 Minuten Rückstand. Anzeige: 17:36.
10|Eine faire Münze wird fünfmal geworfen. Wie wahrscheinlich sind genau drei Köpfe?|5/32|10/32|15/32|1/2|1|Es gibt 5 über 3 = 10 passende Folgen unter 2⁵ = 32 Folgen.
10|Welche Zahl ist die kleinste positive Zahl, die sowohl durch 6, 8 als auch 15 teilbar ist?|60|90|120|240|2|Das kleinste gemeinsame Vielfache von 6, 8 und 15 ist 120.
10|Ein Sack enthält vier rote und vier blaue Kugeln. Du ziehst ohne Zurücklegen drei Stück. Wie wahrscheinlich sind alle rot?|1/7|1/14|1/8|3/28|1|(4/8) × (3/7) × (2/6) = 1/14.
10|Ein Würfel mit Kantenlänge 4 cm wird vollständig in Würfel von 1 cm Kante geteilt. Wie viele kleine Würfel liegen innen ohne Außenfläche?|4|8|16|24|1|Nur die inneren 2 × 2 × 2 Würfel berühren keine Außenfläche. Das sind 8.
10|Ein Gast trinkt 2/3 seines Getränks, danach 1/2 des Restes. Welcher Anteil des ursprünglichen Getränks ist noch da?|1/3|1/4|1/6|1/9|2|Nach dem ersten Schluck bleibt 1/3, davon die Hälfte = 1/6.
10|Wie viele sechsstellige Folgen aus den Ziffern 0 und 1 enthalten genau zwei Einsen?|12|15|20|30|1|Die Positionen der zwei Einsen wählt man aus sechs Stellen: 6 über 2 = 15.
10|Welche Ziffer steht an der Einerstelle von 7^2026?|1|3|7|9|3|Die Endziffern laufen im Zyklus 7, 9, 3, 1. 2026 hat Rest 2 bei Division durch 4, also 9.
10|Drei Personen sind unterschiedlich groß. In wie vielen Reihenfolgen können sie sich ohne weitere Vorgaben aufstellen?|3|6|9|12|1|3! = 6. Sogar die Familie bekommt eine eindeutige Reihenfolge hin – theoretisch.`.trim().split('\n').forEach(line => {
    const [level,text,a,b,c,d,correct,explanation] = line.split('|').map(x=>x.trim());
    CLASSIC_QUESTIONS.push({level:Number(level),category:Number(level)>=7?'Knallharte Knobelei':Number(level)>=4?'Wissen & absurde Logik':'Warm-up & Allgemeinwissen',difficulty:Math.min(3,Math.ceil(Number(level)/4)),text,options:[a,b,c,d],correct:Number(correct),explanation});
  });
  window.BIER_DATA = Object.freeze({ QUESTIONS, CLASSIC_QUESTIONS, ESTIMATES, FAMILY });
})();
