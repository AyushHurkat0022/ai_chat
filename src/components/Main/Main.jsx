// // // // // // // // import React, { useContext } from 'react';
// // // // // // // // import "./main.css";
// // // // // // // // import { assets } from '../../assets/assets';
// // // // // // // // import { Context } from '../../context/context';

// // // // // // // // const Main = () => {
// // // // // // // //   const {
// // // // // // // //     prevConversations,
// // // // // // // //     onSent,
// // // // // // // //     setInput,
// // // // // // // //     input,
// // // // // // // //     showResult,
// // // // // // // //     loading,
// // // // // // // //     resultData
// // // // // // // //   } = useContext(Context);

// // // // // // // //   const handleSend = () => {
// // // // // // // //     onSent(input);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="main">
// // // // // // // //   <div className="background-image"></div>
// // // // // // // //   <div className="nav">
// // // // // // // //     <div className="name">
// // // // // // // //       <h2>
// // // // // // // //         <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // // // // // // //       </h2>
// // // // // // // //       <p>Pro Mode</p>
// // // // // // // //     </div>
// // // // // // // //     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // // // //   </div>
// // // // // // // //   <div className="main-container">
// // // // // // // //     {!showResult ? (
// // // // // // // //       <>
// // // // // // // //         <div className="greet">
// // // // // // // //           <p><span>Hello Ayush</span></p>
// // // // // // // //           <p>The app is currently in beta mode</p>
// // // // // // // //         </div>
// // // // // // // //       </>
// // // // // // // //     ) : (
// // // // // // // //       <div className="result">
// // // // // // // //         <div className="conversation">
// // // // // // // //           {prevConversations.map((conversation, index) => (
// // // // // // // //             <div key={index} className="conversation-item">
// // // // // // // //               <div className="user-text">
// // // // // // // //                 <p>{conversation.prompt}</p>
// // // // // // // //                 <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // // // //               </div>
// // // // // // // //               <div className="result-data">
// // // // // // // //                 <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?t=st=1730914654~exp=1730918254~hmac=dc2b64043f7977b0f627434e3077c15b906306496ecb159c8f6cfa3e07bb90f1&w=740" alt="AI Icon" />
// // // // // // // //                 {loading && index === prevConversations.length - 1 ? (
// // // // // // // //                   <div className="loader"><hr /><hr /><hr /></div>
// // // // // // // //                 ) : (
// // // // // // // //                   <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     )}
// // // // // // // //     <div className="main-bottom">
// // // // // // // //       <div className="search-box">
// // // // // // // //         <input
// // // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // // //           value={input}
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Enter a prompt"
// // // // // // // //         />
// // // // // // // //         <div>
// // // // // // // //           <img src={assets.gallery_icon} alt="Gallery Icon" />
// // // // // // // //           <img src={assets.mic_icon} alt="Microphone Icon" />
// // // // // // // //           <img src={assets.send_icon} alt="Send Icon" onClick={handleSend} />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //       <p className="bottom-info">
// // // // // // // //         <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // // // // // // //       </p>
// // // // // // // //     </div>
// // // // // // // //   </div>
// // // // // // // // </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Main;

// // // // // // // // src/components/Main/Main.jsx
// // // // // // // import React, { useContext } from 'react';
// // // // // // // import { Context } from '../../context/context';
// // // // // // // import "./main.css";
// // // // // // // import { assets } from '../../assets/assets';

// // // // // // // const Main = () => {
// // // // // // //   const {
// // // // // // //     prevConversations,
// // // // // // //     onSent,
// // // // // // //     setInput,
// // // // // // //     input,
// // // // // // //     showResult,
// // // // // // //     loading,
// // // // // // //     resultData
// // // // // // //   } = useContext(Context);

