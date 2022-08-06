import React, {useState, useRef} from 'react';
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
import {createPost}	from '../../api/post'
import { useNavigate } from 'react-router-dom';
import {useToastHook} from './../shared/Toast'
import Loading from './Loading';

function FileUploadPage({ user, type }){
	const [file, setFile] = useState()
	const [title, setTitle] = useState("")
	const [caption, setCaption ] = useState("")
	const [ upload, setUpload ] = useState({})
	const [ loading, setLoading ] = useState(null)
	const [toast, newToast] = useToastHook()
	const navigate = useNavigate()
	const myUrl = useRef("")

	function handleChangeFile(event) {
		setFile(event.target.files[0])
	}

	const someThingHappens = (message, status) => {
		newToast({ message: message, status: status });
	  };
//   function handChangeTitle(event) {
// 	  setTitle(prev => {
// 		  return event.target.value
// 	  })
// 	  console.log(title)
//   }
  
  function handleSubmitCreate(event) {
    event.preventDefault()
    // const url = 'http://localhost:3000/uploadFile';
    const data = new FormData();
    data.append('upload', file);
    // data.append('fileName', file.name);
	// data.append('title', (title))
	// data.append('caption', caption)
	setLoading(true)
	createUrl(data)
		.then(res => {
			// setUpload(res.data.upload)
			
			myUrl.current = res.data.upload.url
			const image = myUrl.current
			console.log("UPLOAD: ",upload, "UPLOADURL", upload.url)
			const newPost = {
				title,
				caption,
				image
			}
			console.log("NEWPOST: ",newPost)
			// console.log('USER ======>', user)
			createPost(user, newPost)
				.then(navigate('/'))
				.catch(err => {
					console.log(err)
					someThingHappens("create post error", "error")
					navigate('/')
				})
		})
		.then(() => setLoading(false))
		.catch(err => {
			console.log(err)
			someThingHappens("image upload error", "error")
		})
  }

  function handleSubmitEdit (e) {
	  e.preventDefault()
  }
  
  if (loading) {
	return <Loading/>
  }

  return (

	
      <Box bg="gray:50" p={3} rounded="md" w={64}>
      <Text
          fontSize='4xl'
          textAlign={"center"}
          >{type==="edit" ? "Edit Post" : "Create Post" }
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

  );
}

export default FileUploadPage