// Because Keras is better with CSV files
const fs  = require('fs')
const ost  = require('object-stream-tools')
const db = require('../data/dbEn')

const esc  = str => (str || '').replace(`"`, `'`)

const toClaimType = label => ({
  0: 'electrical',
  1: 'water',
  2: 'vandalism',
  3: 'other',
  4: 'insects'
}[label] || 'other')

const csv = db.map(e =>
  `"${esc(e.dmg)}","${esc(e.desc)}","${toClaimType(e.cat)}"`)
csv.unshift(`"dmg","desc","cat"`)

fs.writeFileSync(__dirname + '/../data/dbEn.csv', csv.join('\n'), 'UTF-8')
