/* Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, 
e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
  Média de Aproveitamento  Conceito
  Entre 9.0 e 10.0          A
  Entre 7.5 e 9.0           B
  Entre 6.0 e 7.5           C
  Entre 4.0 e 6.0           D
  Entre 4.0 e zero          E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” 
se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

*/



//Declara as variáveis notas
const nota1 = parseFloat(prompt ('Informe a nota 1: '));
const nota2= parseFloat(prompt ('Iforme a nota 2: '));

//Tira a média das notas
const media = nota1+nota2 / 2;

//Declara as variáveis e inicializa elas
let conceito='';
let resultado='';


//Estrutura de decisão para saber o conceito e o resultado do aluno baseado em sua média

if (media > 9 && media <=10){
    conceito = 'A';
    resultado = 'Aprovado';
} else if ( media > 7.5 && media <=9){
    conceito= 'B';
    resultado = 'Aprovado';
} else if (media > 6 && media <=7.5){
    conceito='C';
    resultado = 'Aprovado';
} else if (media > 4 && media <= 6){
    conceito='D';
    resultado = 'Reprovado';
} else {
    conceito ='E';
    resultado='Reprovado';
}     

//Mensagem geral mostrada ao usuário com as notas , a média , o conceito e a situação do aluno correspondente
alert('As notas são respectivamente: ' +  nota1 + ' e ' + nota2 + 
     '\n A média foi: ' + media.toFixed(2) + 
     '\n O conceito correspondente é: ' + conceito + 
     '\n A situação do aluno é: ' + resultado );

