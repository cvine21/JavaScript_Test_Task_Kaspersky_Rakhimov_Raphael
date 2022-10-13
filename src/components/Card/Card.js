import ContentLoader from "react-content-loader";

import "./Card.scss";

function Card({ user }) {
	const { fullname, group, phone } = user;

	return (
		<div
			className="user-card text-center border"
			style={{ width: "14rem" }}
		>
			<p className="bold">{fullname}</p>
			<img width={140} src="photo.png" alt="photo" />
			<div className="card-body">
				<p className="card-text">{group}</p>
				<p className="card-text">{phone}</p>
			</div>
		</div>
	);
}

export default Card;
