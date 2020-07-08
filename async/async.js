function sum(x) {

    return new Promise((resolve, reject) => {

        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){

            reject('Necessário que o valor seja númerico!');
        }

        setTimeout(() => {
            resolve(x + 2000);
        }, 3000)

    });
}


async function main() {

    try {
      const result = await sum('#');  
      console.log(`Resultado: ${result}`);

    } catch (error) {
        console.log(`Erro: ${error}`);
        console.log(`Usuário: ${process.env.USERNAME}`)
    }
    
}

main();
   