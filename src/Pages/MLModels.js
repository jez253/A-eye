import React from 'react'
import pic1 from '../images/mlcomputer.png'
import pic2 from '../images/tradcomputer.png'
import eye1 from '../images/unsuper.png'
import eye2 from '../images/super.png'
import eye3 from '../images/re.png'
import boxpic from '../images/regression.png'
import boxpic2 from '../images/dtree.png'
import boxpic3 from '../images/SVM.png'
import boxpic4 from '../images/Bayne.png'
import boxpic5 from '../images/knn.png'
import boxpic6 from '../images/kmeans.png'
import boxpic7 from '../images/forest.png'
import boxpic8 from '../images/Dim.png'
import boxpic9 from '../images/grad.png'
import { Link } from 'react-router-dom';

export default function MLModels() {
    return (
        <>
        <h1>ML Models</h1>
        <p>Machine Learning</p>
        <p>
            These days you hear machine learning mentioned as a tool, a set of algoritms, and even synonymous with Artifical Intellgence itself.
        </p>
        <p>
            In traditional programing, we tell the computer the input and how to preform that action with a set of rules to get the anwser. 
        </p>
        <img src={pic2} className="centerimg1"></img>
        <p>
            While machine learning gives the computer the data and the anwser to find the rule/equation by trial and error. 
        </p>
        <img src={pic1} className="centerimg1"></img>
        <p>Machine Learning there are <b>Three</b> catagories: </p>
        <div className='rowC'>
            <div className="centerimg">
                Supervised
                <img src={eye1} className="centerimg"></img>
            </div>
            <div className="centerimg">
                Unsupervised
                <img src={eye2} className="centerimg"></img>
            </div>
            <div className="centerimg">
                Reinforcement
                <img src={eye3} className="centerimg"></img>
            </div>
        </div>
        <p><b>Now lets try some practice models, click one of the models below, boosted tree models, neural nets,Monte Carlo Simulation, clustering, anomaly detect</b></p>
        <div class="wrapper">
            <Link to = "/Regression">
                <div class="box a">
                    <p className="respontext">Linear and Logistic Regression</p>
                    <img src={boxpic} style={{  display: "block", margin:"0 auto", width: "95%", height: "auto", alignitems: "end" }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box b">
                    <p className="respontext">Decision Tree</p>
                    <img src={boxpic2} style={{  display: "block", margin:"0 auto", width: "83%", height: "auto",alignitems: "end"   }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box c">
                    <p className="respontext">Support Vector Machines</p>
                    <img src={boxpic3} style={{  display: "block", margin:"0 auto", width: "80%", height: "auto",alignitems: "end"   }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box d">
                    <p className="respontext">Naive Baynes</p>
                    <img src={boxpic4} style={{  display: "block", margin:"0 auto", width: "80%", height: "auto",alignitems: "end"   }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box e">
                    <p className="respontext">kNN</p>
                    <img src={boxpic5} style={{  display: "block", margin:"0 auto", width: "63%", height: "auto",alignitems: "end"   }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box f">
                    <p className="respontext">k-Means</p>
                    <img src={boxpic6} style={{  display: "block", margin:"0 auto", width: "54%", height: "auto"  }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box g">
                    <p className="respontext">Random Forest</p>
                    <img src={boxpic7} style={{  display: "block", margin:"0 auto", width: "80%", height: "auto"  }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box h">
                    <p className="respontext">Dimensionality Reduction Algorithms</p>
                    <img src={boxpic8} style={{  display: "block", margin:"0 auto", width: "62%", height: "auto"  }}></img>
                </div>
            </Link>
            <Link to = "/Stats">
                <div class="box i">
                    <p className="respontext">Gradient Boosting Algorithms </p>
                    <img src={boxpic9} style={{  display: "block", margin:"0 auto", width: "90%", height: "auto"  }}></img>
                </div>
            </Link>
        </div>
        </>
    )
}
