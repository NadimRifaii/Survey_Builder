import Button from "../common/button/button.component"
import InputLabel from "../common/inputLabel/input-label.component"
const SignupForm = () => {
  return (
    <div className="sign-up-form">
      <InputLabel label='email' type='email' name='email' />
      <InputLabel label='password' type='password' name='password' />
      <Button text='Signup' backgroundColor={'#f44336'} />
    </div>
  )
}
export default SignupForm