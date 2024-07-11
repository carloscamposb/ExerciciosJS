/*
>> Questão: 
Construir um menu interativo para cadastro de imóveis. O menu deve mostrar no topo o número de imóveis cadastrados e abaixo as opções: Salvar um ímovel ; mostrar todos os imóveis salvos e sair.
> O usuário quando clicar em 'Salvar um imóvel' deve preencher algumas informações como:
Nome do proprietário; Quantidade de quartos; Quantidade de banheiros; Presença/ausência de garagem;
> Na opção  'Mostrar todos os imóveis salvos' o usuário tem acesso a todos os imóveis cadastrados ;
> Na opção sair o usuário é informado que está saindo do sistema e o programa é encerrado.
*/ 

// Inicializa as variáveis
let lista=[] //array

let opcao=''


// Estrutura de repetição ideal para mostrar a mensagem de saida
do{   

opcao= prompt("Quantidade de imoveis cadastrados: " + lista.length + "\n 1) Salvar um imóvel \n2) Mostrar todos os imóveis salvos \n3) Sair") //menu

//estrutura de repetição 
switch(opcao){  
    case '1':
        const garagem=''

        // Criação de um objeto vazio
        const infos={}                
         
        // propriedades do objeto = chave + valor
        infos.proprietario = prompt('Qual o nome do proprietário?');
        infos.quartos= parseFloat(prompt('Qual o número de quartos?'));
        infos.banheiro=parseFloat(prompt('Qual o número de banheiros?'));
        garagem=prompt('Há garagem: 1)Sim 2)Não');


        // padronização na resposta
        if (garagem === '1' || garagem.toLowerCase() === 'sim') {
            infos.garagem = 'Sim';
        } else if (garagem === '2' || garagem.toLowerCase() === 'não' || garagem.toLowerCase() === 'nao') {
            infos.garagem = 'Não';
        } else {
            alert('Informação incorreta');
        }
        // confirmar informações
        const confirma= confirm('Você quer salvar esse imóvel?' +
            '\n Proprietário: ' + infos.proprietario + 
            '\n Quantidade de quartos : ' + infos.quartos +
            '\n Banheiros: ' + infos.banheiro +
            '\n Garagem: ' + infos.garagem 
        )

    // Guardar informações
        if (confirma){
           lista.push(infos) //guarda as informações no final da lista
        }
   
    break

    case'2':
    //  declara variável que vai mostrar tdoos os dados  
    const saida=''
        // loop para a lista de dados dos imóveis
    for(let i=0; i<lista.length; i++){                          
        saida +=
            '\nProprietário: ' + lista[i].proprietario +
            '\nQuantidade de quartos: ' + lista[i].quartos +
            '\nbanheiros: ' + lista[i].banheiro +
            '\ngaragem: ' + lista[i].garagem +
            '\n------\n'            
    }    

    // mostrar lista
    alert(saida) 
       
    break
    
    // sair do sistema
    case '3':
        alert('saindo do sistema...')
    break
    
    default:
            alert('valor inválido')
    break        

    
}


} while(opcao !='3')    // permanece no sistema enquanto o valor for diferente de 3