# Looking for a better damage report assistant
## Challenge
### Intro
Stell Dir vor, Du arbeitest in der Schadenabteilung der Berner Gebäudeversicherung (GVB). Am Wochenende fegt ein heftiger Sturm à la Burglind über die Schweiz. Du kommst am Montagmorgen ins Büro und es herrscht Ausnahmezustand. In deiner Mailbox befinden sich über 3’000 Schadenmeldungen von ungeduldigen Hauseigentümern, die schnellstmöglich erfahren wollen, ob ihr Schaden gedeckt ist und wie es weitergeht.
Nimm diese Challenge an und entwickle einen Lösungsansatz, der die Schadenmeldungen der GVB automatisiert beurteilen und bis zur Auszahlung abwickeln kann. Zudem soll die Software in der Lage sein, aus den verarbeiteten Meldungen zu lernen.
### Context
Die GVB will die Chancen des digitalen Wandels nutzen und die GVB Gruppe fit für die Zukunft machen. Eine der wichtigsten Initiativen ist die Digitalisierung des Schaden-Managements. Dabei verfolgt die GVB zwei Ziele: Zum einen soll das Kundenerlebnis optimiert werden indem insbesondere der Koordinationsaufwand erheblich reduziert wird. Zum anderen soll der interne Prozess mit grösstmöglichem Automationsgrad abgewickelt werden.
### Solution
Für die Entwicklung der Lösung hast Du 2 Optionen:

A) Du entwickelst eine lernfähige Software für die automatisierte Beurteilung des Schadens anhand der Schadenmeldungen. Primäres Ziel: Maximale Effizienz

oder

B) Du erarbeitest einen gesamtheitlichen Lösungsansatz für die automatisierte End-to-End Verarbeitung des Schadens – von der Anmeldung bis zur Auszahlung des Betrags. Primäres Ziel: Maximales Kundenerlebnis
## Our project
The goal of our project is to automate as much as possible the declaration of damage of the GVB. To do this we have set up an interactive chat that works with the AI to analyze entered sentences and image recognition to see the type of incident and the severity. Depending on the different possible cases, solutions are proposed to the user. The goal was to unload the GVB employees as much as possible. Our solution allows to automatically process 75% of the declarations at this day.
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
### Context
GVB wants to take advantage of the opportunities of digital transformation and make the GVB Group fit for the future. One of the most important initiatives is the digitalisation of claims management. GVB pursues two goals: On the one hand, the customer experience is to be optimized by significantly reducing the coordination effort, in particular. On the other hand, the internal process should be handled with the greatest possible degree of automation.
### Solution
For the development of the solution you have 2 options:

A) You develop an adaptive software for the automated assessment of the damage based on the damage reports. Primary goal: maximum efficiency

or

B) You will develop a holistic approach to the automated end-to-end processing of the damage - from registration to payment of the amount. Primary goal: maximum customer experience
## Our project
The goal of our project is to automate as much as possible the declaration of damage of the GVB. To recognize the type of incident and the severity. Depending on the different possible cases, solutions are proposed to the user. The goal was to unload the GVB employees as much as possible. 75% of the declarations at this day.
## sources
- Angular (https://angular.io/)
- Custom neural network build by Lukasz
    - doc2vec, POS tagger, 20x20x4 NeuralNet, BayesClassifier, Maxiumum Entropy Classifier, RF for ensable, 
    - frameworks: keras (with tf backend), natural
- Chat boilerplate (https://github.com/vigzmv/ChatUI)
- Bug lib (https://github.com/Auz/Bug)
## Team `Looking for a better name`
- Nicole Widmer
- Andreas Kocher
- Lukasz Gintowt
- Alec von Barnekow
