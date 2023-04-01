import "./App.css";

import {useState, useEffect} from "react";
import names from "./data/names.json";

function App() {
	const [namesList, setNamesList] = useState(names.names);
	const [inputName, setInputName] = useState();

	const inputHandler = (e) => {
		setInputName(e.target.value);

		let appearList = [...namesList];
		appearList = appearList.filter((name) =>
			name.toLowerCase().includes(inputName.toLowerCase())
		);
		console.log(appearList);
		setNamesList(appearList);
	};

	return (
		<div className="wrapper">
			<input type="text" onChange={inputHandler} value={inputName}></input>
			<ul>
				{namesList &&
					namesList.map((name) => {
						return <li>{name}</li>;
					})}
			</ul>
		</div>
	);
}

export default App;
