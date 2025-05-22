import React from 'react';

import { CustomHeader } from '../Components/CustomHeader';
import { Box } from '../Components/Box';


function News() {
  return (
    <div className="News">
      <CustomHeader />

      <div style={{padding:60, display: "flex",justifyContent:"center"}}>
        <Box content='NEWS' boldText='NEWS'/>
      </div>

    </div>
  );
}

export default News;
