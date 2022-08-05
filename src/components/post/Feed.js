import React, { useState, useEffect } from 'react'
import Post from '../shared/Post'
import { Button } from '@chakra-ui/react'
import { getAllPosts } from './../../api/post'
import Loading from '../shared/Loading'

const Feed = ({ msgAlert }) => {
  
  const [ posts, setPosts ] = useState(null) 
  useEffect(() => {
      getAllPosts()
        .then(res => {
          console.log('res =====>', res)
          setPosts(res.data.posts)
        })
        .catch(err => {
          msgAlert('Error displaying posts', 'error')
          console.log(err)})
  }, [])

  //this happens if posts == null
  if (!posts) {
    return (
      <Loading align='center' justify='center'/>
    )
  }
  //this happens if posts != null, but its length is 0 aka, no posts have been created
  else if(posts.length === 0){
    return (
      "No posts"
    )
  }
  //this happens if posts = [post1, post2]
  const myFeed = posts.map((post, i) => {
    return <Post post={post} key={i} msgAlert={msgAlert}/>
  })

    return (
        <>
          {myFeed}
        </>
      
    )
  }

export default Feed
