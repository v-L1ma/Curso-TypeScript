//Tipos basicos

const nome:string = "Vinicius"
const idade:number = 20
const isHomem:boolean = true

console.log(typeof nome)

//declarando objetos ou arrays

const alunos: string[] = ["Vinicius", "Vanuza", "Helenice"]

// tuplas (é tipo array com varios tipos diferentes)

let tupla: [number, string, string[]] = [20, "Vinicius", ["a", "b"]]

const user: {name: string, age:number} = {
    name:"Vinicius",
    age:20
}

console.log(`a idade é: ${user.age}`)


// any (não é muito bom de usar)

let a: any = 0

a = "posso mudar"
a = false


// union types

let cpf: number | string = "357647322-51"

cpf = "357647322-51"

// type alias

type paraCadastrar = number | string

let telefone: paraCadastrar = 13981934062
telefone = "13981934062"

// enum
//se por exemplo tivermos tamanhos de roupas (size: médio, size: pequeno)

enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa: {name: string, size: string} = {
    name: "Camisa da furia",
    size: Size.M
}

console.log(camisa)

// funções

function somar(a:number, b: number){
    return a+b
}

console.log(somar(10,20))

function saudacao(nome:string){
    return `Olá, ${nome}`
}

console.log(saudacao("Vinicius"))

// tipando o retorno de uma função

function mostrarIdade(idade:number): string{
    return `Sua idade é: ${idade} anos`
}

console.log(mostrarIdade(20))

// Interfaces

interface ParametrosMatematicos {
    n1: number,
    n2: number,
}

function somarNumeros(numeros: ParametrosMatematicos){
    return numeros.n1 + numeros.n2
}

console.log(somarNumeros({n1:20, n2: 40}))

function multiplicarNumeros(numeros: ParametrosMatematicos){
    return numeros.n1*numeros.n2
}

console.log(multiplicarNumeros({n1:2,n2:3}))

// naworring
// tratamento para checagem de tipos

function seiLa(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O numero é ${info}`)
        return
    }
    console.log("Não foi recebido um numero")
}

seiLa(5)

seiLa(false)

// generics

function showArrayItems<T>(array: T[]) {
    array.forEach((item) =>{
        console.log(`Item: ${item}`)
    })
}

const array1: number[] = [1, 2, 3, 4]

const array2: string[] = ["a", "b", "c"]

showArrayItems(array1)
showArrayItems(array2)