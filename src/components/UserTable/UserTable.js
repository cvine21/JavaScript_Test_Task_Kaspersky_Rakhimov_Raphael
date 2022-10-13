import "./UserTable.scss";

import UserRow from "../UserRow";

function UserTable({ users }) {
	const usersList = users.map((user) => (
		<UserRow user={user} key={user.id} />
	));

	return (
		<div className="table-responsive border table-wrapper users-data show">
			<table className="table table-striped table-hover">
				<thead className="table-secondary">
					<tr>
						<th scope="col">Полное имя</th>
						<th scope="col">Учетная запись</th>
						<th scope="col">Электронная почта</th>
						<th scope="col">Группа</th>
						<th scope="col">Номер телефона</th>
					</tr>
				</thead>
				<tbody>{usersList}</tbody>
			</table>
		</div>
	);
}

export default UserTable;
