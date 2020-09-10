const bodyParser = require('body-parser')
const pessoaRouter = require('./pessoasRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoaRouter)
    
    
}
