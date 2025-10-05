export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type Account = {
  id: string;
  userId: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Credit Card';
  balance: number;
  institution: string;
};

export type Transaction = {
  id: string;
  accountId: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  category: string;
  notes?: string;
};

export type Category = {
  id: string;
  name: string;
  parentId?: string;
  color: string;
};

export type Budget = {
  id: string;
  userId: string;
  categoryId: string;
  amount: number;
  spent: number;
  month: string; // e.g., "2024-07"
};

export type Debt = {
  id: string;
  userId: string;
  name: string;
  type: 'Mortgage' | 'Student Loan' | 'Credit Card' | 'Personal Loan' | 'Auto Loan' | 'Other';
  balance: number;
  apr: number;
  minPayment: number;
  dueDay?: number;
};
