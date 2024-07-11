/* 7) Faça um Programa que pergunte quanto você ganha por hora e o 
 número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */

//Declara as variáveis valorHora e numHora
 const valorHora = parseFloat(prompt("Quanto você ganha por hora? "));  
 const numHoras= parseFloat(prompt('Informe agora o número de horas trabalhadas no mês')); 

 // Multiplica o valor da hora e o número de horas trabalhadas e armazena na variável mes
 const mes = valorHora * numHoras; 

 //Mostra o valor mensal ganho. toFixed(2) formata o resultado com duas casas decimais. 
 alert ("Você ganhou nesse mês: R$ " + mes.toFixed(2)) 

