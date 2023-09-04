//primeiro servidor usando express
//faz a requisiçao, a importaçao do pacote express js
const express = require('express');
//cria uma variavel com a importaçao do express
const app = express();
//criando rotas 
app.get('/home', (requisicao, resposta) =>{
    resposta.send('Wake Up Neo');


});
app.get('/', (requisicao, resposta) =>{
    resposta.send('Essa é minha rota principal');
 

});
//construindo uma api de dados bancarios
app.get('/api', (requisicao,resposta)=>{
   
    const dados ={
        nome: 'Jenifer Gonçalves da Silva',
        idade: 26,
        saldo: 1300.00,
        conta: 2097,
        numeros_saques:3,
        numeros_depositos:2,
        numeros_transacoes:4,
        numeros_transacoes_confirmadas:1,
        numeros_transacoes_canceladas:1,
        numeros_transacoes_rejeitadas:1
    }
    //retorna um arquivo json
    resposta.send(dados);
    

})
//a rota vai ate a porta logica 3000
app.listen(3000)