// exemplo de como definir uma função no JS
function escreverNoConsole() {
    console.log('Mensagem escrita no console');
}

escreverNoConsole();

function soma(a, b) {
    return a + b;
}

console.log('soma: ', soma(10, 20));


// exemplo de escopo de função
const valor = 10;

const numero = function() {
    let valor = 20;
    console.log('valor dentro da função: ', valor);
}

numero();

if(true) {
    let valor = 30;
    console.log('valor dentro do if: ', valor);
}

console.log('valor fora da função: ', valor);


// exemplo de criar função anônima
const subtracao = function(a, b) {
    return a - b;
}

console.log('subtracao: ', subtracao(10, 20));


// exemplo de criar função anônima com arrow function
const multiplicacao = (a, b) => {
    return a * b;
}

console.log('multiplicacao: ', multiplicacao(10, 20));


// exemplo de arrow function em uma linha

const divisao = (a, b) => a / b;

console.log('divisao: ', divisao(10, 20));

// exemplo de funções com argumentos opcionais
function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log('Seu nome é: ', nome);
    } else {
        console.log(`Seu nome é ${nome} e sua idade é ${idade} anos`);
    }
}

nomeComIdade('João');
// nomeComIdade('João', 20);


// exemplo de funções com valor default
function repetirFrase(frase, n = 2) {
    for(let i = 0; i < n; i++) {
        console.log(frase);
    }
}

repetirFrase('Testando');
repetirFrase('Testando2', 5);