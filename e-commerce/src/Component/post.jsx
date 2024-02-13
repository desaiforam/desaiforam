import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Post = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')


      .then(response => {
        const data = response.data.map(item => ({
          quantity: 1,
          ...item
        }))
        setPost(data)
        console.log('data', data);

      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div>
      list of Post
      {
        post.length ?
          post.map(posts => <div key={posts.id}>
            <div > title: {posts.title} </div>
            <div> price:{posts.price}</div>
            <div > rating: {posts?.rating.count}</div>
            <div > rating: {posts?.rating.rate}</div>
            <img src={posts?.image} alt='' />
          </div>) :
          null

      }

    </div>
  )
}


export default Post
