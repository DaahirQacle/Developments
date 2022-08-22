import { useState } from "react"
import {CourseData} from './CourseData'
export const Course = () => {
    const [show , setShow] =useState(false)
   const paid = ()=>{
      setShow(!show)
   }
   const [display , setDisplay] =useState(false)
   const Free = ()=>{
      setDisplay(!display)
   }
  
  return (
    <div >
         <button onClick={paid}>Paid</button> 
         <button onClick={Free}>Free</button>

      {show &&( CourseData.map((item , index)=>{
        if(item.fee>0){
          return<div key={index}><h3 style={{color:'black'}}>{item.title}</h3>
          <p style={{color:'black'}}>{item.fee}</p>
          </div>
        }
      
      })) }
       {display &&( CourseData.map((course , index)=>{
        if(course.fee==0){
          return<div key={index}><h3 style={{color:'black'}}>{course.title}</h3>
          <p style={{color:'green'}}>{course.fee<=0 && 'Free'}</p>
          </div>
        }
      
      })) }


    
   
    </div>
  )
}
