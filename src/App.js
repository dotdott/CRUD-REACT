import React, { useState } from 'react';
import Form from './components/Form';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  const newName = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
    
      <Form 
        newName={newName}
      />

      <EditForm />
    </div>
  );
}

export default App;
