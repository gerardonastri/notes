import React from 'react'
import { Link } from 'react-router-dom'


const ListItem = ({note}) => {

  const getTitle = () => {
    let title = note.body.split('\n')[0];
    if(title.length > 45){
      return title.slice(0,45)
    }
    return title
  }
  const getTime = () => {
    return new Date(note.updated).toLocaleDateString()
  }
  const getContent = () => {
    const title = getTitle();
    let content = note.body.replaceAll('\n', " ")
    content = content.replaceAll(title, '')

    if(content.length > 45){
      return content.slice(0,45) + '...';
    } else {
      return content
    }
  }


  return (
    <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>
          <h3>{getTitle()}</h3>
          <p>
            <span>{getTime()}</span>
            {getContent()}
          </p>
        </div>
    </Link>
  )
}

export default ListItem