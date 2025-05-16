const express = require('express');  //chamando o requerimento instalado express - precisa ter ele instalado mpn install express


const app = express(); //chamando a função

const porta = 3000;

app.get('/',(req,res)=>{
    res.send('Bem-vindo a tela inicial do nosso site')
}) //rota direcionada, em arrow function sempre tem q ter definida nela qual tipo de parametro()

app.get('/api/produtos',(req,res)=>{
    res.json([
        {
            "id": 1,
            "produto": "mouse",
            "estoque":10
        },
        {
            "id": 2,
            "produto": "notebook",
            "estoque":16
        },
        {
            "id": 3,
            "produto": "fone",
            "estoque":15
        },
        {
            "id": 4,
            "produto": "smartphone",
            "estoque":3
        }
    ])
});

app.get('/inpecionar',(req,res)=>{
    console.log("nova requisição recebida");
    console.log("metodo: ",req.method);
    console.log("URL: ",req.url);
    console.log("Cabeçalho: ", req.headers);

    res.send('requisição recebida veja o terminal!');
});

app.listen(porta);