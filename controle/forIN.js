const notas= [6,4,2,24,3,2,7]
for(i in notas){
    console.log(i, notas[i])
}

const pessoa={
    nome: 'ana',
    sobrenome:'silva',
    idade: 29,
    peso: 65
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}