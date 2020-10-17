import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Container: React.FC = ({ children }) => {
  const { background } = useContext(ThemeContext)
  return <div style={{ background, padding: '1.5rem' }}>{children}</div>
}

export default Container
