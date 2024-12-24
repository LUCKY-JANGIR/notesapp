import React from 'react'
import Toolbar from './Toolbar';
export default function Content() {
  return (
    <div>
      <div className="content">
            <div className="top-bar">
                <h2 id="note-title">Note Title</h2>
                <span className="auto-save" id="auto-save" style={{ display: 'none' }}>Auto-saved</span>
                <Toolbar />
            </div>
            <div
                className="note-content"
                id="note-content"
                contentEditable="true"
                onInput={handleContentChange}
            >{noteContent}</div>
        </div>
    </div>
  )
}
