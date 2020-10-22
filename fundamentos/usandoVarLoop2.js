const funcs = []

for (var i=0; i<10; i++) {
    funcs.push(function(){
    console.log(i)
    })
}

funcs[2]()
funcs[8]()
// nessa situação ocorre o erro de dar os dois valores 10