import axios from "axios";

// Load API key from .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const fetchData = async (text: string): Promise<string | null> => {
  try {
    const response = await axios.post(
      `${BASE_URL}?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text }] }],
      }
    );

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

export default fetchData;
