import LoginForm from "../../components/loginForm/login-form.component"
import SignupForm from "../../components/signupForm/signup-form.component"
// css imports
import './auth-page.styles.css'
const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="forms-container">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  )
}
export default AuthPage