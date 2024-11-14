// awsAPI.js

const fetchAIResponse = async (payload) => {
    try {
        const response = await fetch(
            'https://2isixn6on3.execute-api.ap-south-1.amazonaws.com/dev/get_chatbot_response',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        if (!response.ok) {
            throw new Error(`Error fetching chatbot response: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in fetchAIResponse:", error);
        throw error;
    }
};

export default fetchAIResponse;
