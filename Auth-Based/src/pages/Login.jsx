import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

function Login() {
  const { login, user } = useAuth()
  const { theme } = useTheme()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()

    const u = username.trim()
    const p = password.trim()

    if (!u || !p) {
      window.alert('Please enter username and password to login.')
      return
    }

    login(u, p)
    navigate(from, { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 shadow-2xl shadow-black/10 backdrop-blur p-6 sm:p-8 dark:bg-slate-900/60 dark:ring-white/10 dark:shadow-black/30">
          <div className="mb-6 ">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200">
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="w-full rounded-xl bg-white/80 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-black/10 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-white/10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full rounded-xl bg-white/80 px-4 py-3 pr-12 text-slate-900 placeholder:text-slate-400 ring-1 ring-black/10 outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-white/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 px-3 text-xs font-medium text-slate-300 hover:text-white"
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Sign in
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>
                Tip: Use any demo username/password configured in your auth
                context.
              </span>
              <button
                type="button"
                className="text-indigo-300 hover:text-indigo-200"
                onClick={() => {
                  setUsername('')
                  setPassword('')
                }}
              >
                Clear
              </button>
            </div>

            {user && (
              <div className="mt-4 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 p-4">
                <p className="text-sm text-emerald-200">
                  Signed in as{' '}
                  <span className="font-semibold">{user.name}</span>
                </p>
                <p className="mt-1 text-xs text-emerald-200/80">
                  Password: <span className="font-mono">{user.password}</span>
                </p>
              </div>
            )}
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Auth-Based • React + Tailwind
        </p>
      </div>
    </div>
  )
}

export default Login