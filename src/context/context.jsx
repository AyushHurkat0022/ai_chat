// // // // // // // // import { createContext, useEffect, useState } from "react";
// // // // // // // // import run from "../config/gemini";

// // // // // // // // export const Context = createContext();

// // // // // // // // const ContextProvider = (props) => {
// // // // // // // //     const [input, setInput] = useState("");
// // // // // // // //     const [recentPrompt, setRecentPrompt] = useState("");
// // // // // // // //     const [prevConversations, setPrevConversations] = useState(() => {
// // // // // // // //         const savedConversations = sessionStorage.getItem("prevConversations");
// // // // // // // //         return savedConversations ? JSON.parse(savedConversations) : [];
// // // // // // // //     });
// // // // // // // //     const [showResult, setShowResult] = useState(false);
// // // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // // //     const [resultData, setResultData] = useState("");

// // // // // // // //     useEffect(() => {
// // // // // // // //         localStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // // // // // // //     }, [prevConversations]);

// // // // // // // //     const delayPara = (index, nextWord) => {
// // // // // // // //         setTimeout(function () {
// // // // // // // //             setResultData((prev) => prev + nextWord);
// // // // // // // //         }, 75 * index);
// // // // // // // //     };

// // // // // // // //     const onSent = async (prompt) => {
// // // // // // // //         setResultData(""); 
// // // // // // // //         setLoading(true);
// // // // // // // //         setShowResult(true);
// // // // // // // //         setRecentPrompt(input);
      
// // // // // // // //         setPrevConversations((prevConversations) => {
// // // // // // // //           const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // // // // // // //           localStorage.setItem("prevConversations", JSON.stringify(newConversation));
// // // // // // // //           return newConversation;
// // // // // // // //         });
      
// // // // // // // //         const response = await run(input);
// // // // // // // //         let responseArray = response.split("**");
// // // // // // // //         let newResponse = "";
// // // // // // // //         let showImage = false;
// // // // // // // //         let showMore = false;
      
// // // // // // // //         for (let i = 0; i < responseArray.length; i++) {
// // // // // // // //           if (responseArray[i] === "{{show_image}}") {
// // // // // // // //             showImage = true;
// // // // // // // //           } else if (responseArray[i] === "{{show_more}}") {
// // // // // // // //             showMore = true;
// // // // // // // //           } else {
// // // // // // // //             newResponse += responseArray[i];
// // // // // // // //           }
// // // // // // // //         }
      
// // // // // // // //         let newResponse2 = newResponse.split("*").join("</br>");
// // // // // // // //         let newResponseArray = newResponse2.split(" ");
// // // // // // // //         for (let i = 0; i < newResponseArray.length; i++) {
// // // // // // // //           const nextWord = newResponseArray[i];
// // // // // // // //           delayPara(i, nextWord + " ");
// // // // // // // //         }
      
// // // // // // // //         setPrevConversations((prevConversations) => {
// // // // // // // //           const updatedConversations = [...prevConversations];
// // // // // // // //           updatedConversations[updatedConversations.length - 1] = {
// // // // // // // //             ...updatedConversations[updatedConversations.length - 1],
// // // // // // // //             response: newResponse2,
// // // // // // // //             showImage,
// // // // // // // //             showMore,
// // // // // // // //           };
// // // // // // // //           sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations));
// // // // // // // //           return updatedConversations;
// // // // // // // //         });
      
// // // // // // // //         setLoading(false);
// // // // // // // //         setInput("");
// // // // // // // //       };
      

// // // // // // // //     const contextValue = {
// // // // // // // //         prevConversations,
// // // // // // // //         setPrevConversations,
// // // // // // // //         onSent,
// // // // // // // //         recentPrompt,
// // // // // // // //         showResult,
// // // // // // // //         loading,
// // // // // // // //         resultData,
// // // // // // // //         input,
// // // // // // // //         setInput
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <Context.Provider value={contextValue}>
// // // // // // // //             {props.children}
// // // // // // // //         </Context.Provider>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default ContextProvider;

// // // // // // // // src/context/context.jsx
// // // // // // // import { createContext, useEffect, useState } from "react";
// // // // // // // import run from "../config/gemini";

// // // // // // // export const Context = createContext();

// // // // // // // const ContextProvider = (props) => {
// // // // // // //     const [input, setInput] = useState("");
// // // // // // //     const [recentPrompt, setRecentPrompt] = useState("");
// // // // // // //     const [prevConversations, setPrevConversations] = useState(() => {
// // // // // // //         const savedConversations = sessionStorage.getItem("prevConversations");
// // // // // // //         return savedConversations ? JSON.parse(savedConversations) : [];
// // // // // // //     });
// // // // // // //     const [showResult, setShowResult] = useState(false);
// // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // //     const [resultData, setResultData] = useState("");
  
// // // // // // //     // New state for the chatbot
// // // // // // //     const [messages, setMessages] = useState([]);
// // // // // // //     const [userInput, setUserInput] = useState('');
// // // // // // //     const [buttons, setButtons] = useState([]);
// // // // // // //     const [botState, setBotState] = useState("recommendation");

