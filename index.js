import dotenv from "dotenv";
dotenv.config();

import readline from "readline";
import { generateResponse } from "./utils/fallback.js";

let currentModel = "groq";

console.log("AI Terminal Chatbot");
console.log("Commands:");
console.log("/groq");
console.log("/gemini");
console.log("/exit");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startChat() {

  rl.question("\nYou: ", async (message) => {

    if (message === "/exit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    if (message === "/groq") {
      currentModel = "groq";
      console.log("Using Groq Model");
      return startChat();
    }

    if (message === "/gemini") {
      currentModel = "gemini";
      console.log("Using Gemini Model");
      return startChat();
    }

    try {

      const response = await generateResponse(
        message,
        currentModel
      );

      console.log("\nAI:", response);

    } catch (error) {

      console.log("Error:", error.message);
    }

    startChat();
  });
  console.log("GROQ :", process.env.GROQ_API_KEY);
}

startChat();