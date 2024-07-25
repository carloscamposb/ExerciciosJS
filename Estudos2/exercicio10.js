// // Crie um programa que dado um numero cria tabuada


// const numero= 32

// for (let i = 1; i <=10; i++) {
//     console.log (`${numero} x ${i} = ${numero * i}`);
// }


// // Crie um programa que percorre uma lista de elementos e imprima apenas os numeros pares


//  const listaDeNumeros= [5,8,0,10,11,9,'*',6,0,6,4,300,22,1,1,7,0, 20,'hello','amigo']
//  let pares=0

//      for (let i = 0; i < listaDeNumeros.length; i++) {
//          if(listaDeNumeros[i]%2 === 0 && listaDeNumeros[i] !== 0){
//          console.log(`- ${listaDeNumeros[i]}`)
//             pares++
//      }

//  }

// Método alternativo para numeros pares
const listaDeNumeros = [];
let pares = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { 
        listaDeNumeros.unshift(i); // adiciona elementos no começo . push no final
        pares++;  
    }
}

console.log(`Lista de números pares: ${listaDeNumeros}`);
console.log(`Total de números pares: ${pares}`);
