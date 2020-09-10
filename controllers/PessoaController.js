const database = require("../models")


class PessoaController {

    static async atualizaPessoa(req, res) {

        const { id } = req.params
        console.log(`atualiando no id ${id}`)
        const novasInfos = req.body
        try {
            console.log(novasInfos)
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll()
            return res.status(200).json(allPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async salvarPessoa(req, res) {
        console.log("salvando pessoa")
        const pessoa = req.body
        try {
            const novaPessoa = await database.Pessoas.create(pessoa)
            return res.status(201).json({ "msg": "pessoa criada com sucesso" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaPessoa(req, res) {
        const { id } = req.params
        console.log(id)
        try {
            console.log(`fui chamado com o id ${id}`)
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa(req, res){
        const { id } = req.params
        try{
            console.log(`fui chamado para deletar o id ${id}`)
            await database.Pessoas.destroy({ where: { id: Number(id)}})
            return res.status(200).json({"msg": "pessoa deletada com sucesso"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = PessoaController