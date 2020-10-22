let comparaThis = function(param) {
    console.log(this===param)
}
comparaThis(global)

const obj={}
comparaThis = comparaThis.bind(obj)
comparaThis(global)
comparaThis(obj)

let comparaArrow = param => console.log(this === param)
comparaArrow(global) // nn aponta pro global
comparaArrow(module.exports)


comparaArrow = comparaArrow.bind(obj)
comparaArrow(obj)
comparaArrow(module.exports)
