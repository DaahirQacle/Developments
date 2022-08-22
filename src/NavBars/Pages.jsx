import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Quiz from '../WeekTwoProject/Quiz'
import About from './About'
import Contact from './Contact'
import Home from './Home'
function Pages() {
  return (
    <div>
        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="quiz" element={<Quiz/>} />
            {/* <Route path="salaan" element={<Salaan/>} /> */}
            <Route path="contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default Pages