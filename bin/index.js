#! /usr/bin/env node
const prompts = require('prompts')
const AsciiTable = require('ascii-table')

const apps = ['calculator']

function Person (firstName) {
  this.id = firstName
}

var family = {}

family.calculator = new Person(1)

console.table(family)
;(async () => {
  const App = await prompts({
    type: 'number',
    name: 'value',
    message: 'Select Application?',
    validate: value => (value <= 10 ? true : false)
  })
  require('./' + apps[App.value - 1] + '.js')
})()
