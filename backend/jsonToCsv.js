// Because Keras is better with CSV files
const fs  = require('fs')
const ost  = require('object-stream-tools')
const db = require('../data/dbEn')

const csv = db.map(e =>
  e.dmg + `;` + e.desc + `;` + e.cat)
csv.unshift('dmg;desc;cat')

fs.writeFileSync(__dirname + '/../data/dbEn.csv', csv.join('\n'), 'UTF-8')
