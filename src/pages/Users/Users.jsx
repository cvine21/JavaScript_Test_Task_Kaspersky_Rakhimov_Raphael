import { useContext } from "react";

import AppContext from "../../context";
import UserTable from "../../components/UserTable/UserTable";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Group from "../../components/Group/Group";

import "./Users.scss";

function Users() {
	const { visibleData: users, display } = useContext(AppContext);

	const groupNames = ["Intern", "Junior", "Middle", "Senior"];
	const groups = groupNames.map((item) => <Group name={item} />);
	const userCards = users.map((user) => <Card user={user} />);

	return (
		<div className="users-wrapper">
			<Navbar />
			{display === "table" ? (
				<UserTable />
			) : display === "cards" ? (
				<div className="cards users-data">{userCards}</div>
			) : (
				<div className="groups users-data">{groups}</div>
			)}
		</div>
	);
}

export default Users;
