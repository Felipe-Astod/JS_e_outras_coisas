function carro(velocidadeMxima = 2020, delta = 5) {
    // atributo privsdo
    let velocidadeAtual = 0

    // metodo publico 
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMxima
        }
    }

    // metodo publico
    this.getvelocidadeAtual =  function() {
    return velocidadeAtual
    }

}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())


