import brain from 'brain.js'
import _ from 'ramda'
import fs from 'fs'
import claims from '../data/dbEn'

const { map } = _

const encode = str => str.split('')
  // .map(e => (e.charCodeAt(0) - 97))
  .map(e => (e.charCodeAt(0) / 125))
// .map(e =>
//   e.charCodeAt(0) > 255
//     ? e.charCodeAt(0) / 10000 // emoji
//     : e.charCodeAt(0) / 255)


// Brain has quite specific input requirement so we gonna use it
const toNet = label => e => ({
  input: encode(e), //twitter.tokenizeAndStem(e),
  output: { [label]: 1 }
})

const toClaimType = label => ({
  0: 'electrical',
  1: 'water',
  2: 'vandalism',
  // 3: 'other',
  // 4: 'insects'
}[label] || 'other')


const trainData = claims.map(({ dmg, desc, cat }) =>
  dmg && toNet(toClaimType(cat))((dmg + ' ' + desc).padEnd(240, ' ')))

// console.warn(trainData)

// //create a simple recurrent neural network
// var net2 = new brain.recurrent.RNN()
//
// net2.train([{input: [0, 0], output: [0]},
//   {input: [0, 1], output: [1]},
//   {input: [1, 0], output: [1]},
//   {input: [1, 1], output: [0]}]);
//
// console.warn(net2.run([0, 1]))  // [1]
// console.warn(net2.run([1, 0]))  // [1]
// console.warn(net2.run([1, 1]))  // [0]


const net = new brain.NeuralNetwork({
  // hiddenLayers: [20, 4, 20],
  // hiddenLayers: [10, 10, 4],
  // hiddenLayers: [200, 2],
  // activation: 'sigmoid', // activation function
  // learningRate: 0.30, // global learning rate, useful when training using streams
  learningRate: 0.03, // global learning rate, useful when training using streams
  // learningRate: 0.6, // global learning rate, useful when training using streams
  log: true,           // true to use console.log, when a function is supplied it is used --> Either true or a function
  logPeriod: 200,        // iterations between logging out --> number greater than 0
  // iterations: 5000 * Math.round(handles.length / 2),    // the maximum times to iterate the training data --> number greater than 0
  // iterations: 5000, //5000 * Math.round(handles.length / 2),    // the maximum times to iterate the training data --> number greater than 0
  // errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
  // iterations: 20000,    // the maximum times to iterate the training data --> number greater than 0
  iterations: 2000,    // the maximum times to iterate the training data --> number greater than 0
})

const label = _.pipe(e => net.run(encode(e)), _.toPairs, _.sortBy(_.tail), _.last, _.head)

const train = data => {
  net.train(data)

  return input => net.run(encode(input.padEnd(240, ' ')))
}

Promise.resolve(trainData)
  // .then(_.tap(e => e.map(console.log)))
  .then(trainingData => [trainingData, train(trainingData)])
  .then(([trainingData, run]) => {

    console.log(run('water destroyed my yard'), 'water')
    console.log(label('electric'), 'electric')
    console.log(label('grafitti'), 'vandalism')

    const accuracy = claims.reduce((acc, { dmg, desc, cat }) => {
        const realLabel = toClaimType(cat)
        const all = dmg + ' ' + desc

        if (label(dmg) === realLabel) {
          acc.dmg += 1
        }
        if (label(dmg) === realLabel) {
          acc.desc += 1
        }
        if (label(dmg) === realLabel) {
          acc.all += 1
        }

        return acc
      },
      {
        all: 0,
        dmg: 0,
        desc: 0,
      })

    console.log(map(e => e / claims.length, accuracy), claims.length)

    fs.writeFileSync('net.json', JSON.stringify(net.toJSON()))
  })
  .catch(console.error)

// export {
//   encode,
//   processTrainingData
// }
