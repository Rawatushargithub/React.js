import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isProfile = location.pathname === "/profile";
  const isConverter = location.pathname === "/currency/converter";

  const navItemBase =
    "flex items-center gap-3 rounded-xl px-3 py-2.5 ring-1 transition";

  const activeClasses =
    "bg-black/5 ring-black/10 hover:bg-black/10 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10";

  const inactiveClasses =
    "ring-black/10 hover:bg-black/5 dark:ring-white/10 dark:hover:bg-white/5";

  return (
    <aside className="rounded-2xl bg-white/70 ring-1 ring-black/10 backdrop-blur p-4 lg:p-5 dark:bg-slate-900/60 dark:ring-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Auth-Based
          </p>
          <h2 className="mt-1 text-lg font-semibold">Control Center</h2>
        </div>
        <div className="h-9 w-9 rounded-xl bg-indigo-500/15 ring-1 ring-indigo-500/25 grid place-items-center">
          <span className="text-sm font-bold text-indigo-300">AT</span>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-medium text-slate-400">NAVIGATION</p>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`${navItemBase} ${
              isDashboard ? activeClasses : inactiveClasses
            }`}
          >
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-500/15 ring-1 ring-indigo-500/25 text-indigo-300">
              D
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Dashboard</p>
              <p className="text-xs text-slate-400">Overview & status</p>
            </div>
          </Link>

          <Link
            to="/profile"
            className={`${navItemBase} ${
              isProfile ? activeClasses : inactiveClasses
            }`}
          >
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/25 text-emerald-300">
              P
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Profile</p>
              <p className="text-xs text-slate-400">Account details</p>
            </div>
          </Link>
          <Link
            to="/currency/converter"
            className={`${navItemBase} ${
              isConverter ? activeClasses : inactiveClasses
            }`}
          >
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/25 text-indigo-300">
              C
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Currency Converter</p>
              <p className="text-xs text-slate-400">Convert currencies</p>
            </div>
          </Link>
        </nav>
      </div>

      <div className="mt-6 rounded-2xl bg-white/70 ring-1 ring-black/10 p-4 dark:bg-slate-950/50 dark:ring-white/10">
        <p className="text-sm font-semibold">Quick note</p>
        <p className="mt-1 text-xs text-slate-400">
          This is a shared sidebar component.
        </p>
      </div>
    </aside>
  );
}
