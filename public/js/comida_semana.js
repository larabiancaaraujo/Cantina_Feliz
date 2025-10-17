const comidasSemana = {
    "Segunda-feira": {
        lanche: "Pão de forma com queijo (sanduíche) e suco",
        almoco: "Arroz, picadinho de carne e sobremesa"
    },
    "Terça-feira": {
        lanche: "Torta de frango e suco",
        almoco: "Arroz, frango assado, feijão e salada"
    },
    "Quarta-feira": {
        lanche: "Pão com frango e suco",
        almoco: "Maria Isabel de frango, feijão e salada"
    },
    "Quinta-feira": {
        lanche: "Bolo doce e suco",
        almoco: "Arroz, feijão preto, toscana e salada"
    },
    "Sexta-feira": {
        lanche: "Mungunzá",
        almoco: "Maria Isabel de frango, feijão e salada"
    }
};

// Mostra as refeições na página
const lista = document.getElementById("listaComidas");

Object.entries(comidasSemana).forEach(([dia, refeicoes]) => {
    const divDia = document.createElement("div");
    divDia.classList.add("dia");

    divDia.innerHTML = `
        <h3>${dia}</h3>
        <h4>Lanche:</h4>
        <ul><li>${refeicoes.lanche}</li></ul>
        <h4>Almoço:</h4>
        <ul><li>${refeicoes.almoco}</li></ul>
    `;

    lista.appendChild(divDia);
});
