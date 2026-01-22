import React from "react";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(60%_60%_at_80%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(70%_70%_at_50%_90%,rgba(16,185,129,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-950 dark:to-black" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid min-h-[calc(100vh-3rem)] grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <main className="rounded-2xl bg-white/70 ring-1 ring-black/10 backdrop-blur p-5 sm:p-6 dark:bg-slate-900/60 dark:ring-white/10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
