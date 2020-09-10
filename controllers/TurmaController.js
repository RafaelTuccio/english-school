const database = require("../models")

class TurmaController{
    static async listarTurmas(req, res) {
        try{
            const turmas = await database.Turmas.findAll()
            return res.status(200).json(turmas)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaTurmas(req, res) {

        const { id } = req.params
        console.log(`atualiando no id ${id}`)
        const novasInfos = req.body
        try {
            console.log(novasInfos)
            await database.Turmas.update(novasInfos, { where: { id: Number(id) } })
            const turmasAtualizada = await database.Turmas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(turmasAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async salvarTurmas(req, res) {
        console.log("salvando Turmas")
        const turma = req.body
        try {
            const novaTurma = await database.Turmas.create(turma)
            return res.status(201).json({ "msg": "turma criada com sucesso" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTurma(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            console.log(`fui chamado com o id ${id}`)
            const turma = await database.Turmas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req, res){
        const { id } = req.params
        try{
            console.log(`fui chamado para deletar o id ${id}`)
            await database.Turmas.destroy({ where: { id: Number(id)}})
            return res.status(200).json({"msg": "Turma deletada com sucesso"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController