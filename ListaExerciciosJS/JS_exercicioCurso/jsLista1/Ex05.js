// 5) Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

// Declara a variável e solicita o raio do círculo armazenando a informação dentro da cont raio

const raio = parseFloat(prompt('Informe o raio do círculo: ')); 

// A função match é utilizada para expressões regulares no JS. Math.PI possui o número do PI e a media indica que o raio vai ser elevado ao quadrado
const AreaCirculo = Math.PI * matchMedia.pow(raio,2); 

// Mostra mensagem ao usuário com o resultado do raio e área do círculo.
alert ('O raio do circulo foi: ' + raio + ' a área do círculo é: ' + AreaCirculo) 

