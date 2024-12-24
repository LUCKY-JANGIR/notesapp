import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {
  const [noteContent, setNoteContent] = useState('');

    const handleContentChange = (e) => {
        setNoteContent(e.target.innerHTML);
    };

    const createNewNote = () => {
        setNoteContent('');
    };

    return (
        <div className="container">
            <Sidebar createNewNote={createNewNote} />
            <Content noteContent={noteContent} handleContentChange={handleContentChange} />
        </div>
    );
}

export default App;
