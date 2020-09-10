const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.listarTurmas)
router.patch('/turmas', TurmaController.atualizaTurmas)
router.post('/turmas', TurmaController.salvarTurmas)
router.get('/turmas', TurmaController.pegaTurma)
router.delete('/turmas', TurmaController.deletaTurma)

module.exports = router