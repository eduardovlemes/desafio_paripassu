
export default function Card() {
    return (
        <li className="card">
            <img className="pokemon-photo" alt={''} src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'} />
            <div>
                <h3>POKEMON</h3>
                <p>Habilidade</p>
                <p>Tipo</p>
            </div>
        </li>
    );
}
