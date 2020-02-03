import React from 'react'
import lightpic from '../images/lightbulb.gif'
import Threebox from '../Components/Threebox'
import {GoGraph}  from 'react-icons/go'
import {FaDatabase,FaTenge,FaRobot} from 'react-icons/fa'
import {GiPolarBear} from 'react-icons/gi'
import {AiOutlineLineChart} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const icon = <GoGraph/>
const icon2 = <FaDatabase/>
const icon3 = <GiPolarBear/>
const icon4 = <FaTenge/>
const icon5 = <AiOutlineLineChart/>
const icon6 = <FaRobot/>

export default function Lightbulb() {
    return (
        <div className="lightbulb">
            <p>
                Click on a lesson to get started 
            </p>
            <div className='rowC'>
                <div className='colC'>
                    <Link to = "/Stats">
                        <Threebox prop={icon} description={'Statical Models'}></Threebox>
                    </Link>
                    <Link to = "/SQL">
                        <Threebox prop={icon2} description={'SQL'}></Threebox>
                    </Link>
                    <Link to = "/Python">
                        <Threebox prop={icon3} description={'Pandas'}></Threebox>
                    </Link>
                </div>

                <div className='colC2'>
                    <Link to = "/MLModels">
                        <Threebox prop={icon6} description={'Machine Learning'}></Threebox>
                    </Link>
                    <Link to = "/R">
                        <Threebox prop={icon5} description={'R'}></Threebox>
                    </Link>
                    <Link to = "/Tensorflow">
                        <Threebox prop={icon4} description={'Tensorflow'}></Threebox>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
