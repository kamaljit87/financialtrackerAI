export default function GoalsPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center">
                <div>
                    <h1 className="font-headline text-3xl font-semibold">Goals</h1>
                    <p className="text-muted-foreground">Set and track your financial goals.</p>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        Goal tracking coming soon
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Create sinking funds and savings goals to plan for the future.
                    </p>
                </div>
            </div>
        </main>
    );
}
