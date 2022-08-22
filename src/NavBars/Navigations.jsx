import {useState , useContext} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {userIdentification} from '../App'
function Navigations() {
const {signin} = useContext(userIdentification)
console.log(signin);
  return (
    <div className="navigations">
      <div className="logo">
      <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png" width="50px" height="50px" style={{borderRadius:'16px'}}/>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="quiz">Quiz</NavLink>
     
      </div>

    <div className="btn">
      <button type="submit">{signin} </button>
    </div>
    </div>
  )
}

export default Navigations