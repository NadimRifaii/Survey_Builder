// css imports
import './button.styles.css'
const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <button style={{
      backgroundColor: backgroundColor
    }} onClick={onClick} >{text}</button>
  )
}
export default Button