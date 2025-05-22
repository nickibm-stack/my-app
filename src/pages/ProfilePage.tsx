import React from 'react';

import { CustomHeader } from '../Components/CustomHeader';
import { Box } from '../Components/Box';


function ProfilePage() {
  return (
    <div className="ProfilePage">
      <CustomHeader />

      <div style={{padding:60, display: "flex",justifyContent:"center"}}>
        <Box content='Profile Info' boldText='Porifle info'/>
      </div>

    </div>
  );
}

export default ProfilePage;
