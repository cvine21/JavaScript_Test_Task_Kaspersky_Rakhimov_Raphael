import SearchPanel from "./SearchPanel";

function Navbar({ onUpdateSearch }) {
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
				<SearchPanel onUpdateSearch={onUpdateSearch} />
			</form>
		</nav>
	);
}
export default Navbar;
