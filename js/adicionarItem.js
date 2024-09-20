import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprar = document.getElementById("lista-de-compras");
const item = document.getElementById("formulario__texto");

export function adicionarItem(evento) {
    evento.preventDefault();
    if (!item.value || item.value.trim() === "") {
        alert("Digite o nome do item que deseja adicionar");
        return;
    }
    const itemDaLista = criarItemDaLista(item.value);
    listaComprar.appendChild(itemDaLista);
    verificarListaVazia(listaComprar);
    verificarListaComprados();
    item.value = "";
    item.focus();
}
