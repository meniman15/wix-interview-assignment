import React from 'react'
import { Text } from './Text'
import { Image } from './Image'
import type { ContentBlock, Alignment } from '../types/component'

interface ColumnProps {
  id: string
  alignment: Alignment
  content?: ContentBlock
  onSelect: () => void
}

export const Column: React.FC<ColumnProps> = ({
  alignment,
  content,
  onSelect,
}) => {
  return (
    <div
      className={`column-container align-${alignment}`}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
    >
      <div className="column-content">
        {!content ? (
          <div className="content-placeholder">No content yet</div>
        ) : (
          <div className={`content-block ${content.type}`}>
            {content.type === 'text' && (
              <Text text={content.text || ''} alignment={content.alignment || 'left'} />
            )}
            {content.type === 'image' && <Image imageURL={content.imageURL || ''} />}
          </div>
        )}
      </div>
    </div>
  )
}
