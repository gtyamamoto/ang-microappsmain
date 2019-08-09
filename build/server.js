require('dotenv').config()
const projects = require('./helpers/projects.js')
const modeBuilder = require('./build.mode')
const commandHandler = require('./helpers/cmdHandler')


async function main(){
    const projectList = await projects()
    const builderType = modeBuilder(process.argv)
    let commands = builderType(projectList)
    commandHandler(commands)
}



main()