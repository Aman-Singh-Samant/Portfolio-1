import React from 'react'
import './skills.css'
import Frontend from '../../assets/frontend.png'
import Backend from '../../assets/backend.png'
import Database from '../../assets/database.png'

const Skills = ()=>{
    return(
        <section className='skills'>
            <span className='heading'>What I do</span><br/>
            <span className='intro'>I am a passionate and skilled web developer seeking opportunity to bring ideas to life.I have strong understanging of design and logic. I am proficient in HTML, CSS, JavaScript and Python as well as other frameworks such as React and Node.js.</span><br/>
            <div className='skillSet'>
                <div className='skill'>
                    <img src={Frontend} alt='' className='skillImg'/>
                    <div className='skillName'>Frontend
                        <div className='skillInfo'>This is a demo thext la la ala hha hello eveyone genki desu ka.</div>
                    </div>
                    </div>
                <div className='skill'>
                    <img src={Backend} alt='' className='skillImg'/>
                    <div className='skillName'>Backend 
                        <div className='skillInfo'>This is a demo thext la la ala hha hello eveyone genki desu ka.</div>
                    </div>
                </div>
                <div className='skill'>
                    <img src={Database} alt='' className='skillImg'/>
                    <div className='skillName'>Database Design
                        <div className='skillInfo'>This is a demo thext la la ala hha hello eveyone genki desu ka.</div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills