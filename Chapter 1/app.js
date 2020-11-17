import React from "react";
import ReactDOM from "react-dom";

function Person(props) {
	return (
		<div className="person">
			<h1>{props.Name}</h1>
			<p>Age: {props.Age}</p>
		</div>
	);
}
ReactDOM.render(<Person Name="Manu" Age="20" />, document.querySelector("#p1"));

ReactDOM.render(<Person Name="kas" Age="20" />, document.querySelector("#p2"));
