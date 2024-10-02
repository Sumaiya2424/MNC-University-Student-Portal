// src/components/StudentList.jsx

import React, { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/students');
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul className="list-group">
        {students.map((student) => (
          <li className="list-group-item" key={student._id}>
            {student.name} - {student.email} - {student.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
