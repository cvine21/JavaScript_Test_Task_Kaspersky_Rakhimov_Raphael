import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {
	return (
		<main className="hero">
			<div className="center">
				<img width={240} src="avataaars.svg" alt="avatar" />
				<h1>USERS APP</h1>
				<p>An application that displays a list of users.</p>
				<Link to={"/users"}>
					<button className="btn btn-lg btn-secondary fw-bold bg-dark">
						Show list
					</button>
				</Link>
			</div>
		</main>
	);
}

export default Home;
