'use server';

/**
 * @fileOverview Explains why a transaction was categorized a certain way.
 *
 * - explainTransactionCategorization - A function that handles the explanation of transaction categorization.
 * - ExplainTransactionCategorizationInput - The input type for the explainTransactionCategorization function.
 * - ExplainTransactionCategorizationOutput - The return type for the explainTransactionCategorization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainTransactionCategorizationInputSchema = z.object({
  transactionDescription: z.string().describe('The description of the transaction.'),
  suggestedCategory: z.string().describe('The category the transaction was assigned to.'),
});
export type ExplainTransactionCategorizationInput = z.infer<
  typeof ExplainTransactionCategorizationInputSchema
>;

const ExplainTransactionCategorizationOutputSchema = z.object({
  explanation: z
    .string()
    .describe('The AI explanation of why the transaction was categorized this way.'),
});
export type ExplainTransactionCategorizationOutput = z.infer<
  typeof ExplainTransactionCategorizationOutputSchema
>;

export async function explainTransactionCategorization(
  input: ExplainTransactionCategorizationInput
): Promise<ExplainTransactionCategorizationOutput> {
  return explainTransactionCategorizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainTransactionCategorizationPrompt',
  input: {schema: ExplainTransactionCategorizationInputSchema},
  output: {schema: ExplainTransactionCategorizationOutputSchema},
  prompt: `You are an expert personal finance AI.

You are explaining to the user why a transaction was categorized a certain way.

Transaction Description: {{{transactionDescription}}}
Suggested Category: {{{suggestedCategory}}}

Explain why this transaction was categorized as such, and provide details or other possible categories if the current suggestion is incorrect or not applicable. Keep the explanation brief and to the point.
`,
});

const explainTransactionCategorizationFlow = ai.defineFlow(
  {
    name: 'explainTransactionCategorizationFlow',
    inputSchema: ExplainTransactionCategorizationInputSchema,
    outputSchema: ExplainTransactionCategorizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
