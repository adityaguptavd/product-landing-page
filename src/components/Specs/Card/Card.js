import React, { useEffect } from 'react';
import './Card.css';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

export default function Card(props) {
  useEffect(() => {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(!entry.target.classList.contains('active'))
            entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    var reveals = document.querySelectorAll('.card');

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });

    return () => {
      if (reveals) {
        reveals.forEach(reveal => {
          observer.unobserve(reveal);
        });
      }
    };
  }, []);

  return (
    <div className='card'>
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <TrendingFlatOutlinedIcon sx={{alignSelf : 'flex-end', color : '#ff6900', marginTop : 'auto'}} />
    </div>
  );
}
