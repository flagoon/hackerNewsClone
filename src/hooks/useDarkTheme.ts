import React from 'react'

const useDarkTheme = (): [string, () => void] => {
  const [theme, setTheme] = React.useState('light')
  const { localStorage } = window

  const setMode = (mode: string): void => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [theme, themeToggler]
}

export default useDarkTheme
