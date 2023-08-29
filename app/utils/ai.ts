import { OpenAI } from 'langchain/llms/openai';
import z from 'zod';
import { StructuredOutputParser } from 'langchain/output_parsers';

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('the mood of he person who wrote the journal entry.'),
    summary: z.string().describe('quick summary of the entire entry.'),
    negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotions?).'
      ),
    color: z
      .string()
      .describe(
        'a hexadecimal color code that represents the mood of the entry. Example: #22c55e for green representing happiness. '
      ),
  })
);

export async function analyze(prompt) {
  const model = new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' });
  const result = await model.call(prompt);

  console.log(result);
}
