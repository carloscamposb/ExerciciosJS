// Estudando funções

//pagamento por produtos. Dependendo da condição de pagamento o usuário recebe desconto ou juros encima do valor base

// determinar o preço
function preco (){
    let precoGeral = prompt("Qual o valor? ")
    return precoGeral
}

// determinar a forma de pagamento
function formaPagamento(){
    let pagamento= prompt('Qual a forma de pagament? \n1 Via Pix ou dinheiro \n2 cartão 2x \n3 catrão 3x ou mais')

    // estrutura de repetição para evitar erro
    while(pagamento !='1' && pagamento !='2' && pagamento !='3'){
        pagamento= prompt('Qual a forma de pagament? \n1 Via Pix ou dinheiro \n2 cartão 2x \n3 catrão 3x ou mais')
    }

    // estrutura de decisão para obter o texto do prompt
    if(pagamento ==='1'){
        return 'via pix ou dinheiro'
    }else if(pagamento ==='2'){
        return 'cartão 2x'
    }else{
        return 'cartao 3x ou mais'
    }
}

// calcular desconto
function realizarDesconto (precoGeral, desconto){
    return precoGeral - (precoGeral *(desconto/100))
}

// calcular juros
function juros (precoGeral, juros){
    return precoGeral + (precoGeral * (juros/100))
}

// calcular valores com desconto ou juros
function calcular(precoGeral, formaPagamento){
    if (formaPagamento === 'via pix ou dinheiro'){
        return realizarDesconto(precoGeral, 10)
    }else if(formaPagamento ==='cartão 2x'){
        return realizarDesconto(precoGeral, 15)
    }else{
        return juros(precoGeral,10)
    }
}

// Uso de função invocadas imediatamente
(function(){
let precoGeral = preco()
let pagamento = formaPagamento()
let calculo = calcular(precoGeral, pagamento)

// imprime o resultado na tela
console.log(`O preço inicial do produto foi ${precoGeral}, a forma de pagamento escolhida foi ${pagamento} e o preço final foi ${calculo} `)

})();