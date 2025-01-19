"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useWallet } from "@/lib/wallet-context";

export function BudgetProgress() {
  const { budgets } = useWallet();

  if (budgets.length === 0) {
    return (
      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Budget Overview</h3>
        <p className="text-muted-foreground">
          No budgets set. Click "Set Budget" to get started.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Budget Overview</h3>
      <div className="space-y-6">
        {budgets.map((budget) => {
          const progress = (budget.spent / budget.amount) * 100;
          const isExceeding = budget.spent > budget.amount;

          return (
            <div key={budget.id} className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {budget.period.charAt(0).toUpperCase() +
                      budget.period.slice(1)}{" "}
                    Budget
                    {budget.category ? ` (${budget.category})` : ""}
                  </span>
                  <span className="text-sm font-medium">
                    ${budget.amount.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Spent</span>
                <span className="font-medium">
                  ${budget.spent.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Remaining</span>
                <span className="font-medium">
                  ${(budget.amount - budget.spent).toLocaleString()}
                </span>
              </div>
              {isExceeding && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    You have exceeded your {budget.period} budget
                    {budget.category ? ` for ${budget.category}` : ""}!
                  </AlertDescription>
                </Alert>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
