import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const API = "http://localhost:8080/api/students";

  useEffect(() => {
    axios.get(API)
      .then(res => setStudents(res.data))
      .catch(() => alert("API connection failed."));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API, form)
      .then(res => {
        setStudents([...students, res.data]);
        setForm({ name: "", email: "", course: "" });
      })
      .catch(() => alert("Save failed."));
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>🎓 Student Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ marginRight: 10 }}
        />
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={form.course}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        />
        <button type="submit">Add Student</button>
      </form>

      <h3>📋 Student List</h3>
      <table border="1" cellPadding="8" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ?
            <tr><td colSpan="4">No students found</td></tr> :
            students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td><td>{s.name}</td><td>{s.email}</td><td>{s.course}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagement;
