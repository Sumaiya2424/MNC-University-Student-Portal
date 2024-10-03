// StudentContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/students');
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
