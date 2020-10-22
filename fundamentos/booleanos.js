let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
// boolean de base para opareçoes de verdadeiro ou falso

isAtivo = 1
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo =false))

console.log('pra finalizar ')
console.log(!!('' || null|| 0 ||' ') ) // nesse caso ira apenas mostrar o unico valor verdadeiro




console.log(nome || 'desconhecido') // como a variavel nome não foi preenchida apresentará a unica verdadeira 
    

















