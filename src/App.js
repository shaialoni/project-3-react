import Footer from './components/shared/Footer';
import Nav from './components/shared/Nav'
import React, { useRef, Fragment, useState} from 'react';
import { useDisclosure } from '@chakra-ui/react';
import DrawerComponent from './components/DrawerComponent';
import { useNavigate, Route, Routes } from 'react-router-dom'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn'
import ChangePassword from './components/auth/ChangePassword'
import { signOut } from './api/auth';
import Feed from './components/post/Feed';
import MyIndex from './components/post/MyIndex';
import { v4 as uuid } from 'uuid'
import Create from './components/post/Create';
import { useToastHook } from './components/shared/Toast'

function App() {

  const [toast, newToast] = useToastHook();
  const msgAlert = (message, status) => {
    newToast({ message: message, status: status });
  };
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const clearUser = () => {
    // console.log('clear user ran')
    signOut(user)
      .then(res => {
        console.log('Logged out')
        setUser(null)
        msgAlert("logged out success", "success")
        console.log('new state of user', user)
        navigate('/')
      })
      .catch(error => msgAlert("Error logging out", "error"))
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
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
        element={<Feed 
          user={user}
          msgAlert={msgAlert}
        />}
        />
      <Route
        path="/signup"
        element={<SignUp setUser={setUser} msgAlert={msgAlert}/>}
        />
        <Route
        path="/changepassword"
        element={<ChangePassword setUser={setUser}/>}
        />
      <Route
      path="/signin"
      element={<SignIn setUser={setUser} msgAlert={msgAlert}/>}
      />
      <Route
      path="/myposts"
      element={<MyIndex user={user} msgAlert={msgAlert}/>}
      />
      <Route
      path="/addpost"
      element={<Create user={user} msgAlert={msgAlert}/>}
      />
    </Routes>
    <Footer />
    <DrawerComponent user={user} isOpen={isOpen} onClose={onClose} btnRef={btnRef} clearUser={clearUser} msgAlert={msgAlert}/>
    </>
  );
}

export default App;