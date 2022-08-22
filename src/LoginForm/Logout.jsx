import React from 'react'
export const Logout = ({setUser}) => {
  const LoguotHandle = ()=>{
    setUser('')
}
  return (
    <div>
      <button onClick={LoguotHandle}>Loguot</button>
    </div>
  )
}
