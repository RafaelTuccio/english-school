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

    static async listaPessoasAtivas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll()
            return res.status(200).json(allPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async listaPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.scope('todos').findAll()
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

    static async restauraPessoa(req, res){
        const { id } = req.params
        try{
            await database.Pessoas.restore({ where: {id: Number(id) }})
            return res.status(200).json({"msg": "Aluno restaurado com sucesso"})
        }catch(error){
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
    //localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async pegaMatricula(req, res) {
        const { estudante_Id, matricula_Id } = req.params
        console.log('caiu aqui')
        try {
            console.log(`fui chamado com o id ${matricula_Id}`)
            const matricula = await database.Matriculas.findOne({ 
                where: {
                    id: Number(matricula_Id),
                    estudante_id: Number(estudante_Id)
                } })
            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async salvarMatricula(req, res) {
        const { estudante_id } = req.params
        const matricula = {...req.body, estudante_id: Number(estudante_id)}
        console.log(matricula)
        try {
            const novaMatricula = await database.Matriculas.create(matricula)
            return res.status(201).json({ "msg": "Matricula criada com sucesso" })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {

        const { estudante_Id, matricula_Id } = req.params
        const novasInfos = req.body
        try {
            console.log(novasInfos)
            await database.Matriculas.update(novasInfos, { 
                where: {
                     id: Number(matricula_Id),
                     estudante_Id: Number(estudante_Id)
                    } })
            const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matricula_Id) } })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaMatricula(req, res){
        const { estudante_Id, matricula_Id } = req.params
        try{
            await database.Matriculas.destroy({ where: {
                id: Number(matricula_Id)
            }})
            return res.status(200).json({"msg": "pessoa deletada com sucesso"})
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}



module.exports = PessoaController