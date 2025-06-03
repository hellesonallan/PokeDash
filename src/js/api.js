import { BACK4APP_CONFIG } from "../config/config.js";

// HEADERS comuns
const headers = {
  "X-Parse-Application-Id": BACK4APP_CONFIG.APP_ID,
  "X-Parse-REST-API-Key": BACK4APP_CONFIG.API_KEY,
  "Content-Type": "application/json",
};

// READ - Listar todos os Pokémon
export async function fetchPokemonList() {
  try {
    const response = await fetch(BACK4APP_CONFIG.BASE_URL, {
      method: "GET",
      headers,
    });

    if (!response.ok) throw new Error("Erro ao buscar Pokémon");

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar da API:", error);
    return [];
  }
}

// CREATE - Adicionar um novo Pokémon
export async function createPokemon(pokemonData) {
  try {
    const response = await fetch(BACK4APP_CONFIG.BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(pokemonData),
    });

    if (!response.ok) throw new Error("Erro ao criar Pokémon");

    return await response.json();
  } catch (error) {
    console.error("Erro ao criar Pokémon:", error);
    return null;
  }
}

// UPDATE - Atualizar um Pokémon existente
export async function updatePokemon(id, updatedData) {
  try {
    const response = await fetch(`${BACK4APP_CONFIG.BASE_URL}/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error("Erro ao atualizar Pokémon");

    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar Pokémon:", error);
    return null;
  }
}

// DELETE - Remover um Pokémon
export async function deletePokemon(id) {
  try {
    const response = await fetch(`${BACK4APP_CONFIG.BASE_URL}/${id}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) throw new Error("Erro ao deletar Pokémon");

    return true;
  } catch (error) {
    console.error("Erro ao deletar Pokémon:", error);
    return false;
  }
}
