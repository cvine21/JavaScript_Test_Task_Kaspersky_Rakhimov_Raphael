function Navbar() {
	return (
		<nav class="navbar navbar-light bg-light">
			<button class="btn btn-outline-primary" type="submit">
				Отсортировать по имени
			</button>
			<div class="btn-group btn-group-toggle" data-toggle="buttons">
				<label class="btn btn-primary active">
					<input
						type="radio"
						name="options"
						id="option1"
						autocomplete="off"
						checked
					/>{" "}
					Таблица
				</label>
				<label class="btn btn-primary">
					<input
						type="radio"
						name="options"
						id="option2"
						autocomplete="off"
					/>{" "}
					Карточки
				</label>
				<label class="btn btn-primary">
					<input
						type="radio"
						name="options"
						id="option3"
						autocomplete="off"
					/>{" "}
					Группы
				</label>
			</div>
			<form class="form-inline">
				<input
					class="form-control mr-sm-2"
					type="search"
					placeholder="Поиск"
					aria-label="Search"
				/>
				<button
					class="btn btn-outline-primary my-2 my-sm-0"
					type="submit"
				>
					Поиск
				</button>
			</form>
		</nav>
	);
}
export default Navbar;
