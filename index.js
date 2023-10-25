require("dotenv").config();

const db = require("./db.js");

const port = process.env.PORT || 3000;

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/form.html")
  
    });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', (req, res) => {
    const {nome, email, telefone, cpf, data_nascimento,
    cidade, estado} = req.body;
  
    db.pool.query(
      'INSERT INTO formulario (nome, email, telefone, cpf, datanascimento, cidade, estado) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [nome, email, telefone, cpf, data_nascimento,
        cidade, estado],
      (err, result) => {
        if (err) {
          console.error(err);
          res.send('Erro ao inserir os dados no banco de dados.' + err.message);
        } else {
          res.sendFile(__dirname + "/di.html");
        }
      }
    );
  });


app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}');
});
