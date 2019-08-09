const fs = require('fs');
const path = require('path')
const { promisify } = require('util')
const WORKDIR = path.resolve(path.join(__filename),'..','..','..','projects')
const readdir = promisify(fs.readdir)
const projects = async () => await readdir(WORKDIR) 

module.exports = projects