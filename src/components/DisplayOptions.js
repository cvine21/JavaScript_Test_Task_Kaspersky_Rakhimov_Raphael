import { useContext } from "react";

import AppContext from "../context";

function DisplayOptions() {
	const { onUpdateDisplay } = useContext(AppContext);

	return (
		<div className="dropdown ms-3">
			<button
				className="btn btn-light dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{"Отбразить в виде: "}
			</button>
			<ul className="dropdown-menu">
				<li
					onClick={() => onUpdateDisplay("table")}
					className="dropdown-item"
				>
					<button
						className="dropdown-item"
						aria-labelledby="dropdownMenu2"
					>
						таблицы
					</button>
				</li>
				<li
					onClick={() => onUpdateDisplay("cards")}
					className="dropdown-item"
				>
					<button
						className="dropdown-item"
						aria-labelledby="dropdownMenu2"
					>
						карточек
					</button>
				</li>
				<li
					onClick={() => onUpdateDisplay("groups")}
					className="dropdown-item"
				>
					<button
						className="dropdown-item"
						aria-labelledby="dropdownMenu2"
					>
						групп
					</button>
				</li>
			</ul>
		</div>
	);
}
export default DisplayOptions;
