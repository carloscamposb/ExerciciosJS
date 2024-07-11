/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". 
*/

//Informa ao usuário como deve proceder
alert ("Responda 'Sim' ou 'Não' para as seguintes perguntas: ");

//Inicializa as variáveis de classificiação (suspeito, cúmplice, assassino  e inocente ) e de contagem que atribui +1 a cada SIM
let classificacao = '';
let contagem = 0;


//Estrutura para perguntas e contagem de SIM
if (prompt("Telefonou para a vítima? ").toLowerCase() === 'SIM') { //compara se a resposta é igual a SIM. toLowerCase para padronizar e minimizar erros  
  contagem++;
} 
  
if (prompt("Esteve no local do crime?").toLowerCase() === 'SIM') {
  contagem++;
}

if (prompt("Mora perto da vítima?").toLowerCase() === 'SIM') {
  contagem++;
}

if (prompt("Devia para a vítima?").toLowerCase() === 'SIM') {
  contagem++;
}

if (prompt("Já trabalhou com a vítima?").toLowerCase() === 'SIM') {
  contagem++;
}


//Estutura de decisão que classifica o usuário de acordo com os 'SIM' ditos
if (contagem === 2) {
  classificacao = 'Suspeita';
} else if (contagem >= 3 && contagem <= 4) {
  classificacao = 'Cúmplice';
} else if (contagem === 5) {
  classificacao = 'Assassino';
} else {
  classificacao = 'Inocente';
}

//Classificação final mostrada ao usuário
alert('Classificação: ' + classificacao);



