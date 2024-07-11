//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

//Solicitar o sexo do usuário. toUpperCase transforma em letra maiúscula para padronizar e minimizar erros
let sexo= prompt('Escolha o seu sexo F ou M').toUpperCase(); 


//Estrutura de decisão para saber o sexo do usuário
if (sexo === 'F'){                    
    alert ("Sexo feminino");       
}else if (sexo === 'M'){            
    alert ("Sexo masculino");      
}else{                            //Se não for nem M nem F
    alert('Outro')              
}


