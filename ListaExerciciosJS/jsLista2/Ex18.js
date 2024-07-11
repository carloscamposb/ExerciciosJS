//Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.




//Declara a variável data
const data = prompt('Digite a data (dd/mm/aaaa): ');

// Divide a entrada pelas '/'
const partes = data.split('/'); 


//Estrutura de decisão para verificação da data
if (partes.length !== 3) {  //Se não tiver 3 partes separadas por '/' mostra que o formato esta incorreto
    alert('Formato de data incorreto. Use dd/mm/aaaa.');
    return;                                           //Finaliza


} else {
    // converte as partes separadas em números inteiros e coloca dentro de variáveis (dia, mês e ano)
    const dia = parseInt(partes[0]); 
    const mes = parseInt(partes[1]);
    const ano = parseInt(partes[2]);

       //Estrutura de decisão para validar o ano  
        if (ano < 1 || ano > 9999) {
            alert('Ano inválido. Deve estar entre 1 e 9999.');
            dataValida = false;
        }
        
        // Estrutura de Decisão para validar mês   
        if (mes < 1 || mes > 12) {
            alert('Mês inválido. Deve estar entre 1 e 12.');
            dataValida = false;
        }

        //Estrutura de Decisão para validar dia
        if (dia < 1 || dia > 31) {
            alert('Dia inválido. Deve estar entre 1 e 31.');
            dataValida = false;
        }


        //Estutura de decisão para meses com 30 dias, 31 dias e bissextos
        if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            if (dia > 30) {
                alert('Dia inválido para o mês especificado.');
                dataValida = false;
            }
        } else if (mes === 2) {
            if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
                if (dia > 29) {
                    alert('Dia inválido para o mês especificado em um ano bissexto.');
                    dataValida = false;
                }
            } else {
                if (dia > 28) {
                    alert('Dia inválido para o mês especificado em um ano não bissexto.');
                    dataValida = false;
                }
            }
        }

        // Mostra ao usuário a data válida
        if (dataValida) { 
            alert('Data válida: ' + dia + '/' + mes + '/' + ano);
        }
    }
