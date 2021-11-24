const itens = document.getElementById("itens")
const descricaoDosItens = document.getElementById("descricao")
let item

function select() {
    item = itens.value
    switch (item) {
        case "1":
            document.getElementById("descricao").innerText = "Classificação:\nAlimento não-perecível."
            break;
        case "2":
            document.getElementById("descricao").innerText = "Classificação:\nAlimento perecível."
            break;
        case "3":
            document.getElementById("descricao").innerText = "Classificação:\nVestuário."
            break;
        case "4":
            document.getElementById("descricao").innerText = "Classificação:\nHigiene pessoal."
            break;
        case "5":
            document.getElementById("descricao").innerText = "Classificação:\nLimpeza e utensílios domésticos."
            break;

    }
}
