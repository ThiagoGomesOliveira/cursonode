function soma(x) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 2000);
        }, 3000)

    });
}


soma(99)
    .then((resultado) => {
      console.log(`Resultado: ${resultado}`);
    });