import React from 'react';
import { Tile } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

const conversations = [
  { id: 1, user: 'Alice', message: 'Hey there, how are you?' },
  { id: 2, user: 'Bob', message: 'Doing great! You?' },
  { id: 3, user: 'Alice', message: 'Just finished a project.' },
  { id: 4, user: 'Bob', message: 'Nice! Ready for a break then?' },
  // Add more to test scroll
];

type ConversationListProps = {
  conversation: string[][];
};

const ConversationList: React.FC<ConversationListProps> = ({ conversation }) => {
  return (
    <div style={{
      maxHeight: '400px',
      overflowY: 'auto',
      padding: '1rem',
      backgroundColor: '#f4f4f4',
      borderRadius: '0.5rem'
    }}>
      {conversation.map(convo => (
        <Tile key={convo[0]} className="mb-3">
          <strong>{convo[0]}</strong>: {convo[1]}
        </Tile>
      ))}
    </div>
  );
};

export default ConversationList;
