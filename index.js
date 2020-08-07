const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.set("view engine", 'ejs');
app.use(express.static('public'));

//BODYPARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ROTAS
app.get("/", (req, res)=>{  
    res.render("index")      
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo; 
    var descricao = req.body.descricao;
    console.log(titulo)
    console.log(descricao)
    res.send( "titulo: " +  titulo + "descrição:  "  + descricao)
})

app.listen(8080, ()=>{
    console.log("Servidor Rodando")
})