import {useState} from 'react'
import CourseData from './CourseData'
export const Shower = ({title , fee}) => {
    const[s ,setS] = useState()
    const save = ()=>{
       a=  CourseData.map(item=>{
            
            if(item.fee>0){
              return <>
               <p>{item.title} </p>
               <p> {item.fee}</p>
               </>
            }
      })

    }
  return (
    <div>
           <button onClick={save}>Paid</button>
    </div>

  )
}
