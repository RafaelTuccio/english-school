const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController")

const router = Router()
router.patch('/pessoas/:id', PessoaController.atualizaPessoa)

router.get("/pessoas", PessoaController.listaPessoas)

router.get('/pessoas/:id', PessoaController.pegaPessoa)

router.post('/pessoas', PessoaController.salvarPessoa)

router.delete('/pessoas/:id', PessoaController.deletaPessoa)

module.exports = router