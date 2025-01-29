"use strict";
//Tipos basicos
const nome = "Vinicius";
const idade = 20;
const isHomem = true;
console.log(typeof nome);
//declarando objetos ou arrays
const alunos = ["Vinicius", "Vanuza", "Helenice"];
// tuplas (é tipo array com varios tipos diferentes)
let tupla = [20, "Vinicius", ["a", "b"]];
const user = {
    name: "Vinicius",
    age: 20
};
console.log(`a idade é: ${user.age}`);
// any (não é muito bom de usar)
let a = 0;
a = "posso mudar";
a = false;
// union types
let cpf = "357647322-51";
cpf = "357647322-51";
let telefone = 13981934062;
telefone = "13981934062";
// enum
//se por exemplo tivermos tamanhos de roupas (size: médio, size: pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa da furia",
    size: Size.M
};
console.log(camisa);
// funções
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20));
function saudacao(nome) {
    return `Olá, ${nome}`;
}
console.log(saudacao("Vinicius"));
// tipando o retorno de uma função
function mostrarIdade(idade) {
    return `Sua idade é: ${idade} anos`;
}
console.log(mostrarIdade(20));
function somarNumeros(numeros) {
    return numeros.n1 + numeros.n2;
}
console.log(somarNumeros({ n1: 20, n2: 40 }));
function multiplicarNumeros(numeros) {
    return numeros.n1 * numeros.n2;
}
console.log(multiplicarNumeros({ n1: 2, n2: 3 }));
// naworring
// tratamento para checagem de tipos
function seiLa(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Não foi recebido um numero");
}
seiLa(5);
seiLa(false);
// generics
function showArrayItems(array) {
    array.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const array1 = [1, 2, 3, 4];
const array2 = ["a", "b", "c"];
showArrayItems(array1);
showArrayItems(array2);
