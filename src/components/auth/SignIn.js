import React from 'react'
import UserForm from '../shared/UserForm'
import { signUp, signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {

    const {setUser } = props
  const initialV = {
    email: "",
    password: ""
  }
  const navigate = useNavigate()

  const onSubmit = (values) => {
    console.log("values from onSubmit", values)
    const credentials = values

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