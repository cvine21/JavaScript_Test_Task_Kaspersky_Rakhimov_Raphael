function SortPanel() {
	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item dropdown border rounded">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{"Cортировать по имени: "}
				</a>
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
			</li>
			<li className="nav-item dropdown border rounded mx-5">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{"Отображать в виде: "}
				</a>
				<ul className="dropdown-menu">
					<li>
						<a className="dropdown-item" href="#">
							таблицы
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							списка
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							групп
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
}

export default SortPanel;
