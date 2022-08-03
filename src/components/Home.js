import { Form, Button } from 'react-bootstrap'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			{/* form for file input */}
			<Form>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Default file input example</Form.Label>
				<Form.Control type="file" />
			</Form.Group>
			<Button type="submit" variant="outline-secondary">Upload File</Button>
			</Form>
		</>
	)
}

export default Home
