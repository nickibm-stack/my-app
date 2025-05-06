import React from 'react';

import { CustomHeader } from '../Components/CustomHeader';
import { Box } from '../Components/Box';


function Sports() {
  return (
    <div className="App">
      <CustomHeader />

      <div style={{padding:60, display: "flex",justifyContent:"center"}}>
        <Box content='SPORTS' boldText='SPORTS'/>
      </div>

    </div>
  );
}

export default Sports;
