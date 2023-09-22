'use client'
import React, { createContext, useState } from 'react'

interface IThemeState {
  theme: string
}

interface IContextState {
  themeState: IThemeState
  setThemeState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IThemeState = {
  theme: 'default'
}

export const ThemeContext = createContext<IContextState>({
  themeState: initialState,
  setThemeState: () => null
})

const ThemeContextProvider = ({ children }: any) => {
  const [themeState, setThemeState] = useState<IThemeState>(initialState)

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        setThemeState
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
