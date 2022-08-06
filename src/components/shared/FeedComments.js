import React, {useRef} from 'react'
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Text
    } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { createComment } from '../../api/comment';

const FeedComments = ({comments, triggerRefresh, user, postId}) => {
  const inputEl = useRef(null)


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
        <Text fontWeight={"bold"} mr="1">
        {comment.owner.email}
        </Text>
        <Text overflowWrap={"break-word"}>
        {comment.note}
        </Text>
      </Box>
        
    )
  })
  return (
    <Box w='100%' h="auto"maxH={"35rem"} p={4} overflowY={"scroll"} overflowX={"hidden"}>
    
    <InputGroup>
    <Input ref={inputEl} placeholder='Add Comment' />
    <InputRightElement onClick={addComment}
    children={<AddIcon color='green.500' />} />
    </InputGroup>
 
    {commentList}
    </Box>
  )
}

export default FeedComments
