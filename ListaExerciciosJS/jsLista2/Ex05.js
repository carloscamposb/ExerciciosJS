/* Faça um programa para a leitura de duas notas parciais de um aluno. 
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

//Declara as variáveis para nota
const nota1= parseFloat(prompt('informe a primeira nota parcial do aluno: '));
const nota2= parseFloat(prompt('informe a segunda nota parcial do aluno: '));

//Calcula a media das notas escritas pelo usuário
const media= (nota1+nota2)/2 

//Estrutura de decisão para saber a situação do aluno referente a sua média

if (media >=7 && media < 10){
    alert ('Aprovado')

} else if(media <7) {
    alert ('Reprovado')

} else {
    alert ('Aprovado com distinção')
}