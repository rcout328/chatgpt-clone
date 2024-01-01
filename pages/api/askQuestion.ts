import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { DocumentData } from "firebase/firestore";

type Data = {
    answer: string;
};

// Replace this with your actual GPT query logic
async function queryGPTModel(prompt: string, model: string): Promise<string> {
    // Implement your GPT query logic here
    // This is just a placeholder; replace it with the actual code to interact with GPT
    return "Actual GPT response";
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide a prompt" });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: "Please provide a valid chat ID" });
        return;
    }

    try {
        // Replace with your actual GPT query function
        const gptResponse: string = await queryGPTModel(prompt, model);

        const message = {
            text: gptResponse || "Chatgpt was unable to find an answer for that!",
            createdAt: admin.firestore.Timestamp.now(),
            user: {
                _id: 'ChatGPT',
                name: 'ChatGPT',
                avatar: "https://links.papareact.com/89k",
            },
        };

        await adminDb
            .collection("users")
            .doc(session?.user?.email)
            .collection("chats")
            .doc(chatId)
            .collection("messages")
            .add(message);

        res.status(200).json({ answer: message.text });
    } catch (error) {
        console.error("Error querying GPT model:", error);
        res.status(500).json({ answer: "Internal server error" });
    }
}
