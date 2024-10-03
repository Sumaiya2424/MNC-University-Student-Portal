const Student = require('../models/Student');

const addStudent = async (req, res) => {
  const { name, email, age, course, phone, address } = req.body;

  try {
    const student = new Student({ name, email, age, course, phone, address });
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error adding student' });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching students' });
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching student' });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, age, course, phone, address } = req.body;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.name = name || student.name;
    student.email = email || student.email;
    student.age = age || student.age;
    student.course = course || student.course;
    student.phone = phone || student.phone;
    student.address = address || student.address;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error updating student' });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
          return res.status(404).json({ message: 'Student not found' });
      }

      res.json({ message: 'Student deleted successfully' });
  } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ message: 'Error deleting student' });
  }
};



module.exports = { addStudent, getStudents, getStudentById, updateStudent, deleteStudent };

