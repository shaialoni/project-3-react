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
  const [updated, setUpdated] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    getAllMyPosts(user)
      .then(res => {
        console.log(user)
        setCards(res.data.posts)
      })
      .catch(err => {
        console.log(err)
      })
  }, [updated])
  
  // const onDelete = (user, postId) => {
  //   deletePost(user, postId)
  //     .then(() => {navigate('/myposts')})
  //     .catch(console.error)
  // }

   //this happens if posts == null
   if (!cards) {
    return (
      <Loading align='center' justify='center'/>
    )
  }

  //this happens if cards != null, but its length is 0 aka, no cards have been created
  else if(cards.length === 0){
    return (
      <Box textAlign='center' justifyContent='center' fontSize='xl' m='5' fontWeight={"bold"}>
        <Text m='5'>
          No posts yet!
        </Text>
        <Link onClick={() => navigate('/addpost')} fontSize="md" m='5' fontWeight={"normal"} color="blue">
          Create Some!
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
      triggerRefresh={() => setUpdated(prev => !prev)}
      type="edit"
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
