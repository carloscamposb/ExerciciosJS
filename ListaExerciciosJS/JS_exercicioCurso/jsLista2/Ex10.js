/*Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
 Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!",
 conforme o caso.*/

 //Declara a variável turno. Padroniza em maiúsculo
 const turno = prompt ('Digite o turno que você estuda M-matutino, V-Vespertino ou N-Noturno').toUpperCase();
 

//Estrutura de Decisão para turno selecionado 
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
    default:                                //Digitar outra letra diferente de M , V ou N
        alert('Valor inválido!')               
 }