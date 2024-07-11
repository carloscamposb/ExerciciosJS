/* Escrever um programa em JS para calcular áreas de diferentes 
formas geométricas
-ÁREA DO TRIAGULO
-ÁREA DO RETANGULO
-ÁREA DO QUADRADO
-ÁREA DO TRAPEZIO
-ÁREA DO CÍRCULO

Deve conter um menu para o usuario escolher a forma geometrica 
além da opção 'Sair'
*/


// Função para área do triangulo
function calcularAreaTriagulo(){
    let base=parseFloat(prompt('Qual a base do triângulo? '));
    let altura=parseFloat(prompt('Qual a altura do triângulo? '));

    return base * altura/2
}

// Função para área do retângulo
function calcularAreaRetangulo(){
    let base=parseFloat(prompt('Qual a base do retângulo? '));
    let altura=parseFloat(prompt('Qual a altura do retângulo? ')); 
    
    return base* altura
}

// Função para área do quadrado
function calcularAreaQuadrado(){
    let lado= parseFloat(prompt('Qual o lado do quadrado? '));

    return lado*lado
}

// Função para área do trapézio
function calcularAreaTrapezio(){
    let baseMaior= parseFloat(prompt('Qual a base maior do trapézio? '));
    let baseMenor=parseFloat(prompt('Qual a base menor do trapézio? '));
    let altura=parseFloat(prompt('Qual a altura do trapézio? '));
    return (baseMaior + baseMenor) * altura/2
}


// Função para área do círculo
function calcularAreaCirculo(){
    let raio= parseFloat(prompt('Qual o raio do círculo? '));

    return 3.14 * raio * raio
}

// Função para mostrar opções
function menu(){
    return prompt(' Calculadora Geométrica: \n' +
        "\n1- Calcular área do triângulo" +
        "\n2- Calcular área do retângulo" +
        "\n3- Calcular área do quadrado" +
        "\n4- Calcular área do trapézio" +
        "\n5- Calcular área do círculo" +
        "\n6- Sair"
    );

}


// Função para chamar os cálculos 

function calculo( ){
    let opcaoEscolhida
    do{
        opcaoEscolhida= menu();
        let resultado = 0;
        
        if(opcaoEscolhida === '1'){
            resultado = calcularAreaTriagulo();
           
        }else if(opcaoEscolhida ==='2'){
            resultado= calcularAreaRetangulo();
         
        }else if(opcaoEscolhida ==='3'){
            resultado=calcularAreaQuadrado();
            
        }else if(opcaoEscolhida === '4'){
            resultado = calcularAreaTrapezio();
        }else if (opcaoEscolhida ==='5'){
            resultado=calcularAreaCirculo();
           
        }else if(opcaoEscolhida ==='6'){
            alert( 'Saindo...') 
            break;
        }else{
            alert('valor incorreto. Tente novamente')
            continue;
        }

     alert (`O resultado foi : ${resultado}`)

    }while(opcaoEscolhida !=6)



}

calculo()











