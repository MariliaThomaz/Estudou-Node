// função de  texto
let {readFile} = require('fs');

         // isto  paramtro nome do aquivo arquivo.txt"
readFile("arquivo.txt", "utf8", (error, texto)=>{ // *************** ESTA lendo
    // codificação utf8
    // um orfatin  error, texto que  pode  apresetar um erro 
    //texto é texto do arquivo
    // uma  fusão com doi agumetos --> readFile("arquivo.txt", "utf8"
    // tem  mais  uma função  (error, texto)=>
if(error){
    throw error;
}else{
    console.log(texto)
}
});