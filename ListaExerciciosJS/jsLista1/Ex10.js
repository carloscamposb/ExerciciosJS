/* Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.*/

// Declara variáveis do tipo inteira
const numInt1 = parseInt(prompt('Informe um número inteiro: ')); 
const numInt2 = parseInt(prompt('Informe outro número inteiro: ')); 
// Declara uma variável do tipo float
const numFlo = parseFloat(prompt('Informe um número real: '));

// Váriavel prod armazena o produto do numInt1 com metade do numInt2
const prod = (numInt1*2) * (numInt2/2); 

// Váriavel soma armazena a soma de numInt1 com numFlo
const soma = (numInt1*3)+ numFlo; 

// Váriavel elevado armazena o numFlo elevado ao cubo. 
const elevado= match.pow(numFlo,3);


// Mostra ao usuário os resultados obtidos
alert ('O produto do dobro do primeiro numero com a metade do segundo numero foi: ' + prod +
       '\n A soma do triplo do primeiro número com o terceiro número foi: ' +soma +
       '\n O terceiro número elevado ao cubo resultou no valor de: ' + elevado); 
       
       