// // // // // // //   // This function will handle the sending of the prompt
// // // // // // //   const handleSend = () => {
// // // // // // //     if (input.trim()) { // Ensure input is not empty
// // // // // // //       onSent(input); // Call onSent function from context
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="main">
// // // // // // //       <div className="background-image"></div>
// // // // // // //       <div className="nav">
// // // // // // //         <div className="name">
// // // // // // //           <h2>
// // // // // // //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // // // // // //           </h2>
// // // // // // //           <p>Pro Mode</p>
// // // // // // //         </div>
// // // // // // //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // // //       </div>
// // // // // // //       <div className="main-container">
// // // // // // //         {!showResult ? (
// // // // // // //           <>
// // // // // // //             <div className="greet">
// // // // // // //               <p><span>Hello Ayush</span></p>
// // // // // // //               <p>The app is currently in beta mode</p>
// // // // // // //             </div>
// // // // // // //           </>
// // // // // // //         ) : (
// // // // // // //           <div className="result">
// // // // // // //             <div className="conversation">
// // // // // // //               {prevConversations.map((conversation, index) => (
// // // // // // //                 <div key={index} className="conversation-item">
// // // // // // //                   <div className="user-text">
// // // // // // //                     <p>{conversation.prompt}</p>
// // // // // // //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // // //                   </div>
// // // // // // //                   <div className="result-data">
// // // // // // //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?t=st=1730914654~exp=1730918254~hmac=dc2b64043f7977b0f627434e3077c15b906306496ecb159c8f6cfa3e07bb90f1&w=740" alt="AI Icon" />
// // // // // // //                     {loading && index === prevConversations.length - 1 ? (
// // // // // // //                       <div className="loader"><hr /><hr /><hr /></div>
// // // // // // //                     ) : (
// // // // // // //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div className="main-bottom">
// // // // // // //           <div className="search-box">
// // // // // // //             <input
// // // // // // //               onChange={(e) => setInput(e.target.value)}  // Update the input state
// // // // // // //               value={input}
// // // // // // //               type="text"
// // // // // // //               placeholder="Enter a prompt"
// // // // // // //             />
// // // // // // //             <div>
// // // // // // //               <img src={assets.send_icon} alt="Send Icon" onClick={handleSend} />  {/* Send button click */}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           <p className="bottom-info">
// // // // // // //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Main;

// // // // // // import React, { useContext } from 'react';
// // // // // // import { Context } from '../../context/context';
// // // // // // import "./main.css";
// // // // // // import { assets } from '../../assets/assets';

// // // // // // const Main = () => {
// // // // // //   const {
// // // // // //     prevConversations,
// // // // // //     onSent,
// // // // // //     setInput,
// // // // // //     input,
// // // // // //     showResult,
// // // // // //     loading,  // Loading state to determine when the AI is processing the request
// // // // // //     resultData
// // // // // //   } = useContext(Context);

