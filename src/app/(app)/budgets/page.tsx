import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { mockBudgets } from '@/lib/data';
import { PlusCircle } from 'lucide-react';

export default function BudgetsPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center">
                <div>
                    <h1 className="font-headline text-3xl font-semibold">Budgets</h1>
                    <p className="text-muted-foreground">Your monthly spending plan.</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" className="gap-1">
                        <PlusCircle className="h-4 w-4" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Budget
                        </span>
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockBudgets.map((budget) => {
                    const progress = (budget.spent / budget.amount) * 100;
                    return (
                        <Card key={budget.id}>
                            <CardHeader>
                                <CardTitle className="text-base font-medium">{budget.category}</CardTitle>
                                <CardDescription>
                                    <span className="font-semibold text-foreground">
                                        {budget.spent.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                    </span>
                                    {' '} of {' '}
                                    {budget.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={progress} className="h-2" />
                            </CardContent>
                        </Card>
                    );
                })}
                 <Card className="border-dashed flex items-center justify-center">
                    <Button variant="ghost" className="flex flex-col h-full w-full gap-2">
                        <PlusCircle className="h-8 w-8 text-muted-foreground"/>
                        <span className="text-muted-foreground">Add New Budget</span>
                    </Button>
                </Card>
            </div>
        </main>
    );
}
