import React, { useState, useEffect } from 'react';

const Chatbox = ({ predefinedMessages = [] }) => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(true);
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        if (predefinedMessages.length > 0) {
            // If predefinedMessages are provided, add them to the chatMessages state
            setChatMessages([...chatMessages, ...predefinedMessages]);
        }
    }, [predefinedMessages]);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const handleSend = () => {
        if (userInput.trim() !== '') {
            // Add the user's message to the chatMessages state
            setChatMessages([...chatMessages, { text: userInput, isUserMessage: true }]);
            setUserInput('');
        }
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <div className={`flex justify-center items-center my-20 ${isChatboxOpen ? '' : 'hidden'}`}>
                <div className="border-2 bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-black text-lg font-semibold">Chat Bot</p>
                        <button
                            id="close-chat"
                            className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            onClick={toggleChatbox}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                        {/* Render chat messages */}
                        {chatMessages.map((message, index) => (
                            <div key={index} className={message.isUserMessage ? 'mb-2 text-right' : 'mb-2'}>
                                <p className={message.isUserMessage ? 'bg-black text-white rounded-lg py-2 px-4 inline-block' : 'bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block'}>
                                    {message.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex">
                        <input
                            id="user-input"
                            type="text"
                            placeholder="Type a message"
                            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={userInput}
                            onChange={handleInputChange}
                            onKeyPress={handleInputKeyPress}
                        />
                        <button
                            id="send-button"
                            className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbox;
