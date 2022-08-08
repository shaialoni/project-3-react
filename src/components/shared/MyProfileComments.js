import React, {useRef, useState} from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Badge
  } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { createComment, deleteComment } from '../../api/comment';

const MyProfileComments = ({ comments, user, postId, triggerRefresh, msgAlert }) => {

  const inputEl = useRef(null);

  const addComment = (e) => {
    inputEl.current.focus();
    createComment(user, postId, inputEl.current.value)
      .then(() => {
        triggerRefresh()
        inputEl.current.value = ""
      })
      .catch(err => {
        msgAlert('Error creating comment', 'error')
        console.log(err)
      })
  }

  const onDeleteComment = (commId) => {
    console.log(commId, postId)
    deleteComment(user, postId, commId)
      .then(() => {
        triggerRefresh()
      })
      .catch(err => {
        msgAlert('Error deleting comment', 'error')
        console.log(err)
      })
  }

  const commentList = comments.map((comment, i) => {
    return (
      <Box w='100%' m="1" display={"flex"} key={i} alignItems="center" alignContent={"center"}>
        {(user) && (comment.owner.email === user.email) ? 
          <Badge 
            role='button' 
            mr="2" 
            borderRadius='full' 
            px='1' 
            colorScheme='red' 
            onClick={() => onDeleteComment(comment._id)} 
            justifyContent="center" 
            alignItems={"center"} 
          >
            <p>X</p>
          </Badge> 
          :
          ""
        }
        <Text fontWeight={"bold"} mr="1" fontSize={"s"}>
          {comment.owner.email}
        </Text>
        <Text overflowWrap={"break-word"}>
          {comment.note}
        </Text>
      </Box> 
    )
})

  return (
    <Box>
      <InputGroup>
        <Input fontSize={"xs"}ref={inputEl} placeholder='Add Comment' />
        <InputRightElement 
          onClick={addComment}
          children={<AddIcon 
          color='green.500' 
        />} />
      </InputGroup>

      <Box maxH="5rem" overflowX={"hidden"}>
        {commentList}
      </Box>
    </Box>
  )
}

export default MyProfileComments
