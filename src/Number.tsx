import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Number: React.FC = ({ children }) => {
  const { numberColor } = useContext(ThemeContext)

  return (
    <span
      style={{
        flex: '0 0 25px',
        overflow: 'hidden',
        color: numberColor,
        textAlign: 'right',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        fontSize: '12px',
        fontWeight: 400
      }}
    >
      {children}
    </span>
  )
}

export default Number
