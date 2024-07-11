//6) Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

// Solicita o lado do quadrado  
const lado = parseFloat(prompt('Informe um lado do quadrado: ')); 

//multiplica o valor do lado do quadrado para resultar na área
const area = lado*lado; 

// Multiplica a área por dois , resultando no dobro da área
const dobro = 2*area; 

// Mostra mensagem ao usuário com o resultado da área do quadrado e o dobro da área.
alert("A área do quadrado é: "+ area + " e o dobro dessa área foi: " + dobro) 
