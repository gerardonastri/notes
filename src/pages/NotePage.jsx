import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosReq from '../util/apiCalls'
import { useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import Cookies from 'js-cookie'

const NotePage = () => {
  const {id} = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  const csrftoken = Cookies.get('csrftoken') 

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axiosReq.get(`notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log(error);        
      }
    }
    if(id === 'new') return;
    getNotes();
  }, [id])

  /*const updateNote = async () => {
    try {
      const res = await axiosReq.put(`notes/${note.id}/update/`, {
        note
      })
    } catch (error) {
      
    }
  }*/
  let updateNote = async () => {
    fetch(`https://jer-notes-api.herokuapp.com/api/notes/${id}/update/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        //credendials: 'include',
        body: JSON.stringify(note)
    })
  }
  /*let createNote = async () => {
    fetch(`https://jer-notes-api.herokuapp.com/api/notes/create/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': csrftoken
        },
        body: JSON.stringify(note)
    })
  } */
  const createNote = async () => {
    await axiosReq.post(`notes/create/`, {
      note
    })
  }
  const deleteNote = async () => {
    try {
      await axiosReq.delete(`notes/${id}/delete/`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async () => {
    if(id !== "new" && note.body.length === 0){
      deleteNote();
    } else if(id !== 'new') {
      updateNote();
    } else if(id === 'new' && note !== null) {
      createNote();
    }
    navigate('/');
  }
  

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
        
      </div>
      <textarea onChange={(e) => setNote({...note, 'body': e.target.value})} defaultValue={note?.body}>{note?.body}</textarea>
    </div>
  )
}

export default NotePage