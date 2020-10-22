const notas = [7,6,5,8,3,7,9]

// sem callback
const notasBaixas = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2)

// com a função arrow
const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3)
