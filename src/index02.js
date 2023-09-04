//um servidor com lista de usuarios

const express = require('express');
const app = express();
app.get('/usuarios/' , function rota_usarios (requisicao, resposta) {
   const dados= [
        {id:11, name: 'Joao',idade:23},
        {id:2, name: 'Maria',idade:18},
        {id:4, name: 'Ana',idade:30},
        {id:1, name: 'Rodrigo',idade:17},
        {id:123, name:'Rodrigo',idade:17},
        {id:16, name: 'Kuro',idade:26},
        {id:22, name: 'Lawliet',idade:18},
        {id:14, name: 'Math',idade:26},
        {id:54, name: 'Oliver',idade:22},
    ]
    resposta.send(dados);

})
//funçao callback
app.listen(3000, function mensagem (){
    console.log('Servidor rodando na porta 3000');
});