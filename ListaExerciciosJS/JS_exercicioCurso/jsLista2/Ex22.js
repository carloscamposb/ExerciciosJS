/*
Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).


*/

//Declara a variável num
const num= parseInt(prompt('Informe um número inteiro: '));

//Estrutura de decisão para saber se é par ou ímpar 

if (num%2===0){                                     //Multiplos de 2 resto 0 = par
    alert ('Número escolhido é par')
} else if(num%2===1){
   alert ('Número escolhido é ímpar') 

}else{                                              
    alert ('Houve um erro. Tente novamente inserindo um número inteiro')
}