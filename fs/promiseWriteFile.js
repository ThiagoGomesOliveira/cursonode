const {writeFile} = require('fs');


function criarArquivo(name,content) {
    
    return new Promise((resolve,reject) => {

        writeFile(name,content,err =>{

            if(err) reject(err);
            resolve();
        })

    });
}

criarArquivo('arquivoPromise.txt','Criando arquivo utilizando promise')
.then(()=> console.log('Arquivo criado com sucesso!'))
.catch((err) => console.log('Erro ',err));