/* Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário 
bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado 
(é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor
 da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, 
dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
        Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00  
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                 : R$  935,00

*/

//Declara as variáveis salarioHora e qtSalarioHora
const salarioHora = parseFloat(prompt('Informe o valor da sua hora: '));
const qtSalarioHora = parseFloat(prompt('Informe a quantidade de horas trabalhadas no mês:  '));

//Declara as outras variáveis requeridas na questão e inicializa elas
let ir=0;
let inss=0;
let fgts=0;
let descontos=0;
let salarioLiquido=0;
let irPorcento=0;

//Calcula o salario bruto multiplicando os valores postos pelo usuario referente ao valor da hora e as horas trabalhadas no mês 
const salarioBruto = salarioHora * qtSalarioHora;


//EStrutura de Decisão para o calculo com IR

if (salarioBruto <= 900){
irPorcento = 0;

} else if (salarioBruto <= 1500) {
    irPorcento =5; 
    ir = (irPorcento/100)*salarioBruto;

} else if (salarioBruto <= 2500) {
    irPorcento= 10;
    ir = (irPorcento/100)*salarioBruto;
} else {
    irPorcento=20;
    ir = (irPorcento/100)*salarioBruto;
}

//Calculos de inss e fgts
inss = (10/100)* salarioBruto;
fgts = (11/100)* salarioBruto;


//Desconto apenas com IRR e INSS pq o fgts é descontado pela empresa
descontos = ir + inss;

//Salario liquido obtido pela subtração do salario bruto e dos descontos
salarioLiquido = salarioBruto - descontos;


// Mostra ao usuário seu salário, os descontos e o salário líquido
alert ('Salário Bruto: (' + salarioHora + ' * ' + qtSalarioHora +  ' ) :  R$ ' + salarioBruto);
alert ('(-) IR ( ' + irPorcento + ' % ): R$ ' + ir);
alert('(-) INSS (10%): R$ ' + inss);
alert('FGTS (11%): R$ ' + fgts);
alert('Total de descontos: R$ ' + descontos);
alert('Salário Líquido: R$ ' + salarioLiquido)