const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco:{
        logradouro: 'rua abc',
        numero: 1000

    }
}

const {nome, idade } = pessoa
// nesse caso o que for colocado dentro será retirado do objeto 
console.log(nome, idade)

const {nome:n, idade:i } = pessoa
// extraindo e renomeando 
console.log(n,i)

const {endereco: {logradouro, numero, cep }} = pessoa
//extraindo do objeto dentro de outro objeto
console.log(logradouro,numero, cep)


