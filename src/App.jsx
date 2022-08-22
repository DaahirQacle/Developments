import { useState ,createContext}  from 'react'
import reactLogo from './assets/react.svg'
import { Course } from './Components/Course'
import Pages from './NavBars/Pages'
import Navigations from './NavBars/Navigations'
import { Login } from './LoginForm/Login'
import { Welcome } from './LoginForm/Welcome'
import { CreatePost } from './LoginForm/CreatePost'
import { Post } from './LoginForm/Post'
import { Sart } from './Test/Sart'
import { Hubin } from './Test/Hubin'
import { Signin } from './WeekTwoProject/Signin'
import { Wel } from './WeekTwoProject/Wel'
export const PostContext = createContext({});
export const userIdentification = createContext({});

function App() {
  const[signin , setSingin] = useState('')
  const[pass , setPass] = useState('')
  let secret = [
    { name:'C192' , pass:111},
    { name:'C196' , pass:2222},
    { name:'C194' , pass:333} , 
  ]
  for(let i = 0; i<secret.length;i++){
    if(signin!=secret[i].name){
      return <Signin setSingin={setSingin} signin ={signin}/>
    }
  }
 
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
