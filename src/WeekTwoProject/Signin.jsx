import {useContext, useState} from 'react'
import './Stylessheet.css'
import {userIdentification}  from '../App'
    export const Signin = ({setSingin} ) => {
  const [name , setName] = useState('')
  const [pass , setPassword] = useState('')

 const check = (e) =>{
    e.preventDefault();
    setName(name)
    setSingin(name)
  
  
  }
  return (
    <div className="Signin">
     
        <form action="#" onSubmit={check} >
        <h1>popUp Quiz Page</h1>
            <div>
                <input type="text" placeholder="Class Name" 
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <input type="password" placeholder=" Password" 
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
