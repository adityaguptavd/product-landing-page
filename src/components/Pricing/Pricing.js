import React, {useEffect} from 'react'
import './Pricing.css'
import productImg from '../../images/product.png'

export default function Pricing() {
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

  return (
    <div className='pricing' id='pricing'>
      <img src={productImg} alt='product' className='product-image' />
      <div className='price-container'>
        <h1 className='home-description-heading'>MI VIRTUAL</h1>
        <p className='home-description-detail'>Made with precision to give absolute comfort and great experience. Get your own Mi today.</p>
        <h1 className='home-description-heading'>$299.99</h1>
        <p className='home-description-detail'>Free Worldwide Shipping</p>
        <p className='home-description-detail'>30-day Return Policy</p>
      </div>
    </div>
  )
}
