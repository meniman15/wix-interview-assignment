# Wix Interview Assignment - React Webapp

## Project Overview
This is a React webapp featuring a sidebar navigation and an editor component. The application allows users to manage multiple documents with a sidebar for navigation and a main editor area for content editing.

## Project Structure
```
src/
├── components/
│   ├── Sidebar.tsx      # Sidebar navigation component
│   └── Editor.tsx       # Editor component
├── styles/
│   ├── Sidebar.css      # Sidebar styles
│   └── Editor.css       # Editor styles
├── App.tsx              # Main application component
├── App.css              # Application layout styles
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## Features
- **Sidebar Navigation**: Browse and select between multiple documents
- **Editor**: Edit document content with a textarea interface
- **State Management**: Document content is persisted in React state
- **Responsive Design**: VS Code-inspired dark sidebar with clean editor interface

## Development

### Prerequisites
- Node.js 16+ and npm

### Getting Started
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173 in your browser

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technology Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS** - Styling (no external UI libraries)

## Key Components

### Sidebar
- Displays list of documents
- Highlights active/selected document
- Supports custom item selection
- Dark theme styling (VS Code inspired)

### Editor
- Textarea-based content editing
- Real-time content updates
- Optional read-only mode
- Clean, minimal interface

### App
- Manages document state
- Handles document selection and content updates
- Initializes with 3 sample documents

## Next Steps
- Add persistence (localStorage or backend API)
- Implement document creation/deletion
- Add syntax highlighting with a code editor library
- Add export/import functionality
- Enhance styling and UX
