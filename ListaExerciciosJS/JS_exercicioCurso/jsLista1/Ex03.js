// 3) Faça um Programa que peça as 4 notas bimestrais e mostre a média.

//Declara as variáveis de notas
const nota1 =parseFloat(prompt('Escreva a primeira nota')); 
const nota2 =parseFloat(prompt('Escreva a segunda nota'));
const nota3 =parseFloat(prompt('Escreva a terceira nota'));
const nota4 =parseFloat(prompt('Escreva a quarta nota'));

//Declara a variável media que armazenará a soma das notas dividido pela quantidade de notas para gerar a média
const media = (nota1 + nota2+ nota3+ nota4)/4; 

// Mostra mensagem ao usuário com o resultado da média dos quatro números escritos.
alert('A média das quatro notas informadas foi : ' + media ) 