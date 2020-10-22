function tratamentoErroLancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    /*throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    */
}

function imprimirNomegritado(obj) {
    try {
        console.log(obj.name.toUpperCase() +'!!!!')
    } catch (e) {
        tratamentoErroLancar(e)
    } finally{
        console.log('final')
    }
}

const obj= {name: 'Roberto'}
imprimirNomegritado(obj)