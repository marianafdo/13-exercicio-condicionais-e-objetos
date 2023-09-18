// MARIANA FERNANDES DE OLIVEIRA
// A. Exercício de Interpretação de Código
// 1. a) imprime no console se a pessoa pode ou não dirigir levando em consideração os dados inseridos;
// 1. b) "Alice pode dirigir" aparecerá quando a idade for maior ou igual que 18 anos e a resposta para 'temCarteiraDeMotorista' for true; "Alice não pode dirigir" aparecerá quando a idade for menor que 18 anos ou quando a resposta para 'temCarteiraDeMotorista' for false;

// 2. a) verificar se é verdadeiro que o animal inserido é carnívoro;
// 2. b) "Leão é um animal carnívoro";

// 3. a) verifica se é verdadeiro que o número inserido é maior que 5 e se é verdadeiro que o número é par;
// 3. b) "O número é maior que 5" / "O número é par";

// B. Exercício de Escrita de Código
// 1.

let idade = Number(prompt("Qual sua idade?"));

if (idade >= 18){
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 2.
let turno = prompt("Qual turno você estuda? Digite M para MANHÃ, T para TARDE ou N para NOITE").toUpperCase()

/* if (turno === 'M'){
    console.log('Bom dia!');
} else if (turno === 'T'){
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
} */

// 3. 

switch (turno){
    case 'M':
        console.log('Bom dia!');
        break
    case 'T':
        console.log('Boa tarde!');
        break
    default:
        console.log('Boa noite!');
        break
}

// 4.
const aluno = {
    nome: 'Mariana',
    idade: 30,
    tipoDeCurso: 'Graduação',
    temBolsa: false,
}

if (aluno.idade <= 30 && aluno.tipoDeCurso === 'Graduação' && aluno.temBolsa === false){
    console.log('Você pode se candidatar a uma bolsa de estudos!');
} else{
    console.log('Desculpe, você não atende os requisitos para a bolsa');
}
 
// 5.
const produto = {
    nome: 'Bolsa',
    preco: 55.00,
    desconto: 0,
    freteGratis: true,
}

if (produto.freteGratis && produto.desconto > 0){
    let final = produto.preco - produto.desconto
    console.log(`Preço final: ${final} (Frete grátis)`);
} else if (produto.desconto > 0){
    let final2 = produto.preco - produto.desconto
    console.log(`Preço final: ${final2}`)
} else if (produto.freteGratis && produto.desconto === 0){
    console.log(`Preço final: ${produto.preco} (Frete grátis)`);
} else {
    console.log(`Preço final:${produto.preco}`)
}
