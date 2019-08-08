const fs = require('fs');
const path = require('path')
const concurrently = require('concurrently')
const { promisify } = require('util')

const START_PORT = 4000
const OPEN_BROWSER = process.argv.find(arg => arg.match(/-o|--o|--open/ig)) ? ' --o': ''
const WORKDIR = path.resolve(path.join(__filename),'..','..','projects')

const readdir = promisify(fs.readdir)
const cmdRunProject = (port,projct) => `ng serve --port ${port} --project ${projct}${OPEN_BROWSER}`

async function main(){
    const projects = await getProjects()
    await runProjects(projects)
}

async function getProjects(){
    return await readdir(WORKDIR)
}

async function runProjects(projects = []){
    let port = START_PORT - 1
    const allCmdProjects = projects.map(project =>{
        port++
        return cmdRunProject(port,project)
    })

    await concurrently(allCmdProjects)
}
main()