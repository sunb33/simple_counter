import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropType from "prop-types";

const RelojStyles = {
	backgroundColor: "black",
	fontSize: "6em"
};
 const Cuadros ={
backgroundColor="gray",
color="white",
padding="10px",
marginLeft: "20px"
}; 

 
export const Reloj = props => {
	return (
		<div style={RelojStyles}>
			<div>
				<span className="badge badge-secondary" style={Cuadros}>
					<FontAwesomeIcon icon={faClock} />
				</span>
				<span className="badge badge-secondary" style={Cuadros}>
					{props.hours}
				</span>
				<span className="badge badge-secondary" style={Cuadros}>
					{props.minutes}
				</span>
				<span className="badge badge-secondary" style={Cuadros}>
					{props.seconds}
				</span>
			</div>
		</div>
	);
};

Reloj.proptypes = {
	seconds: PropType.int,
	minutes: PropType.int,
	hours: PropType.int
};
