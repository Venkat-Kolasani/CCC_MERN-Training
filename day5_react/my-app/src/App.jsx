import { useState } from "react";
import StudentForm from "./StudentForm";
import studentsData from "./students";
import "./App.css";

function App() {

  const [students, setStudents] = useState(studentsData);

  const [editStudent, setEditStudent] = useState(null);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    setStudents(
      students.filter(student => student.id !== id)
    );
  }

  function updateStudent(updatedStudent) {

    setStudents(
      students.map(student =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditStudent(null);
  }

  return (
 <div className="container">

      <h1>Student CRUD App</h1>

      <StudentForm
       addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
</thead>

        <tbody>

          {
            students.map(student => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                <td>

                  <button
                    onClick={() => setEditStudent(student)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );
}

export default App;

