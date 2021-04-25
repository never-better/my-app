import React, {useEffect, useState} from 'react';
import Post from'./Post'
import Posting from'./Posting'
import './App.css'

export default function App() {
  const [postData, setPostdata] = useState([])
  
  const [posting, setPosting] = useState({
    id : '',
    title : '',
    body : ''
  })

  const {id, title, body} = posting;

  const onChange = e=>{
    const {name, value} = e.target;
    setPosting({
      ...posting, [name] : value
    })
  }

  const onCreate = () => {
    const post = {
      id ,
      title,
      body
    }
    setPostdata([post, ...postData]);
    setPosting({
      id : '',
      title : '',
      body : ''})
  }

  const getPostdata = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts/")
    .then( (response) => response.json())
    .then((data) => setPostdata(data))
    }

  useEffect( () => {
    getPostdata();
  }, [])


  return (
    <div>
      <div className='title'>YouTak's React</div>
      <Posting id={id} title={title} body={body} onChange ={onChange} onCreate = {onCreate}/>
      {postData.map((post) => (<Post postData = {post} key={post.id}/>))}
    </div>

  )
}