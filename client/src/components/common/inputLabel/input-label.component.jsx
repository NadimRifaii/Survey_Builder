// css imports
import './input-label.styles.css'
const InputLabel = ({ label, type, name, value, inputChange }) => {
  return (
    <div className="input-label-holder">
      <input type={`${type}`} name={`${name}`} value={value} onChange={inputChange} />
      <label className={`${value ? 'active' : ''}`} >{label}</label>
    </div>
  )
}
export default InputLabel