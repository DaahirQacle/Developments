import {useState} from 'react'

export const Hubin = () => {
    const [Name, setName] = useState([])
    const [haaye, setHaaye] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        let keyd=[Name]
        setHaaye(prev=>[keyd,...prev])
        console.log(haaye)

        
    }
  return (
    <div>
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
