import OpenAI from "openai";
import openaiInstance from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
        const res = await openaiInstance.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
            temperature: 0.9,
            top_p: 1,
            max_tokens: 1000,
            frequency_penalty: 0,
            presence_penalty: 0,
        }).then((res) => res.data.choices[0].text)
        .catch(
            (err) =>
                `Chat gpt not working (Error: ${err.message})`
                
        );

        return res;

       
}


export default query;
