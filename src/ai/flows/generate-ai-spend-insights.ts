'use server';

/**
 * @fileOverview Generates a digest of spending habits, highlighting trends, anomalies, upcoming bills, and cash flow forecasts.
 *
 * - generateAISpendInsights - A function that generates the AI spend insights.
 * - GenerateAISpendInsightsInput - The input type for the generateAISpendInsights function.
 * - GenerateAISpendInsightsOutput - The return type for the generateAISpendInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAISpendInsightsInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  transactionHistory: z.string().describe('A summary of the user transaction history.'),
  budgetSummary: z.string().describe('A summary of the user budget.'),
  upcomingBills: z.string().describe('A summary of the user upcoming bills.'),
});
export type GenerateAISpendInsightsInput = z.infer<typeof GenerateAISpendInsightsInputSchema>;

const GenerateAISpendInsightsOutputSchema = z.object({
  insights: z.string().describe('A digest of spending habits, highlighting trends, anomalies, upcoming bills, and cash flow forecasts.'),
});
export type GenerateAISpendInsightsOutput = z.infer<typeof GenerateAISpendInsightsOutputSchema>;

export async function generateAISpendInsights(input: GenerateAISpendInsightsInput): Promise<GenerateAISpendInsightsOutput> {
  return generateAISpendInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAISpendInsightsPrompt',
  input: {schema: GenerateAISpendInsightsInputSchema},
  output: {schema: GenerateAISpendInsightsOutputSchema},
  prompt: `You are a personal finance advisor. Analyze the following information about the user's finances and provide a digest of spending habits, highlighting trends, anomalies, upcoming bills, and cash flow forecasts.

Transaction History: {{{transactionHistory}}}
Budget Summary: {{{budgetSummary}}}
Upcoming Bills: {{{upcomingBills}}}

Provide your analysis in a clear and concise manner, focusing on actionable insights that the user can use to improve their financial situation.`,
});

const generateAISpendInsightsFlow = ai.defineFlow(
  {
    name: 'generateAISpendInsightsFlow',
    inputSchema: GenerateAISpendInsightsInputSchema,
    outputSchema: GenerateAISpendInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
