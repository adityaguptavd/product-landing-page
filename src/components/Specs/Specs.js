import React from 'react'
import './Specs.css'
import Card from './Card/Card'
import mssgImg from '../../images/mssg.png'
import phoneImg from '../../images/phone.png'
import inboxImg from '../../images/inbox.png'
import docImg from '../../images/doc.png'

export default function Specs() {
    
  return (
    <div className='specs' id='specs'>
      <h4 className='specs'>Mi Features</h4>
      <h1>Excellent Features we deliver</h1>
      <div style={{textAlign : 'center'}}>
        <p>From development to the delivery of performance we don't compromise</p>
        <p>at any level to make your products the best</p>
      </div>
      <div className='card-container'>
        <Card 
          img={mssgImg} alt='message-icon'
          title='Chat on-the-go'
          subtitle='Stay connected with your close ones without picking up your phone.'
        />
        <Card 
          img={inboxImg} alt='inbox-icon'
          title='Inbox at a Glance'
          subtitle="Never miss out important mails while you're enjoying your virtual world."
        />
        <Card 
          img={phoneImg} alt='phone-icon'
          title='Cross-Platform'
          subtitle='Compatible with Android version 6.0 or above and iOS version 7.1 or above'
        />
        <Card 
          img={docImg} alt='doc-icon'
          title='Discover more'
          subtitle='Works with Google Cardboard, giving you access to an amazing library of Cardboard apps.'
        />
      </div>
    </div>
  )
}
