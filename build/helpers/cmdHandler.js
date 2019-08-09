const concurrently = require('concurrently')

async function runProjects(cmds){
    cmds = Array.isArray(cmds) ? cmds : [cmds]
    const allCmds = cmds.map(cmd =>{
        return cmd
    })

    console.log(allCmds)
    await concurrently(allCmds)
}

module.exports = runProjects