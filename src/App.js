import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";

// import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

import "./App.css";

function App() {
	const [users, setUser] = useState([]);
	// const [search, setSearch] = useState("");

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

	return (
		<div className="wrapper clear">
			<Header />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<Users users={users} />} />
			</Routes>
		</div>
	);
}

export default App;
