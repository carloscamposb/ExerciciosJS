//Faça um Programa que leia três números e mostre-os em ordem decrescente.

// Declara as variáveis de número
const num1 = parseFloat(prompt('Informe o primeiro número: '));
const num2 = parseFloat(prompt('Informe o segundo número: '));
const num3 = parseFloat(prompt('Informe o terceiro número: '));


// EStrutura de decisão para mostrar números do menor para o maior
if (num1 > num2 && num2 > num3){                                //Bloco de todos os números diferentes
    alert ( 'a ordem é: ' + num3 + num2 + num1);
}else if (num1 > num3 && num3 > num2){
    alert ( 'a ordem é: ' + num2 + ' < ' + num3 + ' < ' + num1);

}else if (num2 > num1 && num1 > num3){
    alert ( 'a ordem é: ' + num3 + ' < ' + num1 + ' < ' + num2);

}  else if (num2 > num3 && num3 > num1){
    alert ( 'a ordem é: ' + num1 + ' < ' +  num3 + ' < '+ num2);

}  else if (num3 > num1 && num1 > num2){
    alert ( 'a ordem é: ' + num2+ ' < ' + num1+ ' < ' + num3);

}  else if (num3 > num2 && num2 > num1){
    alert ( 'a ordem é: ' + num1 + ' < ' + num2+ ' < ' + num3);

} else {
    if (num1 == num2 && num1 < num3) {                            //Bloco com 2 ou 3 números iguais
        alert ( 'a ordem é: ' + num1 + ' = ' + num2 + ' < ' + num3);
    } else if (num1 == num3 && num1 < num2) {
        alert ( 'a ordem é: ' + num1 + ' = ' + num3 + ' < ' + num2);
    } else if (num2 == num3 && num2 < num1) {
        alert ( 'a ordem é: ' + num3 + ' = ' + num2+ ' < ' + num1);
    }else{
        alert ('Todos os três números são iguais: ' + num1)
    }
}

 