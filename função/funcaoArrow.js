let dobro = function(a) {
    return 2 * a
}

//segunda forma
dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implicito 
console.log(dobro(Math.PI))

let ola = function ( ) {
    return 'ola'
} 

ola = () =>'ola'
ola = _ => 'ola' // possui um unico parametro
console.log(ola())
