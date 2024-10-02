// src/components/StudentForm.jsx

import React, { useState } from 'react';

const StudentForm = ({ fetchStudents }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, email, age };

    await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    // Clear the form
    setName('');
    setEmail('');
    setAge('');

    // Refresh the student list
    fetchStudents();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Add Student</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  );
};

export default StudentForm;
