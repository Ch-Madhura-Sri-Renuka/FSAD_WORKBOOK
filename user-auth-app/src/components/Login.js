import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:8080/users/login", user);

      if (res.data) {
        localStorage.setItem("userId", res.data.id);
        navigate("/home");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <br /><br />

      <button onClick={login}>Login</button>

      <p onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "blue" }}>
        Don't have an account? Register
      </p>
    </div>
  );
}

export default Login;