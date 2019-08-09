const OPEN_BROWSER = () => process.argv.find(arg => arg.match(/-o|--o|--open/ig)) ? ' --o': '';
const START_PORT = process.env.START_PORT

class CommandBuilder{
    constructor(projects){
        this.open_browser = OPEN_BROWSER();
        this.start_port = parseInt(START_PORT) || 2000
        Object.freeze(this.open_browser)
        Object.freeze(this.start_port)
        this.commands = this.getAllCommands(projects)
    }

    cmdGenerator(projct,port){
        return `ng serve --port ${port} --project ${projct}${this.open_browser}`
    }

    getAllCommands(projects){
        return projects.map((proj,i) =>{
            return this.cmdGenerator(proj,this.start_port + i)
        })
    }
}

module.exports = function(projct){
    const server = new CommandBuilder(projct)
    return server.commands
}