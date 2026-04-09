import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");

    if (!id) {
      navigate("/");
    } else {
      axios.get(`http://localhost:8080/users/${id}`)
        .then(res => setUser(res.data))
        .catch(() => alert("Error fetching profile"));
    }
  }, []);

  return (
    <div>
      <h2>Profile</h2>

      <p><b>ID:</b> {user.id}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;