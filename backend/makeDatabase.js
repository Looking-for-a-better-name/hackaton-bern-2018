const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const claims = require('./claims')
const translate = require('mr-t')
const { map, pipeP } = require('ramda')
const execa = require('execa')

const readFileAsync = promisify(fs.readFile)
const dataDir = path.resolve(__dirname + '/../data/')

const grab = (text, regex) =>
  text.find(e => e.match(regex)).split(':').pop().trim()

const main = pipeP(
  e => Promise.resolve(e),
  map(e =>
    readFileAsync(dataDir + '/' + e, 'UTF-8')
      .then(e => {
        const text = e.split('\n').map(e => e.trim()).filter(Boolean)
        return {
          date: grab(text, /Datum/), // text.find(e => e.match(/Datum/)).split(':').pop().trim(),
          measure: grab(text, /Beschreibung der Sofortmassnahmen/), // text.find(e => e.match(/Datum/)).split(':').pop().trim(),
          damage: grab(text, /Schadenshergang| Damage:/),
          damagedPart: grab(text, /Beschädigte Gebäudeteile/),
          description: [
            grab(text, /Beschreibung der Sofortmassnahmen/),
            grab(text, /Informationen:/)].join(' '),
          cost: grab(text, /Wiederherstellungs-/),
        }
      })),
  e => Promise.all(e),
  map(e => console.log({
    dmg: e.damage, desc: e.description
  })),
  // e => execa.shell(`mr-t ${JSON.stringify(e)}`)
)

main(claims)
// .then(console.log)
  .catch(console.error)
