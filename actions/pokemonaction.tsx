"use server";

import PokemonCard, { PokemonProp } from "@/components/PokemonCard";

export const fetchPokemon = async (count: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=10&offset${count}`
  );

  const data = await response.json();

  return data.results.map((item: PokemonProp, index: number) => (
    <PokemonCard key={item.name} pokemon={item} />
  ));
};
