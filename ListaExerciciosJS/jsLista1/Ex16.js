/*Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
comprar apenas latas de 18 litros;
comprar apenas galões de 3,6 litros;
misturar latas e galões, de forma que o desperdício de tinta seja menor.
Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

*/


// Declara a variavel que receberá os metros
const metros = parseFloat(prompt('Informe o tamanho a ser pintado em metros quadrados')); 

// Declara as variáveis com valores pré-estabelecidos na questão 
const cobertura = 6; 
const lata = 18; 
const valorLata = 80; 
const galao = 3.6; 
const valorGalao = 25; 

// Calcula os litros necessários dividindo metros pela cobertura com a folga de (10% = 10/100)  solicitada na questão
const litrosNecessarios = (metros / cobertura)* 0.1;  

// Calcula as latas necessárias e valor necessários para essas latas
const latasNecessarias = Math.ceil(litrosNecessarios / lata); 
const valorLataNecessaria = latasNecessarias * valorLata; 

// Calcula os galões necessários e o valor necessário para esses galões 
const galoesNecessarios = Math.ceil(litrosNecessarios / galao);
const valorGalaoNecessario = galoesNecessarios * valorGalao; 

//Calcula melhor combo e o valor do combo na mistura de latas e galões
const latasMelhorComb = Math.floor(litrosNecessarios / lata);               //Arredonda para baixo evitando desperdicios 
const galoesRestantes = (litrosNecessarios % lata) / galao; 
const combo = Math.ceil(galoesRestantes); 
const precoTotalMelhorComb = (latasMelhorComb * valorLata) + (combo * valorGalao); 

// Informa ao usuários as latas e o valor caso decida comprar apenas latas
alert('Comprar apenas latas de 18 litros:\nQuantidade de latas: ' + latasNecessarias +
'\nPreço total: R$ ' + valorLataNecessaria.toFixed(2)); 

// Informa ao usuário os galões e o valor caso decida comprar apenas galões
alert('\nComprar apenas galões de 3.6 litros:\nQuantidade de galões: ' + galoesNecessarios +
'\nPreço total: R$ ' + valorGalaoNecessario.toFixed(2)); 

// Informa ao usuários a combinação ideal de latas e galões, bem como o valor do combo
alert('\nMelhor combinação entre latas e galões:\nQuantidade de latas: ' + latasMelhorComb +
'\nQuantidade de galões: ' + combo + '\nPreço total: R$ ' + precoTotalMelhorComb.toFixed(2)); 