const fs = require('fs');


const assets = ['css', 'js', 'images', 'fonts', 'lib']

// funcao para criação dos diretórios
function make(dir) {


    dir.forEach(item => {

        fs.mkdir(`projeto/assets/${item}`,{recursive:true} , (err) =>{

            if(err) throw err;
            
            console.log('Diretório criado')
        })

    });
}

make(assets);
