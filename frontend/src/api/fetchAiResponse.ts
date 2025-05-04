import axios from "axios";

const BASE_URL = "http://localhost:3000/ai-response";

export const fetchData = async (text: string, conversationHistory: string[]): Promise<string | null> => {
  try {
    const response = await axios.post(BASE_URL, { text, conversationHistory });

    if (response.status === 200) {
      return response.data; 
    } else {
      console.error("Unexpected status code:", response.status);
      return `Unexpected status code: ${response.status}`;
    }
  } catch (error: any) {
    console.error("Error fetching AI response:", error.message);

    if (axios.isAxiosError(error)) {
      return `Axios error: ${error.response?.data?.message || error.message}`;
    } else {
      return "Unexpected error occurred";
    }
  }
};

export default fetchData;
