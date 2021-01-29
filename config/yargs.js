
const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es el numero de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola'

})
.option('h',{
    alias:'hasta',
    type: 'number',
    default: 10,
    describe: 'indica hasta que numero multiplicar'

})
.check((argv,options)=>{
    if (isNaN(argv.b)){
        throw 'La base debe ser un Numero';
    }
    return true;
})
.argv;

module.exports = argv;