/* Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps),
 calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/


//Declara as variáveis arquivo e velocidade
const arquivo = parseFloat(prompt('Informe o tamanho do arquivo para dowload em MB: '));
const velocidade = parseFloat(prompt('Informe a velocidade do link em Mbps: '));

//transforma para Mbps  1MB = 8Mbps
const conversaoArquivo = arquivo * 8; 

// calcula a velocidade em minutos (60)
const calculoVelocidade= (arquivo/velocidade)/ 60;  

// Informa ao usuário o tempo aproximado do download.
alert(' o tempo aproximado de download usando esse link é de: ' + calculoVelocidade.toFixed(2) + ' minutos') 