// // // // // // //     // Updating prevConversations to sessionStorage
// // // // // // //     useEffect(() => {
// // // // // // //         localStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // // // // // //     }, [prevConversations]);

// // // // // // //     const delayPara = (index, nextWord) => {
// // // // // // //         setTimeout(function () {
// // // // // // //             setResultData((prev) => prev + nextWord);
// // // // // // //         }, 75 * index);
// // // // // // //     };

// // // // // // //     const onSent = async (prompt) => {
// // // // // // //         setResultData(""); 
// // // // // // //         setLoading(true);
// // // // // // //         setShowResult(true);
// // // // // // //         setRecentPrompt(input);

// // // // // // //         setPrevConversations((prevConversations) => {
// // // // // // //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // // // // // //             localStorage.setItem("prevConversations", JSON.stringify(newConversation));
// // // // // // //             return newConversation;
// // // // // // //         });

// // // // // // //         const response = await run(input);
// // // // // // //         let responseArray = response.split("**");
// // // // // // //         let newResponse = "";
// // // // // // //         let showImage = false;
// // // // // // //         let showMore = false;

// // // // // // //         for (let i = 0; i < responseArray.length; i++) {
// // // // // // //             if (responseArray[i] === "{{show_image}}") {
// // // // // // //                 showImage = true;
// // // // // // //             } else if (responseArray[i] === "{{show_more}}") {
// // // // // // //                 showMore = true;
// // // // // // //             } else {
// // // // // // //                 newResponse += responseArray[i];
// // // // // // //             }
// // // // // // //         }

// // // // // // //         let newResponse2 = newResponse.split("*").join("</br>");
// // // // // // //         let newResponseArray = newResponse2.split(" ");
// // // // // // //         for (let i = 0; i < newResponseArray.length; i++) {
// // // // // // //             const nextWord = newResponseArray[i];
// // // // // // //             delayPara(i, nextWord + " ");
// // // // // // //         }

// // // // // // //         setPrevConversations((prevConversations) => {
// // // // // // //             const updatedConversations = [...prevConversations];
// // // // // // //             updatedConversations[updatedConversations.length - 1] = {
// // // // // // //                 ...updatedConversations[updatedConversations.length - 1],
// // // // // // //                 response: newResponse2,
// // // // // // //                 showImage,
// // // // // // //                 showMore,
// // // // // // //             };
// // // // // // //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations));
// // // // // // //             return updatedConversations;
// // // // // // //         });

// // // // // // //         setLoading(false);
// // // // // // //         setInput("");
// // // // // // //     };

// // // // // // //     const fetchAIResponse = async (payload) => {
// // // // // // //         const response = await fetch(
// // // // // // //             'https://2isixn6on3.execute-api.ap-south-1.amazonaws.com/dev/get_chatbot_response',
// // // // // // //             {
// // // // // // //                 method: 'POST',
// // // // // // //                 headers: { 'Content-Type': 'application/json' },
// // // // // // //                 body: JSON.stringify(payload)
// // // // // // //             }
// // // // // // //         );
// // // // // // //         const data = await response.json();
// // // // // // //         return data;
// // // // // // //     };

// // // // // // //     const sendMessage = async () => {
// // // // // // //         if (!userInput.trim()) return;

// // // // // // //         const payload = {
// // // // // // //             user_prompt: userInput,
// // // // // // //             state: botState,
// // // // // // //             conversation_history: messages,
// // // // // // //         };

// // // // // // //         const response = await fetchAIResponse(payload);

// // // // // // //         setMessages((prevMessages) => [
// // // // // // //             ...prevMessages,
// // // // // // //             { text: userInput, isBot: false },
// // // // // // //             { text: response.chatbot_response, isBot: true }
// // // // // // //         ]);
// // // // // // //         setUserInput('');

// // // // // // //         try {
// // // // // // //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// // // // // // //             const buttonValues = JSON.parse(cleanedString);

// // // // // // //             if (Array.isArray(buttonValues)) {
// // // // // // //                 setButtons(buttonValues.map((value) => ({
// // // // // // //                     text: value,
// // // // // // //                     value: value,
// // // // // // //                 })));
// // // // // // //             } else {
// // // // // // //                 setButtons([]);
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             console.error("Error parsing button values:", error);
// // // // // // //             setButtons([]);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const contextValue = {
// // // // // // //         prevConversations,
// // // // // // //         setPrevConversations,
// // // // // // //         onSent,
// // // // // // //         recentPrompt,
// // // // // // //         showResult,
// // // // // // //         loading,
// // // // // // //         resultData,
// // // // // // //         input,
// // // // // // //         setInput,
// // // // // // //         messages,
// // // // // // //         setMessages,
// // // // // // //         userInput,
// // // // // // //         setUserInput,
// // // // // // //         buttons,
// // // // // // //         setButtons,
// // // // // // //         botState,
// // // // // // //         setBotState,
// // // // // // //         sendMessage,
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <Context.Provider value={contextValue}>
// // // // // // //             {props.children}
// // // // // // //         </Context.Provider>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default ContextProvider;


// // // // // // import { createContext, useEffect, useState } from "react";
// // // // // // import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// // // // // // export const Context = createContext();

