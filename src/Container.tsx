import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
    <div style={{ background: '#242a2e', padding: '1.5rem' }}>{children}</div>
  )
}

export default Container
