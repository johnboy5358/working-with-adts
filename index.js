// const log = require('./lib/log')
// const assign = require('crocks/helpers/assign')
// const liftA2 = require('crocks/helpers/liftA2')
// const ap = require('crocks/pointfree/ap')
// const map = require('crocks/pointfree/map')
const { deck, displayCards } = require('./model/deck')
const Pair = require('crocks/Pair')

const p = Pair([], deck)

console.log(
  p.map(displayCards)
)
