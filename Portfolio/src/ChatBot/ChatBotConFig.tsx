import './../css/ChatBot.css'
import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?", {})
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
      borderRadius: 0, 
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
      borderRadius: 0, 
    },
  },
};

export default config;
