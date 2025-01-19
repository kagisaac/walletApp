"use client";

import { Card } from "@/components/ui/card";
import { ShoppingBag, Coffee, Home, Car } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Grocery Shopping",
    amount: -120.5,
    category: "Shopping",
    date: "2024-03-20",
    icon: ShoppingBag,
  },
  {
    id: 2,
    name: "Coffee Shop",
    amount: -4.5,
    category: "Food & Drinks",
    date: "2024-03-19",
    icon: Coffee,
  },
  {
    id: 3,
    name: "Rent Payment",
    amount: -1200.0,
    category: "Housing",
    date: "2024-03-18",
    icon: Home,
  },
  {
    id: 4,
    name: "Car Insurance",
    amount: -89.99,
    category: "Transport",
    date: "2024-03-17",
    icon: Car,
  },
];

export function RecentTransactions() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-primary/10">
                <transaction.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {transaction.category}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-medium ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}
              >
                ${Math.abs(transaction.amount).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">
                {transaction.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
