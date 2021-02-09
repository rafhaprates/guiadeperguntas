const express = require("express");
const app = express();

//Estou comunicando para o Express para usar o EJS como motor para desenhar o HTML
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");  
});


app.get("/ask", (req, res) => {
    res.render("ask");
});


app.listen(3000, (error)=>{
    if (error) {
        console.log("Há Algum problema com código");

    } else { 
        console.log("Servidor Iniciado com sucesso");
    }
});


