import React from 'react'
import ParticlesC from '../Components/ParticleContainer'
import Light from '../Components/Lightbulb'
import Pics from '../Components/Picbox'
import { ParallaxProvider,Parallax, Background } from 'react-scroll-parallax';


export default function Homepage() {
    return (
        <>
        {/* creates first component with particle background */}
        <ParticlesC height= {'10% !important'}> 
        
        </ParticlesC>
        {/* creates second component with lightbulb background */}
        {/* <div style={{backgroundColor: "white", color:"black"}}>
            hello
        </div> */}
        <p>What we can do with Machine Learning today</p>
        <Pics classname ="gallery"></Pics>
        <Light></Light>
        {/* creates third component with acknowledgment */}
        <div style={{backgroundColor: "#343A40", color:"white"}}>
            Follow the Creators: 
            <div>
                Caitlyn Carver
            </div>
            <div>
                Jose Zurita-Oatley
            </div>
        </div>
        </>
    )
}

