import React from 'react'

const Number: React.FC = ({ children }) => {
  return (
    <span
      style={{
        flex: '0 0 25px',
        overflow: 'hidden',
        color: 'rgba(149,157,165,.75)',
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
