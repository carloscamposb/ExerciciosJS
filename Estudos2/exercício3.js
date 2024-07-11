
// Estudo de classe 


// determinar a classe
class Hero {
    constructor() {
        // guardar informações
        this.nome = prompt('Digite o nome do herói: ');
        this.idade = parseInt(prompt('Digite a idade do herói: '));
        this.tipo = prompt('Escolha o tipo do herói: \n1) Mago \n2) Guerreiro \n3) Monge \n4) Ninja');
    
        // estrutura de decisão
        switch (this.tipo) {
            case '1':
                this.tipo = 'Mago';
                this.ataque = 'magia';
                break;
            case '2':
                this.tipo = 'Guerreiro';
                this.ataque = 'espada';
                break;
            case '3':
                this.tipo = 'Monge';
                this.ataque = 'artes marciais';
                break;
            case '4':
                this.tipo = 'Ninja';
                this.ataque = 'shuriken';
                break;
            default:
                this.tipo = 'Desconhecido';
                this.ataque = 'ataque desconhecido';
                console.log("Valor incorreto");
                break;
        }
    }

    //determinar o método
    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let continuar = true;
// laço de repetição 
do {
    let heroi = new Hero();
    heroi.atacar();
    continuar = confirm('Deseja atacar com outro herói?');
} while (continuar);

console.log('Ataque encerrado.');
