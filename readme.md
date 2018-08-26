# Looking for a better damage report assistant
## Challenge
### Intro
Stell Dir vor, Du arbeitest in der Schadenabteilung der Berner Gebäudeversicherung (GVB). Am Wochenende fegt ein heftiger Sturm à la Burglind über die Schweiz. Du kommst am Montagmorgen ins Büro und es herrscht Ausnahmezustand. In deiner Mailbox befinden sich über 3’000 Schadenmeldungen von ungeduldigen Hauseigentümern, die schnellstmöglich erfahren wollen, ob ihr Schaden gedeckt ist und wie es weitergeht.
Nimm diese Challenge an und entwickle einen Lösungsansatz, der die Schadenmeldungen der GVB automatisiert beurteilen und bis zur Auszahlung abwickeln kann. Zudem soll die Software in der Lage sein, aus den verarbeiteten Meldungen zu lernen.
### Kontext
Die GVB will die Chancen des digitalen Wandels nutzen und die GVB Gruppe fit für die Zukunft machen. Eine der wichtigsten Initiativen ist die Digitalisierung des Schaden-Managements. Dabei verfolgt die GVB zwei Ziele: Zum einen soll das Kundenerlebnis optimiert werden indem insbesondere der Koordinationsaufwand erheblich reduziert wird. Zum anderen soll der interne Prozess mit grösstmöglichem Automationsgrad abgewickelt werden.
### Lösung
Für die Entwicklung der Lösung hast Du 2 Optionen:

A) Du entwickelst eine lernfähige Software für die automatisierte Beurteilung des Schadens anhand der Schadenmeldungen. Primäres Ziel: Maximale Effizienz

oder

B) Du erarbeitest einen gesamtheitlichen Lösungsansatz für die automatisierte End-to-End Verarbeitung des Schadens – von der Anmeldung bis zur Auszahlung des Betrags. Primäres Ziel: Maximales Kundenerlebnis
## Unsere Lösung
Das Ziel unseres Projekts ist, die Schadensaufnahme soweit wie möglich zu automatisieren. Wir haben dies mit einem lernfähigen Chat-Roboter gemacht. Der Roboter analysiert dabei ganze Sätze und unterstützt sogar Bilderkennung. Mit Hilfe dieser Informationen wird bestimmt, wie schwer der Schaden ist. Aufgrund verschiedener möglicher Schadenszenarien wird danach das weitere Vorgehen vorgeschlagen. Das Ziel dabei war, dass der GVB Mitarbeiter so wenig wie nötig manuell eingreifen muss. Aktuell unterstützt unsere Lösung ca. 75% aller Fälle.
##Ausgangslage
Nebst der eigentlichen Herausforderung, die Email-Verarbeitung zu optimieren, stand auch die gesamtheitliche Betrachtung des Kundenerlebnis in unserem Fokus.
Wir überlegten uns daher, wie der Kunde durch den ganzen Schadensprozess besser begleitet werden und dabei die GVB von heutigen Möglichkeiten profitieren kann.
Daraus entstanden zwei folgende Kernlösungen in unserem Projekt:
- Eine automatisierte Entgegennahme des Schadens
- Ein sichtbarer Prozessablauf für den Kunden bis hin zur Rechnungsstellung
###Technischer Aufbau
1. Die Landingpage bzw. das Grundgerüst der Seite wurde mit Angular umgesetzt.
2. Es wurde ein Chatbot (https://github.com/vigzmv/ChatUI) für die Schadensaufnahme eingesetzt. Dabei mussten die REST-API angehängt sowie einige Anpassungen am Javascript gemacht werden.
3. Der Chatbot konnte nicht als Komponente in Angular überführt werden. Dafür wären zu viele Anpassungen am Javascript nötig gewesen. Der umgesetzte Workaround beinhaltet ein iFrame in der Angular Komponente. Aus diesem Grund muss der Chatbot selber auf einem Webserver unter Port 8080 gestartet sein. Die Implementation eines iFrames in Angular ist zudem etwas hacky und wird sicher nicht für einen späteren Betrieb empfohlen.
4. Der Chatbot kommuniziert über eine REST-API mit dem lernfähigen Backend von Lukasz. Siehe dazu auch unter "Sources"
##Implementation
Der sicherlich wichtigste Teil unsere Lösung ist der Chatbot. Durch diesen fühlt sich der Kunde sofort wahrgenommen und untersützt. Die gesammelten Informationen vereinfachen den weiteren Prozess erheblich. Die vorhandenen Trainingsdaten reichten jedoch nicht aus, um viele Fälle zeigen zu können.
##Abgrenzung / Offene Punkte
Wir haben uns auf die einfachen Fälle konzentriert. Bei den komplexen Fällen (bspw. Küchenbrand mit Einbezug mehrere Stockwerke) wird auch zukünftig nur mit Einbezug von weiteren Personen möglich sein. Beispielsweise Feuerwehr oder ein Vertreter der GVB.
## Sources
- Angular (https://angular.io/)
- Custom neural network build by Lukasz: 
    - doc2vec, POS tagger, 20x20x4 NeuralNet, BayesClassifier, Maxiumum Entropy Classifier, RF for ensable, 
    - frameworks: keras (with tf backend), natural
- Chat boilerplate (https://github.com/vigzmv/ChatUI)
- Bug lib (https://github.com/Auz/Bug)
## Team `Looking for a better name`
- Nicole Widmer
- Andreas kocher
- Lukasz Gintowt
- Alec von Barnekow