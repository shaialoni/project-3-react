import React, {useState, useRef} from 'react'
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Flex,
	Box,
	Text,
	Button,
	Textarea
	} from '@chakra-ui/react'
import {createUrl} from '../../api/aws'
import {createPost, editPost}	from '../../api/post'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

function FileUploadPage({ user, type, msgAlert, postId, triggerRefresh, onClose, post }){
	const [file, setFile] = useState()
	const [title, setTitle] = useState("")
	const [caption, setCaption ] = useState("")
	const [ upload, setUpload ] = useState({})
	const [ loading, setLoading ] = useState(null)
	const navigate = useNavigate()
	const myUrl = useRef("")

	function handleChangeFile(event) {
		setFile(event.target.files[0])
	}
  
  function handleSubmitCreate(event) {
    event.preventDefault()
    const data = new FormData()
    data.append('upload', file)
	setLoading(true)
	createUrl(data)
		.then(res => {
			myUrl.current = res.data.upload.url
			const image = myUrl.current
			const newPost = {
				title,
				caption,
				image
			}
			createPost(user, newPost)
				.then(() => {
					navigate('/')
				})
				.catch(err => {
					console.log(err)
					msgAlert("Create post error", "error")
					setLoading(false)
				})
		})
		.then(() => setLoading(false))
		.catch(err => {
			console.log(err)
			msgAlert("Image upload error", "error")
			setLoading(false)
		})
  }

  function handleSubmitEdit (e) {
	  e.preventDefault()
	  const editedFields = {
		title,
		caption
	  }
	  editPost(user, postId, editedFields)
	  	.then(res => {
			triggerRefresh()
			onClose()
		})
		.catch(err => {
			console.log(err)
			msgAlert("edit post error", "error")
		})
  }
  
  if (loading) {
	return <Loading/>
  }

  return (
    <Box bg="gray:50" p={3} rounded="md" w={64}>
		<Text
			fontSize='4xl'
			textAlign={"center"}
		>
			{type==="edit" ? "Edit Post" : "Create Post" }
		</Text>
		<form onSubmit={type === "edit" ? handleSubmitEdit : handleSubmitCreate}>
		<FormControl>
			<FormLabel htmlFor="title" textAlign={"center"} fontSize="lg">
				Title
			</FormLabel>
			<Input 
				id="title"
				name="title"
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				defaultValue={type === "edit" ? `${post.title}` : ""}
				required>
				

			</Input>
		</FormControl>
		<FormControl my="3">
			<FormLabel htmlFor="caption" textAlign={"center"} fontSize="lg">
				Caption
			</FormLabel>
			<Textarea 
				id="caption"
				name="caption"
				type="text"
				onChange={(e) => setCaption(e.target.value)}
				defaultValue={type === "edit" ? `${post.caption}` : ""}
				required>

			</Textarea>
		</FormControl>
		{type === "edit" ?  "" : <FormControl>
			<FormLabel textAlign={"center"} fontSize="lg">
				Image
			</FormLabel>
			<Input as={Input} type="file" onChange={handleChangeFile} border={"none"} required
			/>
		</FormControl>}
		
		<Button mt="5" type="submit" width="full" colorScheme="purple">{type === "edit" ? "edit" : "create"}</Button>
		</form>
		
		</Box>

  )
}

export default FileUploadPage