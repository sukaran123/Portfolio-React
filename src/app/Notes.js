import React, { useState } from 'react'
import '../css/Notes.css'
import { Link, useNavigate } from 'react-router-dom';

const Notes = () => {
  const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate("/app");
    };
  const [searchQuery, setSearchQuery] = useState('');

  const notes = [
    { id: 1, title: 'Technical Skills', date: 'Yesterday', tags: '#Techno', folder: 'Notes', content: 'Content for Technical Skills' },
    { id: 2, title: 'Soft Skills', date: 'Yesterday', tags: '#Techno', folder: 'Notes', content: 'Content for Soft Skills' },
    { id: 3, title: 'Achievements', date: 'Yesterday', tags: '#Techno', folder: 'Notes', content: 'Content for Achievements' },
    { id: 4, title: 'Co-Curricular Activities', date: 'Yesterday', tags: '#Techno', folder: 'Notes', content: 'Content for Co-Curricular Activities' },
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='notes-container'>
      <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i
          class="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        {/* </div> */}
        <span>Folders</span>
      </div>
      <div className="notes-header">
        <span className="header-title">All iCloud</span>
      </div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="notes-list">
      <h2>Notes</h2>
        {filteredNotes.map(notes => (
          <Link key={notes.id} to={`/app/notes/${notes.id}`} className="note-item">
            <div className="note-title">{notes.title}</div>
            <div className="note-details">{notes.date} {notes.tags}</div>
            <div className="note-folder">{notes.folder}</div>
          </Link>
        ))}
      </div>
      <div className="notes-footer">
        {`${filteredNotes.length} Notes`}
      </div>
    </div>
  )
}

export default Notes