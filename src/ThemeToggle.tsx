import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center rounded-lg transition-colors
                 text-zinc-900"
    >
      {theme === "dark" ? (
        <>
          <span>☀️</span>
        </>
      ) : (
        <>
          <span>🌙</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
