import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize Gemini client using the environment variable as per instructions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "Disculpa, estoy disfrutando de un café y no pude procesar tu pregunta.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Lo siento, hubo un error de conexión con los cafetales. Intenta de nuevo.";
  }
};
