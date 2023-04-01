import "./App.css";

import {useState, useEffect} from "react";
import names from "./data/names.json";

function App() {
	const [inputName, setInputName] = useState("");

	return (
		<div className="wrapper">
			<input type="text" onChange={(e) => setInputName(e.target.value)}></input>
			<ul>
				{names.names
					.filter((name) => name.toLowerCase().includes(inputName.toLowerCase()))
					.map((name) => {
						return <li>{name}</li>;
					})}
			</ul>
		</div>
	);
}

export default App;
