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
function f(funcao) {
    funcao()
}

function g() {
    function outraFuncao() {
        console.log("produzida por g")
    }
    return outraFuncao()
}

f(g)

function filter (v,f) {
    var newVector = []
    v.forEach(element => {
        if (f(element)) {
            newVector.push(element)
        }
    });
    return newVector
}

console.log(filter([1, 2, 3, 4, 5, 6, 7], (n) => n % 2 == 0))

function map (v, f) {
    var newVector = []
    v.forEach(element => {
        newVector.push(f(element))
    });
    return newVector
}

console.log(map(["abc", "def"], (e) => e.charAt(0)))
console.log(map(["abc", "def"], (e) => e.length))

let pessoa = {
    nome: "John",
    idade: 57,
    endereco: {
        logradouro: "Rua Frei João",
        numero: 44,
        bairro: "Vila Liviero"
    }
}

console.log(pessoa.endereco.logradouro)
