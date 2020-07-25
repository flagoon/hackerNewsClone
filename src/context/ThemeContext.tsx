import React from 'react'

type Theme = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = React.createContext<Theme>({
  theme: 'light',
  toggleTheme: () => {
    // do nothing
  },
})

export default ThemeContext
