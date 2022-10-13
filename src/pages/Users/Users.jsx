import "./Users.scss";

import UserTable from "../../components/UserTable/UserTable";
import ToolBar from "../../components/Navbar";
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

	// const content = document.querySelector(".content");
	// const displayOptions = content.children;

	return (
		<div className="users-wrapper">
			<ToolBar onUpdateSearch={onUpdateSearch} />
			<div className="content">
				{/* <UserTable users={usersTable} /> */}
				<div className="cards hide">{userCards}</div>
				{/* <div className="groups hide">{groups}</div> */}
			</div>
		</div>
	);
}

export default Users;
