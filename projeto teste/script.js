let diaAtual = Number(localStorage.getItem("esteticaDia")) || 0;
const TOTAL_DIAS = 30;

const desafiosBase = [
  "Skincare",
  "Cabelo alinhado",
  "Roupa limpa e bem escolhida",
  "Postura durante o dia",
  "Boa apresentação pessoal"
];

function nivelTexto(dia) {
  if (dia < 5) return "básico";
  if (dia < 10) return "consistente";
  if (dia < 15) return "caprichado";
  if (dia < 20) return "alto padrão";
  if (dia < 25) return "impecável";
  return "modo automático";
}

function render() {
  document.getElementById("dia").innerText =
    `Dia ${diaAtual + 1} de ${TOTAL_DIAS}`;

  const nivel = nivelTexto(diaAtual);
  const container = document.getElementById("desafios");
  container.innerHTML = "";

  desafiosBase.forEach((desafio, index) => {
    container.innerHTML += `
      <div class="box">
        <input type="checkbox" id="d${index}">
        <label for="d${index}">
          ${desafio} (${nivel})
        </label>
      </div>
    `;
  });
}

function concluirDia() {
  const checks = document.querySelectorAll("input[type=checkbox]");
  const tudoMarcado = [...checks].every(c => c.checked);

  if (!tudoMarcado) {
    alert("Marca tudo antes de avançar. Sem truque.");
    return;
  }

  if (diaAtual < TOTAL_DIAS - 1) {
    diaAtual++;
    localStorage.setItem("esteticaDia", diaAtual);
    render();
  } else {
    alert("Desafio concluído. Agora segura o padrão.");
  }
}

function voltarDia() {
  if (diaAtual > 0) {
    diaAtual--;
    localStorage.setItem("esteticaDia", diaAtual);
    render();
  } else {
    alert("Já é o primeiro dia. Não tem pra onde voltar.");
  }
}

render();
