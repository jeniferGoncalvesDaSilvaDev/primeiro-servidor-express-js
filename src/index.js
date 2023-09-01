//primeiro servidor usando express

const express = require('express');
const app = express();
//criando rotas 
app.get('/home', (requisicao, resposta) =>{
    resposta.send('Wake Up Neo');


});
app.get('/', (requisicao, resposta) =>{
    resposta.send('Essa é minha rota principal');
 

});
//a rota vai ate a porta logica 3000
app.listen(3000)