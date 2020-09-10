const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController")

const router = Router()
router.patch('/pessoas/:id', PessoaController.atualizaPessoa)

router.get("/pessoas", PessoaController.listaPessoasAtivas)

router.get("/pessoas/todos", PessoaController.listaPessoas)

router.get('/pessoas/:id', PessoaController.pegaPessoa)

router.post('/pessoas', PessoaController.salvarPessoa)

router.post('/pessoas/:id', PessoaController.restauraPessoa)

router.delete('/pessoas/:id', PessoaController.deletaPessoa)

router.get('/pessoas/:estudante_Id/matricula/:matricula_Id', PessoaController.pegaMatricula)

router.post('/pessoas/:estudante_id/matricula/', PessoaController.salvarMatricula)

router.patch('/pessoas/:estudante_Id/matricula/:matricula_Id', PessoaController.atualizaMatricula)

router.delete('/pessoas/:estudante_Id/matricula/:matricula_Id', PessoaController.deletaMatricula)

module.exports = router