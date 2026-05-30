import {createOpenAI} from '@ai-sdk/openai';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error('OPENAI_API_KEY environment variable is not set');
}

export const openaiProvider = apiKey
  ? createOpenAI({
      apiKey,
    })
  : null;


