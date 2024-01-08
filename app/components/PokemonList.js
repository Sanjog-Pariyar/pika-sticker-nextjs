"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonList = ({name, url}) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
                const response = await fetch(url);
                if (response.ok) {
                    const result = await response.json();
                    setImage(result.sprites.other.dream_world.front_default)
                } else {
                    throw new Error('Failed to fetch data');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [url]);

      const pokemonName = name.charAt(0).toUpperCase() + name.slice(1)


  return (
    <div className="m-4 p-3 text-center hover:border border-emerald-400 rounded-md">
        <Link
        href={`/pokemon/${name}`}>
            <Image 
                src={image}
                alt="Pokemon"
                width={150}
                height={150}
                />
            <p className="mt-4 text-neutral text-base">{pokemonName}</p>
        </Link>
    </div>
  )
}

export default PokemonList