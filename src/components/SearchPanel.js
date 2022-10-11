import { useState } from "react";

function SearchPanel(props) {
	const [term, setTerm] = useState("");

	const onUpdateSearch = (e) => {
		const term = e.target.value;
		setTerm(term);
		props.onUpdateSearch(term);
	};

	return (
		<input
			type="search"
			className="form-control mr-sm-2"
			placeholder="Поиск"
			value={term}
			onChange={onUpdateSearch}
			aria-label="Search"
		/>
	);
}

export default SearchPanel;
