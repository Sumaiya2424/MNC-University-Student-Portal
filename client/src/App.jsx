// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs'; 
import { StudentProvider } from './components/StudentContext';

const App = () => {
  return (
    <StudentProvider> 
      <Router>
        <Navbar />
        <div className="container mt-5">
          <h1 className="text-center">MNC University Student Information System</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <StudentForm /> 
                  <StudentList /> 
                </>
              }
            />
            <Route path="/students" element={<StudentList />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </StudentProvider>
  );
};

export default App;
