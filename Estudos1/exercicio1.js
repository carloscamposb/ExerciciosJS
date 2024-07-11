// Determinar o elo do heroi baseado em seu xp

// declara as variaveis
const nomeHeroi= prompt('Qual o seu nome herói? ')

let xp=prompt ('Escreva seu xp para darmos o seu rank:  ')

// estrutura de decisão
switch (xp){
    case (xp < 1000 ):
        console.log(' XP menor do que 1.000 = Ferro')
    break   
    case (xp >= 1001 && xp <=2000):
        console.log('XP entre 1.001 e 2.000 = Bronze')
    break    
    case (xp  >= 2001 && xp <=5000 ):
        console.log(' XP entre 2.001 e 5.000 = Prata')
    break    
    case (xp >= 5001 && xp <=7000):
        console.log('XP entre 5.001 e 7.000 = Ouro')
    break    
    case (xp >= 7001 && xp <=8000 ):
        console.log('XP entre 7.001 e 8.000 = Platina')
    break    
    case (xp >= 8001 && xp <=9000 ):
        console.log(' XP entre 8.001 e 9.000 = Ascendente')
    break    
    case (xp  >= 9001 && xp <=10.000 ):
        console.log('XP entre 9.001 e 10.000= Imortal')
    break    
    case (xp >= 10001 ):
        console.log(' XP maior ou igual a 10.001 = Radiante')
    break    
    default:
        console.log('Valor incorreto')
    break     
}

// imprimir mensagem
console.log('O Herói de nome: ' +  nome + 'está no nível de: ' + nivel)