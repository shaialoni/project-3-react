import React, { useState, useEffect } from 'react'
import Post from '../shared/Post'
import { Button } from '@chakra-ui/react'
import { getAllPosts } from './../../api/post'
import Loading from '../shared/Loading'

const Feed = () => {
  
  const [ posts, setPosts ] = useState(null) 
  useEffect(() => {
      getAllPosts()
        .then(res => {
          console.log('res =====>', res)
          setPosts(res.data.posts)
        })
        .catch(console.error)
  }, [])

  if (!posts) {
    return (
      <Loading align='center' justify='center'/>
    )
  }

  const myFeed = posts.map((post, i) => {
    return <Post post={post} key={i}/>
  })

    return (
        <>
          {myFeed}
        </>
      
    )
  }

export default Feed
