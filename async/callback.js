function soma(x, callback) {
   return setTimeout(() => {
        return callback(null, x + 2000);
    }, 3000)
}
// callback function
function resolveSoma(err, resultado) {
    if(err) throw err;
    console.log('Executando a soma: ' + resultado);
}

soma(200,resolveSoma);