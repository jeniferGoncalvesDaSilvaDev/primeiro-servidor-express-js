//primeiro servidor usando express

const express = require('express');
const app = express();
//criando rotas 
app.get('/home', (requisicao, resposta) =>{
    resposta.send('Wake Up Neo');


});
//a rota vai ate a porta logica 3000
app.listen(3000)