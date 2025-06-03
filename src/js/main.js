import { renderAllCharts } from "./charts.js";
import { fetchPokemonList } from "./api.js";
import { renderStatsCards } from "./cards.js";

fetchPokemonList()
  .then((pokemons) => {
    renderAllCharts(pokemons);
    renderStatsCards(pokemons); // <-- Atualiza os cards aqui
  })
  .catch((error) => {
    console.error("Erro ao carregar dados:", error);
  });
