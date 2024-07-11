// 1) Faça um Programa que peça dois números e imprima o maior deles.


// Declara as variáveis solicitando os números
const num1 = parseFloat(prompt('Informe um número ')) 
const num2= parseFloat(prompt('Informe outro número '))

//Estrutura de decisão para número 1 maior que 2 , número 1 menor que 2 e número 1 igual ao número 2 

if (num1 > num2 ){ 
    alert ('O numero: ' + num1 + 'É maior que o número: ' + num2);                   

}else if (num2 > num1) { 
    alert ('O numero: ' + num2 + 'É maior que o número: ' + num1);                    

} else if (num1 === num2){ 
    alert ('Os numeros são iguais: ' + num1);                                         

}else {                                                                 //Se for digitado algo que não seja número
    alert ("Erro ao digitar! Reinicie o programa e tente novamente")                    
}    


