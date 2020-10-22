const valores = [7,5,8,2,]
console.log(valores[0], valores[3])
console.log(valores[4])
// utilizando o array para selecionar o valor especifico da parte   
valores[6] = 10
// pode se adicionar futuramente valores em novas posiçoes do arrays mesmo pulando casas
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// recomendavel que seja colocado um tipo de dado no array

console.log(valores.pop())
//utilizado para retirar o ultimo dado do array

delete valores[0]
console.log(valores)

console.log(typeof valores)
// array é considerado do tipo array