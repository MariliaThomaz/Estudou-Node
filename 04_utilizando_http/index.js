//função e  faz requerimeto quer pegar coisa

const {createServer} = require('http');
//cria  um metodo 
let server = createServer((request, response) => {

    //recendo um  formato de arquivo
    // 200 para mostra que  pagina esta  certa
    // tipo de dado que  ira receber  é : text/html (para poder ler a respta)
    response.writeHead(200, { "Content-Type": "text/html" });
    // esta  é  respta que  vai ler
    response.write(`  <h1>Hello World! </h1>
    <p>Primera página com Node.js</p> `
    );
    //finalisar  o modolo http
    response.end();
});

// qual q é  porta que o servidor  ouvindo
server.listen(8000);

console.log("Ouvindo a  porta 8000");// chera aqui quer dizer que não esta dando certo