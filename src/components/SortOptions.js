import { useState } from "react";

function SortOptions({ onSort, users }) {
	const [direction, setDirection] = useState(0);

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
				className="btn btn-outline-dark dropdown-toggle border"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{"Сортировать по: "}
			</button>
			<ul className="dropdown-menu">
				<li onClick={() => sort(1)}>
					<span className="dropdown-item">
						<img src="sort-alpha-up.svg" alt="sort-up" /> по
						возрастанию
					</span>
				</li>
				<li onClick={() => sort(-1)}>
					<span className="dropdown-item">
						<img src="sort-alpha-down.svg" alt="sort-down" /> по
						убыванию
					</span>
				</li>
			</ul>
		</div>
	);
}

export default SortOptions;
