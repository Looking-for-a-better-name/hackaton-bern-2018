// Because Keras is better with CSV files
const fs  = require('fs')
const ost  = require('object-stream-tools')
const db = require('../data/dbEn')

const esc  = str => (str || '').replace(`"`, `'`)

const csv = db.map(e =>
  `"${esc(e.dmg)}","${esc(e.desc)}","${e.cat}"`)
csv.unshift(`"dmg","desc","cat"`)

fs.writeFileSync(__dirname + '/../data/dbEn.csv', csv.join('\n'), 'UTF-8')
