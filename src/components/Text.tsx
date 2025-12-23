import React from 'react'

interface TextProps {
  text: string
  alignment?: 'left' | 'center' | 'right'
}

export const Text: React.FC<TextProps> = ({ text, alignment = 'left' }) => {
  return (
    <div className="text-content" style={{ textAlign: alignment }}>
      {text}
    </div>
  )
}
