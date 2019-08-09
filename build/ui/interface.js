const options = require('./../commands.json')

module.exports = function(commander){
    const { DEV, BUILD } = options
    commander
        .version('1.0.0')
        .option(DEV.command,DEV.description, { context: 'DEV' })
        .option(BUILD.command,BUILD.description, { context: 'BUILD' })
    return { commander, options }
}