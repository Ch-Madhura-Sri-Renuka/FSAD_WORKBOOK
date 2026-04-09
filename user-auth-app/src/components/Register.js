import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("http://localhost:8080/users/register", user);
      alert("Registered Successfully");
      navigate("/");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <br /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;