// // // // // //   // This function will handle the sending of the prompt
// // // // // //   const handleSend = () => {
// // // // // //     if (input.trim()) {  // Ensure input is not empty
// // // // // //       onSent(input);  // Call onSent function from context to send the message
// // // // // //       setInput('');   // Clear the input field immediately after sending
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="main">
// // // // // //       <div className="background-image"></div>
// // // // // //       <div className="nav">
// // // // // //         <div className="name">
// // // // // //           <h2>
// // // // // //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // // // // //           </h2>
// // // // // //           <p>Pro Mode</p>
// // // // // //         </div>
// // // // // //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // //       </div>
// // // // // //       <div className="main-container">
// // // // // //         {!showResult ? (
// // // // // //           <>
// // // // // //             <div className="greet">
// // // // // //               <p><span>Hello Ayush</span></p>
// // // // // //               <p>The app is currently in beta mode</p>
// // // // // //             </div>
// // // // // //           </>
// // // // // //         ) : (
// // // // // //           <div className="result">
// // // // // //             <div className="conversation">
// // // // // //               {prevConversations.map((conversation, index) => (
// // // // // //                 <div key={index} className="conversation-item">
// // // // // //                   <div className="user-text">
// // // // // //                     <p>{conversation.prompt}</p>
// // // // // //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // // //                   </div>
// // // // // //                   <div className="result-data">
// // // // // //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?t=st=1730914654~exp=1730918254~hmac=dc2b64043f7977b0f627434e3077c15b906306496ecb159c8f6cfa3e07bb90f1&w=740" alt="AI Icon" />
// // // // // //                     {loading && index === prevConversations.length - 1 ? (
// // // // // //                       <div className="loader"><hr /><hr /><hr /></div>
// // // // // //                     ) : (
// // // // // //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <div className="main-bottom">
// // // // // //           <div className="search-box">
// // // // // //             <input
// // // // // //               onChange={(e) => setInput(e.target.value)}  // Update the input state as user types
// // // // // //               value={input}
// // // // // //               type="text"
// // // // // //               placeholder="Enter a prompt"
// // // // // //               disabled={loading}  // Disable input when loading (AI is processing)
// // // // // //             />
// // // // // //             <div>
// // // // // //               <img 
// // // // // //                 src={assets.send_icon} 
// // // // // //                 alt="Send Icon" 
// // // // // //                 onClick={handleSend}  // Call handleSend function when send button is clicked
// // // // // //                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}  // Disable button styling when loading
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <p className="bottom-info">
// // // // // //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Main;

// // // // // import React, { useContext } from 'react';
// // // // // import { Context } from '../../context/context';
// // // // // import "./main.css";
// // // // // import { assets } from '../../assets/assets';
// // // // // import ButtonRow from './ButtonRow';  // Import the ButtonRow component

// // // // // const Main = () => {
// // // // //   const {
// // // // //     prevConversations,
// // // // //     onSent,
// // // // //     setInput,
// // // // //     input,
// // // // //     showResult,
// // // // //     loading,
// // // // //     resultData,
// // // // //     buttons,  // Get buttons from context
// // // // //     setBotState,  // We may need this if you want to change bot state from buttons
// // // // //   } = useContext(Context);

// // // // //   const handleSend = () => {
// // // // //     if (input.trim()) {
// // // // //       onSent(input);
// // // // //       setInput('');  // Clear the input field immediately after sending
// // // // //     }
// // // // //   };

// // // // //   const handleButtonClick = (button) => {
// // // // //     setInput(button.value);  // Set the input field with button value
// // // // //     // Check if the button value contains "proceed" and update the bot state if necessary
// // // // //     if (button.value.toLowerCase().includes("proceed")) {
// // // // //       setBotState('customization');  // Change bot state
// // // // //     }
// // // // //     onSent(button.value);  // Trigger the bot response with the button value
// // // // //   };

