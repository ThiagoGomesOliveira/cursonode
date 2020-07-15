const {writeFile} = require('fs');



writeFile('arquivo.txt','Criado arquivo com writeFile', (err) =>{
    if(err) throw err;
    console.log('Arquivo criando com sucesso!');
});
