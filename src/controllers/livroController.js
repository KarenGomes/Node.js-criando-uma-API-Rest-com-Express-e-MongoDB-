import livro from "../models/livros.js"

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na requisição de listar livros` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.param.id;
            const livroEncontrado = await livro.findById(id);
            resp.status(200).json(livroEncontrado);
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async cadastrarLivro(req, resp){
        try{
            const novoLivro = await livro.create(req.body);
            resp.status(201).json({ message: "Criado com sucesso", livro: novoLivro});
        }catch(erro){
            resp.status(500).json({ message: `${erro.message} - falha ao cadastrar um livro`});
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.param.id;
            await livro.findByIdAndUpdate(id, req.body);
            resp.status(200).json({ message: "Livro atualizado"});
        } catch (erro) {
            res
            .status(500)
            .json({ message: `${erro.message} - falha na atualização do livro` });
        }
    }

};

export default LivroController;