import { useContext } from "react";
import AppContext from "./context";

function Group({ name }) {
	const { visibleData: users } = useContext(AppContext);

	const groupList = users.filter(({ group }) => group === name);
	const groupListItems = groupList.map(({ fullname, group, id }) => (
		<div className="group-item" key={id}>
			<p>{fullname}</p>
			<p>{group}</p>
		</div>
	));

	return (
		<div className="card" style={{ width: "14rem" }}>
			<div className="card-header">{name}</div>
			<div className="list-group list-group-flush">{groupListItems}</div>
		</div>
	);
}
export default Group;
