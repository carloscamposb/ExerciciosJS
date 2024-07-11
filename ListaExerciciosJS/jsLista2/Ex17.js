//Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.



//Declara a variável ano
const ano = parseInt(prompt("Informe um ano: "))



//Estrutura de decisão para anos bissextos. Devem ser divisiveis por 4 ou o ano não pode ser divisivel por 100 apenas divisivel por 400 quando são anos centenários. 
if ((ano % 4 == 0) || (ano % 100 != 0 && ano % 400 == 0)) {
    alert('É um ano bissexto');
} else {
    alert('Não é um ano bissexto');
}