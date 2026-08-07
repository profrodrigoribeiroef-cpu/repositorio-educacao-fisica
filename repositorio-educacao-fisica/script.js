// ===============================
// CARREGAR AS ATIVIDADES
// ===============================

function carregarAtividades() {

    carregarUnidade("unidade1", atividades.unidade1);
    carregarUnidade("unidade2", atividades.unidade2);
    carregarUnidade("unidade3", atividades.unidade3);

}

// ===============================
// MONTA CADA UNIDADE
// ===============================

function carregarUnidade(id, lista) {

    const container = document.getElementById(id);

    container.innerHTML = "";

    if (lista.length === 0) {

        container.innerHTML = `
            <p style="color:#777;">
                Nenhuma atividade disponível.
            </p>
        `;

        return;

    }

    lista.forEach(atividade => {

        const icone = atividade.tipo === "pdf" ? "📄" : "🔗";

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="info">

                <h3>${icone} ${atividade.titulo}</h3>

                <p>${atividade.descricao}</p>

            </div>

            <a
                class="botao"
                href="${atividade.link}"
                target="_blank"
            >
                Abrir
            </a>

        `;

        container.appendChild(card);

    });

}

// ===============================
// ABRIR E FECHAR AS UNIDADES
// ===============================

const botoes = document.querySelectorAll(".titulo-unidade");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const conteudo = botao.nextElementSibling;

        const seta = botao.querySelector("span");

        if (conteudo.style.display === "block") {

            conteudo.style.display = "none";

            seta.textContent = "▼";

        } else {

            conteudo.style.display = "block";

            seta.textContent = "▲";

        }

    });

});

// ===============================
// INICIAR A APLICAÇÃO
// ===============================

carregarAtividades();