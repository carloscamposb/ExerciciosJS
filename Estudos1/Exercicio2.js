// Declara as constantes

let nivel = '';
let num1 = parseInt(prompt('Escreva o número de vitórias: '));
let num2 = parseInt(prompt('Escreva o número de derrotas: '));

// Declara a função para retornar a subtração dos valores
function saldoVitora(num1, num2) {
    return num1 - num2;
}

// guarda a função em uma variável
let calculation = saldoVitora(num1, num2);

// Aplica a condição
if (calculation < 1000) {
    nivel = 'Ferro';
} else if (calculation >= 1001 && calculation <= 2000) {
    nivel = 'Bronze';
} else if (calculation >= 2001 && calculation <= 5000) {
    nivel = 'Prata';
} else if (calculation >= 5001 && calculation <= 7000) {
    nivel = 'Ouro';
} else if (calculation >= 7001 && calculation <= 8000) {
    nivel = 'Esmeralda';
} else if (calculation >= 8001 && calculation <= 9000) {
    nivel = 'Diamante';
} else if (calculation >= 9001 && calculation <= 10000) {
    nivel = 'Lendário';
} else if (calculation >= 10001) {
    nivel = 'Imortal';
} else {
    alert('Algo deu errado! Tente novamente');
}

// Printa a resposta obtida referente ao saldo final e nivel resultante

console.log('Sobre o herói: '+'\n- Saldo de vida: ' + calculation + ' pontos'+ '\n- Nível: ' + nivel);