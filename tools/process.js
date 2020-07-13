require('./subdirectory/sub');

console.log('====================================');
console.log(`Nome do arquivo `,__filename); 
console.log(`Diretório do arquivo `,__dirname);
console.log(`Diretório com process `, process.cwd());
console.log(`Parâmetros de execução `,process.argv);
//console.log(`Parâmetros de execução `,process.env); Variável de ambiente
console.log('Sistema Operacionario ', process.env.OS);
console.log('Usuário ', process.env.USERNAME);
console.log('Nome do server ', process.env.COMPUTERNAME);


switch (process.argv[2]) {
    case '-a':
        console.log('Execute a rotina principal');
        break;
    case '-i':
        console.log('Execute a instalação');
        break;
    case '-q':
        console.log('Encerrando a instalação');    
        process.exit();// encerra o código
    default:
        console.log('Parametro inválido');
        break;
}

console.log(`Ambiente do servidor `,process.platform);