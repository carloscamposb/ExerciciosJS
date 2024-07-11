/* Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).*/

//Declara a variável temF  
const tempF = parseFloat(prompt('Passe a temperatura em Fahrenheit: ')); 

// Declara a variável tempC que armazenará o resultado da conversão de Fahrenheit para Celsius
const tempC= 5*((tempF-32)/9);  

// Informa a temperatura convertida para Celsius.
alert('A temperatura informada convertida para graus celcius foi de: ' + tempC.toFixed(2) + "º") 

