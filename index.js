const express = require("express");
const app = express();

//Estou comunicando para o Express para usar o EJS como motor para desenhar o HTML
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.send("Bem vindo ao meu site!");    
});



app.listen(3000, (error)=>{
    if (error) {
        console.log("Há Algum problema com código");

    } else { 
        console.log("Servidor Iniciado com sucesso");
    }
});


