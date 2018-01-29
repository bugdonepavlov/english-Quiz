import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">Dictionary</Link>
				<div className="collapse navbar-collapse">
					{/* <div className="navbar-nav">
						<Link className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
						<Link className="nav-item nav-link">Features</Link>
						<Link className="nav-item nav-link">Pricing</Link>
						<Link className="nav-item nav-link disabled">Disabled</Link>
					</div> */}
				</div>
			</div>
		</nav>
	);
}

export default Header;
