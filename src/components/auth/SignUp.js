import React, {useState} from 'react'
import UserForm from '../shared/UserForm'
import {useToastHook} from '../shared/Toast.js'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { signUp, signIn } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const navigate = useNavigate();
  const [toast, newToast] = useToastHook();

  const {setUser} = props
  
  const initialV = {
    email: "",
    password: ""
  }

  const someThingHappens = (message, status) => {
    newToast({ message: message, status: status });
  };

  const onSubmit = (values) => {
    // console.log(values)
    // someThingHappens("success")
    const credentials = values
    signUp(credentials)
      .then(user => {        
        someThingHappens("signup success", "success")
        console.log('signed up user')
        signIn(credentials)
          .then(res => {
            setUser(res.data.user)
            console.log('res.data.user', res.data.user)
            navigate('/')
          })
          .catch(error => someThingHappens("signin error", "error"))
      })
      .catch(error => someThingHappens("signup error", "error"))

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

