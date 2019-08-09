exports['DEV'] = {
    color: 'green',
    context: require('./dev.mode') 
}

exports['BUILD'] = {
    color: 'cyan',
    context: () =>{
        throw new Error('Method not Implemented')
    }
} 
