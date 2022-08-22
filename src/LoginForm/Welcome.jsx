import {useContext} from 'react'
import {PostContext} from '../App'
import { Logout } from './Logout'
export const Welcome = () => {
  const {user , setUser} = useContext(PostContext)
   
  return (
    <div>
       <h2> Welcome {user}</h2> 
       <Logout setUser={setUser}/>
      
    </div> 
  )
}
