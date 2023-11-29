import React, {useEffect} from 'react'
import './Home.css'

export default function Home(props) {

  useEffect(() => {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(!entry.target.classList.contains('active'))
            entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.8 });

    var reveals1 = document.querySelectorAll('.home-description-heading');
    var reveals2 = document.querySelectorAll('.home-description-detail');

    reveals1.forEach(reveal => {
      observer.observe(reveal);
    });

    reveals2.forEach(reveal => {
      observer.observe(reveal);
    });

    return () => {
      if (reveals1 && reveals2) {
        reveals1.forEach(reveal => {
          observer.unobserve(reveal);
        });
        reveals2.forEach(reveal => {
          observer.unobserve(reveal);
        });
      }
    };
  }, []);

  function handleClick(){
    document.getElementById('subscribe').scrollIntoView();
  }

  return (
    <div className='home' id={props.id}>
      <div className='home-description'>
        <h1 className='home-description-heading'>{props.title}</h1>
        <p className='home-description-detail'>{props.desc}</p>
        <button className='home-buy-btn' onClick={handleClick}>Buy Now</button>
      </div>
      <div className='image-container'>
        <img src={props.src} alt={props.alt} className='product-image' />
      </div>
    </div>
  )
}
