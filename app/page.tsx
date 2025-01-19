"use client";

import { Card } from "@/components/ui/card";
import { Overview } from "@/components/Overview";
import { RecentTransactions } from "@/components/RecentTransactions";
import { AccountsOverview } from "@/components/AccountsOverview";
import { BudgetProgress } from "@/components/BudgetProgress";
import { WalletHeader } from "@/components/WalletHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <WalletHeader />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AccountsOverview />
          <BudgetProgress />
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
            {/* Quick actions content */}
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Overview />
          <RecentTransactions />
        </div>
      </div>
    </main>
  );
}