// // // // //   return (
// // // // //     <div className="main">
// // // // //       <div className="background-image"></div>
// // // // //       <div className="nav">
// // // // //         <div className="name">
// // // // //           <h2>
// // // // //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // // // //           </h2>
// // // // //           <p>Pro Mode</p>
// // // // //         </div>
// // // // //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // //       </div>
// // // // //       <div className="main-container">
// // // // //         {!showResult ? (
// // // // //           <>
// // // // //             <div className="greet">
// // // // //               <p><span>Hello Ayush</span></p>
// // // // //               <p>The app is currently in beta mode</p>
// // // // //             </div>
// // // // //           </>
// // // // //         ) : (
// // // // //           <div className="result">
// // // // //             <div className="conversation">
// // // // //               {prevConversations.map((conversation, index) => (
// // // // //                 <div key={index} className="conversation-item">
// // // // //                   <div className="user-text">
// // // // //                     <p>{conversation.prompt}</p>
// // // // //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // // //                   </div>
// // // // //                   <div className="result-data">
// // // // //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?t=st=1730914654~exp=1730918254~hmac=dc2b64043f7977b0f627434e3077c15b906306496ecb159c8f6cfa3e07bb90f1&w=740" alt="AI Icon" />
// // // // //                     {loading && index === prevConversations.length - 1 ? (
// // // // //                       <div className="loader"><hr /><hr /><hr /></div>
// // // // //                     ) : (
// // // // //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         <div className="main-bottom">
// // // // //           <div className="search-box">
// // // // //             <input
// // // // //               onChange={(e) => setInput(e.target.value)}
// // // // //               value={input}
// // // // //               type="text"
// // // // //               placeholder="Enter a prompt"
// // // // //               disabled={loading}
// // // // //             />
// // // // //             <div>
// // // // //               <img 
// // // // //                 src={assets.send_icon} 
// // // // //                 alt="Send Icon" 
// // // // //                 onClick={handleSend}  
// // // // //                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //           <p className="bottom-info">
// // // // //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* ButtonRow component */}
// // // // //         {buttons.length > 0 && (
// // // // //           <ButtonRow
// // // // //             buttons={buttons}
// // // // //             onButtonClick={handleButtonClick}  // Pass handleButtonClick to handle button interactions
// // // // //           />
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Main;

// // // // import React, { useContext } from 'react';
// // // // import { Context } from '../../context/context';
// // // // import "./main.css";
// // // // import { assets } from '../../assets/assets';
// // // // import ButtonRow from './ButtonRow';  

// // // // const Main = () => {
// // // //   const {
// // // //     prevConversations,
// // // //     onSent,
// // // //     setInput,
// // // //     input,
// // // //     showResult,
// // // //     loading,
// // // //     resultData,
// // // //     buttons,  
// // // //     setBotState,  // We may need this if you want to change bot state from buttons
// // // //   } = useContext(Context);

// // // //   const handleSend = () => {
// // // //     if (input.trim()) {
// // // //       onSent(input);
// // // //       setInput('');  // Clear the input field immediately after sending
// // // //     }
// // // //   };

// // // //   const handleButtonClick = (button) => {
// // // //     setInput(button.value);  // Set the input field with button value
// // // //     // Check if the button value contains "proceed" and update the bot state if necessary
// // // //     if (button.value.toLowerCase().includes("proceed")) {
// // // //       setBotState('customization');  // Change bot state
// // // //     }
// // // //     onSent(button.value);  // Trigger the bot response with the button value
// // // //   };

// // // //   return (
// // // //     <div className="main">
// // // //       <div className="background-image"></div>
// // // //       <div className="nav">
// // // //         <div className="name">
// // // //           <h2>
// // // //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // // //           </h2>
// // // //           <p>Pro Mode</p>
// // // //         </div>
// // // //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // //       </div>
// // // //       <div className="main-container">
// // // //         {!showResult ? (
// // // //           <div className="greet">
// // // //             <p><span>Hello Ayush</span></p>
// // // //             <p>The app is currently in beta mode</p>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="result">
// // // //             <div className="conversation">
// // // //               {prevConversations.map((conversation, index) => (
// // // //                 <div key={index} className="conversation-item">
// // // //                   <div className="user-text">
// // // //                     <p>{conversation.prompt}</p>
// // // //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // // //                   </div>
// // // //                   <div className="result-data">
// // // //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg" alt="AI Icon" />
// // // //                     {loading && index === prevConversations.length - 1 ? (
// // // //                       <div className="loader"><hr className='hr1' /><hr className='hr2'/><hr className='hr3'/></div>
// // // //                     ) : (
// // // //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         <div className="main-bottom">
// // // //           <div className="search-box">
// // // //             <input
// // // //               onChange={(e) => setInput(e.target.value)}
// // // //               value={input}
// // // //               type="text"
// // // //               placeholder="Enter a prompt"
// // // //               disabled={loading}
// // // //             />
// // // //             <div>
// // // //               <img 
// // // //                 src={assets.send_icon} 
// // // //                 alt="Send Icon" 
// // // //                 onClick={handleSend}  
// // // //                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <p className="bottom-info">
// // // //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // // //           </p>
// // // //         </div>

