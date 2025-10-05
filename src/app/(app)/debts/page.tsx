export default function DebtsPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center">
                <div>
                    <h1 className="font-headline text-3xl font-semibold">Debts</h1>
                    <p className="text-muted-foreground">Manage your debts and payoff strategies.</p>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        Debt calculators coming soon
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Add your debts and explore payoff strategies like Avalanche and Snowball.
                    </p>
                </div>
            </div>
        </main>
    );
}
