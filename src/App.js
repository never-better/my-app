import React, {useEffect, useState} from 'react';
import Post from'./Post'

export default function App() {
  const [postData, setPostdata] = useState([])

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
      {postData.map((post) => (<Post postData = {post} key={post.id}/>))}
    </div>

  )
}