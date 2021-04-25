import React from 'react';
import './Posting.css';

function Posting({id, title, body, onChange, onCreate}){


  return(
    <>
    <div className='Posting'>
      <div className="PostingBox">
        <div className='leftBox'>
          <div>
            <input name ="id" placeholder="User" className='inputId' onChange={onChange} value={id}/>
            <input name ="title" placeholder="Title" className='inputTitle' onChange={onChange} value={title}/>
          </div>
          <div>
            <input name ="body" placeholder="Body" className='inputBody' onChange={onChange} value={body}/>
          </div>
        </div>
        <button onClick={onCreate}>+</button>
      </div>
    </div>
    </>
  )
}

export default Posting