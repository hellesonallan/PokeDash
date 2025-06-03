export function renderAllCharts(pokemons) {
  renderTypesChart(pokemons);
  renderLegendaryChart(pokemons);
  renderStatsChart(pokemons);
}

// Utilitário: criar canvas dentro do container
function createCanvas(id) {
  const container = document.getElementById(id);
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);
  return canvas;
}

function renderTypesChart(pokemons) {
  const canvas = createCanvas("types");

  const typeCounts = {};
  pokemons.forEach((p) => {
    [p.type1, p.type2].forEach((t) => {
      if (t) typeCounts[t] = (typeCounts[t] || 0) + 1;
    });
  });

  const tipoTraducao = {
    normal: "Normal",
    fire: "Fogo",
    water: "Água",
    grass: "Grama",
    electric: "Elétrico",
    ice: "Gelo",
    fighting: "Lutador",
    poison: "Veneno",
    ground: "Terra",
    flying: "Voador",
    psychic: "Psíquico",
    bug: "Inseto",
    rock: "Pedra",
    ghost: "Fantasma",
    dragon: "Dragão",
    dark: "Noturno",
    steel: "Aço",
    fairy: "Fada",
  };

  const tipoCores = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const labels = Object.keys(typeCounts).map(
    (type) => tipoTraducao[type] || type
  );

  // Pegando as cores na ordem dos tipos para o dataset
  const backgroundColors = Object.keys(typeCounts).map(
    (type) => tipoCores[type] || "#CCCCCC" // cinza padrão se não encontrar
  );

  new Chart(canvas, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: Object.values(typeCounts),
          backgroundColor: backgroundColors,
        },
      ],
    },
    options: {
      plugins: {
        title: { display: true, text: "Distribuição de Tipos Pokémon" },
      },
    },
  });
}

function renderLegendaryChart(pokemons) {
  const canvas = createCanvas("legendary");

  let legendaryCount = 0;
  pokemons.forEach((p) => {
    if (p.is_legendary === 1) legendaryCount++;
  });
  const commonCount = pokemons.length - legendaryCount;

  new Chart(canvas, {
    type: "pie", // alterado de 'doughnut' para 'pie'
    data: {
      labels: ["Lendários", "Comuns"],
      datasets: [
        {
          data: [legendaryCount, commonCount],
          backgroundColor: ["#FFD700", "#4B9CD3"],
        },
      ],
    },
  });
}

function renderStatsChart(pokemons) {
  const canvas = createCanvas("stats");

  // Calcular média stats por tipo1
  const statsByType = {};
  const countsByType = {};

  pokemons.forEach((p) => {
    const type = p.type1;
    if (!type) return;

    if (!statsByType[type]) {
      statsByType[type] = {
        hp: 0,
        attack: 0,
        defense: 0,
        sp_attack: 0,
        sp_defense: 0,
        speed: 0,
      };
      countsByType[type] = 0;
    }

    statsByType[type].hp += p.hp;
    statsByType[type].attack += p.attack;
    statsByType[type].defense += p.defense;
    statsByType[type].sp_attack += p.sp_attack;
    statsByType[type].sp_defense += p.sp_defense;
    statsByType[type].speed += p.speed;

    countsByType[type]++;
  });

  const labels = Object.keys(statsByType).sort();
  const datasets = [
    { label: "HP", color: "rgba(255, 99, 132, 0.7)" },
    { label: "Attack", color: "rgba(255, 159, 64, 0.7)" },
    { label: "Defense", color: "rgba(255, 205, 86, 0.7)" },
    { label: "Sp. Attack", color: "rgba(75, 192, 192, 0.7)" },
    { label: "Sp. Defense", color: "rgba(54, 162, 235, 0.7)" },
    { label: "Speed", color: "rgba(153, 102, 255, 0.7)" },
  ];

  const dataSetsForChart = datasets.map(({ label, color }) => ({
    label,
    backgroundColor: color,
    data: labels.map((type) =>
      (
        statsByType[type][label.toLowerCase().replace(/ /g, "_")] /
        countsByType[type]
      ).toFixed(1)
    ),
  }));

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: dataSetsForChart,
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: { title: { display: true, text: "Atributos por Tipo (Média)" } },
    },
  });
}

function generateColors(n) {
  // Gera array de n cores pastel diferentes
  const colors = [];
  for (let i = 0; i < n; i++) {
    const hue = Math.round((360 / n) * i);
    colors.push(`hsl(${hue}, 70%, 70%)`);
  }
  return colors;
}
