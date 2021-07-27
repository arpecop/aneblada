#! /usr/bin/env node
const prompts = require('prompts')
const AsciiTable = require('ascii-table')
const chalk = require('chalk')

function percentage (partialValue) {
  return (100 * partialValue) / 30
}
console.log(chalk.white.bgRed.bold('Motivation calculator v.0.0.1'))
console.log('Choose from 1 to 10')
;(async () => {
  const sallary = await prompts({
    type: 'number',
    name: 'value',
    message: 'How much Sallary motivates you?',
    validate: value => (value <= 10 ? true : false)
  })
  const workplace = await prompts({
    type: 'number',
    name: 'value',
    message: 'How much Workplace motivates you?',
    validate: value => (value <= 10 ? true : false)
  })
  const coworkers = await prompts({
    type: 'number',
    name: 'value',
    message: 'How much coworkers motivates you?',
    validate: value => (value <= 10 ? true : false)
  })
  const sum = sallary.value + workplace.value + coworkers.value
  const overall = Math.round(sum / 3)
  var table = new AsciiTable('A Title')
  table
    .setHeading('', 'Name', 'Age')
    .addRow(null, 'Sallary', sallary.value)
    .addRow(null, 'Workplace', workplace.value)
    .addRow(null, 'Coworkers', coworkers.value)
    .addRow(null)
    .addRow('Overall Score:', overall, Math.round(percentage(sum)) + '%')
  console.log(table.toString())
})()
