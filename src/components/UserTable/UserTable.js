import "./UserTable.scss";

function UserTable({ users }) {
	return (
		<div className="table-responsive border tableFixHead">
			<table className="table table-striped table-hover">
				<caption>Список пользователей</caption>
				<thead className="table-secondary">
					<tr>
						<th scope="col">Полное имя</th>
						<th scope="col">Учетная запись</th>
						<th scope="col">Электронная почта</th>
						<th scope="col">Группа</th>
						<th scope="col">Номер телефона</th>
					</tr>
				</thead>
				<tbody>{users}</tbody>
			</table>
		</div>
	);
}

export default UserTable;
