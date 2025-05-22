import React from 'react';

import { CustomHeader } from '../Components/CustomHeader';
import { Box } from '../Components/Box';


function Sports() {
  return (
    <div className="Sports">
      <CustomHeader />

      {/* <div style={{padding:60, display: "flex",justifyContent:"center"}}> */}
        <Box content='Manual Test Design' boldText='QA Bot'/>
      </div>

    // </div>
  );
}

export default Sports;
