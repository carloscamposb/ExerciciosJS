/*João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável 
multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/

// Declara a variável que recebe o peso do peixe
const pesoPeixe = parseFloat(prompt('Olá João! por favor informe o peso total dos seus pescados: ')); 


//estrutura de decisão. Caso menor ou igual a 50 não há multa, caso maior há multa. 
if (pesoPeixe <= 50){           
    alert ('Tudo certo João! Não há multas a pagar');
}else if (pesoPeixe > 50){
    const excedente = pesoPeixe - 50;                                       //calculo do excedente
    const multa = excedente * 4;                                           //calculo da multa   
    alert ('João, infelizmente você excedeu ' + excedente + ' do peso recomendado. \n Por isso terá que pagar uma multa de: ' + multa.toFixed(2) + ' reais'); // Mostra a possível multa que o pescador terá que pagar
} else {
    alert ('Algo deu errado, reinicie o programa e tente novamente')      //Mensagem para possiveis erros de digitação
}




