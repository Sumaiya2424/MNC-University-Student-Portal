import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from './StudentContext';
import ToastNotification from './ToastNotification';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, email, age, course, phone, address };

    try {
      await fetch(`https://mnc-university-student-portal-backend.onrender.com/api/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      addStudent(studentData);
      setToastMessage('Student added successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error adding student:', error);
      setToastMessage('Failed to add student.');
      setShowToast(true);
    }

    // Clear input fields after submission
    setName('');
    setEmail('');
    setAge('');
    setCourse('');
    setPhone('');
    setAddress('');
  };

  // Automatically hide the toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [showToast]); 

  return (
    <>
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
      <ToastNotification show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </>
  );
};

export default StudentForm;