// // // //         {buttons.length > 0 && (
// // // //           <ButtonRow
// // // //             buttons={buttons}
// // // //             onButtonClick={handleButtonClick}  // Pass handleButtonClick to handle button clicks
// // // //           />
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Main;


// // // import React, { useContext } from 'react';
// // // import { Context } from '../../context/context';
// // // import "./main.css";
// // // import { assets } from '../../assets/assets';
// // // import ButtonRow from './ButtonRow';  

// // // const Main = () => {
// // //   const {
// // //     prevConversations,
// // //     onSent,
// // //     setInput,
// // //     input,
// // //     showResult,
// // //     loading,
// // //     resultData,
// // //     buttons,  
// // //     setBotState,  // We may need this if you want to change bot state from buttons
// // //   } = useContext(Context);

// // //   const handleSend = () => {
// // //     if (input.trim()) {
// // //       onSent(input);
// // //       setInput('');  // Clear the input field immediately after sending
// // //     }
// // //   };

// // //   const handleButtonClick = (button) => {
// // //     setInput(button.value);  // Set the input field with button value

// // //     // Check if the button value contains "proceed" and update the bot state if necessary
// // //     if (button.value.toLowerCase().includes("proceed")) {
// // //       setBotState('customization', () => {
// // //         onSent(button.value);  // Trigger the bot response after the bot state is updated
// // //       });
// // //     } else {
// // //       onSent(button.value);  // Trigger the bot response with the button value
// // //     }
// // //   };

// // //   return (
// // //     <div className="main">
// // //       <div className="background-image"></div>
// // //       <div className="nav">
// // //         <div className="name">
// // //           <h2>
// // //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// // //           </h2>
// // //           <p>Pro Mode</p>
// // //         </div>
// // //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // //       </div>
// // //       <div className="main-container">
// // //         {!showResult ? (
// // //           <div className="greet">
// // //             <p><span>Hello Ayush</span></p>
// // //             <p>The app is currently in beta mode</p>
// // //           </div>
// // //         ) : (
// // //           <div className="result">
// // //             <div className="conversation">
// // //               {prevConversations.map((conversation, index) => (
// // //                 <div key={index} className="conversation-item">
// // //                   <div className="user-text">
// // //                     <p>{conversation.prompt}</p>
// // //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// // //                   </div>
// // //                   <div className="result-data">
// // //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg" alt="AI Icon" />
// // //                     {loading && index === prevConversations.length - 1 ? (
// // //                       <div className="loader"><hr className='hr1' /><hr className='hr2'/><hr className='hr3'/></div>
// // //                     ) : (
// // //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //         <div className="main-bottom">
// // //           <div className="search-box">
// // //             <input
// // //               onChange={(e) => setInput(e.target.value)}
// // //               value={input}
// // //               type="text"
// // //               placeholder="Enter a prompt"
// // //               disabled={loading}
// // //             />
// // //             <div>
// // //               <img 
// // //                 src={assets.send_icon} 
// // //                 alt="Send Icon" 
// // //                 onClick={handleSend}  
// // //                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
// // //               />
// // //             </div>
// // //           </div>
// // //           <p className="bottom-info">
// // //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// // //           </p>
// // //         </div>

// // //         {/* Render buttons if available */}
// // //         {buttons.length > 0 && (
// // //           <ButtonRow
// // //             buttons={buttons}
// // //             onButtonClick={handleButtonClick}  // Pass handleButtonClick to handle button clicks
// // //           />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Main;

// // import React, { useContext } from 'react';
// // import { Context } from '../../context/context';
// // import "./main.css";
// // import { assets } from '../../assets/assets';
// // import ButtonRow from './ButtonRow';  

