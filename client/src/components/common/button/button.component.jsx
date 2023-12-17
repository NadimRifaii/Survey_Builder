// css imports
import './button.styles.css'
const Button = ({ text, backgroundColor }) => {
  return (
    <button style={{
      backgroundColor: backgroundColor
    }} >{text}</button>
  )
}
export default Button