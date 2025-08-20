import { NextResponse } from "next/server";
import groq from "@/lib/groq";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192" ,
      messages: [
        {
          role: "system",
          content:
            "You are a privacy policy translator. Summarize policies into plain English, extract risks, and give tips. Always reply in JSON with keys: summary, risks, tips.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content || "{}");

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
