import Card from "../components/card";
import SearchBar from "../components/searchBar";
import {useEffect, useState} from "react";
import {getPokemon, getPokemons} from '../services/api';
import {getCapitalizeName, getPokemonId} from "../utils";

export default function PokemonListPage() {
    const [pokemons, setPokemons] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const allPokemons = await getPokemons();
                setPokemons(allPokemons);
            } catch (error) {
                alert("Erro: " + error.message);
            }
        }

        fetchData();
    }, []);

    async function fetchPokemonData() {
        if (term.trim() === "") {
            alert("Insira um nome de Pokémon válido.");
            return;
        }

        try {
            const pokemon = await getPokemon(term);
            setPokemons([pokemon]);
        } catch (error) {
            alert("Erro: " + error.message);
        }
    }

    return(
        <div className="page-container">
            <h1>POKEDEX</h1>

            <SearchBar
            value={term}
            placeholder={'Buscar Pokemon'}
            onChange={(event) => setTerm(event.target.value)}
            onClick={fetchPokemonData}/>

                <ul className={"card-list"}>
                    {pokemons.map((pokemon) => {

                        return (
                            <Card
                                key={pokemon.name}
                                alt={pokemon.name}
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon)}.png`}
                                name={getCapitalizeName(pokemon)}
                                types={pokemon.types[0].type.name}
                                height={pokemon.height}
                                weight={pokemon.weight}
                                value={pokemon}
                            />
                        );
                    })}
                </ul>
        </div>
    )
}
