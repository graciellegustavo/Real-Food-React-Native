// começando...

// var linguagem = "JavaScript"
// console.log(`Aprendendo, ${linguagem}`)

// var nome = "Gustavo"
// const idade = 19
// nome = "D.R.E"

// if (idade >= 18) {
//     console.log("Parabéns,", nome, "\nVocê pode dirigir!")
//     console.log('b' + 'a' + +'a' + 'a')
// }


// const nomes = ["ana paula", "rodrigo", "cleyfsson", "ana claudia", "amanda reis"]

// const apenasA = nomes.filter((listaDeNomes) => {
//     return listaDeNomes.startsWith("a")
// })

// hello = auu => "da" + auu 

// console.log(hello("rarararara"))
// function f(funcao) {
//     funcao()
// }

// function g() {
//     function outraFuncao() {
//         console.log("produzida por g")
//     }
//     return outraFuncao()
// }

// f(g)

// function filter (v,f) {
//     var newVector = []
//     v.forEach(element => {
//         if (f(element)) {
//             newVector.push(element)
//         }
//     });
//     return newVector
// }

// console.log(filter([1, 2, 3, 4, 5, 6, 7], (n) => n % 2 == 0))

// function map (v, f) {
//     var newVector = []
//     v.forEach(element => {
//         newVector.push(f(element))
//     });
//     return newVector
// }

// console.log(map(["abc", "def"], (e) => e.charAt(0)))
// console.log(map(["abc", "def"], (e) => e.length))

// let pessoa = {
//     nome: "John",
//     idade: 57,
//     endereco: {
//         logradouro: "Rua Frei João",
//         numero: 44,
//         bairro: "Vila Liviero"
//     }
// }

// console.log(pessoa.endereco.logradouro)

// const pi = Math.PI

// function calculoDemorado(numero) {
//     return new Promise((resolve, reject) => {
//         if (numero <= 0) {
//             reject('não consigo dividir por esse valor')
//         } else {
//             resolve(pi/numero)
//         }
//     })
// }

// const f2 = (n) => {
//     let p = new Promise((resolve) => {
//         let newN = (n * (n + 1))/2
//         resolve(newN)
//     })
//     return p
// }


// const calculoRapidinho = (n) => Promise.resolve((n * (n + 1))/2) 


// function devolvePIMultiplicado() {
//     return new Promise((jacare) => {
//         let piMultiplicado = pi * 80
//         jacare(piMultiplicado)
//     })
// }

// const resultado = devolvePIMultiplicado()
// resultado.then((res) => console.log(res))

// console.log('fui mais rapido ahha')

// calculoRapidinho(10).then((res)=> console.log(res))

// console.log(f2(10))

//calback hell
// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo) {
//     //callback  = exibirConteudo
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log('Erro' + erro)
//         } else {
//             console.log('OK: ' + conteudo.toString())
//             const dobro = +conteudo.toString() * 2 //o + converte para número
//             console.log('valor calculado ' + dobro)
//             //callback = finalizar
//             const finalizar = function (error) {
//                 if (error) {
//                     console.log('erro = ' + erro)
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     //segundo parametro: função callback
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo('arquivo.txt')

// para cada previsão na lista 
// exibir a temperatura minima
// exibir a temp max
// exibir a descrição



// ================================================ 18/03


require('dotenv').config()

const { APPID, PROTOCOL, BASE_URL, UNITS, LANGUAGE } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=Itu&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}`

const axios = require('axios')

// axios.get(url)
//     .then(res => {
//         res.data.list.forEach(element => {
//             console.log("min ", element.main.temp_min)
//             console.log("max ", element.main.temp_max)
//             console.log("descrição ", element.weather[0].description)
//         });
//     })

// function hello(nome) {
//     return new Promise((resolve, resejct) => {
//         resolve(`Hello ${nome}`)
//     })
// }

// async function hello(nome) {
//     return `Hello ${nome}`
// }

const hello = async(nome) => {
    return `hello ${nome}`
}

const resultado = hello(`daniele`)
resultado.then(res => { console.log(res) })

async function fatorial(n) {
    if (n < 0) {
        return Promise.reject("Valor não pode ser negativo")
    }
    let res = 1
    for (let i = 0; i < res; i++) {
        return Promise.resolve(i)
    }
}

function chamadaComThenCatch() {
    fatorial(10)
        .then(res => console.log(res))
        .catch(error => console.log(error))

    fatorial(-10)
        .then(res => console.log(res))
        .catch(error => console.log(error))
}


async function chamadaComThenCatchAYSNC() {
    const f1 = await fatorial(10)
    console.log(f1)
    const f2 = await fatorial(-10)
    console.log(f2)
}

chamadaComThenCatch()
