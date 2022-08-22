import React, { useState} from 'react'
import { useContext } from 'react'
import {PostContext} from '../App'
export const CreatePost = () => {
    const {setPosts} = useContext(PostContext)
    const[postTitle , setPostTitle] =useState('')
    const[athorImage , setAthorImage] =useState()
   
 const postHandler = (e)=>{
    e.preventDefault()
    let newPost = {postTitle , athorImage}
    setPosts((previous)=>[newPost,...previous])
  
 }
   
  return (
    <div className="createpost">
        <form onSubmit={postHandler}>
        <div>
             <input type="text" placeholder="Enter Your Name" 
                onChange={(e)=> setPostTitle(e.target.value) }  
                />
            </div>
            <div>
            <input type="file" placeholder="Enter Your Picture" 
                onChange={(e)=>   setAthorImage(e.target.files[0])}
                />
            </div>
            <button type="submit">Login</button>
            
        </form>
       
      
    </div>
  )
}
