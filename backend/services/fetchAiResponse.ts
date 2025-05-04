import axios from 'axios'

// Load API key from .env file
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export const fetchAiResponse = async (text: string): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${BASE_URL}?key=AIzaSyBUpfWeYgLnO3fjozUkeHIHO1n0yM8o7Bg`,
      {
        contents: [{ parts: [{ text }] }],
      }
    );

    console.log("Services/FetchAiReponse runs")
    const result = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return result || "No response text available";
  } catch (error) {
    console.error("Fetch error:", error);

    // Detailed error handling
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }

    return null; // Ensure graceful fallback
  }
};

export default fetchAiResponse;
