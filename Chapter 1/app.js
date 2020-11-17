import React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
function Person() {
	return (
		<div className="person">
			<h1>Manu</h1>
			<p>Age: 23</p>
		</div>
	);
}
ReactDOM.render(<Person />, document.querySelector("#p1"));
=======
function Person(props) {
	return (
		<div className="person">
			<h1>{props.Name}</h1>
			<p>Age: {props.Age}</p>
		</div>
	);
}

var app = (
	<div>
		<Person Name="Manu" Age="20" />
		<Person Name="kas" Age="20" />
	</div>
);

ReactDOM.render(app, document.querySelector("#app"));
>>>>>>> devlop
