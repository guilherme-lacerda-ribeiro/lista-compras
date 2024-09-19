import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { getDataFormatada } from "./getDataFormatada.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaComprar = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-dos-comprados");
let contador = 0;

export function criarItemDaLista(nomeDoItem) {
    const liElement = document.createElement("li");

    const divPrimeiraLinha = document.createElement("div");
    divPrimeiraLinha.classList.add("lista__item");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("lista__checkbox");
    inputCheckbox.id = "checkbox-" + contador++;

    inputCheckbox.addEventListener("click", (evento) => {
        const inputCheckbox = evento.currentTarget.closest("li").querySelector(".lista__checkbox");
        const customCheckbox = evento.currentTarget.closest("li").querySelector(".lista__checkbox__decorado");
        const pNomeItem = evento.currentTarget.closest("li").querySelector(".lista__item__nome");

        if (inputCheckbox.checked) {
            customCheckbox.classList.add("selecionado");
            pNomeItem.style.textDecoration = "line-through";
            listaComprados.appendChild(liElement);
        } else {
            customCheckbox.classList.remove("selecionado");
            pNomeItem.style.textDecoration = "none";
            listaComprar.appendChild(liElement);
        }
    });

    const labelCheckbox = document.createElement("label");
    labelCheckbox.classList.add("lista__checkbox__rotulo");

    const divCheckboxDecorado = document.createElement("div");
    divCheckboxDecorado.classList.add("lista__checkbox__decorado");
    labelCheckbox.setAttribute("for", inputCheckbox.id);
    labelCheckbox.addEventListener("click", function() {
        verificarListaComprados()
    })
    labelCheckbox.appendChild(divCheckboxDecorado);

    const pNomeItem = document.createElement("p");
    pNomeItem.classList.add("lista__item__nome");
    pNomeItem.innerText = nomeDoItem;

    const botaoExcluir = document.createElement("button");
    const iconeExcluir = document.createElement("img");
    iconeExcluir.alt = "Excluir item";
    iconeExcluir.classList.add("lista__botao", "lista__botao--menor");
    iconeExcluir.src = "img/excluir.svg";
    botaoExcluir.addEventListener("click", function () {
        excluirItem(liElement)
    })
    botaoExcluir.appendChild(iconeExcluir);

    const botaoEditar = document.createElement("button");
    const iconeEditar = document.createElement("img");
    iconeEditar.alt = "Editar item";
    iconeEditar.classList.add("lista__botao", "lista__botao--menor");
    iconeEditar.src = "img/editar.svg";
    botaoEditar.addEventListener("click", function() {
        editarItem(liElement)
    })
    botaoEditar.appendChild(iconeEditar);

    const pData = document.createElement("p");
    pData.classList.add("lista__data");
    pData.innerText = getDataFormatada();

    divPrimeiraLinha.appendChild(inputCheckbox);
    divPrimeiraLinha.appendChild(labelCheckbox);
    divPrimeiraLinha.appendChild(pNomeItem);
    divPrimeiraLinha.appendChild(botaoExcluir);
    divPrimeiraLinha.appendChild(botaoEditar);

    liElement.appendChild(divPrimeiraLinha);
    liElement.appendChild(pData);

    return liElement;
}
