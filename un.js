const fs = require('fs');

fs.readFile('file.txt',(err,data) =>{

    if(err) throw err;

    console.log(data);

    fs.unlink('file.txt',(errLink) =>{

        if(errLink)throw errLink;

        console.log('Arquivo excluido com sucesso!');

    });
});

