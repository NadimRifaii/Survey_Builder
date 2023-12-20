// css imports
import './button.styles.css'
const Button = ({ text, clas, btnText, color = '', backgroundColor, onClick, active }) => {
  return (
    <div className={`btn-container ${active ? active : ''}`}>
      <span>{text}</span>
      <button className={`${clas ? clas : ''}`} style={{
        backgroundColor: backgroundColor,
        color: color
      }} onClick={onClick} >{btnText}</button>
    </div>
  )
}
export default Button