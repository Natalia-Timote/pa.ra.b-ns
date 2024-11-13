const api = {
    async buscarFrase() {
        try {
            const response = await fetch("http://localhost:3000/frases");
            return await response.json();
        } catch(error) {
            alert("Erro ao buscar frase de aniversário. Tente novamente!");
            console.log(error);
        }
    },

    async salvarFrase(frase) {
        try {
            const response = await fetch("http://localhost:3000/frases", {
                method: "POST",
                headers: {
                    "ContentType": "aplication/json"
                },
                body: JSON.stringify(frase)
            });
            return await response.json;
        } catch (error) {
            alert("Erro ao salvar aa frase de aniversário. Tente novamente mais tarde!");
            console.log(error);
        }
    }
}

export default api;
