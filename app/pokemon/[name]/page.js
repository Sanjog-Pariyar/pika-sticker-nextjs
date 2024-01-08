"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PokemonInfo = ({params}) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`

    const [pokemon, setPokemon] = useState({})
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
          try {
                const response = await fetch(url);
                if (response.ok) {
                    const result = await response.json();
                    setPokemon(result)
                } else {
                    throw new Error('Failed to fetch data');
            }
          } catch (error) {
            setError(error)
          } finally {
            setIsLoading(false)
          }
        };
    
        fetchData();
      }, [url]);

      const image = pokemon.sprites?.other?.dream_world?.front_default || '';

      const stats = pokemon.stats || []

      if (isLoading) {
        return <span className="loading loading-spinner text-primary fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    }

    if (error) {
        return <div>Something went wrong! Please try again</div>
    }

    const pokemonName = params.name.charAt(0).toUpperCase() + params.name.slice(1)

    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl mt-20">
                <figure>
                    <Image 
                        src={image}
                        width={200}
                        height={200}
                        alt={params.name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"># {pokemonName}</h2>
                    { stats.map((stat) => (
                            <div className="italic" key={stat.stat.name}>
                                <p>{stat.stat.name}: {stat.base_stat}</p>
                            </div>
                        ))}
                    <div className="card-actions justify-end">
                        <Link href={'/'}>
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    )
}



export default PokemonInfo