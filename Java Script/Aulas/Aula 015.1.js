//let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/*

//console.log(valores[0])
//console.log(valores[1])
//console.log(valores[2])
//console.log(valores[3])
//console.log(valores[4])
//console.log(valores[5])

*///console.log(valores[0])

/*for(let pos=0; pos < valores.length;pos++) {

console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

 /* Vetor POS


valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


*/


let num = [5, 8, 2, 4, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posiçôes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {

    console.log('O valor não foi encontrado')

} else {
    console.log(`O valor 8 está na posição ${pos}`)

}
    
  
