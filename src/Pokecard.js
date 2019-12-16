import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
	render() {
		const formatNum = (num) => {
			return num <= 999 ? `00${num}`.slice(-3) : num;
		};
		let imgSrc = `${POKE_API}${formatNum(this.props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title"> {this.props.name}</h1>
				<div className="Pokecard-image">
					<img alt={this.props.name} src={imgSrc} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">Exp: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
