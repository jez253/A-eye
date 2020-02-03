import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import img1 from '../images/PersonalAS.png'
import img2 from '../images/Search-Engine.png'
import img3 from '../images/FaceID.png'
import img4 from '../images/subject.png'
import img5 from '../images/Selfdriving.png'
import img6 from '../images/spam.png'

export default class Picbox extends Component {
    items = [img1, img2, img3, img4, img5, img6]

    itemstext = ["AI", "hello", "ok", "then", "eat", "booty"];
    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
    }

    handleOnDragStart = (e) => e.preventDefault()

    slideTo = (i) => this.setState({ currentIndex: i })

    onSlideChanged = (e) => this.setState({ currentIndex: e.item })

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}> <img className="imagegallery2" src={item}></img></span>

    galleryItems() {
        return this.items.map((i) =>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img className="imagegallery" src={i}></img>
                    </div>
                    <div class="flip-box-back">
                        <h1>
                            {this.itemstext[this.itemstext.length]}
                            {/* {console.log(this.itemstext)} */}
                            {this.itemstext.pop()}
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        console.log(this.itemstext);
        return (
            <div>
                <AliceCarousel 
                dotsDisabled={true}
                buttonsDisabled={true}
                items={galleryItems}
                responsive={responsive}
                slideToIndex={currentIndex}
                onSlideChanged={this.onSlideChanged}
                mouseDragEnabled={false}
                touchTrackingEnabled={false}>
                    
                </AliceCarousel>
                <div className="centerthumbs">
                    <ul2 className="centerthumbs">{this.items.map(this.thumbItem)}</ul2>
                </div>
                <button className="buttonalign" onClick={() => this.slidePrev()}>Prev button</button>
                <button className="buttonalign" onClick={() => this.slideNext()}>Next button</button>
                
            </div>
        )
    }
}
