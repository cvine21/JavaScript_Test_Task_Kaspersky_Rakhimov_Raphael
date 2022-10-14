import { useContext, useState } from "react";
import AppContext from "../context";

function SortOptions() {
	const [direction, setDirection] = useState(0);
	const { visibleData: users, onSort } = useContext(AppContext);

	const sort = (order) => {
		if (order === direction) return;

		let sorted = [...users].sort((a, b) => {
			if (a.fullname === b.fullname) return 0;
			return a.fullname > b.fullname ? order : -order;
		});

		setDirection(order);
		onSort(sorted);
	};

	return (
		<div className="dropdown">
			<button
				className="btn btn-light dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{"Сортировать по: "}
			</button>
			<ul className="dropdown-menu">
				<li onClick={() => sort(1)}>
					<button
						className="dropdown-item"
						aria-labelledby="dropdownMenu2"
					>
						<img src="sort-alpha-up.svg" alt="sort-up" /> по
						возрастанию
					</button>
				</li>
				<li onClick={() => sort(-1)}>
					<button
						className="dropdown-item"
						aria-labelledby="dropdownMenu2"
					>
						<img src="sort-alpha-down.svg" alt="sort-down" /> по
						убыванию
					</button>
				</li>
			</ul>
		</div>
	);
}

export default SortOptions;
