import React from 'react'

export default function Toolbar() {
  return (
    <div className="toolbar">
            <button onClick={() => formatText('bold')}><span className="material-icons">format_bold</span></button>
            <button onClick={() => formatText('italic')}><span className="material-icons">format_italic</span></button>
            <button onClick={() => formatText('underline')}><span className="material-icons">format_underlined</span></button>
            <button onClick={() => formatText('strikeThrough')}><span className="material-icons">strikethrough_s</span></button>
            <button onClick={() => formatText('insertUnorderedList')}><span className="material-icons">format_list_bulleted</span></button>
            <button onClick={() => formatText('insertOrderedList')}><span className="material-icons">format_list_numbered</span></button>
            <button onClick={insertLink}><span className="material-icons">link</span></button>
            <button onClick={() => changeFont('Nunito')}>Nunito</button>
            <button onClick={() => changeFont('Arial')}>Arial</button>
            <button onClick={increaseFontSize}>A+</button>
            <button onClick={decreaseFontSize}>A-</button>
        </div>
  )
}
