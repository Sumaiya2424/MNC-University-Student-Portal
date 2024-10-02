const Student = require('../models/Student');

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new student
const addStudent = async (req, res) => {
  const { name, email, age, course } = req.body;

  try {
    const student = new Student({
      name,
      email,
      age,
      course,
    });

    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error adding student' });
  }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.remove();
    res.json({ message: 'Student removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
