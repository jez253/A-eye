import React, { Component } from 'react'
import Particles from 'react-particles-js';
import pic from '../images/logo2.png'

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable:true,
                value_area: 1300
            }
        },
        "color": {
            "value": "#0000ff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
              "width": 2,
              "color": "#0000ff"
            }
          },
        "line_linked": {
            "color": '#0000ff'
          },
        "style": {
            "height": 'window.outerHeight'

        }
    }
}
export default class ParticleContainer extends Component {
    render(){
        return (
            <div className ="particles">
                <div className = "logo">
                    <img src= {pic} style={{ display: "block", margin: "auto", height: "60%", width:"30%" }}></img>
                </div>
                <Particles 
                    height={'500px'}
                    params = {particleOpt}
                />
            </div>
        );
    };
 
}