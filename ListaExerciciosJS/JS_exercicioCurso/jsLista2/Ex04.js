//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.


//Declara a varável que recebe uma letra. Padroniza em maiúscula
const letra = prompt('Digite uma letra: ').toUpperCase();

//Estrutura de Decisão para saber se a letra escolhida pelo usuário é vogal ou consoante
if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
    alert ('Sua letra :  ' + letra + ' , é uma vogal ');

} else{
    alert ('Sua letra : ' + letra + ' , é uma consoante')
}