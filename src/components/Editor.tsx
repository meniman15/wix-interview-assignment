import React from 'react'
import { Row } from './Row'
import type { ContentBlock, Alignment } from '../types/component'
import '../styles/Editor.css'

export interface Column {
  id: string
  alignment: Alignment
  content?: ContentBlock
}

export interface RowType {
  id: string
  columns: Column[]
}

export type SelectedItem = 
  | { type: 'root' } 
  | { type: 'row'; rowId: string } 
  | { type: 'column'; rowId: string; columnId: string }

interface EditorProps {
  rows: RowType[]
  selectedItem: SelectedItem | null
  onSelectRow: (rowId: string) => void
  onSelectColumn: (rowId: string, columnId: string) => void
}

export const Editor: React.FC<EditorProps> = ({
  rows,
  selectedItem,
  onSelectRow,
  onSelectColumn
}) => {
  return (
    <div className="editor">
      <div className="editor-content">
        {rows.length === 0 ? (
          <div className="empty-state">Click "Add Row" to start building your page</div>
        ) : (
          rows.map((row) => (
            <Row
              key={row.id}
              id={row.id}
              columns={row.columns}
              isSelected={selectedItem?.type === 'row' && selectedItem?.rowId === row.id}
              onSelect={() => onSelectRow(row.id)}
              onSelectColumn={(columnId) => onSelectColumn(row.id, columnId)}
            />
          ))
        )}
      </div>
    </div>
  )
}

