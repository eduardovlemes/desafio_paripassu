import Card from "../components/card";
import SearchBar from "../components/searchBar";
import {useEffect, useState} from "react";
import { getPokemons } from '../services/api';
import {getCapitalizeName, getPokemonId} from "../utils";

export default function PokemonListPage() {
    const [pokemons, setPokemons] = useState([]);
    const [filterByName, setFilterByName] = useState(pokemons);
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

    useEffect(() => {
        if (pokemons) {
            const filteredPokemons = pokemons.filter((item) =>
                item.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilterByName(filteredPokemons);
        }
    }, [term, pokemons]);

    return(
        <div className="page-container">
            <h1>POKEDEX</h1>

            <SearchBar
            value={term}
            placeholder={'Buscar Pokemon'}
            onChange={(event) => setTerm(event.target.value)}/>

                <ul className={"card-list"}>
                    {filterByName.length < 1 ? 'Nenhum pokemon foi encontrado com este nome.' :
                        filterByName.map((pokemon) => {

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
