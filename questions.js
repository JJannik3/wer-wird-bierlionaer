/* Fragenpool: 140 einzigartige Multiple-Choice-Fragen, 18 Schätzfinals und Familien-Challenges.
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
  window.BIER_DATA = Object.freeze({ QUESTIONS, ESTIMATES, FAMILY });
})();
