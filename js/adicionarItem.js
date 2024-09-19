import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprar = document.getElementById("lista-de-compras");
const item = document.getElementById("formulario__texto");

export function adicionarItem(evento) {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(item.value);
    listaComprar.appendChild(itemDaLista);
    verificarListaVazia(listaComprar);
    item.value = "";
    item.focus();
}
