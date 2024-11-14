// import React from 'react';

// const ButtonRow = ({ buttons, onButtonClick }) => {
//   return (
//     <div className="button-row">
//       {buttons.map((button, idx) => (
//         <button
//           key={idx}
//           onClick={() => onButtonClick(button)}  // Handle button click
//           style={{ padding: '10px', marginRight: '5px' }}
//         >
//           {button.text}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonRow;


import React from 'react';

const ButtonRow = ({ buttons, onButtonClick }) => {
  return (
    <div className="button-row">
      {buttons.map((button, index) => (
        <button 
          key={index} 
          className="response-button" 
          onClick={() => onButtonClick(button)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ButtonRow;
