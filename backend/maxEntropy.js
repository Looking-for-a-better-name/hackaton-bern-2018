const natural = require('natural')

const Element = natural.SE_Element
const Context = natural.Context
const Feature = natural.Feature
const FeatureSet = natural.FeatureSet
const Sample = natural.Sample
const Scaler = natural.GISScaler
const Classifier = natural.MaxEntClassifier

const classifierFilename = 'classifier.json'
const minImprovement = 0.01
const nrIterations = 20

// let sample = null
// let featureSet = null
// let classifier = null
//
// sample = new Sample()
// sample.addElement(new Element('x', new Context('0')))
// sample.addElement(new Element('x', new Context('0')))
// sample.addElement(new Element('x', new Context('0')))
// sample.addElement(new Element('y', new Context('0')))
// sample.addElement(new Element('y', new Context('0')))
// sample.addElement(new Element('y', new Context('0')))
//
// sample.addElement(new Element('x', new Context('1')))
// sample.addElement(new Element('y', new Context('1')))
// sample.addElement(new Element('y', new Context('1')))
// sample.addElement(new Element('y', new Context('1')))
//
// console.warn(sample.size()) // 10
//
// featureSet = new FeatureSet()
// sample.generateFeatures(featureSet)
//
// console.log(featureSet.size()) // 2
// //
// // expect(featureSet.size()).toBe(2);
//
// classifier = new Classifier(featureSet, sample)
// classifier.train(nrIterations, minImprovement)
//
// console.warn(classifier.classify(new Context('1')))  // y

console.log('///////////////////////////////////////////////////////////////')



let guubSample = new Sample()
// guubSample.addElement(new Element('x', new Context('blalala')))
// guubSample.addElement(new Element('x', new Context('1')))
guubSample.addElement(new Element('x', new Context('1')))
guubSample.addElement(new Element('z', new Context('1')))
guubSample.addElement(new Element('z', new Context('1')))
guubSample.addElement(new Element('y', new Context('1')))
guubSample.addElement(new Element('y', new Context('0')))
guubSample.addElement(new Element('z', new Context('0')))
guubSample.addElement(new Element('z', new Context('0')))

console.warn('sample size', guubSample.size()) // 10


let guubFeatures = new FeatureSet()
guubSample.generateFeatures(guubFeatures)

console.log('features', guubFeatures.size())

const guubClassifier = new Classifier(guubFeatures, guubSample)
guubClassifier.train(6, minImprovement)


console.warn('test:', guubClassifier.classify(new Context('1')))  // y
console.warn('test:', guubClassifier.classify(new Context('0')))  // y

console.warn('sriously?, this blows')

//Graffiti`s on flower trough at the parking lot.

// TODO save
// classifier.save(classifierFilename, function(err, c) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     DEBUG && console.log("Classifier saved to "  + classifierFilename);
//   }
//   done();
// });
// });
//
// var newClassifier = null;
// it("Load classifer", function(done) {
//   classifier.load(classifierFilename, SE_Element, function(err, c) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       DEBUG && console.log("Classifier loaded from " + classifierFilename);
//       newClassifier = c;
//     }
//     done();
//   });
//   if (newClassifier) {
//     classifier = newClassifier;
//   }
// });
