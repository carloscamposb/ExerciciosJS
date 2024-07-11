/* Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidades
12 = 1 dezena e 2 unidades 
Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16 */





// Declara a variável número
const numero = parseInt(prompt("Digite um número inteiro menor que 1000: "));


//Impede o recebimento de números acima de 1000
if (numero >= 1000) {
    alert("O número digitado é maior ou igual a 1000. Por favor, digite um número menor.");

  // Separa os números em suas determinadas casas 
  } else {
    const centenas = Math.floor(numero / 100);          //Ex. 326   = 326/100 = 3.26 = 3
    const dezenas = Math.floor((numero % 100) / 10);    // 326%100 = 26 /10 = 2.6 = 2  
    const unidades = numero % 10;                       // 326%10 = 6

        //Declara a variável resultado e inicializa
    let resultado = "";                            

    // Estrutura de Decisão para estabelecer quando é centena ou centenas, dezena ou dezenas, unidade ou unidades 
    if (centenas > 0) {
        resultado += centenas + " centena";

        if (centenas > 1) {
            resultado += "s";  //  Em outras palavras resultado = resultado (centena) + s = centenas 
        }
    }

    if (dezenas > 0) {
        if (centenas > 0) {
            resultado += " e ";
        }
        resultado += dezenas + " dezena";
        if (dezenas > 1) {
            resultado += "s";
        }
    }

    if (unidades > 0) {
        if (centenas > 0 || dezenas > 0) {
            resultado += " e ";
        }
        resultado += unidades + " unidade";
        if (unidades > 1) {
            resultado += "s";
        }
    }
  
    // Mostra o resultado ao usuário separando as centenas, dezenas e unidades
    alert(numero + "  =  " + resultado); 
}