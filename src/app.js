import express from "express";
import conectaDatabase from "./config/bdConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("conexão com banco funcionando");
})

const app = express();
routes(app);


app.delete("/livros/:id", (req, resp) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    resp.status(200).send("livro removido");
})

export default app;