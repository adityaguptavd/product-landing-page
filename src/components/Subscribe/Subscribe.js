import React from 'react'
import './Subscribe.css'

export default function Subscribe() {
  return (
    <div className='subscribe' id='subscribe'>
        <div className='subscribe-container'>
            <h1>Subscribe now and get lifetime premium access.</h1>
            <p>We promise to send only important and relevant mails. Your email address will not be used for any other purposes.</p>
            <div className='form'>
                <input placeholder='Email' type='email'></input>
                <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
