import React from 'react';

function Card(props) {
    return <div>
        <h4>{props.nome}</h4>
        <p>{props.email}r</p>
        <p>{props.fone}</p>
    </div>
}

export default Card;