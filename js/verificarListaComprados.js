const listaComprados = document.getElementById("lista-dos-comprados");
const listaCompradosBloco = document.getElementById("lista-comprados");

export function verificarListaComprados() {
    if (listaComprados.querySelectorAll("li").length === 0) {
        listaCompradosBloco.style.display = "none";
    } else {
        listaCompradosBloco.style.display = "block";
    }
}
