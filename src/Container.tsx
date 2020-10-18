import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Container: React.FC = ({ children, ...rest }) => {
  const { background } = useContext(ThemeContext)
  return (
    <div style={{ background, padding: '1.5rem' }} {...rest}>
      {children}
    </div>
  )
}

export default Container
