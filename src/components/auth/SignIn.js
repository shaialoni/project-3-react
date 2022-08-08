import React from 'react'
import UserForm from '../shared/UserForm'
import { signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser, msgAlert }) => {
  const initialV = {
    email: "",
    password: ""
  }
  const navigate = useNavigate()

  const onSubmit = (values) => {
    const credentials = values
    signIn(credentials)
          .then(res => {
            setUser(res.data.user)
            msgAlert("Log in success", "success")
            navigate('/')
          })
          .catch(err => {
            msgAlert("Log in error", "error")
            console.log(err) 
          })

  }

  return (
    <>
      <UserForm 
        initialV={initialV}
        onSubmit={onSubmit}
        heading={"Log In"}
        code={"login"}
        buttonText={"Log In"}
      />
    </>
  )
}

export default SignIn