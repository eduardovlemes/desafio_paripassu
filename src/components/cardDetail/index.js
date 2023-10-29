import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    alignItems: "center",
};

export default function CardDetail({ value, handleOpen, handleClose }) {

    const urlParts = value.species.url.split('/')
    const id = urlParts[urlParts.length - 2]
    const capitalizedName = value.name.charAt(0).toUpperCase() + value.name.slice(1)

    return (
            <Modal
                open={handleOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className="modal">
                        <img
                            alt={value.name}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            width={150}/>
                        <h3>{capitalizedName}</h3>
                        <br></br>

                        <p>Habilidades:</p>
                        <ul>{value.abilities.map((abilityObject, index) => {
                            const abilityName = abilityObject.ability.name;
                            return <li>{index + 1}) {abilityName}</li>
                        })}</ul>

                        <br></br>
                        <p>Tipos:</p>
                        <ul>{value.types.map((typeObject, index) => {
                                const typeName = typeObject.type.name;
                                return <li>{index + 1}) {typeName}</li>
                            })}</ul>
                    </div>
                </Box>
            </Modal>
    );
}
