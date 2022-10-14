function DisplayOptions() {
	const displayOptions = document.querySelectorAll(".users-data");

	const hideContent = () => {
		displayOptions.forEach((item) => {
			item.classList.add("hide");
			item.classList.remove("show");
		});
	};

	const showContent = (i) => {
		displayOptions[i].classList.add("show");
		displayOptions[i].classList.remove("hide");
	};

	const updateDisplayOption = (i) => {
		hideContent();
		showContent(i);
	};

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
					onClick={() => updateDisplayOption(0)}
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
					onClick={() => updateDisplayOption(1)}
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
					onClick={() => updateDisplayOption(2)}
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
