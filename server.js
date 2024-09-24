// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "curso de Node.jS",
    "/livros": "livros",
    "/autores": "entrei na rota autores"
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
  console.log("servidor escutando!");
});