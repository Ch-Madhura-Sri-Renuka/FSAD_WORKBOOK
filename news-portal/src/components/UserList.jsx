import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Error fetching users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>API Users</h2>
      {users.map(user => (
        <p key={user.id}>
          {user.name} - {user.email} - {user.phone}
        </p>
      ))}
    </div>
  );
}

export default UserList;