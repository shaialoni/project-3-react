import React from 'react'
import Card from '../shared/Card';
import {useState, useEffect } from 'react'
import {
    Flex,
    Text,
    Link,
    Box
  } from '@chakra-ui/react';
import { getAllMyPosts } from '../../api/post';
import Loading from '../shared/Loading';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../api/post';


const MyIndex = ({ user }) => {
  const [ cards, setCards ] = useState(null)
  const [ deleted, setDeleted ] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    getAllMyPosts(user)
      .then(res => {
        console.log()
        setCards(res.data.posts)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const onDelete = (user, postId) => {
    deletePost(user, postId)
      .then(() => setDeleted(prev => !prev))
      .catch(console.error)
  }

   //this happens if posts == null
   if (!cards) {
    return (
      <Loading align='center' justify='center'/>
    )
  }

  if (deleted) {
    setDeleted(prev => !prev)
    navigate('/myPosts')
  }
  //this happens if cards != null, but its length is 0 aka, no cards have been created
  else if(cards.length === 0){
    return (
      <Box textAlign='center' justifyContent='center' fontSize='xl' m='5'>
        <Text m='5'>
          No posts, to create a post follow this link
        </Text>
        <Link onClick={() => navigate('/addpost')} fontSize="md" m='5'>
          Add Post
        </Link>
      </Box>

    )
  }
  
  const myIndex = cards.map((post, i) => {
    return <Card 
      post={post} 
      key={i}
      user={user}
      postId={post._id}
      onDelete={onDelete}
    />
  })

  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
        {myIndex}
    </Flex>
  )
}

export default MyIndex
