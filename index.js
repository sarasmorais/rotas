const express = require('express'); 
const porta = 3000 

const app = express();


app.get('/',(req,res) =>{
    res.send('email: contato@email.com'); 
});

app.get('About',(req,res) =>{
    res.send('Sobre...');  
});

app.get('Features',(req,res) =>{
    res.send('....'); 
});

app.get('Contact',(req,res) =>{
    res.send('email: contato@email.com'); 
});

app.listen(porta,()=>{
    console.log('Servidor rodando no http://localhost:3000') 
})
