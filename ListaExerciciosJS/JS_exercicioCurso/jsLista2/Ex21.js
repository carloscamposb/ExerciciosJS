/*Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e 
depois informar quantas notas de cada valor serão fornecidas. 
As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. 
O valor mínimo é de 10 reais e o máximo de 600 reais. 
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5
 e quatro notas de 1.

*/


const saque = parseFloat(prompt('Qual o valor a ser sacado: '));

let numerosRestantes = 0;

if (saque >= 10 && saque <= 600) {

    // Quantidade de notas de R$ 100
    const cem = Math.floor(saque / 100);                                              // Ex.: 256   256/100 = 2.56 = 2 

    // Calculamos o valor restante após retirar as notas de R$ 100      
    numerosRestantes = saque - (cem * 100);                                    // 256 - (2*100) = 56

    // Quantidade de notas de R$ 50 no valor restante
    const cinquenta = Math.floor(numerosRestantes / 50);                       // 56 /50 = 1.12 = 1

    // Atualizamos o valor restante após retirar as notas de R$ 50
    numerosRestantes = numerosRestantes-  (cinquenta * 50);                    // 56 - (1*50 ) = 6

    // Passamos para as cédulas de R$ 10 no valor restante
    const dez = Math.floor(numerosRestantes / 10);                             // 6/10 = 0.6 = 0 

    // Atualizamos o valor restante após retirar as notas de R$ 10
    numerosRestantes = numerosRestantes - (dez * 10);                          // 6 - (0*10 ) = 6        //continua 6 passa para os 5 reais

    // Passamos para as cédulas de R$ 5 no valor restante
    const cinco = Math.floor(numerosRestantes / 5);                           // 6/5 = 1.2 = 1

    // O que sobrar será de cédulas de R$ 1
    const um = numerosRestantes - (cinco * 5);                                // 6 - (1*5) = 1
         
} else {
    alert('Valor incorreto (intervalo deve ser entre 10 e 600)');
}

//Mostra ao usuário a quantidade de notas necessárias para números escolhidos no intervalo de 10 à 600
alert('Quantidade de notas:\n R$ 100: ' + cem + 
'\n R$ 50: ' + cinquenta + 
' \nR$ 10: ' + dez + 
'\n R$ 5: ' + cinco + 
'\n R$ 1: ' + um );




