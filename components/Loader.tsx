"use client";
import Image from "next/image";
import { fetchPokemon } from "@/actions/pokemonaction";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PokemonCard from "./PokemonCard";

let offset = 8;

export type PokemonCard = JSX.Element;

const Loader = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<PokemonCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchPokemon(offset).then((res) => {
        setData([...data, ...res]);
        offset += 8;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Loader;
