import React from 'react'
import type { ContentBlock, Alignment } from '../types/component'
import type { SelectedItem, RowType, Column } from './Editor'
import '../styles/Sidebar.css'

interface SidebarProps {
  rows: RowType[]
  setRows: React.Dispatch<React.SetStateAction<RowType[]>>
  selectedItem: SelectedItem | null
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem | null>>
}

export const Sidebar: React.FC<SidebarProps> = ({
  rows,
  setRows,
  selectedItem,
  setSelectedItem
}) => {

  const generateId = () => Math.random().toString(36).substring(2, 9)

  const getColumnData = (): Column | undefined => {
    if (selectedItem?.type !== 'column') return undefined
    return rows
      .find(r => r.id === selectedItem.rowId)
      ?.columns.find(c => c.id === selectedItem.columnId)
  }

  const handleAddRow = () => {
    const newRow: RowType = { id: generateId(), columns: [] }
    setRows([...rows, newRow])
    setSelectedItem({ type: 'row', rowId: newRow.id })
  }

  const handleAddColumn = () => {
    let targetRowId: string | undefined
    if (selectedItem?.type === 'row') {
      targetRowId = selectedItem.rowId
    } else if (selectedItem?.type === 'column') {
      targetRowId = selectedItem.rowId
    }

    if (!targetRowId) return
    const newId = generateId()
    setRows(
      rows.map(row =>
        row.id === targetRowId
          ? { ...row, columns: [...row.columns, { id: newId, alignment: 'left' as const }] }
          : row
      ) as RowType[]
    )
    setSelectedItem({ type: 'column', rowId: targetRowId, columnId: newId })
  }

  const handleAddContent = (type: 'text' | 'image') => {
    if (selectedItem?.type !== 'column') return
    const newId = generateId()
    setRows(
      rows.map(row =>
        row.id === selectedItem.rowId
          ? {
              ...row,
              columns: row.columns.map(col =>
                col.id === selectedItem.columnId
                  ? {
                      ...col,
                      content:
                        type === 'text'
                          ? { id: newId, type: 'text', text: '', alignment: 'left' as const }
                          : { id: newId, type: 'image', imageURL: '' }
                    }
                  : col
              )
            }
          : row
      )
    )
  }

  const handleSetAlignment = (alignment: Alignment) => {
    if (selectedItem?.type !== 'column') return
    setRows(
      rows.map(row =>
        row.id === selectedItem.rowId
          ? {
              ...row,
              columns: row.columns.map(col =>
                col.id === selectedItem.columnId ? { ...col, alignment } : col
              )
            }
          : row
      )
    )
  }

  const handleUpdateContent = (updates: Partial<ContentBlock>) => {
    if (selectedItem?.type !== 'column') return
    setRows(
      rows.map(row =>
        row.id === selectedItem.rowId
          ? {
              ...row,
              columns: row.columns.map(col =>
                col.id === selectedItem.columnId && col.content
                  ? {
                      ...col,
                      content: { ...col.content, ...updates } as ContentBlock
                    }
                  : col
              )
            }
          : row
      ) as RowType[]
    )
  }

  const renderRootContent = () => (
    <div className="sidebar-section">
      <h3>Page</h3>
      <button className="sidebar-button" onClick={handleAddRow}>
        + Add Row
      </button>
    </div>
  )

  const renderRowContent = () => (
    <div className="sidebar-section">
      <h3>Row</h3>
      <button className="sidebar-button" onClick={handleAddColumn}>
        + Add Column
      </button>
    </div>
  )

  const renderColumnContent = () => {
    const columnData = getColumnData()
    const currentContentType = columnData?.content?.type ?? 'text'

    return (
      <div className="sidebar-section">
        <h3>Column</h3>
        <button className="sidebar-button" onClick={handleAddColumn}>
          + Add Column
        </button>

        {/* Content Type Selection */}
        <div className="sidebar-control">
          <label>Content Type</label>
          <div className="button-group">
            <button
              className={`sidebar-button ${currentContentType === 'text' ? 'active' : ''}`}
              onClick={() => {
                if (currentContentType !== 'text') {
                  handleAddContent('text')
                }
              }}
            >
              Text
            </button>
            <button
              className={`sidebar-button ${currentContentType === 'image' ? 'active' : ''}`}
              onClick={() => {
                if (currentContentType !== 'image') {
                  handleAddContent('image')
                }
              }}
            >
              Image
            </button>
          </div>
        </div>

        {/* Alignment Selection */}
        {(!currentContentType || currentContentType === 'text') && (
          <div className="sidebar-control">
            <label>Alignment</label>
            <div className="button-group">
              {(['left', 'center', 'right'] as const).map((align) => (
                <button
                  key={align}
                  className={`sidebar-button ${columnData?.alignment === align ? 'active' : ''}`}
                  onClick={() => handleSetAlignment(align)}
                >
                  {align.charAt(0).toUpperCase() + align.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Editing */}
        {currentContentType === 'text' && columnData?.content?.type === 'text' && (
          <div className="sidebar-control">
            <label>Text Content</label>
            <textarea
              className="sidebar-textarea"
              placeholder="Enter text content..."
              value={columnData.content.text}
              onChange={(e) => {
                handleUpdateContent({ text: e.target.value })
              }}
            />
          </div>
        )}

        {currentContentType === 'image' && columnData?.content?.type === 'image' && (
          <div className="sidebar-control">
            <label>Image URL</label>
            <textarea
              className="sidebar-textarea"
              placeholder="Enter image URL..."
              value={columnData.content.imageURL}
              onChange={(e) => {
                handleUpdateContent({ imageURL: e.target.value })
              }}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="sidebar">
      {renderRootContent()}
      
      {selectedItem?.type === 'row' && (
        renderRowContent()
      )}

      {selectedItem?.type === 'column' && (
        renderColumnContent()
      )}
    </aside>
  )
}
