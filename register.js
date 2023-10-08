function renderUserData() {
  const dbRef = ref(db);
  get(child(dbRef, "UsersList")).then((snapshot) => {
    if (snapshot.exists()) {
      const userData = snapshot.val();
      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      `;
      Object.keys(userData).forEach(key => {
        const user = userData[key];
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.fullname}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
        `;
        table.querySelector("tbody").appendChild(row);
      });
      document.body.appendChild(table);
    }
  });
}

renderUserData();
