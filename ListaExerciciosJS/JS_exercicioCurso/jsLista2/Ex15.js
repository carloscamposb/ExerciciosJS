/* Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. 
Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;

*/


//Declara as variaveis dos lados do triângulo
const ladoA=parseFloat(prompt('Informe um lado do triângulo: '));
const ladoB=parseFloat(prompt('Informe outro lado do triângulo: '));
const ladoC=parseFloat(prompt('Informe o último lado do triângulo: '));


//Três lados formam um triângulo apenas quando a soma de quaisquer dois lados for maior que o terceiro;
if ( ladoA + ladoB < ladoC || ladoC + ladoA < ladoB || ladoB + ladoC < ladoA ){
alert ('Não é triângulo')
return                                                                        //finaliza
}

//Estrutura de decisão para quando é triângulo determinando o tipo de triângulo
if (ladoA === ladoB && ladoA=== ladoC){
    alert ('Triângulo equilatero')

}else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA ){
    alert('Triângulo isósceles')

} else if (ladoA != ladoB && ladoB != ladoC && ladoA !=ladoC){
    alert ('Triângulo escaleno')

} else{                                                             //Quando há erro na digitação
    alert ('Houve um erro tente novamente')
}


