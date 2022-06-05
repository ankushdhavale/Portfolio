import React from "react";
import './NavLink.css'

const NavLink = (props) => {
	return (
		<a href={props.link} className="NavLinkName" onClick={props.hide}>
			{props.children}
		</a>
	);
};

export default NavLink;