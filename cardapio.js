// Dados do cardápio organizados por semana
const cardapio = [
    {
        semana: "Primeira Semana",
        lanches: [
            "Segunda-feira: pão de forma com queijo (sanduíche) e suco.",
            "Terça-feira: torta de frango e suco.",
            "Quarta-feira: pão com frango e suco.",
            "Quinta-feira: bolo doce e suco.",
            "Sexta-feira: mungunzá."
        ],
        almocos: [
            "Segunda-feira: arroz, picadinho de carne e sobremesa que eu levei.",
            "Terça-feira: arroz, frango assado, feijão e salada.",
            "Quarta-feira: Maria Isabel de frango, feijão e salada.",
            "Quinta-feira: arroz, feijão preto, toscana e salada.",
            "Sexta-feira: Maria Isabel de frango, feijão e salada."
        ]
    },
    {
        semana: "Segunda Semana",
        lanches: [
            "Segunda-feira: pão de forma com suco.",
            "Terça-feira: creme de galinha.",
            "Quarta-feira: pão com ovo e suco.",
            "Quinta-feira: cuscuz com calabresa e café com leite.",
            "Sexta-feira: pão com carne moída e suco ou vitamina."
        ],
        almocos: [
            "Segunda-feira: arroz colorido, fio de frango, farofa e salada.",
            "Terça-feira: arroz, feijão, bisteca, farofa e salada.",
            "Quarta-feira: arroz, frango assado, feijão e salada.",
            "Quinta-feira: arroz, picadinho de carne com legumes e sobremesa.",
            "Sexta-feira: arroz, feijão, frango ao molho, macaxeira, farofa e salada."
        ]
    },
    {
        semana: "Terceira Semana",
        lanches: [
            "Segunda-feira: pão de forma com queijo e suco.",
            "Terça-feira: torta de frango, suco e barra vitamina.",
            "Quarta-feira: pão com frango e suco.",
            "Quinta-feira: bolo doce e suco.",
            "Sexta-feira: mungunzá."
        ],
        almocos: [
            "Segunda-feira: arroz, picadinho de carne com legumes e sobremesa.",
            "Terça-feira: arroz colorido, filé de frango e farofa.",
            "Quarta-feira: arroz, feijão preto, toscana e salada.",
            "Quinta-feira: arroz, feijão, frango ao molho, macaxeira e salada.",
            "Sexta-feira: strogonoff de frango, arroz e salada."
        ]
    },
    {
        semana: "Quarta Semana",
        lanches: [
            "Segunda-feira: pão de forma com patê e suco.",
            "Terça-feira: creme de galinha.",
            "Quarta-feira: pão com ovo e suco.",
            "Quinta-feira: cuscuz com calabresa e café com leite.",
            "Sexta-feira: pão com carne moída e suco ou vitamina."
        ],
        almocos: [
            "Segunda-feira: arroz, feijão, bisteca, farofa e salada.",
            "Terça-feira: arroz, frango assado, feijão e salada.",
            "Quarta-feira: arroz, feijão, bisteca, farofa e salada.",
            "Quinta-feira: strogonoff de frango, arroz e salada.",
            "Sexta-feira: arroz, frango assado, feijão, salada de pepino, cenoura e tomate."
        ]
    }
];

// Função que gera o cardápio na tela
function exibirCardapio() {
    const container = document.getElementById("cardapioContainer");

    cardapio.forEach(semana => {
        const section = document.createElement("section");
        section.classList.add("semana");

        const titulo = document.createElement("h3");
        titulo.textContent = semana.semana;
        section.appendChild(titulo);

        const lancheTitulo = document.createElement("h4");
        lancheTitulo.textContent = "Lanches";
        section.appendChild(lancheTitulo);

        const listaLanches = document.createElement("ul");
        semana.lanches.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listaLanches.appendChild(li);
        });
        section.appendChild(listaLanches);

        const almocoTitulo = document.createElement("h4");
        almocoTitulo.textContent = "Almoços";
        section.appendChild(almocoTitulo);

        const listaAlmocos = document.createElement("ul");
        semana.almocos.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listaAlmocos.appendChild(li);
        });
        section.appendChild(listaAlmocos);

        container.appendChild(section);
    });
}

// Quando a página carregar, mostra o cardápio
document.addEventListener("DOMContentLoaded", exibirCardapio);
