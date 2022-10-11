function UserRow({ user }) {
	const { fullname, account, email, group, phone } = user;

	return (
		<tr>
			<td>{fullname}</td>
			<td>{account}</td>
			<td>{email}</td>
			<td>{group}</td>
			<td>{phone}</td>
		</tr>
	);
}

export default UserRow;
