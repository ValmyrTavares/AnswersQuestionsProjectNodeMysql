const express = require("express")
const app = express();

app.set("view engine", 'ejs');

app.get("/:nome/:lang", (req, res)=>{
    let nome= req.params.nome;
    let lang=req.params.lang;
    let exibirMsg = true;

    let produtos = [
        {nome: "Valmyr", idade: 49, nacionalidade: "Frances"},
        {nome: "Vania", idade: 29, nacionalidade: "Hungara"},
        {nome: "Michelle", idade: 19, nacionalidade: "Italiana"},
    ]


    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador", 
        inscrito : 8000,
        msg: exibirMsg,
        produtos:produtos
    })
})


app.listen(8080, ()=>{
    console.log("Servidor Rodando")
})