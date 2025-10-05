import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, DollarSign, CreditCard, Banknote } from 'lucide-react';
import Link from 'next/link';
import { Overview } from '@/components/dashboard/overview';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import { mockAccounts, mockBudgets } from '@/lib/data';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const netWorth = mockAccounts.reduce((sum, acc) => sum + acc.balance, 0);
  const totalBudget = mockBudgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = mockBudgets.reduce((sum, b) => sum + b.spent, 0);
  const budgetProgress = (totalSpent / totalBudget) * 100;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">
              {netWorth.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
            <Banknote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">+$4,500.89</div>
            <p className="text-xs text-muted-foreground">
              -10.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Progress</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">
              {totalSpent.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              of{' '}
              {totalBudget.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <Progress value={budgetProgress} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="pb-2">
             <CardTitle className="text-sm font-medium">Accelerate Payoff</CardTitle>
             <CardDescription className="text-primary-foreground/80">Optimize your debt payoff this month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Optimize Now
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Cash Flow Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                You have {mockBudgets.length} budgets this month.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/transactions">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
