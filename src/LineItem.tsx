import React, { useContext } from 'react'
import Number from './Number'
import Text from './Text'
import { ThemeContext } from './ThemeContext'

interface Props {
  text: string
  number: number
}

export default function LineItem({ text, number }: Props) {
  const { lineBackgroundFocus, lineFontColor, lineFontColorFocus } = useContext(
    ThemeContext
  )
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            '.line-item:hover {',
            `background: ${lineBackgroundFocus};`,
            `color: ${lineFontColorFocus}; !important;`,
            '}'
          ].join('\n')
        }}
      />
      <div
        style={{
          lineHeight: '20px',
          color: lineFontColor,
          display: 'flex',
          cursor: 'pointer'
        }}
        className='line-item'
      >
        <Number>{number}</Number>
        <Text>{text}</Text>
      </div>
    </div>
  )
}
