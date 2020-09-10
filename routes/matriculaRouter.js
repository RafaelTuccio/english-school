const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router.get('/matriculas', MatriculaController.listarMatricula)
router.patch('/matriculas', MatriculaController.atualizaMatricula)
router.post('/matriculas', MatriculaController.salvarMatricula)
router.get('/matriculas', MatriculaController.pegaMatricula)
router.delete('/matriculas', MatriculaController.deletaMatricula)

module.exports = router