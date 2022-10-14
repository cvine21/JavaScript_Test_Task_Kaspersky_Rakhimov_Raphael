import { Link } from "react-router-dom";

import "./Header.scss";

function Header(props) {
	const onActive = (e) => {
		const listItems = document.querySelectorAll("li");
		listItems.forEach((item) => item.classList.remove("active"));
		e.target.classList.add("active");
	};

	return (
		<nav className="navbar navbar-dark bg-dark fixed-top">
			<div className="container">
				<Link to="/">
					<div className="logo">
						<img
							width={40}
							height={40}
							src="logo192.png"
							alt="logo"
						/>
						<h3 className="navbar-brand">USERS APP</h3>
					</div>
				</Link>
				<ul className="navbar-list">
					<Link to="/">
						<li
							onClick={onActive}
							className="nav-list-item rounded"
						>
							HOME
						</li>
					</Link>
					<Link to="/users">
						<li
							onClick={onActive}
							className="nav-list-item rounded"
						>
							USERS
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
