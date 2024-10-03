import React from 'react';

const ToastNotification = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="toast-container">
      <div className="toast-box">
        <div className="toast-message">{message}</div>
        <button className="toast-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;
