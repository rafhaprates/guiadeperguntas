const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Estou comunicando para o Express para usar o EJS como motor para desenhar o HTML
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded(
    {
        extended:false
    }
));
//Por algum motivo de usar o bodyparser com o json ele trava a aplicação 
//app.use(bodyParser.json);

//Rotas
app.get("/", (req, res) => {
    res.render("index");  
});


app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/saveask", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario Recebido! Seu titulo eh " + titulo + " " + " E sua descricao eh " + descricao + " ");
});


app.listen(3000, (error)=>{
    if (error) {
        console.log("Há Algum problema com código");

    } else { 
        console.log("Servidor Iniciado com sucesso");
    }
});


