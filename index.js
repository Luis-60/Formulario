require("dotenv").config();

const db = require("./db.js");

const port = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/form.html")

    });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/enviar-dados", async (req, res) => {
    res.send("Nome: " ) + req.body.nome + 
    "<br>Email: " + req.body.email + "</br>" + 
    "<br>Telefone: " + req.body.telefone + "</br>" + 
    "<br>cpf: " + req.body.cpf + "</br>" + 
    "<br>Sexo: " + req.body.genero + "</br>" + 
    "<br>DataDeNascimento: " + req.body.data_nascimento + "</br>" + 
    "<br>Cidade: " + req.body.cidade + "</br>" + 
    "<br>Estado: " + req.body.estado + "</br>" + 
    "<br>Endereço: " + req.body.endereco + "</br>"
});

app.listen(port, () => {
    console.log('Servidor rodando na porta ${port}');
});
