import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockTransactions, mockUser } from '@/lib/data';

export function RecentTransactions() {
  const userInitials = mockUser.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="space-y-8">
      {mockTransactions.slice(0, 5).map((transaction) => (
        <div className="flex items-center" key={transaction.id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={mockUser.avatar} alt="Avatar" />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {transaction.category}
            </p>
          </div>
          <div className={`ml-auto font-medium ${transaction.type === 'credit' ? 'text-green-600' : ''}`}>
            {transaction.type === 'credit' ? '+' : '-'}
            {transaction.amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
