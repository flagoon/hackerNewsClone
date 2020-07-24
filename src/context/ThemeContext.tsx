import React from 'react'

type Theme = {
  theme: string
  changeTheme: (newTheme: string) => void
}

const ThemeContext = React.createContext<Theme>({
  theme: 'light',
  changeTheme: () => {
    // do nothing
  },
})

export default ThemeContext
