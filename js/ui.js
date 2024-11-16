import api from "./api.js";

const ui = {
    async preencherFormulario(fraseId) {
        const frase = await api.buscarFrasePorId(fraseId);

        document.getElementById("frase-id").value = frase.id;
        document.getElementById("frase-conteudo").value = frase.conteudo;
        document.getElementById("frase-autoria").value = frase.autoria;
    },

    async renderizarFrases() {
        const listaFrases = document.getElementById("lista-frases");

        try {
            const frases = await api.buscarFrase();

            frases.forEach(ui.adicionarFraseNaLista);

        } catch(error) {
            alert("Erro ao obter a lista de parabéns. Tente novamente mais tarde!");
            console.log(error);
        }
    },
    
    adicionarFraseNaLista(frase) {
        const listaFrases = document.getElementById("lista-frases");
        const li = document.createElement("li");
        li.setAttribute("data.id", frase.id);
        li.classList.add("li-frase");
    
        const fraseConteudo = document.createElement("div");
        fraseConteudo.textContent = frase.conteudo;
        fraseConteudo.classList.add("frase-conteudo");
    
        const fraseAutoria = document.createElement("div");
        fraseAutoria.textContent = frase.autoria;
        fraseAutoria.classList.add("frase-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(frase.id);

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const icones = document.createElement("div");
        icones.classList.add("icones");
        icones.appendChild(botaoEditar);
    
        li.appendChild(fraseConteudo);
        li.appendChild(fraseAutoria);
        li.appendChild(icones);
        listaFrases.appendChild(li);
    }
}


export default ui;
