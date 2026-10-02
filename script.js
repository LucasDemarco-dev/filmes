function carregarFilmes() {
    fetch("filmes.json")
        .then(resposta => resposta.json())
        .then(filmes => {

            const tabela = document.getElementById("tabela-filmes");

            for (let id in filmes) {

                const filme = filmes[id];

                const linha = document.createElement("tr");

                const celulaId = document.createElement("td");
                celulaId.textContent = id;

                const celulaTitulo = document.createElement("td");
                celulaTitulo.textContent = filme.titulo;

                const celulaGenero = document.createElement("td");
                celulaGenero.textContent = filme.genero;

                const celulaAno = document.createElement("td");
                celulaAno.textContent = filme.ano;

                const celulaNota = document.createElement("td");
                celulaNota.textContent = filme.nota;

                linha.appendChild(celulaId);
                linha.appendChild(celulaTitulo);
                linha.appendChild(celulaGenero);
                linha.appendChild(celulaAno);
                linha.appendChild(celulaNota);

                tabela.appendChild(linha);
            }
        })
        .catch(erro => {
            console.error("Erro ao carregar os filmes:", erro);
        });
}

carregarFilmes();