// // // // // // const ContextProvider = (props) => {
// // // // // //     const [input, setInput] = useState("");
// // // // // //     const [recentPrompt, setRecentPrompt] = useState("");
// // // // // //     const [prevConversations, setPrevConversations] = useState(() => {
// // // // // //         const savedConversations = sessionStorage.getItem("prevConversations");
// // // // // //         return savedConversations ? JSON.parse(savedConversations) : [];
// // // // // //     });
// // // // // //     const [showResult, setShowResult] = useState(false);
// // // // // //     const [loading, setLoading] = useState(false);
// // // // // //     const [resultData, setResultData] = useState("");

// // // // // //     // New state for the chatbot
// // // // // //     const [messages, setMessages] = useState([]);
// // // // // //     const [userInput, setUserInput] = useState('');
// // // // // //     const [buttons, setButtons] = useState([]);
// // // // // //     const [botState, setBotState] = useState("recommendation");

// // // // // //     // Updating prevConversations to sessionStorage
// // // // // //     useEffect(() => {
// // // // // //         localStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // // // // //     }, [prevConversations]);

// // // // // //     const delayPara = (index, nextWord) => {
// // // // // //         setTimeout(function () {
// // // // // //             setResultData((prev) => prev + nextWord);
// // // // // //         }, 75 * index);
// // // // // //     };

// // // // // //     const onSent = async (prompt) => {
// // // // // //         setResultData(""); 
// // // // // //         setLoading(true);
// // // // // //         setShowResult(true);
// // // // // //         setRecentPrompt(input);

// // // // // //         setPrevConversations((prevConversations) => {
// // // // // //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // // // // //             localStorage.setItem("prevConversations", JSON.stringify(newConversation));
// // // // // //             return newConversation;
// // // // // //         });

// // // // // //         // AWS API response handling instead of Gemini
// // // // // //         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
// // // // // //         const response = await fetchAIResponse(payload);
        
// // // // // //         let responseText = response.chatbot_response;
// // // // // //         let responseArray = responseText.split("**");
// // // // // //         let newResponse = "";
// // // // // //         let showImage = false;
// // // // // //         let showMore = false;

// // // // // //         for (let i = 0; i < responseArray.length; i++) {
// // // // // //             if (responseArray[i] === "{{show_image}}") {
// // // // // //                 showImage = true;
// // // // // //             } else if (responseArray[i] === "{{show_more}}") {
// // // // // //                 showMore = true;
// // // // // //             } else {
// // // // // //                 newResponse += responseArray[i];
// // // // // //             }
// // // // // //         }

// // // // // //         let newResponse2 = newResponse.split("*").join("</br>");
// // // // // //         let newResponseArray = newResponse2.split(" ");
// // // // // //         for (let i = 0; i < newResponseArray.length; i++) {
// // // // // //             const nextWord = newResponseArray[i];
// // // // // //             delayPara(i, nextWord + " ");
// // // // // //         }

// // // // // //         setPrevConversations((prevConversations) => {
// // // // // //             const updatedConversations = [...prevConversations];
// // // // // //             updatedConversations[updatedConversations.length - 1] = {
// // // // // //                 ...updatedConversations[updatedConversations.length - 1],
// // // // // //                 response: newResponse2,
// // // // // //                 showImage,
// // // // // //                 showMore,
// // // // // //             };
// // // // // //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations));
// // // // // //             return updatedConversations;
// // // // // //         });

// // // // // //         setLoading(false);
// // // // // //         setInput("");
// // // // // //     };

// // // // // //     const sendMessage = async () => {
// // // // // //         if (!userInput.trim()) return;

// // // // // //         const payload = {
// // // // // //             user_prompt: userInput,
// // // // // //             state: botState,
// // // // // //             conversation_history: messages,
// // // // // //         };

// // // // // //         const response = await fetchAIResponse(payload);

// // // // // //         setMessages((prevMessages) => [
// // // // // //             ...prevMessages,
// // // // // //             { text: userInput, isBot: false },
// // // // // //             { text: response.chatbot_response, isBot: true }
// // // // // //         ]);
// // // // // //         setUserInput('');

// // // // // //         try {
// // // // // //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// // // // // //             const buttonValues = JSON.parse(cleanedString);

// // // // // //             if (Array.isArray(buttonValues)) {
// // // // // //                 setButtons(buttonValues.map((value) => ({
// // // // // //                     text: value,
// // // // // //                     value: value,
// // // // // //                 })));
// // // // // //             } else {
// // // // // //                 setButtons([]);
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             console.error("Error parsing button values:", error);
// // // // // //             setButtons([]);
// // // // // //         }
// // // // // //     };

// // // // // //     const contextValue = {
// // // // // //         prevConversations,
// // // // // //         setPrevConversations,
// // // // // //         onSent,
// // // // // //         recentPrompt,
// // // // // //         showResult,
// // // // // //         loading,
// // // // // //         resultData,
// // // // // //         input,
// // // // // //         setInput,
// // // // // //         messages,
// // // // // //         setMessages,
// // // // // //         userInput,
// // // // // //         setUserInput,
// // // // // //         buttons,
// // // // // //         setButtons,
// // // // // //         botState,
// // // // // //         setBotState,
// // // // // //         sendMessage,
// // // // // //     };

