import api from "./api.js";
import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarFrases();

    const formularioFrase = document.getElementById("frase-form");

    formularioFrase.addEventListener("submit", manipularSubmissaoFormulario);
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();

    const id = document.getElementById("frase-id").value;
    const conteudo = document.getElementById("frase-conteudo").value;
    const autoria = document.getElementById("frase-autoria").value;


    try {
        await api.salvarFrase({ conteudo, autoria });
        ui.renderizarFrases();
    } catch(error) {
        alert("Erro ao salvar frase. Tente novamente mais tarde!");
        console.log(error);
    }
}
