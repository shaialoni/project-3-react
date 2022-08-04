import React, {useState} from 'react'
import UserForm from '../shared/UserForm'
import {useToastHook} from '../shared/Toast.js'

const SignUp = () => {
  const [toast, newToast] = useToastHook();

  const initialV = {
    email: "",
    password: ""
  }

  const someThingHappens = (message) => {
    newToast({ message: message, status: "error" });
  };

  const onSubmit = (values) => {
    console.log(values)
    someThingHappens("success")
    const credentials = values
    console.log(credentials)

  }

  return (
    <>
      <UserForm 
      initialV={initialV}
      onSubmit={onSubmit}
      heading={"Sign Up"}
      code={"signup"}
      />
    </>
    
  )
}

export default SignUp

