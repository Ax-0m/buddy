import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "ollama",
  baseURL: "http://localhost:11434/v1",
});

export type Message = {
    role: "system" | "user" | "assistant";
    content: string;
};

export async function callModel(messages: Message[]): Promise<string> {
    const res = await client.chat.completions.create({
    model: process.env.OLLAMA_MODEL!,
        messages,
    });

    return res.choices[0]?.message.content ?? "";
}
