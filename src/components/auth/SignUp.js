import UserForm from '../shared/UserForm'
import { signUp, signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ setUser, msgAlert }) => {
  const navigate = useNavigate();
  
  const initialV = {
    email: "",
    password: ""
  }

  const onSubmit = (values) => {
    const credentials = values
    signUp(credentials)
      .then(user => {        
        msgAlert("signup success", "success")
        signIn(credentials)
          .then(res => {
            setUser(res.data.user)
            msgAlert('Sign in success!', 'success')
            navigate('/')
          })
          .catch(err => {
            msgAlert("signin error", "error")
            console.log(err)
          })
      })
      .catch(err => {
        msgAlert("signup error", "error")
        console.log(err)
      })

  }

  return (
    <>
      <UserForm 
        initialV={initialV}
        onSubmit={onSubmit}
        heading={"Sign Up"}
        code={"signup"}
        buttonText={"Sign Up"}
      />
    </>
  )
}

export default SignUp

