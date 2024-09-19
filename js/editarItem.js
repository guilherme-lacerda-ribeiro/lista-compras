import { getDataFormatada } from "./getDataFormatada.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digita o novo nome do item");
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector(".lista__item__nome");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".lista__checkbox").checked;
        if (estavaComprado) {
            elemento.querySelector(".lista__checkbox").checked = true;
            elemento.querySelector(".lista__checkbox__decorado").classList.add("selecionado");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }

        const dataItem = elemento.querySelector(".lista__data");
        dataItem.innerText = getDataFormatada();
    }
};

// Mais recomendado se tiver mais de uma função dentro do arquivo
// export { editarItem };