// // // // // //     return (
// // // // // //         <Context.Provider value={contextValue}>
// // // // // //             {props.children}
// // // // // //         </Context.Provider>
// // // // // //     );
// // // // // // };

// // // // // // export default ContextProvider;


// // // // // import { createContext, useEffect, useState } from "react";
// // // // // import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// // // // // export const Context = createContext();

// // // // // const ContextProvider = (props) => {
// // // // //     const [input, setInput] = useState("");
// // // // //     const [recentPrompt, setRecentPrompt] = useState("");
    
// // // // //     // Session storage for prevConversations
// // // // //     const [prevConversations, setPrevConversations] = useState(() => {
// // // // //         const savedConversations = sessionStorage.getItem("prevConversations");
// // // // //         return savedConversations ? JSON.parse(savedConversations) : [];
// // // // //     });
    
// // // // //     const [showResult, setShowResult] = useState(false);
// // // // //     const [loading, setLoading] = useState(false);
// // // // //     const [resultData, setResultData] = useState("");

// // // // //     // New state for the chatbot
// // // // //     const [messages, setMessages] = useState([]);
// // // // //     const [userInput, setUserInput] = useState('');
// // // // //     const [buttons, setButtons] = useState([]);
// // // // //     const [botState, setBotState] = useState("recommendation");

// // // // //     // Updating prevConversations to sessionStorage instead of localStorage
// // // // //     useEffect(() => {
// // // // //         sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // // // //     }, [prevConversations]);

// // // // //     const delayPara = (index, nextWord) => {
// // // // //         setTimeout(function () {
// // // // //             setResultData((prev) => prev + nextWord);
// // // // //         }, 75 * index);
// // // // //     };

// // // // //     const onSent = async (prompt) => {
// // // // //         setResultData(""); 
// // // // //         setLoading(true);
// // // // //         setShowResult(true);
// // // // //         setRecentPrompt(input);

// // // // //         setPrevConversations((prevConversations) => {
// // // // //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // // // //             sessionStorage.setItem("prevConversations", JSON.stringify(newConversation)); // Store in sessionStorage
// // // // //             return newConversation;
// // // // //         });

// // // // //         // AWS API response handling
// // // // //         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
// // // // //         const response = await fetchAIResponse(payload);
        
// // // // //         let responseText = response.chatbot_response;
// // // // //         let responseArray = responseText.split("**");
// // // // //         let newResponse = "";
// // // // //         let showImage = false;
// // // // //         let showMore = false;

// // // // //         for (let i = 0; i < responseArray.length; i++) {
// // // // //             if (responseArray[i] === "{{show_image}}") {
// // // // //                 showImage = true;
// // // // //             } else if (responseArray[i] === "{{show_more}}") {
// // // // //                 showMore = true;
// // // // //             } else {
// // // // //                 newResponse += responseArray[i];
// // // // //             }
// // // // //         }

// // // // //         let newResponse2 = newResponse.split("*").join("</br>");
// // // // //         let newResponseArray = newResponse2.split(" ");
// // // // //         for (let i = 0; i < newResponseArray.length; i++) {
// // // // //             const nextWord = newResponseArray[i];
// // // // //             delayPara(i, nextWord + " ");
// // // // //         }

// // // // //         setPrevConversations((prevConversations) => {
// // // // //             const updatedConversations = [...prevConversations];
// // // // //             updatedConversations[updatedConversations.length - 1] = {
// // // // //                 ...updatedConversations[updatedConversations.length - 1],
// // // // //                 response: newResponse2,
// // // // //                 showImage,
// // // // //                 showMore,
// // // // //             };
// // // // //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations)); // Store in sessionStorage
// // // // //             return updatedConversations;
// // // // //         });

// // // // //         setLoading(false);
// // // // //         setInput("");
// // // // //     };

// // // // //     const sendMessage = async () => {
// // // // //         if (!userInput.trim()) return;

// // // // //         const payload = {
// // // // //             user_prompt: userInput,
// // // // //             state: botState,
// // // // //             conversation_history: messages,
// // // // //         };

// // // // //         const response = await fetchAIResponse(payload);

// // // // //         setMessages((prevMessages) => [
// // // // //             ...prevMessages,
// // // // //             { text: userInput, isBot: false },
// // // // //             { text: response.chatbot_response, isBot: true }
// // // // //         ]);
// // // // //         setUserInput('');

// // // // //         try {
// // // // //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// // // // //             const buttonValues = JSON.parse(cleanedString);

// // // // //             if (Array.isArray(buttonValues)) {
// // // // //                 setButtons(buttonValues.map((value) => ({
// // // // //                     text: value,
// // // // //                     value: value,
// // // // //                 })));
// // // // //             } else {
// // // // //                 setButtons([]);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error("Error parsing button values:", error);
// // // // //             setButtons([]);
// // // // //         }
// // // // //     };

