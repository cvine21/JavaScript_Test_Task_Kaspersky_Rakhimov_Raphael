import { useContext } from "react";
import AppContext from "../../components/context";

import UserTable from "../../components/UserTable/UserTable";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card/Card";
import Group from "../../components/Group";

import "./Users.scss";

function Users() {
	const { visibleData: users } = useContext(AppContext);

	const groupNames = ["Intern", "Junior", "Middle", "Senior"];
	const groups = groupNames.map((item) => <Group name={item} />);
	const userCards = users.map((user) => <Card user={user} />);

	return (
		<div className="users-wrapper">
			<Navbar />
			<div>
				<UserTable />
				<div className="cards users-data hide">{userCards}</div>
				<div className="groups users-data hide">{groups}</div>
			</div>
		</div>
	);
}

export default Users;
