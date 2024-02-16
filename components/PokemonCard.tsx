import Image from "next/image";

export interface PokemonProp {
  name: string;
  url: string;
}

interface Prop {
  pokemon: PokemonProp;
}

function PokemonCard({ pokemon }: Prop) {
  const pokeNum = pokemon.url.split("/").reverse()[1];

  return (
    <div className="px-8 border border-rounded">
      <div className="relative">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNum}.png`}
          alt={pokemon.name}
          width="100"
          height="100"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-black text-xl line-clamp-1 w-full capitalize">
            {pokemon.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