// // // // //     const contextValue = {
// // // // //         prevConversations,
// // // // //         setPrevConversations,
// // // // //         onSent,
// // // // //         recentPrompt,
// // // // //         showResult,
// // // // //         loading,
// // // // //         resultData,
// // // // //         input,
// // // // //         setInput,
// // // // //         messages,
// // // // //         setMessages,
// // // // //         userInput,
// // // // //         setUserInput,
// // // // //         buttons,
// // // // //         setButtons,
// // // // //         botState,
// // // // //         setBotState,
// // // // //         sendMessage,
// // // // //     };

// // // // //     return (
// // // // //         <Context.Provider value={contextValue}>
// // // // //             {props.children}
// // // // //         </Context.Provider>
// // // // //     );
// // // // // };

// // // // // export default ContextProvider;

// // // // import { createContext, useEffect, useState } from "react";
// // // // import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// // // // export const Context = createContext();

// // // // const ContextProvider = (props) => {
// // // //     const [input, setInput] = useState("");
// // // //     const [recentPrompt, setRecentPrompt] = useState("");
    
// // // //     // Ensure we start with an empty conversation history by clearing sessionStorage on first load
// // // //     const [prevConversations, setPrevConversations] = useState(() => {
// // // //         // Clear sessionStorage when the app loads
// // // //         sessionStorage.removeItem("prevConversations");
// // // //         return [];
// // // //     });
    
// // // //     const [showResult, setShowResult] = useState(false);
// // // //     const [loading, setLoading] = useState(false);
// // // //     const [resultData, setResultData] = useState("");

// // // //     // New state for the chatbot
// // // //     const [messages, setMessages] = useState([]);
// // // //     const [userInput, setUserInput] = useState('');
// // // //     const [buttons, setButtons] = useState([]);
// // // //     const [botState, setBotState] = useState("recommendation");

// // // //     // Updating prevConversations to sessionStorage instead of localStorage
// // // //     useEffect(() => {
// // // //         // Make sure we save the current conversation in sessionStorage
// // // //         sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // // //     }, [prevConversations]);

// // // //     const delayPara = (index, nextWord) => {
// // // //         setTimeout(function () {
// // // //             setResultData((prev) => prev + nextWord);
// // // //         }, 75 * index);
// // // //     };

// // // //     const onSent = async (prompt) => {
// // // //         setResultData(""); 
// // // //         setLoading(true);
// // // //         setShowResult(true);
// // // //         setRecentPrompt(input);

// // // //         setPrevConversations((prevConversations) => {
// // // //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // // //             sessionStorage.setItem("prevConversations", JSON.stringify(newConversation)); // Store in sessionStorage
// // // //             return newConversation;
// // // //         });

// // // //         // AWS API response handling
// // // //         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
// // // //         const response = await fetchAIResponse(payload);
        
// // // //         let responseText = response.chatbot_response;
// // // //         let responseArray = responseText.split("**");
// // // //         let newResponse = "";
// // // //         let showImage = false;
// // // //         let showMore = false;

// // // //         for (let i = 0; i < responseArray.length; i++) {
// // // //             if (responseArray[i] === "{{show_image}}") {
// // // //                 showImage = true;
// // // //             } else if (responseArray[i] === "{{show_more}}") {
// // // //                 showMore = true;
// // // //             } else {
// // // //                 newResponse += responseArray[i];
// // // //             }
// // // //         }

// // // //         let newResponse2 = newResponse.split("*").join("</br>");
// // // //         let newResponseArray = newResponse2.split(" ");
// // // //         for (let i = 0; i < newResponseArray.length; i++) {
// // // //             const nextWord = newResponseArray[i];
// // // //             delayPara(i, nextWord + " ");
// // // //         }

// // // //         setPrevConversations((prevConversations) => {
// // // //             const updatedConversations = [...prevConversations];
// // // //             updatedConversations[updatedConversations.length - 1] = {
// // // //                 ...updatedConversations[updatedConversations.length - 1],
// // // //                 response: newResponse2,
// // // //                 showImage,
// // // //                 showMore,
// // // //             };
// // // //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations)); // Store in sessionStorage
// // // //             return updatedConversations;
// // // //         });

// // // //         setLoading(false);
// // // //         setInput("");
// // // //     };
    
// // // //     const sendMessage = async () => {
// // // //         if (!userInput.trim()) return;

// // // //         const payload = {
// // // //             user_prompt: userInput,
// // // //             state: botState,
// // // //             conversation_history: messages,
// // // //         };

// // // //         const response = await fetchAIResponse(payload);

// // // //         setMessages((prevMessages) => [
// // // //             ...prevMessages,
// // // //             { text: userInput, isBot: false },
// // // //             { text: response.chatbot_response, isBot: true }
// // // //         ]);
// // // //         setUserInput('');

// // // //         try {
// // // //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// // // //             const buttonValues = JSON.parse(cleanedString);

// // // //             if (Array.isArray(buttonValues)) {
// // // //                 setButtons(buttonValues.map((value) => ({
// // // //                     text: value,
// // // //                     value: value,
// // // //                 })));
// // // //             } else {
// // // //                 setButtons([]);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error parsing button values:", error);
// // // //             setButtons([]);
// // // //         }
// // // //     };

