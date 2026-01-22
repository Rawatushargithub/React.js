import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppShell from "../Components/AppShell";
import ThemeToggleButton from "../Components/ThemeToggleButton";

function Dashboard() {
  const location = useLocation();
  const { logout } = useAuth();
  return (
    <AppShell>
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-300">
                  Your app overview and a clean starting point.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </button>
                <ThemeToggleButton />
              </div>
            </header>

            <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-4 dark:bg-slate-950/50 dark:ring-white/10">
                <p className="text-xs font-medium text-slate-400">STATUS</p>
                <p className="mt-2 text-lg font-semibold">Online</p>
                <p className="mt-1 text-xs text-slate-400">
                  Everything looks good.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-4 dark:bg-slate-950/50 dark:ring-white/10">
                <p className="text-xs font-medium text-slate-400">PROJECT</p>
                <p className="mt-2 text-lg font-semibold">Auth-Based</p>
                <p className="mt-1 text-xs text-slate-400">
                  React + Tailwind template.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-4 dark:bg-slate-950/50 dark:ring-white/10">
                <p className="text-xs font-medium text-slate-400">SECURITY</p>
                <p className="mt-2 text-lg font-semibold">Enabled</p>
                <p className="mt-1 text-xs text-slate-400">
                  Connect real auth later.
                </p>
              </div>
            </section>

            <section className="mt-6">
              <div className="rounded-2xl bg-gradient-to-r from-indigo-500/15 via-cyan-500/10 to-emerald-500/10 ring-1 ring-black/10 p-6 dark:ring-white/10">
                <p className="text-xs uppercase tracking-widest text-slate-300">
                  Preview
                </p>
                <div className="mt-3 rounded-2xl bg-white/70 ring-1 ring-black/10 p-6 text-center dark:bg-slate-950/50 dark:ring-white/10">
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Auth based react tailwind
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Replace this section with real dashboard widgets later.
                  </p>
                </div>
              </div>
            </section>
    </AppShell>
  );
}

export default Dashboard;
