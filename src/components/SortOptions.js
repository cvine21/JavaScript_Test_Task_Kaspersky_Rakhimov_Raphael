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
					<span className="dropdown-item">
						<img src="sort-alpha-up.svg" alt="sort-up" /> по
						возрастанию
					</span>
				</li>
				<li>
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
