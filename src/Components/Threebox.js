import React  from 'react';

export default function Threebox(props) {
    return (
        <article className = "contain"> 
            <div className ="imagecontainer">
                {/* <svg className="imagez" style={{ borderRadius: "50%" }} width={150} height={150} src={props.prop} hspace="100"/>  */}
                <span className="imagez" > {props.prop}</span>  
            </div>
            <p className="imagetext">
                {props.description}
            </p>
        </article>
    )
}
