import React from 'react'
import Post from '../shared/Post'
import PostForm from '../shared/PostForm'
import { Flex } from '@chakra-ui/layout'


const Create = ({ user, msgAlert, triggerRefresh }) => {
    
 const initialV = {
 }

//  const onSubmit = (values) => {
//      console.log("got here")
//      console.log(values)
//  }

  return (
    <Flex 
      align="center" 
      justify="center" h="100vh">
      <PostForm user={user} msgAlert={msgAlert} triggerRefresh={triggerRefresh}
      />

    </Flex>
  )
}

export default Create