// // const Main = () => {
// //   const {
// //     prevConversations,
// //     onSent,
// //     setInput,
// //     input,
// //     showResult,
// //     loading,
// //     resultData,
// //     buttons,  
// //     setBotState,  // We may need this if you want to change bot state from buttons
// //   } = useContext(Context);

// //   const handleSend = () => {
// //     if (input.trim()) {
// //       onSent(input);
// //       setInput('');  // Clear the input field immediately after sending
// //     }
// //   };

// //   const handleButtonClick = (button) => {
// //     setInput(button.value);  // Set the input field with button value
// //     // Check if the button value contains "proceed" and update the bot state if necessary
// //     if (button.value.toLowerCase().includes("proceed")) {
// //       setBotState('customization');  // Change bot state
// //     }
// //     onSent(button.value);  // Trigger the bot response with the button value
// //   };

// //   return (
// //     <div className="main">
// //       <div className="background-image"></div>
// //       <div className="nav">
// //         <div className="name">
// //           <h2>
// //             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
// //           </h2>
// //           <p>Pro Mode</p>
// //         </div>
// //         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// //       </div>
// //       <div className="main-container">
// //         {!showResult ? (
// //           <div className="greet">
// //             <p><span>Hello Ayush</span></p>
// //             <p>The app is currently in beta mode</p>
// //           </div>
// //         ) : (
// //           <div className="result">
// //             <div className="conversation">
// //               {prevConversations.map((conversation, index) => (
// //                 <div key={index} className="conversation-item">
// //                   <div className="user-text">
// //                     <p>{conversation.prompt}</p>
// //                     <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
// //                   </div>
// //                   <div className="result-data">
// //                     <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg" alt="AI Icon" />
// //                     {conversation.loading ? (
// //                       <div className="loader"><hr className='hr1' /><hr className='hr2'/><hr className='hr3'/></div>
// //                     ) : (
// //                       <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
// //                     )}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //         <div className="main-bottom">
// //           <div className="search-box">
// //             <input
// //               onChange={(e) => setInput(e.target.value)}
// //               value={input}
// //               type="text"
// //               placeholder="Enter a prompt"
// //               disabled={loading}
// //             />
// //             <div>
// //               <img 
// //                 src={assets.send_icon} 
// //                 alt="Send Icon" 
// //                 onClick={handleSend}  
// //                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
// //               />
// //             </div>
// //           </div>
// //           <p className="bottom-info">
// //             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
// //           </p>
// //         </div>

// //         {buttons.length > 0 && (
// //           <ButtonRow
// //             buttons={buttons}
// //             onButtonClick={handleButtonClick}  // Pass handleButtonClick to handle button clicks
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Main;

// import React, { useContext } from 'react';
// import { Context } from '../../context/context';
// import "./main.css";
// import { assets } from '../../assets/assets';
// import ButtonRow from './ButtonRow';

// const Main = () => {
//   const {
//     prevConversations,
//     onSent,
//     setInput,
//     input,
//     showResult,
//     loading,
//     resultData,
//     buttons,  
//     setBotState,  
//   } = useContext(Context);

//   const handleSend = () => {
//     if (input.trim()) {
//       onSent(input);
//       setInput('');  // Clear the input field immediately after sending
//     }
//   };

//   const handleButtonClick = (button) => {
//     setInput(button.value);  // Set the input field with button value
//     if (button.value.toLowerCase().includes("proceed")) {
//       setBotState('customization');  // Change bot state
//     }
//     onSent(button.value);  // Trigger the bot response with the button value
//   };

//   return (
//     <div className="main">
//       <div className="background-image"></div>
      
//       {/* Navigation Bar */}
//       <div className="nav">
//         <div className="name">
//           <h2>
//             <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
//           </h2>
//           <p>Pro Mode</p>
//         </div>
//         <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
//       </div>

//       <div className="main-container">
        
