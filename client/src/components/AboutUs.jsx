import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5"> {/* Add mb-5 for margin-bottom */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-primary">Welcome to Our Student Management System</h2>
          <p className="card-text">
            Our Student Management System is designed to streamline the management of student data 
            in educational institutions. We aim to provide an efficient and user-friendly interface 
            that enables educators to focus on what truly matters: nurturing and educating students.
          </p>
          <h3 className="text-secondary">Our Mission</h3>
          <p className="card-text">
            Our mission is to simplify the management of student information through innovative technology. 
            We strive to enhance communication between students, teachers, and parents, ensuring everyone is 
            informed and engaged in the educational journey.
          </p>
          <h3 className="text-secondary">Why Choose Us?</h3>
          <ul>
            <li>📚 Comprehensive Management: Easily manage student details, courses, and performance.</li>
            <li>🌐 User-Friendly Interface: Designed with simplicity and efficiency in mind.</li>
            <li>🔒 Secure Data: Your data is protected with top-notch security measures.</li>
            <li>🤝 Supportive Community: Join a community of educators dedicated to student success.</li>
          </ul>
          <h3 className="text-secondary">Get in Touch!</h3>
          <p className="card-text">
            We are here to help! If you have any questions or feedback, feel free to reach out to us at 
            <a href="mailto:info@studentmanagement.com"> info@studentmgmt.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
