import "./Users.scss";

import UserTable from "../../components/UserTable/UserTable";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card/Card";
import Group from "../../components/Group";
import { useState } from "react";

function Users({ users, onUpdateSearch, onSort }) {
	const groupNames = ["Intern", "Junior", "Middle", "Senior"];
	const groups = groupNames.map((item) => (
		<Group name={item} users={users} />
	));
	const userCards = users.map((user) => <Card user={user} />);

	return (
		<div className="users-wrapper">
			<Navbar
				onUpdateSearch={onUpdateSearch}
				onSort={onSort}
				users={users}
			/>
			<div>
				<UserTable users={users} />
				<div className="cards users-data hide">{userCards}</div>
				<div className="groups users-data hide">{groups}</div>
			</div>
		</div>
	);
}

export default Users;
