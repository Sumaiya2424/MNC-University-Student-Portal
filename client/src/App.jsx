import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/students');
    const data = await response.json();
    setStudents(data);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">MNC University Student Information System</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StudentForm fetchStudents={fetchStudents} />
                <StudentList students={students} fetchStudents={fetchStudents} />
              </>
            }
          />
          <Route path="/students" element={<StudentList students={students} fetchStudents={fetchStudents} />} />
          <Route path="/about" element={<div>About Us</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
