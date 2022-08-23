import { useState ,createContext}  from 'react'
import reactLogo from './assets/react.svg'
import Pages from './NavBars/Pages'
import Navigations from './NavBars/Navigations'
import { Login } from './LoginForm/Login'
import { CreatePost } from './LoginForm/CreatePost'
import { Post } from './LoginForm/Post'

import { Signin } from './WeekTwoProject/Signin'
import { Wel } from './WeekTwoProject/Wel'
export const PostContext = createContext({});
export const userIdentification = createContext({});
function App() {
  const[signin , setSingin] = useState('')
  const[pass , setPass] = useState('')
  const  secret = [
    { name:'C192' , pass:111},
    { name:'C196' , pass:2222},
    { name:'C194' , pass:333} , 
  ]
 const tepm =  secret.filter((item ,index)=>item.name==signin)
if(tepm.length<=0) return <Signin signin={signin} setSingin={setSingin}/>
return (
<userIdentification.Provider value={{signin , setSingin}}>
<div className="App">
<Navigations/>
<Pages/> 
</div>
</userIdentification.Provider>
 
  )
}

  
export default App;
