import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");

    if (!id) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={() => navigate("/profile")}>
        View Profile
      </button>

      <br /><br />

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;