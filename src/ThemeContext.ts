import { createContext } from 'react'

export interface Theme {
  background: string
  numberColor: string
  lineFontColor: string
  lineFontColorFocus: string
  lineBackgroundFocus: string
}

export interface Themes {
  light: Theme
  dark: Theme
}

export const themes: Themes = {
  light: {
    background: '#e1e4e8',
    numberColor: 'rgba(149,157,165,.75)',
    lineFontColor: '#242a2e',
    lineFontColorFocus: '#e1e4e8',
    lineBackgroundFocus: '#e1e4e8'
  },
  dark: {
    numberColor: 'rgba(149,157,165,.75)',
    background: '#242a2e',
    lineBackgroundFocus: '#2f363d',
    lineFontColor: '#e1e4e8',
    lineFontColorFocus: '#2f363d'
  }
}

export const ThemeContext = createContext(themes.dark)
