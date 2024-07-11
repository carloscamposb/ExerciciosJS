/*Faça um Programa que leia um número e exiba o dia correspondente da semana. 
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
*/


//Declara a variável dia
const dia= prompt ('Escolha o dia da semana 1- Domingo, 2-Segunda, 3-Terça, 4-Quarta , 5-Quinta , 6-Sexta e 7-Sábado');


//Estrutura de decisão para o dia selecionado

switch (dia){
    case  '1':
        alert ('Domingo');
    break;
    
    case  '2':
        alert ('Segunda');
    break ;   
    
    case  '3':
        alert ('Terça');
    break;
    
    case  '4':
        alert ('Quarta');    
    break;
        
    case  '5':
        alert ('Quinta');
    break;    
    
    case  '6':
        alert ('Sexta');
    break;    
    
    case  '7':
        alert ('Sábado');
    break;

    default:                          //Se não corresponder a nenhum valor acima
        alert ('Valor inválido')
    
}