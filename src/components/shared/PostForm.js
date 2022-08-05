import React, {useState} from 'react';
import axios
 from 'axios';
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

function FileUploadPage(){
	const [file, setFile] = useState()
	const [title, setTitle] = useState("")
	const [caption, setCaption ] = useState("")

  function handleChangeFile(event) {
    setFile(event.target.files[0])
  }

//   function handChangeTitle(event) {
// 	  setTitle(prev => {
// 		  return event.target.value
// 	  })
// 	  console.log(title)
//   }
  
  function handleSubmit(event) {
    event.preventDefault()
    // const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
	formData.append('title', (title))
	formData.append('caption', caption)
	console.log(formData.get("title"))
	// alert(file)
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });

  }

  return (

	
      <Box bg="gray:50" p={6} rounded="md" w={64}>
      <Text
          fontSize='4xl'
          textAlign={"center"}
          >{"Upload"}
		</Text>
		<form onSubmit={handleSubmit}>
		<FormControl>
			<FormLabel htmlFor="title" textAlign={"center"}>
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
		<FormControl>
			<FormLabel htmlFor="caption" textAlign={"center"}>
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
		<FormControl>
			<FormLabel textAlign={"center"}>
				Image
			</FormLabel>
			<Input as={Input} type="file" onChange={handleChangeFile} border={"none"} required
			/>
		</FormControl>
		<Button type="submit" width="full">Upload</Button>
		</form>
		
		</Box>
    /* <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChangeFile}/>
          <button type="submit">Upload</button>
        </form>
    </div> */
  );
}

export default FileUploadPage