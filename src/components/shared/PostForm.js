import { Form, Button, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'


const PostForm = (props) => {
	// const { msgAlert, user } = props
	// console.log('props in home', props)

	const [ selected, setSelected ] = useState(null)
	const [ upload, setUpload ] = useState({})
	const [ loading, setLoading ] = useState(null)

	const handleChange = (e) => {
		e.preventDefault()
		setSelected(e.target.files[0])
	}

	const handleSubmit =(e) => {
		e.preventDefault()
		// setLoading(true)
		// const data = new FormData()
		// data.append('upload', selected)
		// axios({
		// 	url: `${apiUrl}/uploads`,
		// 	method: 'POST',
		// 	//short for data: data
		// 	data
		// })
		// 	.then(res => setUpload(res.data.upload))
		// 	.then(() => setLoading(false))
		// 	.catch(console.error)
	}
	return (
		<>
			
			{upload.url ? ( <img className={'display-image'} alt={upload.url} src={upload.url}/> ) : '' }
			{loading ? (<Spinner animation="border" />) : ''}
			{/* form for file input */}
			<Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control name='title' type='text' />
      </Form.Group>  
			<Form.Group className="mb-3">
				<Form.Label>Default file input example</Form.Label>
				<Form.Control type="file" onChange={handleChange} />
			</Form.Group>
			<Button type="submit" variant="outline-secondary">Submit</Button>
			</Form>
      
		</>
	)
}

export default PostForm