import {
    Box,
    Badge,
    Image,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
  } from '@chakra-ui/react'
import MyProfileComments from './MyProfileComments'
import PostForm from "./PostForm"
import {deletePost} from '../../api/post'

function Card({ post, user, postId, triggerRefresh, type, msgAlert}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onDelete = () => {
    deletePost(user, postId)
      .then(() => {
        triggerRefresh()
      })
      .catch(console.error)
  }
    return (
      <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' m="2">
        <Image maxH="xs" w="100%" src={post.image}/>
  
        <Box p='6'>
          <Box
            mt='1'
            mb="2"
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {post.title}
          </Box>

          <Box maxH="10rem" overflowY={"scroll"}>
            <Box as='span' color='gray.600' fontSize='sm'>
              {post.caption}
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
 
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {post.likes.length} likes
            </Box>
          </Box>

          <Badge 
            role='button'  
            onClick={onOpen} 
            mt="2" 
            mr="1" 
            borderRadius='full' 
            px='2' 
            colorScheme='teal'
          >
            {"Edit"}
          </Badge>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody align="center" justify="center">
                <PostForm 
                  type="edit" 
                  post={post} 
                  user={user} 
                  postId={postId} 
                  msgAlert={msgAlert} 
                  triggerRefresh={triggerRefresh} 
                  onClose={onClose}
                />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Popover>
            <PopoverTrigger>
              <Badge 
                role='button' 
                mt="2" 
                borderRadius='full' 
                px='2' 
                colorScheme="cyan" 
                mr="1"
              >
                {"View Comments"}
              </Badge>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Comments</PopoverHeader>
              <PopoverBody>
                <Box>
                  <MyProfileComments 
                    comments={post.comments} 
                    user={user} 
                    postId={postId} 
                    triggerRefresh={triggerRefresh}
                    msgAlert={msgAlert}
                  />
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Badge 
            role='button' 
            mt="2" 
            borderRadius='full' 
            px='2' 
            colorScheme='red' 
            onClick={() => onDelete()}
          >
            {"Delete"}
          </Badge>
        </Box>
      </Box>
    )
  }

export default Card