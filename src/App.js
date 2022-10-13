import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";

// import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

import "./App.css";

function App() {
	const [users, setUser] = useState([]);
	const [term, setTerm] = useState("");

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

	const onUpdateSearch = (term) => {
		setTerm(term);
	};

	const visibleData = searchEmp(users, term);

	return (
		<div className="wrapper clear">
			<Header />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route
					path="/users"
					element={
						<Users
							users={visibleData}
							onUpdateSearch={onUpdateSearch}
							onSort={onSort}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