//         {/* Chat Container */}
//         <div className="chat-container">
//           {!showResult ? (
//             <div className="greet">
//               <p><span>Hello Ayush</span></p>
//               <p>The app is currently in beta mode</p>
//             </div>
//           ) : (
//             <div className="result">
//               <div className="conversation">
//                 {prevConversations.map((conversation, index) => (
//                   <div key={index} className="conversation-item">
//                     <div className="user-text">
//                       <p>{conversation.prompt}</p>
//                       <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
//                     </div>
//                     <div className="result-data">
//                       <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg" alt="AI Icon" />
//                       {conversation.loading ? (
//                         <div className="loader">
//                           <hr className='hr1' /><hr className='hr2'/><hr className='hr3'/>
//                         </div>
//                       ) : (
//                         <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Bottom Search Box */}
//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt"
//               disabled={loading}
//             />
//             <div>
//               <img 
//                 src={assets.send_icon} 
//                 alt="Send Icon" 
//                 onClick={handleSend}  
//                 style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
//               />
//             </div>
//           </div>
//           <p className="bottom-info">
//             <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
//           </p>
//         </div>

//         {/* Button Row */}
//         {buttons.length > 0 && (
//           <ButtonRow
//             buttons={buttons}
//             onButtonClick={handleButtonClick} 
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useContext } from 'react';
import { Context } from '../../context/context';
import "./main.css";
import { assets } from '../../assets/assets';
import ButtonRow from './ButtonRow';

const Main = () => {
  const {
    prevConversations,
    onSent,
    setInput,
    input,
    showResult,
    loading,
    resultData,
    buttons,  
    setBotState,  
  } = useContext(Context);

  const handleSend = () => {
    if (input.trim()) {
      onSent(input);
      setInput('');  // Clear the input field immediately after sending
    }
  };

  const handleButtonClick = (button) => {
    setInput(button.value);  // Set the input field with button value
    if (button.value.toLowerCase().includes("proceed")) {
      setBotState('customization');  // Change bot state
    }
    onSent(button.value);  // Trigger the bot response with the button value
  };

  return (
    <div className="main">
      <div className="background-image"></div>
      
      {/* Navigation Bar */}
      <div className="nav">
        <div className="name">
          <h2>
            <img src="https://www.kinmitra.com/assets/image-BEwmDLXF.png" alt="Kinmitra Logo" />
          </h2>
          <p>Pro Mode</p>
        </div>
        <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
      </div>

      <div className="main-container">
        
        {/* Chat Container */}
        <div className="chat-container">
          {!showResult ? (
            <div className="greet">
              <p><span>Hello There!</span></p>
              <p>The app is currently in beta mode</p>
            </div>
          ) : (
            <div className="result">
              <div className="conversation">
                {prevConversations.map((conversation, index) => (
                  <div key={index} className="conversation-item">
                    <div className="user-text">
                      <p>{conversation.prompt}</p>
                      <img src="https://img.freepik.com/premium-vector/vector-set-women-with-jewelry-flat-design-style_995281-17686.jpg" alt="User Icon" />
                    </div>
                    <div className="result-data">
                      <img src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg" alt="AI Icon" />
                      {conversation.loading ? (
                        <div className="loader">
                          <hr className='hr1' /><hr className='hr2'/><hr className='hr3'/>
                        </div>
                      ) : (
                        <p dangerouslySetInnerHTML={{ __html: conversation.response }}></p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {buttons.length > 0 && (
          <ButtonRow
            buttons={buttons}
            onButtonClick={handleButtonClick} 
          />
        )}
            </div>
          )}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt"
              disabled={loading}
            />
            <div>
              <img 
                src={assets.send_icon} 
                alt="Send Icon" 
                onClick={handleSend}  
                style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.5 : 1 }}
              />
            </div>
          </div>
          <p className="bottom-info">
            <b>KinMitra</b> has all the rights of images and designs. For more details contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
