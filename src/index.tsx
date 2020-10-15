import * as React from 'react'
import LineItem from './LineItem'
import Container from './Container'

interface Props {
  text: string
}

export const LogViewer = ({ text }: Props) => {
  const lines = text.split(/\r?\n/)

  return (
    <Container>
      {lines.map((line, index) => (
        <LineItem key={index} text={line} number={index + 1} />
      ))}
    </Container>
  )
}
