const funcs = []

for (let i=0; i<10; i++) {
    funcs.push(function(){
    console.log(i)
    })
}

funcs[2]()
funcs[8]()
// nessa caso ao usar o let ele retornara o valor que ele foi alocado 