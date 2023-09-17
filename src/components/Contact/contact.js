import React from 'react'
import './contact.css'
import Walmart from '..//..//assets/walmart.png'
import Facebook from '..//..//assets/facebook.png'
import Adobe from '..//..//assets/adobe.png'
import Microsoft from '..//..//assets/microsoft.png'
import FacebookIcon from '..//..//assets/facebook-icon.png'
import TwitterIcon from '..//..//assets/twitter.png'
import YouTubeIcon from '..//..//assets/youtube.png'
function Contact() {
  return (
    <div className='contactPage'>
        <div id='clients'>
            <h1 className='clientsTitle'>My Clients</h1>
            <span className='clientsDesc'>
            I may not have client projects to showcase just yet, but my passion for web development has driven me to dive headfirst into personal projects and contribute to open-source endeavors. These experiences have allowed me to refine my skills, experiment with the latest technologies, and develop a keen eye for design. I approach every project with a client's mindset, aiming for excellence in functionality and aesthetics. I'm eager to translate these experiences into professional client work and continue my journey of growth in the web development world.
            The below images are just for esthatics.
            </span>
            <div className='clientsImgCollection'>
                <img className='clientsImg' src={Microsoft} alt='Clients' />
                <img className='clientsImg' src={Facebook} alt='Clients' />
                <img className='clientsImg' src={Walmart} alt='Clients' />
                <img className='clientsImg' src={Adobe} alt='Clients' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea name='message' rows='5' placeholder='Message' className='msg' />
                <button type='submit' className='submitBtn' value='Send' > Submit</button>
                <div className='links'>
                    <img className='link' alt='' src={FacebookIcon} />
                    <img className='link' alt='' src={TwitterIcon} />
                    <img className='link' alt='' src={YouTubeIcon} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact