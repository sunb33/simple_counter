import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const RelojStyles = {
	backgroundColor: "black",
	fontSize: "6em"
};
const Margen = {
	marginLeft: "20px",
	color: "white"
};

var seconds = 0;
var minutes = 0;
var hours = 0;

export const Reloj = () => {
	return (
		<div style={RelojStyles}>
			<div>
				<span className="badge badge-secondary">
					<FontAwesomeIcon icon={faClock} />
				</span>
				<span className="badge badge-secondary" style={Margen}>
					{hours}
				</span>
				<span className="badge badge-secondary" style={Margen}>
					{minutes}
				</span>
				<span className="badge badge-secondary" style={Margen}>
					{seconds}
				</span>
			</div>
		</div>
	);
};

setInterval(function() {
	if (seconds <= 58) {
		seconds += 1;
	} else {
		seconds = 0;
		minutes += 1;
	}
	if (minutes >= 60) {
		hours += 1;
	} else hours >= 23;
	{
		hours = 0;
	}
	ReactDOM.render(<Reloj />, document.querySelector("#app"));
}, 1000);
