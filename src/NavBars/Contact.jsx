import React from 'react'
import './Navbar.css'
function Contact() {
  return (
    <div className="social-work">
       <h1>About Us</h1>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing  <br/>
           elit. Omnis, aliquam, nulla harum repellendus perferendis <br/>
           iste porro explicabo nisi culpa iusto placeat sequi   <br/>
           expedita suscipit dolore alias corrupti modi sed. Aut?</p> <br/>
           </div>
           <div className="social">
             <a href=""><i class="fab fa-facebook"></i></a>
             <a href=""><i class="fab fa-instagram"></i></a>
             <a href=""><i class="fab fa-twitter"></i></a>
             <a href="https://web.whatsapp.com/"><i class="fab fa-whatsapp-square"></i></a>
             <a href=""><i class="fab fa-youtube"></i></a>
             <a href=""><i class="fab fa-tiktok"></i></a>
           </div>
           <div className="place">
        <span><i class="far fa-map-marker-times"></i></span>
        <span>Mogadishu , Somalia</span>
        </div>
        <div class="phone">
          <span><i class="fas fa-phone-square-alt"></i></span>
        <span>0682355325</span>
        </div>
        <div className="email">
          <span><i class="far fa-envelope"></i></span>
          <span>Daahirqacle@Gmail.com</span>
        </div>

        {/* <h3>Contact Us</h3>
      <div className="email-box">
        <h5>Email*</h5>
         <input type="text" required /> 
         </div>
        <div class="msg">
          <h5>Message*</h5>
          <textarea name="" id="" cols="21" rows="4"></textarea>
          </div>
          <div class="send">
            <span>Send</span>
          </div> */}
    </div>
  )
}

export default Contact