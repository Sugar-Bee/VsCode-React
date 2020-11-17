import React from "react";
import ReactDOM from "react-dom";

function Person() {
	return (
		<div className="person">
			<h1>Manu</h1>
			<p>Age: 23</p>
		</div>
	);
}
ReactDOM.render(<Person />, document.querySelector("#p1"));
