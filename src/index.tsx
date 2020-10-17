import * as React from 'react'
import LineItem from './LineItem'
import Container from './Container'
import { ThemeContext, themes, Theme } from './ThemeContext'

type CustomTheme<T> = {
  [P in keyof T]?: T[P]
}

interface Props {
  text: string
  theme?: 'light' | 'dark'
  customTheme?: CustomTheme<Theme>
}

export const LogViewer = ({ text, theme, customTheme }: Props) => {
  const lines = text.split(/\r?\n/)
  const selectedTheme = theme === 'light' ? themes.light : themes.dark
  const userTheme = { ...selectedTheme, ...customTheme }
  return (
    <ThemeContext.Provider value={userTheme}>
      <Container>
        {lines.map((line, index) => (
          <LineItem key={index} text={line} number={index + 1} />
        ))}
      </Container>
    </ThemeContext.Provider>
  )
}
