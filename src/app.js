import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Senhor dos anéis"
    },
    {
        id: 2,
        titulo: "jogos vorazes"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, resp) => {
    resp.status(200).send("Curso de Node.js");
})

app.get("/livros", (req, resp) => {
    resp.status(200).json(livros);
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

export default app;