// treinando funções

// espírito animal 


// declara variáveis
let dia = parseInt(prompt('Digite o dia de seu aniversário'));
let mes = parseInt(prompt('Digite o mês de seu aniversário'));

// função para o dia de aniversário
function diaAniversario(dia) {
    if (dia >= 1 && dia <= 5) {
        return 'Tigre';
    } else if (dia >= 6 && dia <= 10) {
        return 'Peixe';
    } else if (dia >= 11 && dia <= 18) {
        return 'Garça';
    } else if (dia >= 19 && dia <= 24) {
        return 'Urso';
    } else if (dia >= 25 && dia <= 31) {
        return 'Serpente';
    } else {
        alert('dados incorretos');
        return '';
    }
}

// função para o mês de aniversário
function mesAniversario(mes) {
    if (mes >= 1 && mes <= 3) {
        return 'de ar';
    } else if (mes >= 4 && mes <= 6) {
        return 'de água';
    } else if (mes >= 7 && mes <= 10) {
        return 'de fogo';
    } else if (mes >= 11 && mes <= 12) {
        return 'de terra';
    } else {
        alert('dados incorretos');
        return '';
    }
}

// função principal para imprimir informações coletadas
function main(){
let armazenaDia = diaAniversario(dia);
let armazenaMes = mesAniversario(mes);
const concatenar = armazenaDia + ' ' + armazenaMes;
alert('Seu aniversário é dia: ' + dia + '\nSeu mês é: ' + mes + '\nSeu espírito animal é: ' + concatenar);
} 

main()

