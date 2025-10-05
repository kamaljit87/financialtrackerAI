'use server';

/**
 * @fileOverview An AI agent for suggesting transaction categories.
 *
 * - suggestCategory - A function that suggests a category for a given transaction.
 * - SuggestCategoryInput - The input type for the suggestCategory function.
 * - SuggestCategoryOutput - The return type for the suggestCategory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCategoryInputSchema = z.object({
  transactionDescription: z
    .string()
    .describe('The description of the transaction.'),
});
export type SuggestCategoryInput = z.infer<typeof SuggestCategoryInputSchema>;

const SuggestCategoryOutputSchema = z.object({
  category: z.string().describe('The suggested category for the transaction.'),
  explanation:
    z.string().describe('Explanation of why this category was chosen.'),
});
export type SuggestCategoryOutput = z.infer<typeof SuggestCategoryOutputSchema>;

export async function suggestCategory(
  input: SuggestCategoryInput
): Promise<SuggestCategoryOutput> {
  return suggestCategoryFlow(input);
}

const suggestCategoryPrompt = ai.definePrompt({
  name: 'suggestCategoryPrompt',
  input: {schema: SuggestCategoryInputSchema},
  output: {schema: SuggestCategoryOutputSchema},
  prompt: `You are an expert financial advisor.  Given the transaction description, suggest a category for the transaction and explain why you chose that category.

Transaction Description: {{{transactionDescription}}}

Respond in the following format:
{
  "category": "the suggested category",
  "explanation": "the explanation of why this category was chosen"
}
`,
});

const suggestCategoryFlow = ai.defineFlow(
  {
    name: 'suggestCategoryFlow',
    inputSchema: SuggestCategoryInputSchema,
    outputSchema: SuggestCategoryOutputSchema,
  },
  async input => {
    const {output} = await suggestCategoryPrompt(input);
    return output!;
  }
);
