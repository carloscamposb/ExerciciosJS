/* 11) Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, 
usando a seguinte fórmula: (72.7*altura) - 58 */

//Declara a variável alt 
const alt = parseFloat(prompt("Digite a sua altura ")); 

//calcula o peso e armazena na variável peso
const peso = (72.7 * alt)-58; 

// Mostra o peso ideal para o usuário
alert ("O peso ideal para você é: " + peso.toFixed(2) + " kg") 