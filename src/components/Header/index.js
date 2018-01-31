import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">Dictionary</Link>
				<div className="collapse navbar-collapse">
					<div className="navbar-nav">
						{/* active */}
						<Link className="nav-item nav-link" to="/">Dictionary</Link>
						<Link className="nav-item nav-link" to="/quiz">Quiz</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
