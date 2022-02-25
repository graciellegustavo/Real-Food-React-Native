// começando...

var linguagem = "JavaScript"
console.log(`Aprendendo, ${linguagem}`)

var nome = "Gustavo"
const idade = 19
nome = "Gracielle"

if (idade >= 18) {
    console.log("Parabéns,", nome, "\nVocê pode dirigir!")
    console.log('b' + 'a' + +'a' + 'a')
}


const nomes = ["ana paula", "rodrigo", "cleyfsson", "ana claudia", "amanda reis"]

const apenasA = nomes.filter((listaDeNomes) => {
    return listaDeNomes.startsWith("a")
})

console.log(apenasA)