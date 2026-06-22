Terminal AI Chatbot using Groq & Gemini

 Project Overview

This project is a terminal-based AI chatbot built with Node.js. It allows users to chat with AI directly from the terminal using either the Groq or Google Gemini API. The chatbot supports model switching and uses a fallback mechanism if one API is unavailable.

Features
- Terminal-based chat interface
- Groq API integration
- Google Gemini API integration
- Environment variables using ".env"
- Model switching (Groq ↔ Gemini)
- Error handling and fallback support
- Clean and modular project structure

Technologies Used

- Node.js
- JavaScript (ES Modules)
- Groq SDK
- Google Gemini API
- dotenv
- Git & GitHub

 Project Structure

ai-chatbot/
│── services/
│   ├── groq.js
│   └── gemini.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env (not included)
└── README.md


Installation

1. Clone the repository

git clone <repository-url>

2. Navigate to the project folder

cd ai-chatbot

3. Install dependencies

npm install

4. Create a ".env" file and add your API keys

GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key

 Run the Project

node index.js

Example

User: Hello
AI: Hi! How can I help you today?

 Learning Outcomes

- LLM API Integration
- Async JavaScript
- Environment Variables
- Model Switching
- Fallback Architecture
- Git & GitHub Workflow
