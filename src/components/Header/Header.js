import { Link } from "react-router-dom";

import "./Header.scss";

function Header(props) {
	return (
		<header>
			<Link to="/">
				<div className="logo">
					<img width={40} height={40} src="logo192.png" alt="logo" />
					<div>
						<h3>USERS</h3>
						<p>Реакт приложение</p>
					</div>
				</div>
			</Link>
			<ul>
				<li>Home</li>
				<li>Users</li>
			</ul>
		</header>
	);
}

export default Header;
