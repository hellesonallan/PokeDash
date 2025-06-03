export function renderStatsCards(pokemons) {
  const total = pokemons.length;

  const typeCounts = {};
  pokemons.forEach((p) => {
    [p.type1, p.type2].forEach((t) => {
      if (t) typeCounts[t] = (typeCounts[t] || 0) + 1;
    });
  });

  const mostCommonType = Object.entries(typeCounts).reduce(
    (max, curr) => (curr[1] > max[1] ? curr : max),
    ["", 0]
  )[0];

  // Objeto para tradução dos tipos
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

  // Função para deixar a primeira letra maiúscula
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Traduz o tipo mais comum, ou mantém original se não tiver tradução
  const mostCommonTypeTranslated =
    tipoTraducao[mostCommonType] || mostCommonType;

  const mostCommonTypePercent = (
    (typeCounts[mostCommonType] / total) *
    100
  ).toFixed(1);

  const fastestPokemon = pokemons.reduce((fastest, current) =>
    current.speed > fastest.speed ? current : fastest
  );

  const legendaryCount = pokemons.filter((p) => p.is_legendary === 1).length;
  const legendaryPercent = ((legendaryCount / total) * 100).toFixed(1);

  const statCards = document.querySelectorAll(".stat-card");

  statCards[0].querySelector(".stat-value").textContent =
    total.toLocaleString();
  statCards[1].querySelector(".stat-value").textContent = capitalize(
    mostCommonTypeTranslated
  );
  statCards[1].querySelector(
    "p.text-muted"
  ).textContent = `${mostCommonTypePercent}% da Pokédex`;
  statCards[2].querySelector(".stat-value").textContent = fastestPokemon.name;
  statCards[2].querySelector(
    "p.text-muted"
  ).textContent = `${fastestPokemon.speed} de Velocidade`;
  statCards[3].querySelector(".stat-value").textContent = legendaryCount;
  statCards[3].querySelector(
    "p.text-muted"
  ).textContent = `${legendaryPercent}% do total`;
}
