import { Link } from "react-router-dom";

import "./Header.scss";

function Header(props) {
	return (
		<nav
			className="navbar navbar-expand-lg bg-secondary fixed-top"
			id="main-nav"
		>
			<Link to="/">
				<div className="logo">
					<img width={40} height={40} src="logo192.png" alt="logo" />
					<h3>USERS APP</h3>
				</div>
			</Link>
			<ul>
				<Link to="/">
					<li>HOME</li>
				</Link>
				<Link to="/users">
					<li>USERS</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Header;
