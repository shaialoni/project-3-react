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


const MyIndex = ({ user }) => {
  const [ cards, setCards ] = useState(null)

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
  

   //this happens if posts == null
   if (!cards) {
    return (
      <Loading align='center' justify='center'/>
    )
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
  //   const samplepost = {
  //       title: "Hey FHJEHWFKWJH FKWJEFHW",
  //       image: "https://picsum.photos/200/300",
  //       caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //       likes: 0,
  //       owner: {
  //           email: "t@t.t"
  //       },
  //       comments: [{owner: {
  //                     email: "t@t.t"
  //                   }, 
  //                   note:"comment 1 note" },
  //                   {owner: {
  //                     email: "t@t.t"
  //                   },
  //                   note:"Clickerooskie" }]
  
  
  //   }
  
  //   const samplepost2 = {
  //     title: "Hey",
  //     image: "https://picsum.photos/200/300",
  //     caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     likes: 0,
  //     owner: {
  //         email: "t@t.t"
  //     },
  //     comments: [{owner: "hey", 
  //                   note:"Click to see more" }]
  
  // }

  const myIndex = cards.map((post, i) => {
    return <Card post={post} key={i}/>
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
