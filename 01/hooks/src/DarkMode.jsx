import React, { useState, useEffect } from 'react'

export function useDarkMode() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    console.log('useEffect in DarkMode!')
  }, [])

  return { theme, setTheme }
}
