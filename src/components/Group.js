function Group({ name, users }) {
	const groupList = users.filter(({ group }) => group === name);
	const groupListItems = groupList.map(({ fullname, group }) => (
		<div className="group-item">
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
