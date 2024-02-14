import React, { useState, useEffect } from 'react';
import './Form.css'; // Import CSS for styling

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 15000); // Show form after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to backend)
    console.log('Submitted:', { phoneNumber, email });
    // Optionally, you can reset the form fields here
    setPhoneNumber('');
    setEmail('');
    // Hide the form after submission
    setShowForm(false);
  };

  return (
    <div className={`form-container ${showForm ? 'show' : ''}`}>
      <form onSubmit={handleSubmit} className="form">
        <h2>Subscribe</h2>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
