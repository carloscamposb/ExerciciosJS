//2) Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.


// Declara a variável solicitando um valor
const valor = parseFloat(prompt('Informe um valor')); 

//Estrutura de Decisão para números positivos e negativos
if (valor >=0){ 
    alert ('Valor selecionado: ' + valor + ' , é positivo');

} else { 
    alert ('Valor selecionado: ' + valor + ' , é negativo')
}