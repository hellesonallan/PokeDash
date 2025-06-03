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

  new Chart(canvas, {
    type: "doughnut", // alterado de 'pie' para 'doughnut'
    data: {
      labels: Object.keys(typeCounts),
      datasets: [
        {
          data: Object.values(typeCounts),
          backgroundColor: generateColors(Object.keys(typeCounts).length),
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
