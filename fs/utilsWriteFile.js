const  {promisify} = require('util');


const writeFile = promisify(require('fs').writeFile);
const conteudo = `Criando arquivo utilizando promisify`;

writeFile('utilArquivo',conteudo)
.then(()=>{ console.log('Arquivo gerado com sucesso!');})

.catch((err)=>{console.log(`Erro: ${err}`);})
