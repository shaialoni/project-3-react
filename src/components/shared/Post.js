import {
  Flex,
  Spacer,
  Image,
  Text,
  Box,
  Badge,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'


import React, {useState} from 'react';
import FeedComments from './FeedComments';


const Post = ({post, triggerRefresh, user}) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const [commentToggle, setCommentToggle] = useState(false)
  console.log("post._id", post._id)
  return (
    <Flex
    width="full"
    minHeight="70vh"
    alignItems="center"
    px={isLargerThanLG ? '16' : '6'}
    py="16"
    justifyContent="center"
    flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
    <Flex
      w={isLargerThanLG ? '40%' : 'full'}
      mb={isLargerThanLG ? '0' : '6'}
      alignItems="center"
      justifyContent="center"
    >
      <Image src={post.image} maxH="30rem" width="auto" height={"auto"} alt="A Really Cool Image" w="full" />
    </Flex>
    <Spacer />
    <Flex
      w={isLargerThanLG ? '60%' : 'full'}
      flexDirection="column"
      ml={isLargerThanLG ? '7' : '0'}
    >
      <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
        {post.title} 
      </Text>
      {/* <Text fontSize={isLargerThanLG ? 'md' : 'sm'} fontWeight="bold">
        {post.owner.email} 
      </Text> */}
       <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {post.owner.email}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={'center'}
          >
          <Box display='flex' mt='2' alignItems='center'>
          
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {post.likes} Likes
            </Box>
            <StarIcon
                  ml="1" alignSelf={"center"} color={'teal.500'}
            />
          </Box>
            
          </Box>
       </Box>
  
      <Text fontSize={isLargerThanLG ? 'lg' : 'md'} mb="6" opacity="0.8">
      
      </Text>
      <Text fontSize={isLargerThanLG ? '2xl' : 'xl'} mb="6" opacity="0.8">
        {post.caption}
      </Text>

      <Link fontSize={isLargerThanLG ? 'lg' : 'md'} mb="6" opacity="0.8" onClick={() => {
        setCommentToggle(prev => !prev)
      }}>
      {commentToggle ? "Hide Comments ": "View Comments"}
      </Link>
      {commentToggle && <FeedComments comments={post.comments} user={user}triggerRefresh={triggerRefresh} postId={post._id}/>}
      
  
    </Flex>
    </Flex>
    )

  };

export default Post;