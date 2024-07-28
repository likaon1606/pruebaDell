import React from 'react';
import Video360 from './components/Video360';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <h1>My 360 Video in React | DELL</h1>
      </div>
      <div style={{ width: '400px', height: '500px' }}>
        <Video360 />
      </div>
    </div>
  );
}

export default App;
