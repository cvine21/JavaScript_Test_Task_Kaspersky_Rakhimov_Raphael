import "./Users.scss";

import UserTable from "../../components/UserTable/UserTable";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card/Card";
import UserRow from "../../components/UserRow";
import Group from "../../components/Group";

function Users({ users, onUpdateSearch }) {
	const groupNames = ["Intern", "Junior", "Middle", "Senior"];
	const groups = groupNames.map((item) => (
		<Group name={item} users={users} />
	));
	const usersTable = users.map((user) => <UserRow user={user} />);
	const userCards = users.map((user) => <Card user={user} />);

	return (
		<div>
			<Navbar onUpdateSearch={onUpdateSearch} />
			<UserTable users={usersTable} />
			{/* <div className="cards">{userCards}</div> */}
			{/* <div className="groups">{groups}</div> */}
		</div>
	);
}

export default Users;
