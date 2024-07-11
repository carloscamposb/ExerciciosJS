/*15) Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
 que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
*/

// Declara a variavel que receberá os metros
const metros= parseFloat(prompt('Qual o tamanho em metros quadrados a ser pintado? ')) 

// Declara as variáveis com valores pré-estabelecidos na questão 
const cobertura= 3; 
const lata = 18;
const valor=80; 


// Calcula os litros necessários dividindo metros pela cobertura
const litrosNecessarios = metros/cobertura;  

// Calcula as latas necessárias dividindo os litros necessários pela lata. Math.ceil - arredonda para cima
const latasNecessarias = Math.ceil(litrosNecessarios/lata); 

//Calcula o valor necessário multiplicando as latas necessárias pelo valor estabelecido na questão.
const valorNecessario = latasNecessarias * valor; 

// Informa ao usuário a quantiadade de latas necessárias e o valor a ser pago
alert ('Segue a quantidade de latas de tintas necessárias para a pintura: ' + latasNecessarias); 
alert ('Segue o valor necessário a ser investido: R$ '+ valorNecessario)

