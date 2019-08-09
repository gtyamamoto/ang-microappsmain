const chalk = require('chalk')
const getModeType = require('./ui/index')

function getBuildMode(processArgs){
    const modeType = getModeType(processArgs)
    const mode = require('./modes/index')[modeType]
    console.log(`Running in ${chalk.bold[mode.color](modeType.toUpperCase())} mode.`)
    return mode['context']
}

module.exports = getBuildMode
