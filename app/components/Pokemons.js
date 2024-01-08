"use client"
import { observer } from "mobx-react";
import store from "../store/store";
import PokemonList from "./PokemonList";

const Pokemons = () => {

    const pokemons = store.pokemon
    const filter = store.filter

    const filterResult = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="flex justify-center flex-wrap">
        {
            filterResult.map((pokemon) => (
                <div key={pokemon.name}>
                    <PokemonList 
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default observer(Pokemons)