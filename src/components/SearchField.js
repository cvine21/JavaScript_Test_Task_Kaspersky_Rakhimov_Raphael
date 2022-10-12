import { useState } from "react";

function SearchField(props) {
	const [term, setTerm] = useState("");

	const onUpdateSearch = (e) => {
		const term = e.target.value;
		setTerm(term);
		props.onUpdateSearch(term);
	};

	return (
		<form className="d-flex" role="search">
			<input
				type="search"
				className="form-control mr-sm-2"
				placeholder="Поиск"
				value={term}
				onChange={onUpdateSearch}
				aria-label="Search"
			/>
		</form>
	);
}

export default SearchField;
