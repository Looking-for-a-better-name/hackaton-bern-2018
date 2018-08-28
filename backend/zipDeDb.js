const dbDe = require('../data/dbDe')

const ziped = JSON.stringify(dbDe.map(({ cat, date, measure, damage, damagedPart, description, cost }) => ({
  action: measure,
  cat,
  cost,
  desc: description,
  dmg: damage,
  part: damagedPart
})))

console.log(ziped)

