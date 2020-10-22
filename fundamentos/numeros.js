const peso1 =1.0
const peso2 = Number('2.0')
// const pode utilizar tantos valores inteiros quanto quebrados

console.log(peso2, peso1)
// para verificar se é um valor inteiro
console.log(Number.isInteger(peso1))

const aval =9.12324
const aval2 =6.4324

const total =aval * peso1 + aval2 * peso2
const media = total / (peso1 +peso2)
// tofixed comando utilizado para determinar o numero de casas a ser mostrado
console.log(media.toFixed(1))
// tostring retorna o valor em binario
console.log(media.toString(1))
// o Number com o 'N' é uma função, enquanto com o 'n' é o tipo de dado


