import Button from "../common/button/button.component"
import InputLabel from "../common/inputLabel/input-label.component"
// hooks imports
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
//import functions
import { request } from "../../core/axios/axios"
import { setUser, extractUserSlice } from "../../core/redux/user/userSlice"
const defaultFields = {
  firstname: "",
  lastname: '',
  username: '',
  email: "",
  password: '',
}
const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields)
  const { firstname, lastname, username, email, password } = fields
  const dispatch = useDispatch()
  const user = useSelector(extractUserSlice)
  console.log(user)
  const onInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  const signupClick = async () => {
    try {
      const data = await request(`auth/register`, 'POST', fields)
      setFields({ ...defaultFields })
      dispatch(setUser(data.user))
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="signup-form">
      <InputLabel label='firstname' type='text' name='firstname' inputChange={onInputChange} value={firstname} />
      <InputLabel label='lastname' type='text' name='lastname' inputChange={onInputChange} value={lastname} />
      <InputLabel label='username' type='text' name='username' inputChange={onInputChange} value={username} />
      <InputLabel label='email' type='email' name='email' inputChange={onInputChange} value={email} />
      <InputLabel label='password' type='password' name='password' inputChange={onInputChange} value={password} />
      <Button onClick={signupClick} text={'Signup'} backgroundColor={'#e91e63'} />
    </div>
  )
}
export default LoginForm