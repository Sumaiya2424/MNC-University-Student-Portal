const express = require('express');
const {
  getStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

const router = express.Router();

// Define routes
router.route('/').get(getStudents).post(addStudent);
router.route('/:id').get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;
