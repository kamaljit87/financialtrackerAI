# **App Name**: MintAI

## Core Features:

- Manual Account Creation: Allow users to manually add accounts with initial balances. Balances are auto-recalculated as transactions are added.
- CSV Transaction Upload: Enable users to upload transaction data from CSV files, mapping columns to the correct fields.
- AI-Powered Transaction Categorization: Employ AI to automatically categorize transactions with explanations for each categorization; users can correct categorizations, training the model over time. Uses a tool for suggesting the appropriate category, and also when it is confident enough to add a category to a transaction.
- Budgeting with Envelopes: Allow users to create monthly budgets for different categories with rollover options and customizable alerts at 50/80/100% of budget.
- Debt Payoff Calculators: Provide Avalanche and Snowball debt payoff calculators.
- Extra Payment Simulator: Simulate the impact of extra debt payments with a chart of time and interest saved.
- AI Insight Digest: Generate an AI-driven digest providing spend trends, anomaly detection, upcoming bills, and cash-flow forecasts.
- Database: Use a Postgres database to store financial information

## Style Guidelines:

- Primary color: Use a calming, muted green (#6C9177), reminiscent of financial growth and stability. This aligns with the app's goal of helping users manage their finances effectively. This is a desaturated color that sits comfortably within the recommended palette, avoids cliche, and contrasts against both a light and a dark scheme.
- Background color: A light, off-white (#F2F4F3) provides a clean and unobtrusive backdrop. This ensures readability and focuses attention on the financial data. It shares the green's basic hue, but is much lighter.
- Accent color: Choose a soft, analogous yellow (#A5A148) to highlight interactive elements. Being desaturated, it works well with the other tones.
- Headline font: 'Space Grotesk', sans-serif. Body font: 'Inter', sans-serif. 'Space Grotesk' for its modern and tech-forward feel; 'Inter' to ensure readability in longer text blocks.
- Use clear, minimalist icons from a consistent set (e.g., Material Icons) to represent different transaction categories and actions.
- Implement a responsive, mobile-first layout with a left navigation rail, a content area, and an optional right insights drawer.
- Employ subtle animations (e.g., toast notifications, loading spinners) to enhance user experience without being distracting.