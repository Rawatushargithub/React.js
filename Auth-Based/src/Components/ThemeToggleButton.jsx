import React from "react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggleButton({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={
        `rounded-xl px-4 py-2 text-sm font-semibold ` +
        `bg-black/10 hover:bg-black/20 ` +
        `dark:bg-white/10 dark:hover:bg-white/20 ` +
        className
      }
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
