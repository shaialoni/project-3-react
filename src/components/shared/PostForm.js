import React, {useState} from 'react';
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

function FileUploadPage(){
	const [file, setFile] = useState()
	const [title, setTitle] = useState("")
	const [caption, setCaption ] = useState("")
	const [ upload, setUpload ] = useState({})
	const [ loading, setLoading ] = useState(null)

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
    const data = new FormData();
    data.append('upload', file);
    // data.append('fileName', file.name);
	// data.append('title', (title))
	// data.append('caption', caption)
	createUrl(data)
		.then(res => setUpload(res.data.upload))
		.then(() => setLoading(false))
		.catch(console.error)

  }

  return (

	
      <Box bg="gray:50" p={6} rounded="md" w={64}>
	  {upload.url ? ( <img className={'display-image'} alt={upload.url} src={upload.url}/> ) : '' }
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