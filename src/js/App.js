import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div>
			<p>React here!</p>
			<p>React There!</p>
		</div>
	);
};

export default App;
ReactDOM.render(<App />, document.getElementById('app'))