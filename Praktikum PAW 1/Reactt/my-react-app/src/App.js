import React, { useState } from 'react';
import './App.css';

function App() {
  const [nama, setNama] = useState('');

  const handleInputChange = (event) => {
    setNama(event.target.value);
  };
  
  const appStyle = {
    backgroundColor: '#f0f4f8', 
    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif" 
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px' 
  };
  
  const h1Style = {
    color: '#8c3838ff' 
  };

  return (

    <div className="App" style={appStyle}>
      <header className="App-header">
        
        <h1 style={h1Style}>
          Hello, {nama || 'Pengunjung'}!
        </h1>

        <input
          type="text"
          placeholder="Ketik namamu di sini..."
          value={nama}
          onChange={handleInputChange}
          style={inputStyle}
        />
        
      </header>
    </div>
  );
}

export default App;