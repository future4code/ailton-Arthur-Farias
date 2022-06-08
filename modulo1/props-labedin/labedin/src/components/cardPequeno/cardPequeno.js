import React from 'react'
import './cardPequeno.css'

function CardPequeno(props) {
	return (
		<div className='image-button-container'>
			<img src={props.imagem} />
			<p>{props.texto}</p>
		</div>
	)
}

export default CardPequeno
