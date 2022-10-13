function DisplayOptions() {
	return (
		<div className="dropdown ms-3 ">
			<button
				className="btn btn-outline-dark dropdown-toggle border "
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{"Отбразить в виде: "}
			</button>
			<ul className="dropdown-menu ">
				<li>
					<a className="dropdown-item " href="#">
						таблицы
					</a>
				</li>
				<li>
					<a className="dropdown-item " href="#">
						карточек
					</a>
				</li>
				<li>
					<a className="dropdown-item " href="#">
						групп
					</a>
				</li>
			</ul>
		</div>
	);
}
export default DisplayOptions;
