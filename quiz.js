const pergunta = document.querySelector("#pergunta")
const escolhas = Array.from(document.querySelectorAll(".escolha-texto"))
const textoProgresso = document.querySelector("#textoProgresso")
const textoPontuacao = document.querySelector("#pontuacao")
const barraProgressoFull = document.querySelector("#barraProgressoFull")

let perguntaAtual = {}
let aceitarRespostas = true
let pontuacao = 0
let contadorDePerguntas = 0
let perguntasRestantes = []

let perguntas = [
    {
        pergunta: "Qual o nome da espada do Zagreus?",
        escolha1: "Malphon",
        escolha2: "Aegis",
        escolha3: "Stygius",
        escolha4: "Exagryph",
        resposta: 3,
    },
    {
        pergunta: "Qual o apelido dado à Hidra de Ossos de Asphodel?",
        escolha1: "Skelly",
        escolha2: "Lernie",
        escolha3: "Megaera",
        escolha4: "Tisiphone",
        resposta: 2,
    },
    {
        pergunta: "Qual a primeira região do Submundo?",
        escolha1: "Styx",
        escolha2: "Elysium",
        escolha3: "Asphodel",
        escolha4: "Tartarus",
        resposta: 4,
    },
    {
        pergunta: "Durante o jogo, Zagreus recebe ajuda de:",
        escolha1: "Hades, Deus do Submundo",
        escolha2: "Deuses do Olimpo",
        escolha3: "Nyx, Deusa da Noite",
        escolha4: "Almas do Tartarus",
        resposta: 2,
    },
    {
        pergunta: "Quantas Armas Infernais diferentes podem ser utilizadas?",
        escolha1: "6",
        escolha2: "7",
        escolha3: "5",
        escolha4: "4",
        resposta: 1,
    },
]

const pontos = 100
const maximoPerguntas = 5

comecarQuiz = () => {
    contadorDePerguntas = 0
    pontuacao = 0
    perguntasRestantes = [...perguntas]
    pegarNovaPergunta()
}

pegarNovaPergunta = () => {
    if (perguntasRestantes.length === 0 || contadorDePerguntas >= maximoPerguntas) {
        localStorage.setItem("pontuacaoMaisRecente", pontuacao)

        return window.location.assign("quizFim.html")
    }

    contadorDePerguntas++
    textoProgresso.innerText = `Pergunta ${contadorDePerguntas} de ${maximoPerguntas}`
    barraProgressoFull.style.width = `${(contadorDePerguntas/maximoPerguntas) * 100}%`

    const indexPerguntas = Math.floor(Math.random() * perguntasRestantes.length)
    perguntaAtual = perguntasRestantes[indexPerguntas]
    pergunta.innerText = perguntaAtual.pergunta

    escolhas.forEach(escolha => {
        const numero = escolha.dataset["numero"]
        escolha.innerText = perguntaAtual["escolha" + numero]
    })

    perguntasRestantes.splice(indexPerguntas, 1)

    aceitarRespostas = true
}

escolhas.forEach(escolha => {
    escolha.addEventListener("click", e => {
        if(!aceitarRespostas) return

        aceitarRespostas = false
        const escolhaSelecionada = e.target
        const respostaSelecionada = escolhaSelecionada.dataset["numero"]

        let classToApply = respostaSelecionada == perguntaAtual.resposta ? "correto" : "incorreto"

        if (classToApply === "correto") {
            aumentarPontuacao(pontos)
        }

        escolhaSelecionada.parentElement.classList.add(classToApply)

        setTimeout(() => {
            escolhaSelecionada.parentElement.classList.remove(classToApply)
            pegarNovaPergunta()

        }, 1000)
    })
})

aumentarPontuacao = num => {
    pontuacao +=num
    textoPontuacao.innerText = pontuacao
}

comecarQuiz()