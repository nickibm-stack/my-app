import React from 'react';
import './App.scss';
import { CustomHeader } from './Components/CustomHeader';
import { Box } from './Components/Box';


function App() {
  return (
    <div className="App">
      <CustomHeader />

      <div style={{padding:60, display: "flex",justifyContent:"center"}}>
        <Box content='TEXT' boldText='t'/>
      </div>

    </div>
  );
}

export default App;
