import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Header from "./components/Header/Header";

import AppContext from "./context";

function App() {
	const [users, setUser] = useState([]);
	const [term, setTerm] = useState("");
	const [display, setDisplay] = useState("table");

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("http://localhost:8000/users");

				setUser(response.data);
			} catch (error) {
				alert("Ошибка при запросе данных ;(");
				console.error(error);
			}
		}
		fetchData();
	}, []);

	const onSort = (sorted) => {
		setUser(sorted);
	};

	const searchEmp = (items, term) => {
		if (!term.length) return items;
		return items.filter((item) => item.fullname.indexOf(term) !== -1);
	};

	const updateSearch = (term) => {
		setTerm(term);
	};

	const onUpdateDisplay = (display) => {
		setDisplay(display);
	};

	const visibleData = searchEmp(users, term);

	return (
		<AppContext.Provider
			value={{
				visibleData,
				updateSearch,
				onSort,
				display,
				onUpdateDisplay,
			}}
		>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</AppContext.Provider>
	);
}

export default App;
