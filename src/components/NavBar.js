import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"
const NavBar = props => {
	const[routes, setRoutes] = useState([])
	useEffect(() => {
		let updatedRoutes = props.routes
		updatedRoutes.length === 3 ? updatedRoutes.shift() : console.log(updatedRoutes.length)
		setRoutes(updatedRoutes)
	}, [])
	return (
		<nav className="NavBar">
			{routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
