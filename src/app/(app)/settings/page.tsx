export default function SettingsPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center">
                <div>
                    <h1 className="font-headline text-3xl font-semibold">Settings</h1>
                    <p className="text-muted-foreground">Manage your account and preferences.</p>
                </div>
            </div>
             <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        Settings page coming soon
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Manage accounts, categories, notifications, and data export.
                    </p>
                </div>
            </div>
        </main>
    );
}
