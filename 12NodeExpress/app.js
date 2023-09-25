const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Olá, bem-vindo!");
});

app.get("/cap12", (req, res) => {
  res.send("<h2>Capitulo 12: Introdução ao Express</h2>");
});

const log = (req, res, next) => {
  console.log(`.................... Acessado em ${new Date()}`);
  next();
};

app.get("/transfere", log, (req, res) => {
  res.send("Ok! Valor transferido com sucesso!");
});

app.use(express.json());
const livros = require("./livros");
app.use("/livros", livros);

app.post("/filmes", (req, res) => {
  // const titulo = req.body.titulo;
  // const genero = req.body.genero;
  const { titulo, genero } = req.body;
  res.send(`Filme: ${titulo} - genero: ${genero}, recebido...`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
