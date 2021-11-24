const itens = document.getElementById("itens")
const descricaoDosItens = document.getElementById("descricao")
let item

function select() {
    item = itens.value
    switch (item) {
        case "refrigerante":
            descricaoDosItens.innerText = "Refrigerante tem o código de origem 1 da procedência 1"
            break
        case "energetico":
            descricaoDosItens.innerText = "Energético tem o código de origem 2 da procedência 2"
            break
        case "agua":
            descricaoDosItens.innerText = "Água tem o código de origem 3 da procedência 3"
            break
        case "suco":
            descricaoDosItens.innerText = "Suco tem o código de origem 4 da procedência 4"
            break
        case "jujuba":
            descricaoDosItens.innerText = "Jujuba tem o código de origem 5 da procedência 5"
            break
        case "bala":
            descricaoDosItens.innerText = "Bala tem o código de origem 6 da procedência 6"
            break
        case "chocolate":
            descricaoDosItens.innerText = "Chocolate tem o código de origem 7 da procedência 7"
            break
    }
}