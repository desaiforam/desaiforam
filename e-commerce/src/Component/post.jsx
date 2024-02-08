import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  
  
  
  componentDidMount() {
    axios.get('https://fakestoreapi.com/products')
              
    
    .then(response => {
        // console.log(response)
        this.setState({posts: response.data})
       
    })
    .catch(error =>{
        console.log(error)
    })
  }
  
    render() {
        const { posts } = this.state
        
    return (
      <div>
        list of Post
        {
            posts.length?
            posts.map(posts => <div key={posts.id}>
                <div > title: {posts.title} </div> 
                <div> price:{posts.price}</div> 
                <div > rating: {posts?.rating.count}</div> 
                <div > rating: {posts?.rating.rate}</div>
                <img src={ posts?.image } alt=''/>
                </div> ):
            null
            
        }
       
      </div>
    )
  }
}

export default Post
