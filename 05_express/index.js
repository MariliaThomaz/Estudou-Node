// chamando express
let express = require('express');//chamando Framework
//chamnado o metodo estaciando o meto
let app = express(); // ciando app com todos  os metodos que  express tem

//criar  rota exemoplo para  teste 
app.get('/', function(req , res) {//receber infomação
// nossa roeta : '/' 
// funtion é  função com  paramtros  reg:  requisção,  e res: de resposta

// eviar uma respra usando metodo send
res.send('Prima rota do Express');

});

app.get('/teste', function(req, res){
    res.send("olha  mundo");
});
// temos diz que servidor esta escutando  uma  porta
// tem  abri uma  porta  pas  pessoa acessar  
app.listen(3000, function(){
 //pasa função anonima  só para ver  esta rodando certo
 console.log("A aplicação esta funcionando? na  porta 3000");
});