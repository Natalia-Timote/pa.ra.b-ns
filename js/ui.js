import api from "./api.js";

const ui = {
    async renderizarFrases() {
        const listaFrases = document.getElementById("lista-frases");

        try {
            const frases = await api.buscarFrase();

            frases.forEach(frase => {
                listaFrases.innerHTML += `
                    <li class="li-frase" data-id="${frase.id}">
                        <div class="frase-conteudo">${frase.conteudo}</div>
                        <div class="frase-autoria">${frase.autoria}</div>
                `;
            })
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
    
        li.appendChild(fraseConteudo);
        li.appendChild(fraseAutoria);
        listaFrases.appendChild(li);
    }
}


export default ui;
