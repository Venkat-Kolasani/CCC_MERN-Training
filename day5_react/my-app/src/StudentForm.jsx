import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setCourse(editStudent.course);
    }
  }, [editStudent]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !course) {
      alert("Fill all fields");
      return;
    }

    const student = {
      id: editStudent ? editStudent.id : Date.now(),
      name,
      course
};

    if (editStudent)
      updateStudent(student);
    else
      addStudent(student);

    setName("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
      />

      <button>
        {editStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;