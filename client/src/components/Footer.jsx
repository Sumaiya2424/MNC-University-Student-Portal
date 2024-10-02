import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MNC University. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://facebook.com" className="text-light" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li className="list-inline-item">
            <a href="https://linkedin.com" className="text-light" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
