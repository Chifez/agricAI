import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const data = await req.json();
    const { prompt } = data;

    const result = await model.generateContent(prompt);

    if (result && result.response) {
      const response = result.response;
      const output = await response.text();

      console.log('output', output);

      return NextResponse.json({ output: output });
    } else {
      console.error('No response received from the model');
      return NextResponse.json({
        error: 'No response received from the model',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: (error as Error).message });
  }
}
