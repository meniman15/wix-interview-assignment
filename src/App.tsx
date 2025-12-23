import { useState } from 'react'
import { Editor, type SelectedItem, type RowType } from './components/Editor'
import { Sidebar } from './components/Sidebar'
import './App.css'

function App() {
  const [rows, setRows] = useState<RowType[]>([])
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>({ type: 'root' })

  return (
    <div className="app-container">
      <Editor
        rows={rows}
        selectedItem={selectedItem}
        onSelectRow={(rowId) => setSelectedItem({ type: 'row', rowId })}
        onSelectColumn={(rowId, columnId) => setSelectedItem({ type: 'column', rowId, columnId })}
      />
      <Sidebar
        rows={rows}
        setRows={setRows}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  )
}

export default App
