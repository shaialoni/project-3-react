import React, {useRef} from 'react'
import {
    Box,
    Input,
    InputGroup,
    Badge,
    InputRightElement,
    Text
    } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { createComment, deleteComment } from '../../api/comment';

const FeedComments = ({comments, triggerRefresh, user, postId}) => {
  const inputEl = useRef(null)


  const addComment = (e) => {
    inputEl.current.focus();
    createComment(user, postId, inputEl.current.value)
      .then(() => {
        triggerRefresh()
        inputEl.current.value = ""
      })
      .catch(err => {
        console.log(err)
      })
    
  }

  const onDeleteComment = (commId) => {
    console.log(commId, postId)
    deleteComment(user, postId, commId)
      .then(() => {
        triggerRefresh()
      })
      .catch(er => {
        console.log(er)
      })
  }

  const commentList = comments.map((comment, i) => {
    return (
      <Box w='100%' m="1" display={"flex"} key={i} alignItems="center" alignContent={"center"}>
        {(user) && (comment.owner.email === user.email) ? 
          <Badge role='button' mr="2" borderRadius='full' px='1' colorScheme='red' onClick={() => onDeleteComment(comment._id)} justifyContent="center" alignItems={"center"} >
            <p>X</p>
          </Badge> 
          :
           ""
          }
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
    <Box w='100%' h="auto" maxH={"15rem"} p={4} overflowY={"scroll"} overflowX={"hidden"}>
    { user ? 
    <InputGroup>
    <Input 
      ref={inputEl} 
      placeholder='Add Comment' 
    />
    <InputRightElement 
      onClick={addComment}
      children={<AddIcon color='green.500' />} 
    />
    </InputGroup>
    :
    ''
    }
    {commentList}
    </Box>
  )
}

export default FeedComments
