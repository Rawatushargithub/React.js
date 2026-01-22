# Auth-Based (React + Vite + Tailwind)

A small learning project demonstrating **auth-protected routes**, **theme (dark/light) toggle**, and a **currency converter** module, built with **React**, **Vite**, **React Router**, and **Tailwind CSS**.

## Features

- **Login flow** with a simple in-memory auth context
- **Protected routes** using a `ProtectedRoute` wrapper
- **Theme toggle** (dark/light) via `ThemeContext` + Tailwind `dark:` variants
- **Reusable UI structure** using `AppShell` + shared `Sidebar`
- **Currency Converter** page using a custom hook (`useCurrencyInfo`) and a searchable currency picker (`InputBox`)
- **Profile page** includes a password **SHOW/HIDE** interaction and a "Topics I learned" section

## Pages & Routes

- `/` → redirects to `/login`
- `/login` → public page
- `/dashboard` → protected
- `/profile` → protected
- `/currency/converter` → protected

## Tech Stack

- React (Hooks)
- Vite
- React Router DOM
- Tailwind CSS

## Project Structure

```text
src/
	Components/
		AppShell.jsx           # Shared page layout (sidebar + main area)
		Sidebar.jsx            # Shared navigation
		ThemeToggleButton.jsx  # Reusable theme toggle button
		InputBox.jsx           # Amount + currency selector (with search)
	Context/
		AuthContext.jsx        # Login/logout + user state
		ThemeContext.jsx       # dark/light handling + localStorage
	hooks/
		useAuth.js
		useTheme.js
		useCurrencyInfo.js     # Fetches currency rates
	pages/
		Login.jsx
		Dashboard.jsx
		Profile.jsx
		Converter.jsx
	routes/
		ProtectedRoute.jsx
	App.jsx
	main.jsx
```

## Setup & Run

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Notes

- Theme preference is stored in **localStorage** under the key `theme`.
- This is a learning/demo project (do not display passwords in real apps).

## Ideas to Improve

- Persist auth using real backend / JWT
- Add a dedicated “Manage Account” page and wire it via the sidebar
- Add form validation and better error handling

