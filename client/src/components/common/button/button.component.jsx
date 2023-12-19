// css imports
import './button.styles.css'
const Button = ({ text, btnText, backgroundColor, onClick, active }) => {
  return (
    <div className={`btn-container ${active}`}>
      <span>{text}</span>
      <button style={{
        backgroundColor: backgroundColor
      }} onClick={onClick} >{btnText}</button>
    </div>
  )
}
export default Button