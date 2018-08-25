const natural = require('natural')
const { map } = require('ramda')
const claims = require('../data/dbEn')

const classifierFile = __dirname + '/../data/classifier.json'
const dmgClassifier = new natural.BayesClassifier()
const descClassifier = new natural.BayesClassifier()
const allClassifier = new natural.BayesClassifier()

const toClaimType = label => ({
  0: 'electrical',
  1: 'water',
  2: 'vandalism',
  // 3: 'other',
  // 4: 'insects'
}[label] || 'other')


claims.map(({ dmg, cat }) =>
  dmg && dmgClassifier.addDocument(dmg, toClaimType(cat)))

claims.map(({ desc, cat }) =>
  desc && descClassifier.addDocument(desc, toClaimType(cat)))

claims.map(({ dmg, desc, cat }) =>
  allClassifier.addDocument(dmg + ' ' + desc, toClaimType(cat)))
// dmgClassifier.addDocument('i am long qqqq', toClaimType(0))
// dmgClassifier.addDocument('buy the q\'s', toClaimType(0))
// dmgClassifier.addDocument('short gold', 'sell')
// dmgClassifier.addDocument('sell gold', 'sell')

dmgClassifier.train()
descClassifier.train()
allClassifier.train()

const accuracy = claims.reduce((acc, { dmg, desc, cat }) => {
    const label = toClaimType(cat)
    const all = dmg + ' ' + desc

    if (dmgClassifier.classify(dmg) === label) {
      acc.dmg += 1
    }
    if (descClassifier.classify(dmg) === label) {
      acc.desc += 1
    }
    if (allClassifier.classify(dmg) === label) {
      acc.all += 1
    }

    // if (dmgClassifier.classify(desc) === label) {
    //   acc.dmg += 1
    // }
    // if (descClassifier.classify(desc) === label) {
    //   acc.desc += 1
    // }
    // if (allClassifier.classify(desc) === label) {
    //   acc.all += 1
    // }

    // if (dmgClassifier.classify(all) === label) {
    //   acc.dmg += 1
    // }
    // if (descClassifier.classify(all) === label) {
    //   acc.desc += 1
    // }
    // if (allClassifier.classify(all) === label) {
    //   acc.all += 1
    // }

    return acc
  },
  {
    all: 0,
    dmg: 0,
    desc: 0,
  })

// random is: 25.0 %
// our is: 54.0 %
// TODO glove classifier is 83%
console.log(map(e => e / claims.length, accuracy), claims.length)

const texts = [
  'In kitchen leaked out of the dishwasher\'s water pipe and hit the floor',
  'hail',
  'electric lighting',
  'Water pushes under the bricks at two skylights.'
]

// tests classifiers
texts.map(text => {
  console.log({
    dmg: dmgClassifier.classify(text),
    desc: descClassifier.classify(text),
    all: allClassifier.classify(text)
  })
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
saveClassifier(dmgClassifier, classifierFile)
  .then(e => {
    console.log('saved')
  })
  .then(e => loadClassifier(classifierFile))
  .then(classifier => {
    texts.map(text => {
      console.log({ dmg: classifier.classify(text) })
    })
  })
  .catch(console.error)

