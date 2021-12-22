import {
	useEffect,
	useState
} from "react";

export const Actions = () => {
	let [users, setUsers] = useState([]);

	//userLength is for showing the Data Loading message.
	let [userLength, setUserLength] = useState(null);
	useEffect(() => {
		fetch("http://127.0.0.1:8080/storeHouse/Users/all-users.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					setUsers(data.users);
					setUserLength(true);
				} else {
					setUserLength(0);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Inserting a new user into the database.
	const insertUser = (newUser) => {
		fetch(" http://127.0.0.1:8080/storeHouse/Users/add-user.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newUser),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.id) {
					setUsers([{
							id: data.id,
							...newUser,
						},
						...users,
					]);
					setUserLength(true);
				} else {
					alert(data.msg);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// check for a User for login
	const chekcUser = (userData) => {
		fetch("http://127.0.0.1:8080/storeHouse/Users/login-user.php")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					setUsers(data.users.reverse());
					setUserLength(true);
				} else {
					setUserLength(0);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Enabling the edit mode for a listed user.
	const editMode = (id) => {
		users = users.map((user) => {
			if (user.id === id) {
				user.isEditing = true;
				return user;
			}
			user.isEditing = false;
			return user;
		});
		setUsers(users);
	};

	// Cance the edit mode.
	const cancelEdit = (id) => {
		users = users.map((user) => {
			if (user.id === id) {
				user.isEditing = false;
				return user;
			}
			return user;
		});
		setUsers(users);
	};

	// Updating a user.
	const updateUser = (userData) => {
		fetch("http://127.0.0.1:8080/storeHouse/Users/update-user.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					users = users.map((user) => {
						if (user.id === userData.id) {
							user.isEditing = false;
							user.user_name = userData.user_name;
							user.user_email = userData.user_email;
							user.user_pass = userData.pass;
							return user;
						}
						return user;
					});
					setUsers(users);
				} else {
					alert(data.msg);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// Deleting a user.
	const deleteUser = (theID) => {
		// filter outing the user.
		let userDeleted = users.filter((user) => {
			return user.id !== theID;
		});
		fetch("http://127.0.0.1:8080/storeHouse/Users/delete-user.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: theID
				}),
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					setUsers(userDeleted);
					if (users.length === 1) {
						setUserLength(0);
					}
				} else {
					alert(data.msg);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return {
		users,
		editMode,
		cancelEdit,
		updateUser,
		insertUser,
		deleteUser,
		userLength,
		chekcUser,
	};
};