import React, { useState } from 'react';

const StudentForm = ({ fetchStudents }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState(''); 
  const [address, setAddress] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, email, age, course, phone, address }; 

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
    setCourse('');
    setPhone(''); 
    setAddress(''); 

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
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          rows="3"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="courseSelect" className="form-label">Select Course</label>
        <select
          id="courseSelect"
          className="form-select"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Choose a course...</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Student</button>
    </form>
  );
};

export default StudentForm;
