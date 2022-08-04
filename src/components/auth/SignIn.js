import React from 'react'
import UserForm from '../shared/UserForm'
import { signUp, signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
import {useToastHook} from '../shared/Toast.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const SignIn = (props) => {

    const {setUser } = props
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
            console.log('res.data.user', res.data.user)
            navigate('/')
          })
          .catch(error => console.log(error))

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