import "./App.css";

import {useState} from "react";

function App() {
	const [temp, setTemp] = useState(10);

	// set state for color variables
	const [red, setRed] = useState(50);
	const [blue, setBlue] = useState(50);
	const [color, setColor] = useState(`rgba(${red}, 50, ${blue})`);

	// decrement temp -> increase blue and reduce red
	const decrement = () => {
		setTemp(temp - 1);
		setBlue(blue + 5);
		setRed(red - 5);
		setColor(`rgba(${red}, 50, ${blue})`);
	};

	// increment temp -> reduce blue and increase red
	const increment = () => {
		setTemp(temp + 1);
		setBlue(blue - 5);
		setRed(red + 5);
		setColor(`rgba(${red}, 50 , ${blue})`);
	};

	return (
		<div className="wrapper" style={{backgroundColor: color}}>
			<div className="temp-cnt">
				<h1 className="temp">{temp}°C</h1>
			</div>
			<div className="buttons-cnt">
				<button className="btn" onClick={decrement}>
					-
				</button>
				<button className="btn" onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
}

export default App;
