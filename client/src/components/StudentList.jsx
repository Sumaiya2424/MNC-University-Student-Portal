import React, { useContext, useState, useEffect } from 'react'; 
import { StudentContext } from './StudentContext';
import ToastNotification from './ToastNotification';

const StudentList = () => {
  const { students, fetchStudents } = useContext(StudentContext);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    age: '',
    course: '',
    phone: '',
    address: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const response = await fetch(`https://mnc-university-student-portal-backend.onrender.com/api/students/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete student');
        }
        fetchStudents(); // Re-fetch students after deletion
        setToastMessage('Student deleted successfully!');
        setShowToast(true);
      } catch (error) {
        console.error('Error deleting student:', error);
        setToastMessage('Failed to delete student.');
        setShowToast(true);
      }
    }
  };

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

  const handleSaveEdit = async (id) => {
    try {
      await fetch(`https://mnc-university-student-portal-backend.onrender.com/api/students/${id}`, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
      setEditingStudent(null);
      fetchStudents(); // Re-fetch students after editing
      setToastMessage('Student updated successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error updating student:', error);
      setToastMessage('Failed to update student.');
      setShowToast(true);
    }
  };

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
      <div className="mt-4"> 
        <h2 className="text-center mb-4">Student List</h2>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-bordered">
                <thead className="table-light">
                  <tr>
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
                              setEditFormData({ ...editFormData, phone: e.target.value })
                            }
                            className="form-control"
                          />
                        </td>
                        <td>
                          <textarea
                            value={editFormData.address}
                            onChange={(e) =>
                              setEditFormData({ ...editFormData, address: e.target.value })
                            }
                            className="form-control"
                          />
                        </td>
                        <td>
  <div className="button-group">
    <button onClick={() => handleSaveEdit(student._id)} className="btn btn-success">
      Save
    </button>
    <button onClick={() => setEditingStudent(null)} className="btn btn-danger">
      Cancel
    </button>
  </div>
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
  <div className="button-group">
    <button onClick={() => handleEdit(student)} className="btn btn-primary">
      Edit
    </button>
    <button onClick={() => handleDelete(student._id)} className="btn btn-danger">
      Delete
    </button>
  </div>
</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }} /> 
      <ToastNotification show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </>
  );
};

export default StudentList;
