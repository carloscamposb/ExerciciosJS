// Lista de produtos

class ProductManager {
    constructor() {
        this.produtos = [];
        this.initialize();
    }

    initialize() {
        const nome = prompt('Qual o nome do produto?');
        const valor = parseFloat(prompt('Qual o valor do produto?'));
        const descricao = prompt('Qual a descrição do produto?');
        const disponibilidade = confirm('O produto está disponível?');

        this.addProduct(nome, valor, descricao, disponibilidade);
    }

    addProduct(nome, valor, descricao, disponibilidade) {
        const newProduct = { nome, valor, descricao, disponibilidade };
        this.produtos.push(newProduct);

        this.produtos.sort((a, b) => a.valor - b.valor);

        this.renderProductList();
    }

    renderProductList() {
        console.log("Produto:");
        this.produtos.forEach(product => {
            const disponibilidadeTexto = product.disponibilidade ? 'Sim' : 'Não';
            console.log(`${product.nome}, R$ ${product.valor.toFixed(2)}, ${product.descricao}. Disponível: ${disponibilidadeTexto}`);
        });
    }
}

// Instancia o gerenciador de produtos


let produtinho
do{
    produtinho = new ProductManager();

}while(confirm ('Deseja continuar?'))

