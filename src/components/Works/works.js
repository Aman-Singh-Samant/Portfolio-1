import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/tshirt2.avif'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
export const Works = () => {
  return (
    <div id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in my ability to tackle complex challenges, adapt to emerging trends, and ensure seamless functionality across all devices. Browse through my projects to witness the fusion of functionality and aesthetics, and explore the diverse skills and experiences that make me a valuable asset to any web development team. Let's collaborate and bring your digital vision to life!</span>
        <div className='worksCollection'>
            <a href='https://aman-singh-samant.github.io/Tshirt/'><img className='worksImg'src={Portfolio1} alt='' /></a>
            <img className='worksImg' src={Portfolio2} alt=''/>
            <img className='worksImg' src={Portfolio3} alt=''/>
            <img className='worksImg' src={Portfolio4} alt=''/>
            <img className='worksImg' src={Portfolio5} alt=''/>
        </div>
        <button className='worksBtn'>See More</button>
    </div>
  )
}


export default Works;