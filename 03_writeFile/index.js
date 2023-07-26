// função de  texto
//coloque  mais agumeto writeFile(estea argumemto serve padoe escrever uma palavra)
const { error } = require('console');
let {readFile,writeFile} = require('fs');
const { test } = require('node:test');
         // isto  paramtro nome do aquivo arquivo.txt"
readFile("arquivo.txt", "utf8", (error, texto)=>{ // *************** ESTA  LENDO ARQUIVO
    // codificação utf8
    // um orfatin  error, texto que  pode  apresetar um erro 
    //texto é texto do arquivo
    // uma  fusão com doi agumetos --> readFile("arquivo.txt", "utf8"
    // tem  mais  uma função  (error, texto)=>
if(error){
    throw error;
}else{
    console.log(texto);
}
});
writeFile("arquivo.txt", "sabe que  começando coisa  muito nova  né",(error)=>{
    if(error){
        throw error;
    }else{
        console.log("Escreveu com sucesso");
    }
});