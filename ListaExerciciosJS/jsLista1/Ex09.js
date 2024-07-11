// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

 //Declara a variável temC para receber o valor da temperatura em Celsius.
const tempC = parseFloat(prompt('Passe a temperatura em Celsius: ')) 

//Declara a variável tempF que recebe o resultado da conversão de Celsius para Fahrenheit
const tempF= (tempC * 9/5) + 32; 

// Informa a temperatura convertida para Fahrenheit.
alert('A temperatura informada convertida para Fahrenheit foi de: ' + tempF.toFixed(2) + "º") 



