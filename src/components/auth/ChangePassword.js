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
    oldpass: "",
    password: ""
  }

  const someThingHappens = (message, status) => {
    newToast({ message: message, status: status });
  };

  const onSubmit = (values) => {

    console.log(values)
  }

  return (
    <>
      <UserForm 
      initialV={initialV}
      onSubmit={onSubmit}
      heading={"Change Password"}
      code={"change"}
      buttonText={"Change"}
      />
    </>
    
  )
}

export default SignUp