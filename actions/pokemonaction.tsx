"use server";

import PokemonCard, { PokemonProp } from "@/components/PokemonCard";

export const fetchPokemon = async (offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`
  );

  const data = await response.json();

  return data.results.map((item: PokemonProp, index: number) => (
    <PokemonCard key={item.name} pokemon={item} />
  ));
};
