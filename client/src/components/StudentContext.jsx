// StudentContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch(`https://mnc-university-student-portal-backend.onrender.com/api/students`); 
    const data = await response.json();
    setStudents(data);
  };

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, fetchStudents, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
