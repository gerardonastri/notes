import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem';
import axiosReq from '../util/apiCalls'
import AddButton from '../components/AddButton'

const NotesList = () => {

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axiosReq.get('notes');
        setNotes(res.data);
      } catch (error) {
        console.log(error);        
      }
    }
    getNotes();
  }, [])

  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className="notes-count">{notes?.length}</p>
      </div>
      <div className="notes-list">
        {notes?.map((note, i) => (
          <ListItem note={note && note} key={i} />
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesList