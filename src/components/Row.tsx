import React from 'react'
import { Column as ColumnComponent } from './Column'
import type { ContentBlock, Alignment } from '../types/component'
import type { Column } from './Editor'

interface RowProps {
  id: string
  columns: Column[]
  isSelected: boolean
  onSelect: () => void
  onSelectColumn?: (columnId: string) => void
}

export const Row: React.FC<RowProps> = ({
  columns,
  isSelected,
  onSelect,
  onSelectColumn,
}) => {
  return (
    <div
      className={`row-container ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="row-header">
        <span>Row</span>
      </div>
      <div className="row-content">
        {columns.length === 0 ? (
          <div className="empty-column">No columns yet</div>
        ) : (
          columns.map((column) => (
            <ColumnComponent
              key={column.id}
              {...column}
              onSelect={() => {
                onSelectColumn?.(column.id)
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}
