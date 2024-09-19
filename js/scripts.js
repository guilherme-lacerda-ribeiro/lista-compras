import { adicionarItem } from "./adicionarItem.js";

const botaoSalvarItem = document.getElementById("formulario__salvar");
botaoSalvarItem.addEventListener("click", adicionarItem);
