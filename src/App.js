import react, { useEffect, useState } from "react";
import style from "./style.css";

const App = () => {
	var pokeDado = [];
	const [pokemon, setpokemon] = useState([]);
	const getPokemons = async () => {
		for (let index = 1; index <= 150; index++) {
			const url = `https://pokeapi.co/api/v2/pokemon/${index}/`;
			const response = await fetch(url);
			const dados = await response.json();
			pokeDado.push(dados);
		}
		setpokemon(pokeDado);
	};
	useEffect(() => {
		getPokemons();
	}, []);
	console.log(pokemon);
	return (
		<section className="pokemons">
			{pokemon.map((pokemon) => (
				<div key={pokemon.name} className={"pokemon-card"}>
					<img src={pokemon.sprites.front_default}></img>
					<p>{pokemon.name}</p>
					<p>{pokemon.height}</p>
					<p>{pokemon.width}</p>
				</div>
			))}
		</section>
	);
};

export default App;
