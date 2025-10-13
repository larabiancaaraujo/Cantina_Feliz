// Banco de dados das refeições
const cardapioSemanas = {
  1: {
    lanches: {
      segunda: "Pão de forma com queijo (sanduíche) e suco",
      terca: "Torta de frango e suco",
      quarta: "Pão com frango e suco",
      quinta: "Bolo doce e suco",
      sexta: "Mungunzá"
    },
    almocos: {
      segunda: "Arroz, picadinho de carne e sobremesa que eu levei",
      terca: "Arroz, frango assado, feijão e salada",
      quarta: "Maria Isabel de frango, feijão e salada",
      quinta: "Arroz, feijão preto, toscana e salada",
      sexta: "Maria Isabel de frango, feijão e salada"
    }
  },
  2: {
    lanches: {
      segunda: "Pão de forma com suco",
      terca: "Creme de galinha",
      quarta: "Pão com ovo e suco",
      quinta: "Cuscuz com calabresa e café com leite",
      sexta: "Pão com carne moída e suco ou vitamina"
    },
    almocos: {
      segunda: "Arroz colorido, fio de frango, farofa e salada",
      terca: "Arroz, feijão, bisteca, farofa e salada",
      quarta: "Arroz, frango assado, feijão e salada",
      quinta: "Arroz, picadinho de carne com legumes e sobremesa",
      sexta: "Arroz, feijão, frango ao molho, macaxeira, farofa e salada"
    }
  },
  3: {
    lanches: {
      segunda: "Pão de forma com queijo e suco",
      terca: "Torta de frango, suco e barra vitamina",
      quarta: "Pão com frango e suco",
      quinta: "Bolo doce e suco",
      sexta: "Mungunzá"
    },
    almocos: {
      segunda: "Arroz, picadinho de carne com legumes e sobremesa",
      terca: "Arroz colorido, filé de frango e farofa",
      quarta: "Arroz, feijão preto, toscana e salada",
      quinta: "Arroz, feijão, frango ao molho, macaxeira e salada",
      sexta: "Strogonoff de frango, arroz e salada"
    }
  },
  4: {
    lanches: {
      segunda: "Pão de forma com patê e suco",
      terca: "Creme de galinha",
      quarta: "Pão com ovo e suco",
      quinta: "Cuscuz com calabresa e café com leite",
      sexta: "Pão com carne moída e suco ou vitamina"
    },
    almocos: {
      segunda: "Arroz, feijão, bisteca, farofa e salada",
      terca: "Arroz, frango assado, feijão e salada",
      quarta: "Arroz, feijão, bisteca, farofa e salada",
      quinta: "Strogonoff de frango, arroz e salada",
      sexta: "Arroz, frango assado, feijão, salada de pepino, cenoura e tomate"
    }
  }
};

// Retorna a semana atual (1 a 4)
function getSemanaDoMes() {
  const hoje = new Date();
  const dia = hoje.getDate();
  return Math.min(Math.ceil(dia / 7), 4);
}

// Exibe o cardápio do dia
function mostrarCardapioDoDia() {
  const dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const hoje = new Date();
  const diaSemana = dias[hoje.getDay()];
  const semana = getSemanaDoMes();
  const cardapioDiv = document.getElementById("cardapio-dia");

  if (diaSemana === "sábado" || diaSemana === "domingo") {
    cardapioDiv.innerHTML = "<p><strong>Hoje não há refeições. A cantina funciona de segunda a sexta.</strong></p>";
    return;
  }

  const dadosSemana = cardapioSemanas[semana];
  const lanche = dadosSemana.lanches[diaSemana];
  const almoco = dadosSemana.almocos[diaSemana];

  cardapioDiv.innerHTML = `
    <h3>📅 Semana ${semana}</h3>
    <p><strong>Lanche:</strong> ${lanche}</p>
    <p><strong>Almoço:</strong> ${almoco}</p>
  `;
}

// Envia o registro de almoço
document.getElementById("almocoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const comer = document.getElementById("comer").value;
  const acompanhamento = document.getElementById("acompanhamento").value;

  if (!comer || !acompanhamento) {
    alert("Por favor, preencha todas as informações antes de registrar.");
    return;
  }

  if (comer === "sim") {
    alert(`✅ Registro confirmado!\nVocê irá comer na escola com acompanhamento de ${acompanhamento}.`);
  } else {
    alert("❌ Registro feito! Você marcou que NÃO irá comer na escola hoje.");
  }

  document.getElementById("almocoForm").reset();
});

window.onload = mostrarCardapioDoDia;
