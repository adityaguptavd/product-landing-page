import React from 'react'
import './Footer.css'

export default function Footer() {

  function handleClick(id){
    document.getElementById(id).scrollIntoView();
  }

  return (
    <div className='footer'>
      <div className='left-footer'>
        <div className='footer-logo'>X</div>
        <p>Disclaimer : This is a product landing page designed for educational purposes only and to host the same as a project. The product details, images and logos have been picked from various sources on the internet. Images/logos/brand names used here are properties of their respective owners. No copyright infringement intended.</p>
        <footer>© 2023 A project by Aditya</footer>
      </div>
      <div className='right-footer'>
        <span>About Us</span>
        <span>Privacy Policy</span>
        <span onClick={()=>handleClick('specs')}>Product Details</span>
        <span>User Agreement</span>
        <span onClick={()=>handleClick('pricing')}>Pricing</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
