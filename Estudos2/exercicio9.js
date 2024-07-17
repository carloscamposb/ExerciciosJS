// classe do produto
class ProductManager {
    constructor() {
        // array que vai receber a lista de produtos
        this.produtos = [];
        // já inicializa interagindo com o usuário
        this.initialize();
    }

    // método para perguntar ao usuario
    initialize() {
        const nome = prompt('Qual o nome do produto?');
        const valor = parseFloat(prompt('Qual o valor do produto?'));
        const descricao = prompt('Qual a descrição do produto?');
        const disponibilidade = confirm('O produto está disponível?');

        // recebe os valores
        this.addProduct(nome, valor, descricao, disponibilidade);
    }

    // método para adição de um novo produto
    addProduct(nome, valor, descricao, disponibilidade) {
        const newProduct = { nome, valor, descricao, disponibilidade };
        this.produtos.push(newProduct);

        this.produtos.sort((a, b) => a.valor - b.valor);

        this.renderProductList();
    }

    // método para renderizar a lista de produtos
    renderProductList() {
        console.log("Produtos:");
        this.produtos.forEach(product => {
            const disponibilidadeTexto = product.disponibilidade ? 'Sim' : 'Não';
            console.log(`${product.nome}, R$ ${product.valor.toFixed(2)}, ${product.descricao}. Disponível: ${disponibilidadeTexto}`);
        });
    }
}

// Instancia o gerenciador de produtos que fica em uma estrutura de repetição até o usuário colocar cancelar
let produtinho;
do {
    produtinho = new ProductManager();
} while (confirm('Deseja continuar?'));


