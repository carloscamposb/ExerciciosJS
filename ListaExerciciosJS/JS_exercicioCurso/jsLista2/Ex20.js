/*
Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/

//Declara as variáveis de notas
const nota1= parseFloat(prompt('Digite a primeira nota: '))
const nota2= parseFloat(prompt('Digite a segunda nota: '))
const nota3= parseFloat(prompt('Digite a terceira nota: '))


//Calcula a media das notas
media=nota1+nota2+nota3/3;

//Estrutura de Decisão para as médias
if (media >=7 && media < 10){
    alert ('Aprovado')

} else if(media <7) {
    alert ('Reprovado')

} else {
    alert ('Aprovado com distinção')
}

