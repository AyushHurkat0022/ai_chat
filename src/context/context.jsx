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
