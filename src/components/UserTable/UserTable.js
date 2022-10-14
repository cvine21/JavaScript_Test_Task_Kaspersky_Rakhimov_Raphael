import "./UserTable.scss";

import { useContext } from "react";
import AppContext from "../../context";

function UserTable() {
	const { visibleData: users } = useContext(AppContext);

	const usersList = users.map(
		({ fullname, account, email, group, phone, id }) => (
			<tr key={id}>
				<td>{fullname}</td>
				<td>{account}</td>
				<td>{email}</td>
				<td>{group}</td>
				<td>{phone}</td>
			</tr>
		)
	);

	return (
		<div className="table-responsive table-wrapper users-data">
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
