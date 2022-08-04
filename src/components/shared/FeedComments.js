import React, {useRef} from 'react'
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Text
    } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

const FeedComments = (props) => {
  const inputEl = useRef(null);
  const {comments} = props
  const doSomething = (e) => {
    inputEl.current.focus();
    alert(inputEl.current.value)
  }
  const commentList = comments.map(comment => {
      return (
          <>
            <Box w='100%' m="1" display={"flex"} >
              <Text fontWeight={"bold"}>
              {comment.owner.email}
              </Text>
              <pre> </pre>
              <Text overflowWrap={"break-word"}>
              {comment.note}
              </Text>
            </Box>
          </>
          
      )
  })
  return (
    <Box w='100%' h="auto"maxH={"35rem"} p={4} overflowY={"scroll"} overflowX={"hidden"}>
    
    <InputGroup>
    <Input ref={inputEl} placeholder='Add Comment' />
    <InputRightElement onClick={doSomething}
    children={<AddIcon color='green.500' />} />
    </InputGroup>
 
    {commentList}
    </Box>
  )
}

export default FeedComments