// // // //     const contextValue = {
// // // //         prevConversations,
// // // //         setPrevConversations,
// // // //         onSent,
// // // //         recentPrompt,
// // // //         showResult,
// // // //         loading,
// // // //         resultData,
// // // //         input,
// // // //         setInput,
// // // //         messages,
// // // //         setMessages,
// // // //         userInput,
// // // //         setUserInput,
// // // //         buttons,
// // // //         setButtons,
// // // //         botState,
// // // //         setBotState,
// // // //         sendMessage,
// // // //     };

// // // //     return (
// // // //         <Context.Provider value={contextValue}>
// // // //             {props.children}
// // // //         </Context.Provider>
// // // //     );
// // // // };

// // // // export default ContextProvider;

// // // import { createContext, useEffect, useState } from "react";
// // // import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// // // export const Context = createContext();

// // // const ContextProvider = (props) => {
// // //     const [input, setInput] = useState("");
// // //     const [recentPrompt, setRecentPrompt] = useState("");
    
// // //     // Ensure we start with an empty conversation history by clearing sessionStorage on first load
// // //     const [prevConversations, setPrevConversations] = useState(() => {
// // //         sessionStorage.removeItem("prevConversations");
// // //         return [];
// // //     });
    
// // //     const [showResult, setShowResult] = useState(false);
// // //     const [loading, setLoading] = useState(false);
// // //     const [resultData, setResultData] = useState("");
    
// // //     // New state for the chatbot
// // //     const [messages, setMessages] = useState([]);
// // //     const [userInput, setUserInput] = useState('');
// // //     const [buttons, setButtons] = useState([]);
// // //     const [botState, setBotState] = useState("recommendation");

// // //     // Updating prevConversations to sessionStorage instead of localStorage
// // //     useEffect(() => {
// // //         sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// // //     }, [prevConversations]);

// // //     const delayPara = (index, nextWord) => {
// // //         setTimeout(function () {
// // //             setResultData((prev) => prev + nextWord);
// // //         }, 75 * index);
// // //     };

// // //     const onSent = async (prompt) => {
// // //         setResultData(""); 
// // //         setLoading(true);
// // //         setShowResult(true);
// // //         setRecentPrompt(input);

// // //         setPrevConversations((prevConversations) => {
// // //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// // //             sessionStorage.setItem("prevConversations", JSON.stringify(newConversation)); // Store in sessionStorage
// // //             return newConversation;
// // //         });

// // //         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
// // //         const response = await fetchAIResponse(payload);
        
// // //         let responseText = response.chatbot_response;
// // //         let responseArray = responseText.split("**");
// // //         let newResponse = "";
// // //         let showImage = false;
// // //         let showMore = false;

// // //         for (let i = 0; i < responseArray.length; i++) {
// // //             if (responseArray[i] === "{{show_image}}") {
// // //                 showImage = true;
// // //             } else if (responseArray[i] === "{{show_more}}") {
// // //                 showMore = true;
// // //             } else {
// // //                 newResponse += responseArray[i];
// // //             }
// // //         }

// // //         let newResponse2 = newResponse.split("*").join("</br>");
// // //         let newResponseArray = newResponse2.split(" ");
// // //         for (let i = 0; i < newResponseArray.length; i++) {
// // //             const nextWord = newResponseArray[i];
// // //             delayPara(i, nextWord + " ");
// // //         }

// // //         setPrevConversations((prevConversations) => {
// // //             const updatedConversations = [...prevConversations];
// // //             updatedConversations[updatedConversations.length - 1] = {
// // //                 ...updatedConversations[updatedConversations.length - 1],
// // //                 response: newResponse2,
// // //                 showImage,
// // //                 showMore,
// // //             };
// // //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations)); // Store in sessionStorage
// // //             return updatedConversations;
// // //         });

// // //         setLoading(false);
// // //         setInput("");
// // //     };

// // //     const sendMessage = async () => {
// // //         if (!userInput.trim()) return;

// // //         const payload = {
// // //             user_prompt: userInput,
// // //             state: botState,
// // //             conversation_history: messages,
// // //         };

// // //         const response = await fetchAIResponse(payload);

// // //         setMessages((prevMessages) => [
// // //             ...prevMessages,
// // //             { text: userInput, isBot: false },
// // //             { text: response.chatbot_response, isBot: true }
// // //         ]);
// // //         setUserInput('');

// // //         try {
// // //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// // //             const buttonValues = JSON.parse(cleanedString);

// // //             if (Array.isArray(buttonValues)) {
// // //                 setButtons(buttonValues.map((value) => ({
// // //                     text: value,
// // //                     value: value,
// // //                 })));
// // //             } else {
// // //                 setButtons([]);  // Clear buttons if not an array
// // //             }
// // //         } catch (error) {
// // //             console.error("Error parsing button values:", error);
// // //             setButtons([]);  // Clear buttons on error
// // //         }
// // //     };

// // //     const contextValue = {
// // //         prevConversations,
// // //         setPrevConversations,
// // //         onSent,
// // //         recentPrompt,
// // //         showResult,
// // //         loading,
// // //         resultData,
// // //         input,
// // //         setInput,
// // //         messages,
// // //         setMessages,
// // //         userInput,
// // //         setUserInput,
// // //         buttons,
// // //         setButtons,
// // //         botState,
// // //         setBotState,
// // //         sendMessage,
// // //     };

