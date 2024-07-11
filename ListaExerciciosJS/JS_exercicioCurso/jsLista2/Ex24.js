/*Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar.
 O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
par ou ímpar;
positivo ou negativo;
inteiro ou decimal.
*/

//Declara as variáveis de num
const num1= parseFloat(prompt('Digite um número'));
const num2= parseFloat(prompt('Digite outro número'));

//Declara a variável opcao para escolher o tipo de operação
const opcao= prompt ('Qual operação deseja fazer: 1-Multiplicação, 2-soma , 3-subtração ou 4-divisão ')
//Declara outras variaveis requeridas na questão e inicializa elas
const result=0;
const valor ='';
const condicao='';
const tipo ='';

//Estrutura de Decisão para operações matemáticas
switch (opcao){
 
    case '1':
        result= num1 * num2
    break;

    case '2':
        result = num1 + num2
    break;
    
    case '3':
        result = num1 + num2
     break;

    case '4':
        result = num1 + num2
    break;

    default:
     alert ('Escolha inválida')       
    break;
    
 }  

//Estutura de decisão para saber se é negativo ou positivo/ impar ou par / inteiro ou decimal
if ( result < 0 ){
 valor = 'Negativo'   
} else {
  valor = 'Positivo'  
} 

if (result%2 ===0 ){
   condicao='Par' 
}else{
    condicao='Ímpar'
}

if( result === Math.round(result)){
    tipo='Inteiro'
}else{
    tipo= 'Decimal'
}

//Mostra ao usuário os resultados obtidos
alert ('O resultado da operação foi : ' + result + '\n O valor é : ' + valor + '\n Trata-se um número: ' + condicao + '\n Do tipo: '+ tipo )