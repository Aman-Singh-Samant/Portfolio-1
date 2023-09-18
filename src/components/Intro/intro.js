import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import ri from '../../assets/image.png'
import btnimg from '../../assets/hireme.png'

const Intro = ()=>{
    return (
        <section id="intro">
            <div className="leftIntro">
                <span className="hello">Hello,</span> <br/>
                <span className="next">I am <span id="aman" className="next">Aman</span></span><br/>
                <span className="next">Full-stack Web Developer</span><br/>
                <span className="info">I am a skilled web developer ready to make user friendly and appealing websites.</span><br/>
                <Link><button className="btn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'})
                    }} >
                    <img src={btnimg} alt="hire me ing" className="btnImg" />Hire me
                </button></Link>
            </div>
            <img src={ri} alt="" className="rightIntro"/>
        </section>
    )
}

export default Intro;