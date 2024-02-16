import Image from "next/image";

export interface PokemonProp {
  name: string;
  url: string;
}

interface Prop {
  pokemon: PokemonProp;
  index: number;
}

function PokemonCard({ pokemon, index }: Prop) {
  const pokeNum = pokemon.url.split("/").reverse()[1];
  console.log(pokeNum);

  return (
    <div>
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`}
          alt={pokemon.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full capitalize">
            {pokemon.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
