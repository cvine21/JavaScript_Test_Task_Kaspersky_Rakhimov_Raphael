function UserRow({ user }) {
	return (
		<tr>
			<td>${user.fullname}</td>
			<td>${user.account}</td>
			<td>${user.email}</td>
			<td>${user.group}</td>
			<td>${user.phone}</td>
		</tr>
	);
}

export default UserRow;
