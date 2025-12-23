# Wix Interview Assignment - Page Builder

A React webapp featuring a sidebar navigation and visual editor for building page layouts with rows, columns, and content blocks.

## Sendbox version
https://codesandbox.io/p/sandbox/github/meniman15/wix-interview-assignment

## Project Overview

This application allows users to create page layouts by managing:
- **Rows** - Container sections for organizing content horizontally
- **Columns** - Cells within rows for organizing content vertically
- **Content** - Text and image blocks within columns with alignment options

## Features

- **Hierarchical Layout System** - Organize content with rows and columns
- **Flexible Content** - Add text or image content to any column
- **Alignment Control** - Set text alignment (left, center, right) for content
- **Intuitive Sidebar Navigation** - Quick access to add and modify layout elements
- **Real-time State Management** - Content updates immediately as you edit

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx      # Layout controls and content editor
│   ├── Editor.tsx       # Main layout canvas
│   ├── Row.tsx          # Row component
│   ├── Column.tsx       # Column component
│   ├── Text.tsx         # Text content block
│   └── Image.tsx        # Image content block
├── styles/
│   ├── Sidebar.css      # Sidebar styles
│   └── Editor.css       # Editor styles
├── types/
│   └── component.ts     # Type definitions
├── utils/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application component
├── App.css              # Application layout styles
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety and development experience
- **Vite** - Fast build tool and dev server
- **CSS** - Styling with no external UI libraries

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Recent Improvements

### Fixed Column Addition Bug
- **Issue**: When a row was selected and already contained columns, there was no way to add more columns to that row
- **Solution**: 
  - Updated `handleAddColumn` function to work when either a row or column is selected
  - Added "Add Column" button to the column controls in the sidebar
  - Users can now seamlessly add columns to any row, regardless of what's currently selected

## How to Use

1. Click **"+ Add Row"** to create a new row
2. Select the row and click **"+ Add Column"** to add columns
3. Select a column and choose **Text** or **Image** content type
4. Edit the content directly in the sidebar
5. Adjust alignment for text content
6. Add more columns to existing rows by selecting any column and clicking **"+ Add Column"**
