import React, { useState, useEffect } from 'react'

export default function useDarkMode() {
  // const [theme, setTheme] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));

  useEffect(() => {
    console.log('useEffect in DarkMode!');
    
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

  return { theme, setTheme }
}
