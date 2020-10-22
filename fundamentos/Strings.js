const escola ="cod3r"

// o charAt retorna a letra que está na colocação selecionda fazendo a leitura de 0 a...
console.log(escola.charAt(5))
// retorna o valor de acordo com a tabela ask/unicode
console.log(escola.charCodeAt(3))
// retona qual posição está o caractere selecionado 
console.log(escola.indexOf('o'))
//substring retorna a informação depois do ponto selecionado
console.log(escola.substring(1))
// como tanbem pode decidir o ponto de inicio e fim mas não apresenta o caractere final
console.log(escola.substring(0,3))
// usando o concat ele apresenta a mensagem e pode apresentar possiveis variaveis
console.log('escola '.concat(escola).concat("!"))
//com o replace ele seleciona a posição e altera pelo que foi requisitado 
console.log(escola.replace(3, 'e'))
// o Split determina uma posição e quebra a mensagem após aquele ponto
console.log('Ana,Maria,Pedro'.split(','))



