const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.listarNiveis)
router.patch('/niveis/:id', NivelController.atualizaNivel)
router.post('/niveis', NivelController.salvarNivel)
router.get('/niveis', NivelController.pegaNivel)
router.delete('/nivel/:id', NivelController.deletaNivel)

module.exports = router