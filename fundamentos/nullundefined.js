let valor // não inicializado
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produt= {}
console.log(produt.vendas)
// sempre será undefined quando o penultimo existir, não seja respeitado dara erro 

console.log(produt)
//objeto sem valor e vazio

produt.vendas=3.54
console.log(produt)
//obejto com valor e função     

produt.vendas=undefined //  não recomendavel
console.log(!!produt.vendas)
// utilizando boolean retornara falso por não ter um valor 
console.log(produt)
//resultara num valor undefined



