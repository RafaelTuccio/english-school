const database = require("../models")

class MatriculaController{

    static async listarMatricula(req, res) {
        try{
            const matricula = await database.Matriculas.findAll()
            return res.status(200).json(matricula)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {

        const { id } = req.params
        console.log(`atualiando no id ${id}`)
        const novasInfos = req.body
        try {
            console.log(novasInfos)
            await database.Matriculas.update(novasInfos, { where: { id: Number(id) } })
            const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async salvarMatricula(req, res) {
        console.log("salvando Matricula")
        const matricula = req.body
        try {
            const novaMatricula = await database.Matriculas.create(matricula)
            return res.status(201).json({ "msg": "matricula criada com sucesso" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatricula(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            console.log(`fui chamado com o id ${id}`)
            const matricula = await database.Matriculas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaMatricula(req, res){
        const { id } = req.params
        try{
            console.log(`fui chamado para deletar o id ${id}`)
            await database.Matriculas.destroy({ where: { id: Number(id)}})
            return res.status(200).json({"msg": "Matricula deletada com sucesso"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MatriculaController