import React from 'react'

const Text: React.FC = ({ children }) => {
  return (
    <span
      style={{
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        marginLeft: '16px',
        fontSize: '12px',
        fontWeight: 400
      }}
    >
      {children}
    </span>
  )
}

export default Text
