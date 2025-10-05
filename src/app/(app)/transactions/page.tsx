import { Button } from '@/components/ui/button';
import { PlusCircle, Upload } from 'lucide-react';
import { DataTable } from '@/components/transactions/data-table';
import { columns } from '@/components/transactions/columns';
import { mockTransactions } from '@/lib/data';

export default function TransactionsPage() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center">
                <div>
                    <h1 className="font-headline text-3xl font-semibold">Transactions</h1>
                    <p className="text-muted-foreground">A list of all your recent transactions.</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                        <Upload className="h-4 w-4" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Import CSV
                        </span>
                    </Button>
                    <Button size="sm" className="gap-1">
                        <PlusCircle className="h-4 w-4" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add Transaction
                        </span>
                    </Button>
                </div>
            </div>
            <DataTable columns={columns} data={mockTransactions} />
        </main>
    )
}
