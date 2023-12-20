import LoginForm from "../../components/loginForm/login-form.component"
import SignupForm from "../../components/signupForm/signup-form.component"
import Button from "../../components/common/button/button.component"
// css imports
import './auth-page.styles.css'
// hooks imports
import { useState } from 'react'
const AuthPage = () => {
  const [currentForm, setCurrentForm] = useState('Login')
  function toggleForm(form) {
    setCurrentForm(form)
  }
  return (
    <div className="auth-page">
      <div className="holder">
        <div className="forms-container">
          {
            currentForm == 'Login' ? <LoginForm /> : <SignupForm />
          }
        </div>
        <div className="nav-container">
          <Button text={"Already have an account?"} btnText={'Login'} clas='link' onClick={() => {
            toggleForm('Login')
          }} active={currentForm == 'Signup' ? '' : 'none'} />
          <Button text={"Don't have an account?"} btnText={'Signup'} clas='link' onClick={() => {
            toggleForm('Signup')
          }} active={currentForm == 'Login' ? '' : 'none'} />
        </div>
      </div>
    </div>
  )
}
export default AuthPage