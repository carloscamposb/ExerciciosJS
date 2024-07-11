/* Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */

//Declara a variável alt
const alt = parseFloat(prompt('Escreva a sua altura: ')); 

//Declara a variável sexo. toUUperCase() é aplicada a string deixando em maiúsculo independente de como foi passado pelo usuário.
let sexo= prompt('Escolha o seu sexo F ou M').toUpperCase(); 

//declara e inicializa a variavel peso 
let peso=0 


//Usa-se da estrutura de Decisão para quando é feminino e quando é masculino
if (sexo === 'F'){  
sexo='Feminino';    
peso =  (62.1*alt) - 44.7;                        // calculo para peso ideal feminino    
}else if (sexo === 'M'){
sexo= 'Masculino';
peso = (72.7*alt) - 58;                         // calculo para peso ideal masculino    
}else{                                         // Escolhas que não sejam nem M ou F
 alert('Escolha incorreta'); 
 return;                                      //finaliza e sai do programa
}

//Mostra o peso ideal dependendo do peso selecionado
alert ("Por ser do sexo "+ sexo + " seu peso ideal é de: " + peso.toFixed(2) + " kg") 