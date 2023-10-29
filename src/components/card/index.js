import CardDetail from "../cardDetail";
import * as React from "react";
import {useState} from "react";

export default function Card({ alt, src, name, types, height, weight, value }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let cardColor
    let buttonColor
    if (types === 'grass') {
        cardColor = '#90EE90'
        buttonColor = '#008000'
    } else if (types === 'fire') {
        cardColor = '#ff5454'
        buttonColor = '#8B0000'
    } else if (types === 'water') {
        cardColor = '#7070ff'
        buttonColor = '#00008B'
    } else if (types === 'bug') {
        cardColor = '#af74af'
        buttonColor = '#6A0DAD'
    } else if (types === 'normal') {
        cardColor = '#ffff7b'
        buttonColor = '#FFD700'
    } else {
        cardColor = '#ffffff'
        buttonColor = '#595959'
    }

    return (
        <li className="card" style={{backgroundColor: cardColor}}>
            <img className="pokemon-photo" alt={alt} src={src} />
            <div>
                <h3>{name}</h3>
                <p>Tipo: {types} </p>
                <p>Altura: {height} hg </p>
                <p>Peso: {weight} dm </p>

                <button className="button-detail" onClick={handleOpen} style={{backgroundColor: buttonColor}}>
                    DETALHES
                </button>

                <CardDetail handleOpen={open} handleClose={handleClose} value={value} />
            </div>
        </li>
    );
}
