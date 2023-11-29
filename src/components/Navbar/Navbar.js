import React from 'react'
import './Navbar.css'

export default function Navbar() {
  let lastScrollTop = 0; // set initial scroll position to 0
  window.onscroll = function(){
    if(document.documentElement.scrollTop === 0){
      if(document.getElementsByClassName('navbar')[0].classList.contains('navbar-animate'))
        document.getElementsByClassName('navbar')[0].classList.remove('navbar-animate');
    }

    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
      if(!document.getElementsByClassName('navbar')[0].classList.contains('navbar-animate'))
        document.getElementsByClassName('navbar')[0].classList.add('navbar-animate');
    }
    lastScrollTop = scrollTop;
};

  function handleClick(id){
    document.getElementById(id).scrollIntoView();
  }

  return (
      <div className='navbar'>
        <div className='navbar-container'>
          <div className='xiaomi'>
            <span>xiaomi</span>
          </div>
          <div className='navbar-elements'>
            <span onClick={()=>handleClick('home')}>Home</span>
            <span onClick={()=>handleClick('specs')}>Specs</span>
            <span onClick={()=>handleClick('features')}>Features</span>
            <span onClick={()=>handleClick('pricing')}>Pricing</span>
            <span onClick={()=>handleClick('subscribe')}>Subscribe</span>
            <button className='navbar-btn' onClick={()=>handleClick('subscribe')}>Buy Now</button>
          </div>
        </div>
      </div>
  )
}
