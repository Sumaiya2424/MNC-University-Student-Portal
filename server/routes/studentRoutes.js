const express = require('express');
const { addStudent, getStudents, getStudentById, updateStudent, deleteStudent } = require('../controllers/studentController');
const router = express.Router();

// Routes for managing students
router.route('/')
  .post(addStudent)   
  .get(getStudents);  

router.route('/:id')
  .get(getStudentById)   
  .put(updateStudent)    
  .delete(deleteStudent) 

module.exports = router;

