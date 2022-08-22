import {useState} from 'react'

export const Login = ({setUser}) => {
    const [name , setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        {name.length<=5?console.log('Waxa ugu yar ee la aqbali karo waa 5 xaran')
         :setUser(name)}
        
    }
  return (
    <div className="login">
        <h3>please Login</h3>
        <form action="#" onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Enter Your Name" 
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
