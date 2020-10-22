function soboanoticia(nota){
    if(nota>= 7){
        console.log('aprovado com ' +nota)
    }
}

soboanoticia(8.1)
soboanoticia(6.1)

function seForVerdade(valor){
    if(valor){
        console.log('é verdade...' +valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})