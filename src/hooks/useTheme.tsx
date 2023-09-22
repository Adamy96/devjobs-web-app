import { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { contrastTheme } from '@themes'
import { ThemeContext } from '@context/theme'

const useTheme = (initialTheme: ThemeType = 'default') => {
  const { themeState, setThemeState } = useContext(ThemeContext)

  const toggleTheme = async (e?: any) => {
    e?.preventDefault()
    const currentTheme = Cookies.get('theme') || initialTheme
    const newTheme = currentTheme === 'contrast' ? initialTheme : 'contrast'
    Cookies.set('theme', newTheme)
    setThemeState({ theme: newTheme })
    setApplicationTheme(newTheme)
  }

  const setApplicationTheme = (theme: string) => {
    if (theme === 'contrast') {
      document.head.innerHTML += `<style id="theme-active">
      :root {
        ${Object.keys(contrastTheme)
          .map((item) => `${item}: ${contrastTheme[item as keyof typeof contrastTheme]};`)
          .join('')}
      }
      </style>`
    } else {
      const styleTag = document.getElementById('theme-active')
      if (!styleTag) return
      styleTag?.parentElement?.removeChild(styleTag)
    }
  }

  useEffect(() => {
    const currentTheme = Cookies.get('theme') || initialTheme
    setApplicationTheme(currentTheme)
  }, [])

  return {
    toggleTheme,
    currentTheme: themeState?.theme,
    setThemeState,
    setApplicationTheme
  }
}

export default useTheme