// // //     return (
// // //         <Context.Provider value={contextValue}>
// // //             {props.children}
// // //         </Context.Provider>
// // //     );
// // // };

// // // export default ContextProvider;

// // import { createContext, useEffect, useState } from "react";
// // import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// // export const Context = createContext();

// // const ContextProvider = (props) => {
// //     const [input, setInput] = useState("");
// //     const [recentPrompt, setRecentPrompt] = useState("");
    
// //     // Ensure we start with an empty conversation history by clearing sessionStorage on first load
// //     const [prevConversations, setPrevConversations] = useState(() => {
// //         sessionStorage.removeItem("prevConversations");
// //         return [];
// //     });
    
// //     const [showResult, setShowResult] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [resultData, setResultData] = useState("");
    
// //     // New state for the chatbot
// //     const [messages, setMessages] = useState([]);
// //     const [userInput, setUserInput] = useState('');
// //     const [buttons, setButtons] = useState([]);
// //     const [botState, setBotState] = useState("recommendation");

// //     // State for simulating typing effect
// //     const [partialResponse, setPartialResponse] = useState(""); // For the typed-out response

// //     // Updating prevConversations to sessionStorage instead of localStorage
// //     useEffect(() => {
// //         sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
// //     }, [prevConversations]);

// //     const onSent = async (prompt) => {
// //         setResultData(""); 
// //         setLoading(true);
// //         setShowResult(true);
// //         setRecentPrompt(input);

// //         setPrevConversations((prevConversations) => {
// //             const newConversation = [...prevConversations, { prompt: input, response: "", showImage: false, showMore: false }];
// //             sessionStorage.setItem("prevConversations", JSON.stringify(newConversation)); 
// //             return newConversation;
// //         });

// //         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
// //         const response = await fetchAIResponse(payload);

// //         let responseText = response.chatbot_response;
// //         let responseArray = responseText.split("**");
// //         let newResponse = "";
// //         let showImage = false;
// //         let showMore = false;

// //         for (let i = 0; i < responseArray.length; i++) {
// //             if (responseArray[i] === "{{show_image}}") {
// //                 showImage = true;
// //             } else if (responseArray[i] === "{{show_more}}") {
// //                 showMore = true;
// //             } else {
// //                 newResponse += responseArray[i];
// //             }
// //         }

// //         let newResponse2 = newResponse.split("*").join("</br>");

// //         setPrevConversations((prevConversations) => {
// //             const updatedConversations = [...prevConversations];
// //             updatedConversations[updatedConversations.length - 1] = {
// //                 ...updatedConversations[updatedConversations.length - 1],
// //                 response: newResponse2,
// //                 showImage,
// //                 showMore,
// //             };
// //             sessionStorage.setItem("prevConversations", JSON.stringify(updatedConversations));
// //             return updatedConversations;
// //         });

// //         // Function to simulate typing with 75ms delay
// //         const simulateTyping = (fullResponse) => {
// //             let index = 0;
// //             const typingInterval = setInterval(() => {
// //                 setPartialResponse((prev) => prev + fullResponse[index]);
// //                 index++;
// //                 if (index === fullResponse.length) {
// //                     clearInterval(typingInterval);
// //                     setResultData(fullResponse); // Set the entire response once typing is finished
// //                 }
// //             }, 75); // Delay of 75ms between characters
// //         };

// //         // Simulate typing the response
// //         simulateTyping(newResponse2);

// //         setLoading(false);
// //         setInput("");
// //     };

// //     const sendMessage = async () => {
// //         if (!userInput.trim()) return;

// //         const payload = {
// //             user_prompt: userInput,
// //             state: botState,
// //             conversation_history: messages,
// //         };

// //         console.log(userInput);
// //         console.log(botState);
// //         console.log(messages);
        

// //         const response = await fetchAIResponse(payload);

// //         setMessages((prevMessages) => [
// //             ...prevMessages,
// //             { text: userInput, isBot: false },
// //             { text: response.chatbot_response, isBot: true }
// //         ]);
// //         setUserInput('');

// //         try {
// //             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
// //             const buttonValues = JSON.parse(cleanedString);

// //             if (Array.isArray(buttonValues)) {
// //                 setButtons(buttonValues.map((value) => ({
// //                     text: value,
// //                     value: value,
// //                 })));
// //             } else {
// //                 setButtons([]);  // Clear buttons if not an array
// //             }
// //         } catch (error) {
// //             console.error("Error parsing button values:", error);
// //             setButtons([]);  // Clear buttons on error
// //         }
// //     };

// //     const contextValue = {
// //         prevConversations,
// //         setPrevConversations,
// //         onSent,
// //         recentPrompt,
// //         showResult,
// //         loading,
// //         resultData,
// //         input,
// //         setInput,
// //         messages,
// //         setMessages,
// //         userInput,
// //         setUserInput,
// //         buttons,
// //         setButtons,
// //         botState,
// //         setBotState,
// //         sendMessage,
// //     };

// //     return (
// //         <Context.Provider value={contextValue}>
// //             {props.children}
// //         </Context.Provider>
// //     );
// // };

