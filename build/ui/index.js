const commander = require('commander')
const { commander: ui , options } = require('./interface')(commander)

function getModeType (ui) {
    let [type, ...notused] = Object.keys(options).filter(opt => ui[opt.toLowerCase()])
    return type
}
module.exports = function(params){
    ui.parse(params)
    return getModeType(ui)
}
