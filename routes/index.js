const bodyParser = require('body-parser')
const pessoaRouter = require('./pessoasRoute')
const nivelRouter = require('./nivelRoute')
const matriculaRouter = require('./matriculaRouter')
const turmaRouter = require('./turmasController')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoaRouter, nivelRouter, matriculaRouter, turmaRouter)
    
    
}