// // export default ContextProvider;

// import { createContext, useEffect, useState } from "react";
// import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

// export const Context = createContext();

// const ContextProvider = (props) => {
//     const [input, setInput] = useState("");
//     const [prevConversations, setPrevConversations] = useState(() => {
//         sessionStorage.removeItem("prevConversations");
//         return [];
//     });
//     const [showResult, setShowResult] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [resultData, setResultData] = useState("");
//     const [buttons, setButtons] = useState([]);
//     const [botState, setBotState] = useState("recommendation");

//     // Update prevConversations in sessionStorage
//     useEffect(() => {
//         sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
//     }, [prevConversations]);

//     const onSent = async (prompt) => {
//         setResultData(""); 
//         setLoading(true);
//         setShowResult(true);

//         // Send API request with user input and bot state
//         const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
//         const response = await fetchAIResponse(payload);

//         const newResponse = response.chatbot_response.split("*").join("<br>");
//         setPrevConversations((prevConversations) => [...prevConversations, { prompt, response: newResponse }]);

//         // Handle buttons in the response
//         try {
//             const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
//             const buttonValues = JSON.parse(cleanedString);

//             if (Array.isArray(buttonValues)) {
//                 setButtons(buttonValues.map((value) => ({
//                     text: value,
//                     value: value,
//                 })));
//             } else {
//                 setButtons([]);  // Clear buttons if not an array
//             }
//         } catch (error) {
//             console.error("Error parsing button values:", error);
//             setButtons([]);  // Clear buttons on error
//         }

//         setLoading(false);
//         setInput("");
//     };

//     const contextValue = {
//         prevConversations,
//         onSent,
//         showResult,
//         loading,
//         resultData,
//         input,
//         setInput,
//         buttons,
//         setButtons,
//         botState,
//         setBotState,
//     };

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     );
// };

// export default ContextProvider;

import { createContext, useEffect, useState } from "react";
import fetchAIResponse from "../config/awsAPI"; // Import the AWS API interaction logic

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    
    // Ensure we start with an empty conversation history by clearing sessionStorage on first load
    const [prevConversations, setPrevConversations] = useState(() => {
        sessionStorage.removeItem("prevConversations");
        return [];
    });
    
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    // New state for the chatbot
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [buttons, setButtons] = useState([]);
    const [botState, setBotState] = useState("recommendation");

    // State for simulating typing effect
    const [partialResponse, setPartialResponse] = useState(""); // For the typed-out response

    // Updating prevConversations to sessionStorage instead of localStorage
    useEffect(() => {
        sessionStorage.setItem("prevConversations", JSON.stringify(prevConversations));
    }, [prevConversations]);

    const onSent = async (prompt) => {
        setLoading(true);
        setShowResult(true);

        // Append the new conversation with empty response but show the prompt
        setPrevConversations((prevConversations) => [
            ...prevConversations,
            { prompt, response: "", loading: true },  // Add a new entry with loading flag
        ]);

        // Send API request with user input and bot state
        const payload = { user_prompt: prompt, state: botState, conversation_history: prevConversations };
        const response = await fetchAIResponse(payload);

        const newResponse = response.chatbot_response.split("*").join("<br>");

        // Update the most recent conversation (the one with loading: true)
        setPrevConversations((prevConversations) => {
            const updatedConversations = [...prevConversations];
            updatedConversations[updatedConversations.length - 1] = {
                ...updatedConversations[updatedConversations.length - 1],
                response: newResponse, // Replace the loading flag with the actual response
                loading: false,
            };
            return updatedConversations;
        });

        // Handle buttons in the response
        try {
            const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
            const buttonValues = JSON.parse(cleanedString);

            if (Array.isArray(buttonValues)) {
                setButtons(buttonValues.map((value) => ({
                    text: value,
                    value: value,
                })));
            } else {
                setButtons([]);  // Clear buttons if not an array
            }
        } catch (error) {
            console.error("Error parsing button values:", error);
            setButtons([]);  // Clear buttons on error
        }

        setLoading(false);
        setInput("");
    };

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const payload = {
            user_prompt: userInput,
            state: botState,
            conversation_history: messages,
        };

        console.log(userInput);
        console.log(botState);
        console.log(messages);
        

        const response = await fetchAIResponse(payload);

        setMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, isBot: false },
            { text: response.chatbot_response, isBot: true }
        ]);
        setUserInput('');

        try {
            const cleanedString = response.button_values.replace(/^'|'$/g, '"').replace(/'/g, '"');
            const buttonValues = JSON.parse(cleanedString);

            if (Array.isArray(buttonValues)) {
                setButtons(buttonValues.map((value) => ({
                    text: value,
                    value: value,
                })));
            } else {
                setButtons([]);  // Clear buttons if not an array
            }
        } catch (error) {
            console.error("Error parsing button values:", error);
            setButtons([]);  // Clear buttons on error
        }
    };

    const contextValue = {
        prevConversations,
        setPrevConversations,
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        messages,
        setMessages,
        userInput,
        setUserInput,
        buttons,
        setButtons,
        botState,
        setBotState,
        sendMessage,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
