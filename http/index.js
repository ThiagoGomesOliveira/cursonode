const http = require('http');

const host = '127.0.0.1';
const port = 3000;
const url = `http://${host}:${port}`

const server = http.Server((req,res) =>{
  
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/Html');
    res.end('<h1> Bem vindo </h1>');

});

server.listen(port , host, ()=>{
      console.log(`Servidor rodando em ${url}`);
})

const open = process.platform == 'win32'? 'start': '';

require('child_process').exec(open + ' ' + url);
