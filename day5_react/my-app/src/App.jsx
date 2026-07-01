import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'Light Theme';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = 'Dark Theme';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Theme Change</h1>
      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;