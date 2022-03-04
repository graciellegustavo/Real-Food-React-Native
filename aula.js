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

