import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
	return (
		<div className = 'tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='images'src = {`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>	
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
