//Faça um Programa que leia três números e mostre o maior e o menor deles.



//Declara as varáveis de números
const num1 = parseFloat(prompt('Informe o primeiro número: '));
const num2 = parseFloat(prompt('Informe o segundo número: '));
const num3 = parseFloat(prompt('Informe o terceiro número: '));

// Estrutura de Decisão para avaliar qual o número maior entre eles 
if (num1 == num2 && num1 > num3){                                                         // Bloco de dois números iguais
    alert ('O maior numero é: ' + num1 + ' que se repete duas vezes \n O menor numero é: ' + num3);  
} else if (num1==num3 && num1 > num2){
    alert ('O maior numero é: ' + num1 + ' que se repete duas vezes \n O menor numero é: ' + num2);   
} else if (num2==num3 && num2 > num1){
    alert ('O maior numero é: ' + num2 + ' que se repete duas vezes \n O menor numero é: ' + num1); 

} else{
    if (num1 > num2 && num2 > num3){                                                    // Bloco de números diferentes
      alert ('O maior numero é: ' + num1 + '\n O menor numero é: ' + num3);
    }else if(num1 > num3 && num3 > num2) {
      alert('O maior numero é: ' + num1 + '\n O menor numero é: ' + num2);

    } else if (num2> num1 && num1 > num3){
        alert('O maior numero é: ' + num2 + '\n O menor numero é: ' + num3);
    
    } else if (num2> num3 && num3 > num1){
        alert('O maior numero é: ' + num2 + '\n O menor numero é: ' + num1);

    }else if (num3> num1 && num1 > num2){
        alert('O maior numero é: ' + num3 + '\n O menor numero é: ' + num2);
    
    }else if (num3> num2 && num2 > num1){
        alert('O maior numero é: ' + num3 + '\n O menor numero é: ' + num1);
    }else{
        alert ('Todos os números são iguais')                                             // Todos os números iguais
    }

}  