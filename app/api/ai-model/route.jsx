import { QUESTION_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {

    const { jobPosition, jobDescription, interviewType, interviewDuration } = await req.json();

    const FINAL_PROMPT = QUESTION_PROMPT.replace('{jobPosition}', jobPosition)
        .replace('{jobDescription}', jobDescription)
        .replace('{interviewType}', interviewType)
        .replace('{interviewDuration}', interviewDuration);

    try {
        const openai = new OpenAI({
            // baseURL: "https://openrouter.ai/api/v1",
            // apiKey: process.env.OPENROUTER_API_KEY

            baseURL: "https://router.huggingface.co/v1",
	        apiKey: process.env.HF_TOKEN,
        })
        // const models = [
        //     "deepseek/deepseek-chat-v3-0324:free",
        //     "deepseek/deepseek-chat-v3-0324",
        //     "gpt-3.5-turbo",
        // ];

        const completion = await openai.chat.completions.create({
            model: "meta-llama/Llama-3.1-8B-Instruct:novita",
            messages: [
                { role: "user", content: FINAL_PROMPT }
            ],
        });
        console.log(completion.choices[0].message);
        return NextResponse.json(completion.choices[0].message)
    } catch (error) {
        console.error("Error from OpenRouter:", error.response?.data || error.message);
        const msg = error.response?.data || error.message || 'Unknown provider error';
        return NextResponse.json({ error: msg }, { status: 502 });
    }
}
