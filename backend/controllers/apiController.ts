import { Request, Response } from 'express';
import { fetchAiResponse } from '../services/fetchAiResponse';

export const getAiResponse = async (req: Request, res: Response): Promise<void> => {
    try {
        const { text, conversationHistory } = req.body;

        console.log("Conversation History", conversationHistory)

        const prompt = `You are friend and intelligent chat bot. Here is the conversation so far:
        ${conversationHistory.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n')};

        Respond to the user's latest message: ${text}`
        

        if (!text) {
            res.status(400).json({ message: 'Text parameter is required' });
            return;
        }

        const data = await fetchAiResponse(prompt);

        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
