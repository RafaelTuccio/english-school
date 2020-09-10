const database = require("../models")

class NivelController{

    static async listarNiveis(req, res) {
        try{
            const nivel = await database.Niveis.findAll()
            return res.status(200).json(nivel)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {

        const { id } = req.params
        console.log(`atualiando no id ${id}`)
        const novasInfos = req.body
        try {
            console.log(novasInfos)
            await database.Niveis.update(novasInfos, { where: { id: Number(id) } })
            const nivelAtualizada = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(nivelAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async salvarNivel(req, res) {
        console.log("salvando nivel")
        const nivel = req.body
        try {
            const novoNivel = await database.Niveis.create(nivel)
            return res.status(201).json({ "msg": "nivel criado com sucesso" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaNivel(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            console.log(`fui chamado com o id ${id}`)
            const nivel = await database.Niveis.findOne({ where: { id: Number(id) } })
            return res.status(200).json(nivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res){
        const { id } = req.params
        try{
            console.log(`fui chamado para deletar o id ${id}`)
            await database.Niveis.destroy({ where: { id: Number(id)}})
            return res.status(200).json({"msg": "nivel deletado com sucesso"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController