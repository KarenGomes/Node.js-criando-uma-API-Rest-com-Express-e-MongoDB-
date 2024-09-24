import express from "express";
import conectaDatabase from "./config/bdConnect.js";
import livro from "./models/livros.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("conexão com banco funcionando");
})

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
    resp.status(200).send("Curso de Node.js");
})

app.get("/livros", async (req, resp) => {
    const listaLivros = await livro.find({});
    resp.status(200).json(listaLivros);
})

app.get("/livros/:id", (req, resp) => {
    const index = buscaLivro(req.params.id);
    resp.status(200).json(livros[index]);
})

app.post("/livros", (req, resp) => {
    livros.push(req.body);
    resp.status(201).send("Livro cadastrado com sucesso");
})

app.put("/livros/:id", (req, resp) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    resp.status(200).json(livros);
})

app.delete("/livros/:id", (req, resp) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    resp.status(200).send("livro removido");
})

export default app;