//Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.


//Declara as variáveis de produto (considerando ser o mesmo produto)
const prod1 = parseFloat(prompt('Informe o preço do primeiro produto: '));
const prod2 = parseFloat(prompt('Informe o preço do segundo produto: '));
const prod3 = parseFloat(prompt('Informe o preço do terceiro produto: '));


//Estrutura de Decisão para saber o produto com menor preço 
if (prod1 <= prod2 && prod1 <= prod3){
    menorPreco = prod1;

} else if (prod2 <= prod1 && prod2 <= prod3){
        menorPreco = prod2;

} else if (prod3 <= prod1 && prod3 <= prod2){
        menorPreco = prod3;
} else{
alert ('Houve algum erro, repetir');
return
}   

alert('Você deve comprar o produto que custa: ' + menorPreco.toFixed(2)); 