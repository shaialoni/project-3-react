import React, {useRef, useState} from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text
  } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { createComment } from '../../api/comment';

const MyProfileComments = ({comments, user, postId, triggerRefresh}) => {

  const inputEl = useRef(null);


  const addComment = (e) => {
    inputEl.current.focus();
    createComment(user, postId, inputEl.current.value)
      .then(() => {
        triggerRefresh()
      })
      .catch(err => {
        console.log(err)
      })
    
  }

  const commentList = comments.map((comment, i) => {
    return (
      <Box w='100%' m="1" display={"flex"} key={i}>
        <Text fontWeight={"bold"} fontSize={"xs"} mr="1">
        {comment.owner.email}
        </Text>
        <Text fontSize={"xs"} overflowWrap={"break-word"}>
        {comment.note}
        </Text>
      </Box>
        
    )
})

  return (
    <Box>
    
    <InputGroup>
    <Input fontSize={"xs"}ref={inputEl} placeholder='Add Comment' />
    <InputRightElement onClick={addComment}
    children={<AddIcon color='green.500' />} />
    </InputGroup>
    <Box maxH="5rem" overflowX={"hidden"}>
    {commentList}
    </Box>
    
    </Box>
  )
}

export default MyProfileComments
