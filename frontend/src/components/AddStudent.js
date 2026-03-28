import axios from "axios";
import { useState } from "react";

function AddStudent({ refresh }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/students", {
      name,
      email,
      course
    });

    setName("");
    setEmail("");
    setCourse("");

    refresh(); // 🔥 refresh list
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;