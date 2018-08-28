const natural = require('natural')
const { prop, map, tap, pipe } = require('ramda')
const claimsDe = require('../data/dbDeZiped')
const claimsEn = require('../data/dbEn')
const _ = pipe

const LancasterStemmer = require('./node_modules/natural/lib/natural/stemmers/lancaster_stemmer')
const PorterStemmerRu = require('./node_modules/natural/lib/natural/stemmers/porter_stemmer_ru')
const classifierFile = __dirname + '/../data/classifierDe.json'
const langClassifier = new natural.BayesClassifier(LancasterStemmer)

const toClaimType = label => ({
  0: 'electrical',
  1: 'water',
  2: 'vandalism',
  3: 'other',
  4: 'insects'
}[label] || 'other')

const getStrings = e =>
  [e.action, e.desc, e.dmg, e.part].filter(Boolean).join(' ')

claimsDe.map(e =>
  langClassifier.addDocument(getStrings(e), toClaimType(e.cat)))

langClassifier.train()

const accuracyDe = claimsDe.reduce((acc, curr) => {
    const words = getStrings(curr).trim()

    langClassifier.classify(words) === toClaimType(curr.cat)
      ? acc.de += 1
      : 0

    acc.all += 1
    return acc
  },
  {
    de: 0,
    all: 0,
  })

const saveClassifier = (dmgClassifier, classifierFile) =>
  new Promise((resolve, reject) =>
    dmgClassifier.save(classifierFile, (err, classifier) =>
      err ? reject(err) : resolve(classifier)))

const loadClassifier = (classifierFile) =>
  new Promise((resolve, reject) =>
    natural.BayesClassifier.load(classifierFile, null, (err, classifier) =>
      err ? reject(err) : resolve(classifier)
    ))

// Test serialization
saveClassifier(langClassifier, classifierFile)
  .then(e => {
    console.log('saved')
  })
  .then(e => loadClassifier(classifierFile))
  // .then(classifier =>
  //   claimsDe.map(_(prop('dmg'), classifier.classify)))
  // .then(tap(console.warn))
  .catch(console.error)

console.warn(accuracyDe, accuracyDe.de / accuracyDe.all)
