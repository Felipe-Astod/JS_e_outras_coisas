const nome = 'rebeca'
const concantenacao = 'Olá ' + nome + '!'
const template = `
ola
${nome}!`

console.log(concantenacao, template)
// utilizar o template reconhece a quebre de linha e utiliza menos concatenaçoes 
// pode utilzar expressoês

console.log(`1+1 = ${1+1}`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
