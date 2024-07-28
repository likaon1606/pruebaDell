import React from 'react';
import Video360 from './components/Video360';

function App() {
  return (
    <div className='App'>
      <h1>My 360 Video in React</h1>
      <div style={{ width: '400px', height: '500px' }}>
        <Video360 />
      </div>
    </div>
  );
}

export default App;
