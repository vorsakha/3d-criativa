import React, { useState } from "react"

import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SimpleSlider() {
  const [imgIdx, setImg] = useState(1)

  const nextIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />
  const prevIcon = <FontAwesomeIcon icon={faAngleDoubleLeft} />

  const handlePrev = () => {
    imgIdx === 1 ? setImg(9) : setImg(imgIdx - 1) 
  } 

  const handleNext = () => {
    imgIdx === 9 ? setImg(1) : setImg(imgIdx + 1)
  } 

  const handleDot = (num) => {
    setImg(num)
  }

  const dotArr = [1,2,3,4,5,6,7,8,9]

  const dot = dotArr.map((num) => (
    <div 
    className="dot" 
    onClick={() => handleDot(num)}
    id={num} 
    key={num} 
    style={imgIdx === num ? { backgroundColor: '#333' } : { backgroundColor: 'rgba(0, 0, 0, 0.4)' }} 
    />
  ))

  return(
          <div>
                <div className="inside-btn">
                    <button id="btn-left" onClick={handlePrev}>{prevIcon}</button>
                    <button id="btn-right" onClick={handleNext}>{nextIcon}</button>
                </div>
              <div className="slide-container">
                  <div className={ "img-" + imgIdx + " " + "big-img" /* eslint-disable-line */ } />     
              </div>
              <div className="dot-container">
                  { dot }
              </div>
          </div>
        )
}