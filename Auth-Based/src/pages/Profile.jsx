import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AppShell from "../Components/AppShell";
import ThemeToggleButton from "../Components/ThemeToggleButton";
function Profile() {
 const { user } = useAuth();
 const [showPassword, setShowPassword] = useState(false);
 const learnedTopics = [
  "useState",
  "useEffect",
  "React forms",
  "Custom hooks",
  "Context API",
  "useLocation",
  "React Router",
 ];
  return (
    <AppShell>
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Profile</h1>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Account information (template).</p>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggleButton />
              </div>
            </header>

            <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="lg:col-span-1 max-h-80 rounded-2xl bg-white/70 ring-1 ring-black/10 p-5 dark:bg-slate-950/50 dark:ring-white/10">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-emerald-500/20 ring-1 ring-white/10 grid place-items-center">
                    <span className="text-sm font-bold text-slate-100">U</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">Signed in as</p>
                    <p className="truncate text-base font-semibold">{user?.name}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center justify-between rounded-xl bg-black/5 px-3 py-2 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
                    <span>Plan</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Starter</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-black/5 px-3 py-2 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
                    <span>Role</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">User</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-5 dark:bg-slate-950/50 dark:ring-white/10">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Credentials</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Template fields (wire these up later).
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-4 dark:bg-white/5 dark:ring-white/10">
                    <p className="text-xs font-medium text-slate-400">USERNAME</p>
                    <p className="mt-2 font-mono text-sm text-slate-900 dark:text-slate-100">{user?.name}</p>
                  </div>

                  <div className="rounded-2xl bg-black/5 ring-1 ring-black/10 p-4 dark:bg-white/5 dark:ring-white/10">
                    <p className="text-xs font-medium text-slate-400">PASSWORD</p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="font-mono text-sm text-slate-900 dark:text-slate-100">
                        {showPassword ? (user?.password || "") : "•".repeat((user?.password || "").length)}
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="shrink-0 rounded-lg bg-black/5 px-3 py-1.5 text-xs font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-black/10 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10 dark:hover:bg-white/10"
                      >
                        {showPassword ? "HIDE" : "SHOW"}
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      Avoid displaying passwords in real apps.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 ring-1 ring-black/10 p-4 dark:ring-white/10">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold">Profile summary</p>
                      <p className="text-xs text-slate-400">
                        Add settings, sessions, and account actions here.
                      </p>
                    </div>
                    <button type="button" className="rounded-xl bg-black/5 px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-black/10 hover:bg-black/10 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10 dark:hover:bg-white/10">
                      Manage account
                    </button>
                  </div>
                </div>
                </div>

                <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-5 dark:bg-slate-950/50 dark:ring-white/10">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">TOPICS I LEARNED</p>
                  <h2 className="mt-2 text-lg font-semibold">React fundamentals used here</h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Quick list of concepts practiced in this project.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {learnedTopics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-full bg-black/5 px-3 py-1.5 text-xs font-semibold text-slate-900 ring-1 ring-black/10 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
    </AppShell>
  )
}

export default Profile