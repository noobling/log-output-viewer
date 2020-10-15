import React from 'react'
import Number from './Number'
import Text from './Text'

interface Props {
  text: string
  number: number
}

export default function LineItem({ text, number }: Props) {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            '.line-item:hover {',
            'background: #2f363d;',
            'color: #fafbfc; !important;',
            '}'
          ].join('\n')
        }}
      />
      <div
        style={{
          lineHeight: '20px',
          color: '#e1e4e8',
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
