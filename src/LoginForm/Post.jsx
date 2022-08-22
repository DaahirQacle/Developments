import {useContext} from 'react'
import { PostContext } from '../App'
export const Post = () => {
    const {posts , user} = useContext(PostContext)

  return (
    <div>
         {posts.map((list,index)=>{
         return <div key={index}>
          {console.log(list.postTitle)}
             { <h3 style={{color: 'black'}}>{list.postTitle}</h3>}       
            {list.athorImage && <img src={URL.createObjectURL(list.athorImage)} width="200" height="100" />}
          </div>
         })}
    </div>
  )
}
