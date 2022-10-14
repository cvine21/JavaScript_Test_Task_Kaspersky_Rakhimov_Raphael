import { useContext } from "react";

import AppContext from "../../context";

import "./Group.scss";

function Group({ name }) {
	const { visibleData: users } = useContext(AppContext);

	const groupList = users.filter(({ group }) => group === name);
	const groupListItems = groupList.map(({ fullname, group, id }) => (
		<div className="group-item" key={id}>
			<p className="name">{fullname}</p>
			<p className="group-name">{group}</p>
		</div>
	));

	return (
		<div className="card bg-light group">
			<div className="header">{name}</div>
			<div className="users-list bg-light">{groupListItems}</div>
		</div>
	);
}
export default Group;
