import React, { useState } from 'react';

export default function Sidebar() {
  // State to manage the content of a note
  const [noteContent, setNoteContent] = useState('');

  // Function to handle content changes
  const handleContentChange = (e) => {
    setNoteContent(e.target.innerHTML);
  };

  // Function to create a new note by clearing the current content
  const createNewNote = () => {
    setNoteContent('');
  };

  return (
    <div className="sidebar">
      <h2>Notes App</h2>
      <div id="notes-list">
        {/* Add a div to display and edit the note content */}
        <div 
          contentEditable="true" 
          onInput={handleContentChange} 
          dangerouslySetInnerHTML={{ __html: noteContent }}
        ></div>
      </div>
      <button className="new_note" onClick={createNewNote}>+ New Note</button>
    </div>
  );
}