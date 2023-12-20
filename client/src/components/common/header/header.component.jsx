// hooks imports
import { useSelector } from "react-redux";
import { useState } from "react";
// functions imports
import { extractUserSlice } from "../../../core/redux/user/userSlice";
// css imports
import './header.styles.css'
// components imports
import { Link } from "react-router-dom";
import Button from "../button/button.component";
const Header = () => {
  const user = useSelector(extractUserSlice)
  const [profileClicked, setProfileClicked] = useState(false)
  return (
    <header>
      <div className="username">{user.username}</div>
      <div className="nav">
        <Button btnText={"Create survey"} backgroundColor={'transparent'} />
        <div className="logout">
          <img alt="" onClick={() => {
            setProfileClicked(!profileClicked)
          }} className={`profile ${profileClicked ? 'clicked' : ''} `} />
          <ul className="menu">
            <li>
              <Link onClick={() => {
                localStorage.clear()
              }} to={'/auth'} >Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header