
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
       <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">MNC University Student Information System</h1>
        <Routes>
          <Route path="/" element={<><StudentForm /><StudentList /></>} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/about" element={<div>About Us</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
