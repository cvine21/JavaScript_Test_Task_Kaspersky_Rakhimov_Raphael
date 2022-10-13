function Options() {
	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0 me-3">
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
			<div className="dropdown ms-3">
				<button
					className="btn btn-outline-dark dropdown-toggle border"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{"Отбразить в виде: "}
				</button>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							таблицы
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							карточек
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							групп
						</a>
					</li>
				</ul>
			</div>
		</ul>
	);
}

export default Options;
