import Button from "../common/button/button.component"
import InputLabel from "../common/inputLabel/input-label.component"
// hooks imports
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
//import functions
import { setUser } from "../../core/redux/user/userSlice"
import { request } from "../../core/axios/axios"
const defaultFields = {
  email: "",
  password: ''
}
const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields)
  const { firstname, lastname, username, email, password } = fields
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  const loginClick = async () => {
    try {
      const data = await request(`auth/login`, 'POST', fields)
      setFields(defaultFields)
      dispatch(setUser(data.user))
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="login-form">
      <InputLabel label='email' type='email' name='email' inputChange={onInputChange} value={email} />
      <InputLabel label='password' type='password' name='password' inputChange={onInputChange} value={password} />
      <Button onClick={loginClick} text={'Login'} backgroundColor={'#2196f3'} />
    </div>
  )
}
export default LoginForm