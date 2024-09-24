// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "curso de Node.jS",
    "/livros": "livros",
    "/autores": "entrei na rota autores"
};

app.listen(PORT, () => {
  console.log("servidor escutando!");
});