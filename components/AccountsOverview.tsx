"use client";

import { Card } from "@/components/ui/card";
import { Ban as Bank, Wallet, CreditCard } from "lucide-react";

const accounts = [
  {
    name: "Bank Account",
    balance: 5240.50,
    icon: Bank,
    change: "+2.5%",
    positive: true
  },
  {
    name: "Mobile Money",
    balance: 850.75,
    icon: CreditCard,
    change: "+1.2%",
    positive: true
  },
  {
    name: "Cash",
    balance: 320.00,
    icon: Wallet,
    change: "-0.8%",
    positive: false
  }
];

export function AccountsOverview() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Accounts Overview</h3>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-primary/10">
                <account.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{account.name}</p>
                <p className="text-sm text-muted-foreground">
                  ${account.balance.toLocaleString()}
                </p>
              </div>
            </div>
            <span className={`text-sm ${account.positive ? "text-green-600" : "text-red-600"}`}>
              {account.change}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}