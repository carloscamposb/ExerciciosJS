/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
 Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!",
 conforme o caso.*/

 const turno = prompt ('Digite o turno que você estuda M-matutino, V-Vespertino ou N-Noturno').toUpperCase();
 

 switch (turno){
    case 'M':
    alert('Bom dia!');
    break;
    case 'V':
    alert('Boa tarde!');
    break;
    case 'N':
        alert('Boa noite!');
    break;
    default:
        alert('Valor inválido!')               
 }/*As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram 
para desenvolver o programa que calculará os reajustes.Faça um programa que recebe o salário de um colaborador e o reajuste 
segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.
*/

//Declara a variável do salário do funcionário
const valorSalario= parseFloat(prompt('Digite o valor do salario do seu funcionário: '));

//Declara as outras variáveis solicitadas pela questão e inicializa elas
let novoSalario=0;
let percentual=0;
let valorAumento=0;


// Estrutura de decisão para a adição do percentual
if (valorSalario <=280){
    percentual= 20;  

}else if(valorSalario > 280  && valorSalario <=700){
    percentual= 15;

} else if (valorSalario > 700  && valorSalario < 1500){
    percentual= 10;

} else {
    percentual= 5;    
} 

//Calcula o valor do aumento tirando o valor do percentual escolhido da forma de porcentagem e multiplicando ele pelo valor de salário passado pelo usuário
    valorAumento = (percentual/100) * valorSalario;

//Calcula o novo salário do funcionário somando o valor do salario com o valor do aumento    
    novoSalario = valorSalario + valorAumento;

// Informa ao usuário os valores do salario antes do reajuste, o percentual aplicado, o valor do aumento e o salario novo.
alert ('O valor do salário antes dos reajustes era de: R$ '+ valorSalario.toFixed(2));
alert ('O percentual aplicado foi de: ' + percentual + ' %');
alert ('O valor de aumento foi de: R$ ' + valorAumento.toFixed(2));
alert ('O novo salário é : R$ ' + novoSalario.toFixed(2))


