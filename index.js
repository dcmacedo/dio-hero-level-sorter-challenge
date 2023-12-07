// Criado por Danilo C. Macedo para o Desafio DIO

// Criei uma variável para armazenar o nome dos heróis
let nameHeroes = [
    "Estrela Cósmica",
    "Raio Nebuloso",
    "Lâmina Sideral",
    "Sentinela Ígnea",
    "Espectro Radiante",
    "Tempestade Lunar",
    "Arauto Astral",
    "Guardião Solar",
    "Sombra Estelar",
    "Ciclone Nebular"
]

// Criei uma variável para armazenar a quantidade de experiência (XP) dos heróis
let xpHeroes = [
    500,
    1500,
    1000,
    3000,
    9500,
    25000,
    7000,
    8500,
    9600,
    7500
]

// Mapeiei os nomes dos heróis e suas respectivas XP usando o 'map' e uma arrow function
// O chatgpt me ajudou um pouco neste ponto
let heroes = nameHeroes.map((nomeHeroi,index) => ({
    nome: nomeHeroi,
    xp: xpHeroes[index] 
}))

// Percorro a lista de heróis
for (let i = 0; i < heroes.length; i++) {
    let hero = heroes[i]

    /*
    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 6.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante
    */

    // Aqui uso o switch case para classificar o XP
    // Cheguei a testar algumas variações, porem, essa foi a solução que funcionou
    switch (true) {
        case hero.xp >= 10001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Radiante com ${hero.xp}xp`)
            break;
        case hero.xp >= 9001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Imortal com ${hero.xp}xp`)
            break;
        case hero.xp >= 8001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Ascendente com ${hero.xp}xp`)
            break;
        case hero.xp >= 7001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Platina com ${hero.xp}xp`)
            break;
        case hero.xp >= 6001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Ouro com ${hero.xp}xp`)
            break;
        case hero.xp >= 2001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Prata com ${hero.xp}xp`)
            break;
        case hero.xp >= 1001:
            console.log(`O Herói de nome ${hero.nome} está no nível de Bronze com ${hero.xp}xp`)
            break;
        default:
            console.log(`O Herói de nome ${hero.nome} está no nível de Ferro com ${hero.xp}xp`)
            break;
    }
}
