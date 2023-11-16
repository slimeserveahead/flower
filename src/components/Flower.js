import React from "react"

import land from "../images/land.png"
import flowerTop from "../images/Flower top.png"
import flower1LeafRight from "../images/flower leaf - right.png"
import flower1LeafLeft from "../images/flower leaf - left.png"
import flower2LeafLeft from "../images/flower leaf 2 - left.png"
import flower2LeafRight from "../images/flower leaf 2 - right.png"
import flower3LeafRight from "../images/flower leaf 3 - right.png"
import flower3LeafLeft from "../images/flower leaf 3 - left.png"
import flower3LeafMiddle from "../images/flower leaf 3 middle.png"
import leaves1 from "../images/Leaves 1.png"
import leaves2 from "../images/Leaves 2.png"
import leaves3 from "../images/Leaves 3.png"
import grass1 from "../images/Grass 1.png"
import grass2 from "../images/Grass 2.png"
import grass3 from "../images/Grass 3.png"
import grass4 from "../images/Grass 4.png"

function Flower() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isSwinging, setIsSwinging] = React.useState(false)
    const [isSwinging2, setIsSwinging2] = React.useState(false)
    const [isSwinging3, setIsSwinging3] = React.useState(false)
    const [showText, setShowText] = React.useState(false)

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setIsSwinging(prevState => !prevState)
        }, 2000)
        const intervalId2 = setTimeout(() => {
            setInterval(() => {
                setIsSwinging2(prevState => !prevState)
            }, 2000)
        }, 500)
        const intervalId3 = setTimeout(() => {
            setInterval(() => {
                setIsSwinging3(prevState => !prevState)
            }, 2000)
        }, 750)

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, [])

    function play() {
        setIsPlaying(true)

        setTimeout(() => {
            setShowText(true)
        }, 2000)

        setTimeout(() => {
            setShowText(false)
        }, 6000)
    }


    return (
        <div className="flower">
            <div className={`buttons ${isPlaying ? "visibilityHidden" : ""}`}>
                <div className="button-5" onClick={play}>PLAY</div>
            </div>
            <div className={`text ${showText ? "showText" : ""}`}>Happy Thursday Babe</div>
            <div className="middleFlower">
                <div className={`middleFlowerContainer ${isPlaying ? "" : "hideStem"} ${isSwinging ? "swing" : ""}`}>
                    <div className={`flowerTop ${!isPlaying ? "hide" : ""}`}>
                        <img src={flowerTop}></img>
                    </div>
                    <div className="middleFlowerStem"></div>
                    <div className={`flower1LeafUpper ${!isPlaying ? "hide" : ""}`}><img src={flower1LeafLeft}></img></div>
                    <div className={`flower1LeafLower ${!isPlaying ? "hide" : ""}`}><img src={flower1LeafLeft}></img></div>
                    <div className={`flower1RightUpper ${!isPlaying ? "hide" : ""}`}><img src={flower1LeafRight}></img></div>
                    <div className={`flower1RightLower ${!isPlaying ? "hide" : ""}`}><img src={flower1LeafRight}></img></div>
                </div>
            </div>
            <div className="leftFlower">
                <div className={`leftFlowerContainer ${isPlaying ? "" : "hideStem"} ${isSwinging2 ? "swingLeft" : ""}`}>
                    <div className={`flowerTop ${!isPlaying ? "hide" : ""}`}>
                        <img src={flowerTop}></img>
                    </div>
                    <div className="leftFlowerStem"></div>
                    <div className={`flower2LeafUpper ${!isPlaying ? "hide" : ""}`}><img src={flower2LeafLeft}></img></div>
                    <div className={`flower2RightUpper ${!isPlaying ? "hide" : ""}`}><img src={flower2LeafRight}></img></div>
                    <div className={`flower2RightLower ${!isPlaying ? "hide" : ""}`}><img src={flower2LeafRight}></img></div>
                </div>
            </div>
            <div className="rightFlower">
                <div className={`rightFlowerContainer ${isPlaying ? "" : "hideStem"} ${isSwinging3 ? "swingRight" : ""}`}>
                    <div className={`flowerTop ${!isPlaying ? "hide" : ""}`}>
                        <img src={flowerTop}></img>
                    </div>
                    <div className="rightFlowerStem"></div>
                    <div className={`flower3LeafLeft ${!isPlaying ? "hide" : ""}`}><img src={flower3LeafLeft}></img></div>
                    <div className={`flower3LeafRight ${!isPlaying ? "hide" : ""}`}><img src={flower3LeafRight}></img></div>
                    <div className={`flower3LeafMiddle ${!isPlaying ? "hide" : ""}`}><img src={flower3LeafMiddle}></img></div>
                </div>
            </div>
            <div className={`leaves1 ${!isPlaying ? "hide" : ""} ${isSwinging ? "swing" : ""}`}><img src={leaves1}></img></div>
            <div className={`leaves2 ${!isPlaying ? "hide" : ""} ${isSwinging2 ? "swing" : ""}`}><img src={leaves2}></img></div>
            <div className={`leaves3 ${!isPlaying ? "hide" : ""} ${isSwinging2 ? "swingRight" : ""}`}><img src={leaves3}></img></div>
            <div className={`grass1 ${!isPlaying ? "hide" : ""} ${isSwinging ? "swing" : ""}`}><img src={grass1}></img></div>
            <div className={`grass2 ${!isPlaying ? "hide" : ""} ${isSwinging ? "swing" : ""}`}><img src={grass2}></img></div>
            <div className={`grass3 ${!isPlaying ? "hide" : ""} ${isSwinging ? "swingLeft" : ""}`}><img src={grass3}></img></div>
            <div className={`grass4 ${!isPlaying ? "hide" : ""} ${isSwinging ? "swing" : ""}`}><img src={grass4}></img></div>
        </div>
    )
}

export default Flower