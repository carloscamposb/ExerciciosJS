// estudo de classe

//abastecimento de combustível

// Determinação da classe
class Viagens {

    // guardar informações
    constructor() {
        this.combustivel = prompt("Selecione o tipo de combustível: \n1- Gasolina \n2- Álcool");
        
        // laço de repetição para evitar erros 
        while (this.combustivel !== '1' && this.combustivel !== '2') {
            alert('Valor incorreto');
            this.combustivel = prompt("Selecione o tipo de combustível: \n1- Gasolina \n2- Álcool");
        }

        // estrutura de decisão para determinar preço de combustível 
        if (this.combustivel === '1') {
            this.combustivel = 5.70;
        } else if (this.combustivel === '2') {
            this.combustivel = 4.50;
        }

        // guardar informações extras
        this.kmPorLitro = parseFloat(prompt('Quantos KM por litro o seu automóvel faz?'));
        this.destino = parseFloat(prompt('Quantos KM tem o destino final?'));
    }
    // criar o metodo para calcular o valor da viagem
    calculoViagem() {
        let pagamento = (this.combustivel * this.destino) / this.kmPorLitro;
        console.log(`Você pagará exatamente R$${pagamento.toFixed(2)}`);
    }
}

// mostrar resultado
let passeio = new Viagens();
passeio.calculoViagem();