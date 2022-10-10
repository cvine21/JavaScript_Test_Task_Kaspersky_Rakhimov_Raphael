import UserRow from "./UserRow";

function UserTable({ users }) {
	return (
		<table>
			<thead>
				<tr>
					<th>fullname</th>
					<th>account</th>
					<th>email</th>
					<th>group</th>
					<th>phone</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<UserRow user={user} />
				))}
			</tbody>
		</table>
	);
}

export default UserTable;
