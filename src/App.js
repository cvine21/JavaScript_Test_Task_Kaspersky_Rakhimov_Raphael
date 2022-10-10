import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import UserTable from "./components/UserTable";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
	const [users, setUsers] = useState([]);
	// const [search, setSearch] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("http://localhost:8000/users");

				setUsers(response.data);
			} catch (error) {
				alert("Ошибка при запросе данных ;(");
				console.error(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="wrapper clear">
			<Header />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<UserTable users={users} />} />
			</Routes>
		</div>
	);
}

export default App;
