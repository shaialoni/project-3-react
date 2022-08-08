import React from 'react'
import PostForm from '../shared/PostForm'
import { Flex } from '@chakra-ui/layout'

const Create = ({ user, msgAlert, triggerRefresh }) => {

  return (
    <Flex 
      align="center" 
      justify="center" h="100vh">
      <PostForm 
        user={user} 
        msgAlert={msgAlert} 
        triggerRefresh={triggerRefresh}
      />

    </Flex>
  )
}

export default Create
