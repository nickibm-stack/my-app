import React from 'react';
import { TextArea } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

const LargeTextBox = () => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto' }}>
      <TextArea
        labelText="Message"
        placeholder="Type your message here..."
        rows={10} // Adjust rows for height
        cols={50} // Optional: usually handled by container width
        id="conversation-textarea"
      />
    </div>
  );
};

export default LargeTextBox;
