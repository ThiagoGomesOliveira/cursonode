const EventEmitter = require('events');

class Evento extends EventEmitter{};

const meuEvento = new Evento();

meuEvento.on('seguranca',(x,y) =>{

    console.log(`Evento segurança: ${x} ${y}`);

})

meuEvento.emit('seguranca','Thiago Gomes Oliveira', 'Teste criação de evento')