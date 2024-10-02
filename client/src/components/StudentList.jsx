import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the server
  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/students');
    const data = await response.json();
    setStudents(data);
  };

  // Use useEffect to fetch students when the component loads
  useEffect(() => {
    fetchStudents();
  }, []);

  const [editingStudent, setEditingStudent] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
    phone: '',    
    address: '',  
  });

  // Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
      });
      fetchStudents(); // Re-fetch students after deletion
    }
  };

  // Handle Edit
  const handleEdit = (student) => {
    setEditingStudent(student._id);
    setEditFormData({
      name: student.name,
      email: student.email,
      age: student.age,
      course: student.course,
      phone: student.phone,    
      address: student.address,  
    });
  };

  // Handle Save Edit
  const handleSaveEdit = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editFormData),
    });
    setEditingStudent(null);
    fetchStudents(); // Re-fetch students after editing
  };

  return (
    <div className="container">
      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr className="bg-primary text-white">
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) =>
            editingStudent === student._id ? (
              <tr key={student._id}>
                <td>
                  <input
                    type="text"
                    value={editFormData.name}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, name: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={editFormData.email}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, email: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={editFormData.age}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, age: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    value={editFormData.course}
                    onChange={(e) =>
                      setEditFormData({ ...editFormData, course: e.target.value })
                    }
                    className="form-select"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Business Administration">Business Administration</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </td>
                <td>
                  <input
                    type="tel"
                    value={editFormData.phone}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        phone: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editFormData.address}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        address: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleSaveEdit(student._id)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingStudent(null)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>{student.phone}</td>
                <td>{student.address}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
