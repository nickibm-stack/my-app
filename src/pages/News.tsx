import React from 'react';

import { CustomHeader } from '../Components/CustomHeader';
import { Box } from '../Components/Box';
import { DocumentCollector } from '../Components/DocumentCollector';


function News() {
  return (
    <div className="News">
      <CustomHeader />

      <div style={{padding:60, display: "flex",justifyContent:"center"}}>
        <DocumentCollector content='NEWS' boldText='Document Helper'/>
      </div>

    </div>
  );
}

export default News;
