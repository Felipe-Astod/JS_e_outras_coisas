///função sem retorno 
function inprimirSoma(a,b){
    console.log(a+b)
}

inprimirSoma(2,3)
//retorna 5
inprimirSoma(2)
//retorna NaN
inprimirSoma(2,3,4,5,6,4,23)
// mesmo tendo mais casas ira somar só as requisitadas
inprimirSoma()
//retorna NaN

///função com retorno 
function soma(a,b=1){
    return a+b
}

console.log(soma(2,3))
// retorna 5
console.log(soma(2))
// retorna 3(porter o valor de b já estipulado )