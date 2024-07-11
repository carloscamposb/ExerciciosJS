/* Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. 
O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores,
sendo encerrado; 
-- Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
-- Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário; 
-- Se o delta for positivo,  a equação possui duas raiz reais; informe-as ao usuário; */


// Declara a variável a 
const a = parseFloat (prompt('Informe o valor de (a): '));

//Declara o x de valor negativo e positivo e inicializa eles
let x1=0;
let x2=0;

// Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores.
if (a === 0 ){
    alert ('A equação não é de segundo grau');
    return;                                        //finaliza

//Solicita os outros valores
} else{
    const b = parseFloat (prompt('Informe o valor de (b): '));
    const c = parseFloat (prompt('Informe o valor de (c): '));
}

//calcula o delta. Duplo (**) indica que o valor esta elevado      
const delta = Math.pow(b**2) - (4*a*c);

//calculo das duas raízes
x1 = (-b + Math.sqrt(delta)) / 2 * a;
x2 = (-b - Math.sqrt(delta)) / 2 * a;


// Estrutura de decisão para quando não possui raizes reais, possui apenas uma raíz real ou possui duas raizes reais
if (delta < 0){
    alert (' A equação não possui raízes reais');
    return;
} else if ( delta === 0){
   
    alert ('A equação tem apenas uma raíz real: ' + x1);

} else {
    alert ('A equação tem duas raízes reais: ' + x1 +  ' e ' + x2);

}





