import { BACK4APP_CONFIG } from "../../config/config.js";

export async function fetchPokemonList() {
  const headers = {
    "X-Parse-Application-Id": BACK4APP_CONFIG.APP_ID,
    "X-Parse-REST-API-Key": BACK4APP_CONFIG.API_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(BACK4APP_CONFIG.BASE_URL, {
      method: "GET",
      headers,
    });

    if (!response.ok) throw new Error("Erro na API");

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar da API:", error);
    return [];
  }
}
