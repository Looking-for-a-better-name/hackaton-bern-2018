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
## Ausgangslage
Nebst der eigentlichen Herausforderung, die Email-Verarbeitung zu optimieren, stand auch die gesamtheitliche Betrachtung des Kundenerlebnis in unserem Fokus.
Wir überlegten uns daher, wie der Kunde durch den ganzen Schadensprozess besser begleitet werden und dabei die GVB von heutigen Möglichkeiten profitieren kann.
Daraus entstanden zwei folgende Kernlösungen in unserem Projekt:
- Eine automatisierte Entgegennahme des Schadens
- Ein sichtbarer Prozessablauf für den Kunden bis hin zur Rechnungsstellung

### Technischer Aufbau
1. Die Landingpage bzw. das Grundgerüst der Seite wurde mit Angular umgesetzt.
2. Es wurde ein Chatbot (https://github.com/vigzmv/ChatUI) für die Schadensaufnahme eingesetzt. Dabei mussten die REST-API angehängt sowie einige Anpassungen am Javascript gemacht werden.
3. Der Chatbot konnte nicht als Komponente in Angular überführt werden. Dafür wären zu viele Anpassungen am Javascript nötig gewesen. Der umgesetzte Workaround beinhaltet ein iFrame in der Angular Komponente. Aus diesem Grund muss der Chatbot selber auf einem Webserver unter Port 8080 gestartet sein. Die Implementation eines iFrames in Angular ist zudem etwas hacky und wird sicher nicht für einen späteren Betrieb empfohlen.
4. Der Chatbot kommuniziert über eine REST-API mit dem lernfähigen Backend von Lukasz. Siehe dazu auch unter "Sources"

## Implementation
Der sicherlich wichtigste Teil unsere Lösung ist der Chatbot. Durch diesen fühlt sich der Kunde sofort wahrgenommen und untersützt. Die gesammelten Informationen vereinfachen den weiteren Prozess erheblich. Die vorhandenen Trainingsdaten reichten jedoch nicht aus, um viele Fälle zeigen zu können.

## Abgrenzung / Offene Punkte
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

-- en
# Looking for a better damage report assistant

## Challenge
### Intro
Imagine that you work in the claims department of Bern's building insurance (GVB). At the weekend, a violent storm like Burglind sweeps across Switzerland. You come to the office on Monday morning and there is a state of emergency. Your mailbox contains more than 3,000 claims from impatient homeowners who want to know as soon as possible, whether their damage is covered and how it goes on.
Accept this challenge and develop a solution that can automatically assess GVB's claims reports and process them until they are disbursed. In addition, the software should be able to learn from the processed messages.

### context
GVB wants to take advantage of the opportunities of digital transformation and make the GVB Group fit for the future. One of the most important initiatives is the digitalisation of claims management. GVB pursues two goals: On the one hand, the customer experience is to be optimized by significantly reducing the coordination effort, in particular. On the other hand, the internal process should be handled with the greatest possible degree of automation.

### solution
For the development of the solution you have 2 options:

A) You develop an adaptive software for the automated assessment of the damage based on the damage reports. Primary goal: maximum efficiency

or

B) You will develop a holistic approach to the automated end-to-end processing of the damage - from registration to payment of the amount. Primary goal: maximum customer experience

## Our solution
The goal of our project is to automate the loss taking as much as possible. We did this with a learning chat robot. The robot analyzes whole sentences and even supports image recognition. This information is used to determine how severe the damage is. Due to various possible damage scenarios, the further procedure is then proposed. The goal was that the GVB employee had to intervene manually as little as necessary. Currently, our solution supports about 75% of all cases.

## Starting position
In addition to the actual challenge of optimizing the email processing, the holistic consideration of the customer experience was also our focus.
We therefore considered how the customer could be better supported by the entire damage process and how GVB could benefit from today's possibilities.
This resulted in two core solutions in our project:
- An automated receipt of the damage
- A visible process flow for the customer up to the billing
### Technical structure
1. The landing page or the framework of the page was implemented with Angular.
2. A chatbot (https://github.com/vigzmv/ChatUI) has been used for the claim. This involved attaching the REST API and making some adjustments to the Javascript.
3. The chatbot could not be transferred as a component in Angular. That would have required too many adjustments to the Javascript. The implemented workaround includes an iFrame in the Angular component. For this reason, the chatbot itself must be started on a web server under port 8080. The implementation of an iFrame in Angular is also a bit hacky and certainly not recommended for later use.
4. The chatbot communicates via a REST API with the learning backend of Lukasz. See also under "Sources"

## Implementation
The most important part of our solution is the chatbot. Through this, the customer feels immediately perceived and supported. The collected information considerably simplifies the further process. However, the existing training data was not enough to show many cases.

## Demarcation / Open Points
We focused on the simple cases. In the complex cases (eg Küchenbrand including several floors) will be possible in the future only with the inclusion of other people. For example, fire department or a representative of GVB.

## sources
- Angular (https://angular.io/)
- Custom neural network build by Lukasz:
    - doc2vec, POS tagger, 20x20x4 NeuralNet, BayesClassifier, Maxiumum Entropy Classifier, RF for ensable,
    - frameworks: keras (with tf backend), natural
- Chat boilerplate (https://github.com/vigzmv/ChatUI)
- Bug lib (https://github.com/Auz/Bug)

## Team `Looking for a better name`
- Nicole Widmer
- Andreas Kocher
- Lukasz Gintowt
- Alec von Barnekow
