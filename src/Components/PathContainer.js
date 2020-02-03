import React from 'react'
import Threebox from '../Components/Threebox'
import pic from '../images/net2.png'
import pic2 from '../images/robot2.png'
import pic3 from '../images/model2.png'
import back from '../images/pathbackground.png'

export default function PathContainer() {
    const arr = ['Machine Learning', 'Artificial Intelligence', 'Data Science'];
    const arrpic = [pic,pic2,pic3];
    return (
        <div className="space">
            <div class="containerimg">
                {/* uses map() function (simliar to for loop) to create three images and text  */}
                <div className="threebox-contain">
                    {arr.map(function(arrs,index){
                        return <Threebox key = {index} image={arrpic[index]} description={arrs}></Threebox>;
                    })}
                </div>
              
            </div>
            
        </div>
    )
}
