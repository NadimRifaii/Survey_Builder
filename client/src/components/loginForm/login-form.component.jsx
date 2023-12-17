import Button from "../common/button/button.component"
import InputLabel from "../common/inputLabel/input-label.component"
// hooks imports
import { useState } from "react"
const defaultFields = {
  fisrtname: "",
  lastname: '',
  username: '',
  email: "",
  password: ''
}
const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields)
  const { firstname, lastname, username, email, password } = fields
  const onInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  return (
    <div className="login-form">
      <InputLabel label='firstname' type='text' name='firstname' inputChange={onInputChange} value={firstname} />
      <InputLabel label='lastname' type='text' name='lastname' inputChange={onInputChange} value={lastname} />
      <InputLabel label='username' type='text' name='username' inputChange={onInputChange} value={username} />
      <InputLabel label='email' type='email' name='email' inputChange={onInputChange} value={email} />
      <InputLabel label='password' type='password' name='password' inputChange={onInputChange} value={password} />
      <Button text={'Login'} backgroundColor={'#2196f3'} />
    </div>
  )
}
export default LoginForm