import UserForm from '../shared/UserForm'
import { changePassword } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

const ChangePassword = ({ msgAlert, user }) => {
  const navigate = useNavigate();
  const initialV = {
    oldpassword: "",
    password: ""
  }

  const onSubmit = (values) => {
    const password = {
      oldPassword: values.oldpassword,
      newPassword: values.password
    }
    changePassword(password, user)
      .then(res => {
        msgAlert('Password changed successfuly!', 'success')
        navigate('/')
      })
      .catch(err => {
        msgAlert('Error changing password', 'error')
        console.log(err)
      })
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

export default ChangePassword