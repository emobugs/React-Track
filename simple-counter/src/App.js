import React, {Component} from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	decrement = () => {
		this.setState({count: this.state.count - 1});
	};

	increment = () => {
		this.setState({count: this.state.count + 1});
	};

	render() {
		return (
			<div className="App">
				<button className="counter" onClick={this.decrement}>
					-
				</button>
				<h1>{this.state.count}</h1>
				<button className="counter" onClick={this.increment}>
					+
				</button>
			</div>
		);
	}
}

export default App;
