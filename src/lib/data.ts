import { Account, Transaction, Budget, Debt, User } from './types';

export const mockUser: User = {
  id: 'user-1',
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
};

export const mockAccounts: Account[] = [
  { id: 'acc-1', userId: 'user-1', name: 'Main Checking', type: 'Checking', balance: 5210.55, institution: 'Capital One' },
  { id: 'acc-2', userId: 'user-1', name: 'High-Yield Savings', type: 'Savings', balance: 25000.00, institution: 'Ally Bank' },
  { id: 'acc-3', userId: 'user-1', name: 'Travel Rewards Card', type: 'Credit Card', balance: -1240.78, institution: 'Chase' },
];

export const mockTransactions: Transaction[] = [
  { id: 'txn-1', accountId: 'acc-1', date: '2024-07-22', description: 'Starbucks', amount: 5.75, type: 'debit', category: 'Food & Dining' },
  { id: 'txn-2', accountId: 'acc-1', date: '2024-07-22', description: 'Spotify', amount: 10.99, type: 'debit', category: 'Subscriptions' },
  { id: 'txn-3', accountId: 'acc-3', date: '2024-07-21', description: 'Whole Foods Market', amount: 95.40, type: 'debit', category: 'Groceries' },
  { id: 'txn-4', accountId: 'acc-1', date: '2024-07-20', description: 'Direct Deposit - ACME Corp', amount: 2500.00, type: 'credit', category: 'Income' },
  { id: 'txn-5', accountId: 'acc-3', date: '2024-07-19', description: 'Amazon.com', amount: 42.11, type: 'debit', category: 'Shopping' },
  { id: 'txn-6', accountId: 'acc-1', date: '2024-07-18', description: 'Shell Gas Station', amount: 55.20, type: 'debit', category: 'Transportation' },
  { id: 'txn-7', accountId: 'acc-2', date: '2024-07-15', description: 'Interest Payment', amount: 20.83, type: 'credit', category: 'Interest' },
  { id: 'txn-8', accountId: 'acc-1', date: '2024-07-15', description: 'Rent Payment', amount: 1800.00, type: 'debit', category: 'Housing' },
  { id: 'txn-9', accountId: 'acc-3', date: '2024-07-14', description: 'Netflix', amount: 15.49, type: 'debit', category: 'Subscriptions' },
  { id: 'txn-10', accountId: 'acc-3', date: '2024-07-12', description: 'Blue Bottle Coffee', amount: 12.50, type: 'debit', category: 'Food & Dining' },
];

export const mockBudgets: Budget[] = [
  { id: 'bud-1', userId: 'user-1', categoryId: 'cat-1', category: 'Food & Dining', amount: 500, spent: 210.65, month: '2024-07' },
  { id: 'bud-2', userId: 'user-1', categoryId: 'cat-2', category: 'Groceries', amount: 600, spent: 312.90, month: '2024-07' },
  { id: 'bud-3', userId: 'user-1', categoryId: 'cat-3', category: 'Shopping', amount: 300, spent: 150.00, month: '2024-07' },
  { id: 'bud-4', userId: 'user-1', categoryId: 'cat-4', category: 'Transportation', amount: 250, spent: 55.20, month: '2024-07' },
  { id: 'bud-5', userId: 'user-1', categoryId: 'cat-5', category: 'Housing', amount: 1800, spent: 1800.00, month: '2024-07' },
  { id: 'bud-6', userId: 'user-1', categoryId: 'cat-6', category: 'Subscriptions', amount: 50, spent: 26.48, month: '2024-07' },
];

export const mockDebts: Debt[] = [
  { id: 'debt-1', userId: 'user-1', name: 'Student Loan', type: 'Student Loan', balance: 22000, apr: 5.8, minPayment: 250 },
  { id: 'debt-2', userId: 'user-1', name: 'Auto Loan', type: 'Auto Loan', balance: 15000, apr: 3.5, minPayment: 350 },
  { id: 'debt-3', userId: 'user-1', name: 'Chase Sapphire Reserve', type: 'Credit Card', balance: 4500, apr: 22.9, minPayment: 100 },
];
