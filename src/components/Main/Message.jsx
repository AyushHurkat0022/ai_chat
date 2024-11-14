import React from 'react';

const Message = ({ message, isBot }) => {
  return (
    <div className={`message ${isBot ? 'bot' : 'user'}`}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
