function SortOptions() {
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
				<li>
					<a className="dropdown-item" href="#">
						<img src="sort-alpha-up.svg" alt="sort-up" /> по
						возрастанию
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						<img src="sort-alpha-down.svg" alt="sort-down" /> по
						убыванию
					</a>
				</li>
			</ul>
		</div>
	);
}

export default SortOptions;
