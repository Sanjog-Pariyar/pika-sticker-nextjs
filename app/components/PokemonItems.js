"use client"
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import store from "../store/store";
import Pokemons from "./Pokemons";


const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

const PokemonItems = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
          try {
                const response = await fetch(baseURL);
                if (response.ok) {
                    const result = await response.json();
                    store.setPokemon(result.results)
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
      }, []);

      if (error) {
        return <div className="mt-10">Something went wrong! Please try again</div>
    }

  return (
    <>
        { isLoading && <span className="loading loading-spinner text-primary mt-20"></span> }
        {!isLoading && !error && <Pokemons /> }
    </>
  )
}

export default observer(PokemonItems)