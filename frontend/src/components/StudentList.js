import axios from "axios";
import { useEffect, useState } from "react";

function StudentList({ refresh }) {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    loadStudents();
  }, [refresh]);

  const loadStudents = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data));
  };

  const deleteStudent = (id) => {
    axios.delete("http://localhost:8080/students/" + id)
      .then(() => loadStudents());
  };

  const updateStudent = (id) => {
    axios.put("http://localhost:8080/students/" + id, editStudent)
      .then(() => {
        setEditStudent(null);
        loadStudents();
      });
  };

  return (
    <div>
      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>

              <td>{s.id}</td>

              {/* NAME */}
              <td>
                {editStudent?.id === s.id ? (
                  <input
                    value={editStudent.name}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, name: e.target.value })
                    }
                  />
                ) : s.name}
              </td>

              {/* EMAIL */}
              <td>
                {editStudent?.id === s.id ? (
                  <input
                    value={editStudent.email}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, email: e.target.value })
                    }
                  />
                ) : s.email}
              </td>

              {/* COURSE */}
              <td>
                {editStudent?.id === s.id ? (
                  <input
                    value={editStudent.course}
                    onChange={(e) =>
                      setEditStudent({ ...editStudent, course: e.target.value })
                    }
                  />
                ) : s.course}
              </td>

              <td>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>

                {editStudent?.id === s.id ? (
                  <button onClick={() => updateStudent(s.id)}>Save</button>
                ) : (
                  <button onClick={() => setEditStudent(s)}>Edit</button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default StudentList;