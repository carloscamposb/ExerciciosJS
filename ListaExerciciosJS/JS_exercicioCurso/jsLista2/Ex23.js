//Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.




//Declara a variável num
const num = parseFloat(prompt('Escreva um numero: '))

//Estutura de decisão para saber se é inteiro ou decimal
if (num===Math.round(num)){                 //Compara o número escolhido com o mesmo número arredondado se for exatamente igual é inteiro. 
  alert (' É um número inteiro')


}else{
    alert ('É um número decimal')
}
