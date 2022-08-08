import Footer from './components/shared/Footer'
import Nav from './components/shared/Nav'
import React, { useRef, useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import DrawerComponent from './components/DrawerComponent'
import { useNavigate, Route, Routes } from 'react-router-dom'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import ChangePassword from './components/auth/ChangePassword'
import { signOut } from './api/auth'
import Feed from './components/post/Feed'
import MyIndex from './components/post/MyIndex'
import { v4 as uuid } from 'uuid'
import Create from './components/post/Create'
import { useToastHook } from './components/shared/Toast'
import RequireAuth from './components/shared/RequireAuth'

function App() {

  const [toast, newToast] = useToastHook()
  const msgAlert = (message, status) => {
    newToast({ message: message, status: status })
  }
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const clearUser = () => {
    signOut(user)
      .then(res => {
        setUser(null)
        msgAlert("logged out success", "success")
        navigate('/')
      })
      .catch(err => {
        msgAlert("Error logging out", "error")
        console.log(err)
      })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  
  return (

    <>
      <Nav 
      user={user} 
      // ref={btnRef} 
      onOpen={onOpen} 
      clearUser={clearUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Feed user={user} msgAlert={msgAlert}/>}
        />
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} msgAlert={msgAlert}/>}
        />
        <Route
          path="/changepassword"
          element={
            <RequireAuth user={user}>
              <ChangePassword user={user} setUser={setUser} msgAlert={msgAlert}/>
            </RequireAuth>
          }
        />
        <Route
          path="/signin"
          element={<SignIn setUser={setUser} msgAlert={msgAlert}/>}
        />
        <Route
          path="/myposts"
          element={
            <RequireAuth user={user}>
              <MyIndex user={user} msgAlert={msgAlert}/>
            </RequireAuth>
          }
        />
        <Route
          path="/addpost"
          element={
            <RequireAuth user={user}>
              <Create user={user} msgAlert={msgAlert} />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
      <DrawerComponent 
        user={user} 
        isOpen={isOpen} 
        onClose={onClose} 
        btnRef={btnRef} 
        clearUser={clearUser} 
        msgAlert={msgAlert}
      />
    </>
  )
}

export default App