import React from 'react';
import { moduleName, signOut } from 'ducks/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = ({ signinUser, signOut}) => {
	const
		logOut = !!signinUser
			? <button onClick={signOut}>Sign out</button>
			: <Link to="/auth/signin">Sign in</Link>
			
	return (
		<div className="block-header">
			<div className="container">
				<header className="header">
					<div className="header__logo">
						<Link to="/">Mini Application</Link>
					</div>
					<div className="header__nav">
						<div className="header__nav__item">
							{!!signinUser ? <span>Email: {signinUser.user.email}</span> : ''}
						</div>
						<div className="header__nav__item">
							{logOut}
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}

export default connect(state => ({
	signinUser: state[moduleName].user,
}), { signOut }, null, { pure: false })(Header);
